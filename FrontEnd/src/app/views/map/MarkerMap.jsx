
import { Box } from '@mui/system'
import React, { useState, useMemo, Fragment } from 'react'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import GraphDialog from 'app/views/CRUD/GraphDialog'
import Map, {
   Marker,
   Popup,
   NavigationControl,
   FullscreenControl,
   ScaleControl,
   GeolocateControl,
   Source, Layer
} from 'react-map-gl';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { GET_INIT_GRAPH } from 'app/redux/actions/GraphActions.js'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const TOKEN = 'pk.eyJ1IjoiYW5kcmV3bGl1MTIzNCIsImEiOiJjbDVjNTZpa2swZTBsM2NtdGludmRqNGN3In0.3WcKjr2AOAzmio8bLvV_kg'
// const TOKEN = 'pk.eyJ1IjoiYW5kcmV3bGl1MTIzNCIsImEiOiJjbDN1cTlxemIwN3hwM2NuemxwaGRpMmx4In0.FzpJ24Ug-rLgqLRfO639XQ'
const Alert = React.forwardRef(function Alert(props, ref) {
   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const HYDROPHONES = [
   { "location": "Slope Base", "image": "http://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/240px-Above_Gotham.jpg", "latitude": 44.5153, "longitude": -125.39 },
   { "location": "Axial Base", "image": "http://upload.wikimedia.org/wikipedia/commons/thumb/5/57/LA_Skyline_Mountains2.jpg/240px-LA_Skyline_Mountains2.jpg", "latitude": 45.8168, "longitude": -129.754 },
   { "location": "Southern Hydrate", "image": "http://upload.wikimedia.org/wikipedia/commons/thumb/8/85/2008-06-10_3000x1000_chicago_skyline.jpg/240px-2008-06-10_3000x1000_chicago_skyline.jpg", "latitude": 44.5691, "longitude": -125.1479 },
   { "location": "Central Caldera", "image": "http://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Aerial_views_of_the_Houston%2C_Texas%2C_28005u.jpg/240px-Aerial_views_of_the_Houston%2C_Texas%2C_28005u.jpg", "latitude": 45.9546, "longitude": -130.0089 },
   { "location": "Eastern Caldera", "image": "http://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Downtown_Phoenix_Aerial_Looking_Northeast.jpg/207px-Downtown_Phoenix_Aerial_Looking_Northeast.jpg", "latitude": 45.9396, "longitude": -129.9738 },
]

const layerStyle = {
   id: '10m-bathymetry-81bsvj',
   type: 'fill',
   source: '10m-bathymetry-81bsvj',
   'source-layer': '10m-bathymetry-81bsvj',
   layout: {},
   paint: {
      'fill-outline-color': 'hsla(337, 82%, 62%, 0)',
      // cubic bezier is a four point curve for smooth and precise styling
      // adjust the points to change the rate and intensity of interpolation
      'fill-color': [
         'interpolate',
         ['cubic-bezier', 0, 0.5, 1, 0.5],
         ['get', 'DEPTH'],
         200,
         '#78bced',
         9000,
         '#15659f'
      ]
   }
};

function MarkerMap() {
   const [popupInfo, setPopupInfo] = useState(null);
   const { graphList = [] } = useSelector((state) => state.graph)
   const [shouldOpenEditorDialog, setShouldOpenEditorDialog] = useState(false)
   const [currentLocation, setCurrentLocation] = useState('axial_base')
   const dispatch = useDispatch()
   const [open, setOpen] = React.useState(true);



   const handleDialogClose = () => {
      setShouldOpenEditorDialog(false)
      dispatch({
         type: GET_INIT_GRAPH,
         payload: {},
      })
   }

   const handleOpenDialog = (open, currentLocation) => {
      setShouldOpenEditorDialog(open)
      setCurrentLocation(currentLocation)
   }

   const pins = useMemo(
      () =>
         HYDROPHONES.map((city, index) => (
            <Marker
               key={`marker-${index}`}
               longitude={city.longitude}
               latitude={city.latitude}
               anchor="bottom"
               onClick={e => {
                  // If we let the click event propagates to the map, it will immediately close the popup
                  // with `closeOnClick: true`
                  e.originalEvent.stopPropagation();
                  setPopupInfo(city);
               }}
            >
               <LocationOnIcon sx={{ color: '#35068c' }} fontSize="large"></LocationOnIcon>
            </Marker>
         )),
      []
   )

   const handleClose = (event, reason) => {
      setOpen(false);
   };

   return (
      <Map
         initialViewState={{
            latitude: 46.1651,
            longitude: -123.9237,
            zoom: 6,
            bearing: 0,
            pitch: 0
         }}
         mapStyle="mapbox://styles/mapbox/streets-v11"
         mapboxAccessToken={TOKEN}
      >
         <Source id="10m-bathymetry-81bsvj" type="vector" url='mapbox://mapbox.9tm8dx88'>
            <Layer {...layerStyle} />
         </Source>

         <GeolocateControl position="top-left" />
         <FullscreenControl position="top-left" />
         <NavigationControl position="top-left" />
         <ScaleControl />
         <Snackbar open={open} autoHideDuration={10000} onClose={handleClose}>
            {/* <Alert onClose={handleClose} everity="info" sx={{ width: '100%' }}>
               This is a success message!
            </Alert> */}
            <Alert>Click 1 of the 5 pins to explore the Hydrophone!</Alert>
         </Snackbar>
         {pins}

         {popupInfo && (
            <Fragment>
               <Popup
                  anchor="top"
                  longitude={Number(popupInfo.longitude)}
                  latitude={Number(popupInfo.latitude)}
                  onClose={() => setPopupInfo(null)}
               >

                  <Box sx={{ fontSize: '16px' }} >
                     Loction:
                  </Box>
                  <Box sx={{ fontSize: '14px' }}>
                     {popupInfo.location}
                  </Box>
                  {/* <img width="100%" src={popupInfo.image} /> */}
                  <Button variant="contained"
                     color="primary" size="small" onClick={() => handleOpenDialog(true, popupInfo.location)}>Explore</Button>
               </Popup >
               {shouldOpenEditorDialog && (
                  <GraphDialog
                     currentLocation={currentLocation}
                     graphData={graphList}
                     handleClose={handleDialogClose}
                     open={shouldOpenEditorDialog}
                  />
               )}
            </Fragment>
         )
         }
      </Map >
   );
}

export default MarkerMap;
