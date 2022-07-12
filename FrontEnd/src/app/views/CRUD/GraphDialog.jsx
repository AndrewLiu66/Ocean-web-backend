import React, { useEffect, useState } from 'react'
import { Button, IconButton, Icon, TextField, MenuItem, FormControl, InputLabel, Select, CircularProgress } from '@mui/material'
import { Box, styled, useTheme } from '@mui/system'
import { convertHexToRGB } from 'app/utils/utils'
import { useDispatch, useSelector } from 'react-redux'
import {
    Card, Grid
} from '@mui/material'
import { H3 } from 'app/components/Typography'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {
    getInitialGraph, getUpdatedGraph
} from 'app/redux/actions/GraphActions'
import Backdrop from '@mui/material/Backdrop';
import axios from 'axios'
import fileDownload from 'js-file-download'

const FlexBox = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '24px !important',
    marginTop: '0px !important'
}))

const ChartHeader = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '.8rem 1.25rem',
    justifyContent: 'space-between',
    borderBottom: `1px solid ${`rgba(${convertHexToRGB(
        theme.palette.text.disabled
    )}, 0.2)`}`,
}))

const AnalyticsRoot = styled(Card)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        maxWidth: 460,
    },
}))

const IMG = styled('img')(() => ({
    width: '100%',
    borderRadius: '4px',
}))

const GraphDialog = ({ currentLocation, open, handleClose }) => {
    const [startDate, setStartDate] = useState(new Date(2018, 1, 1))
    const [endDate, setEndDate] = useState(new Date(2018, 1, 3))
    const { palette } = useTheme()
    const dispatch = useDispatch()
    const textPrimary = palette.text.primary
    const [currType, setCurrType] = useState('Spectrogram');
    const [graphType, setGraphType] = useState('Spectrogram');
    const { initGraph } = useSelector((state) => state.graph)
    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState('')

    useEffect(() => {
        setLoading(true)
        const location = currentLocation.replace(" ", "_").toLowerCase()

        async function fetchData() {
            await dispatch(getInitialGraph(startDate, endDate, location))
        }
        fetchData();
    }, [])

    useEffect(() => {
        if (currType === 'Spectrogram')
        {
            if (Object.keys(initGraph).length !== 0)
            {
                setLoading(false)
                const outer = document.getElementById('outer')
                const el = document.createElement('div');
                el.setAttribute('id', 'graphBox');
                outer.appendChild(el);
                window.Bokeh.embed.embed_item(initGraph, "graphBox")
                return () => {
                    if (document.getElementById('graphBox'))
                    {
                        const h1 = document.getElementById('graphBox')
                        h1.remove()
                    }
                }
            }
        } else if (currType === 'SPDF')
        {
            setLoading(false)
            let imageResult = initGraph['image']
            let image64 = imageResult.split('\'')[1]
            setImage(image64)
        }
    }, [initGraph])


    const handleChange = (event) => {
        setGraphType(event.target.value);
    };


    const handleUpdateGraph = () => {
        setLoading(true)
        setCurrType(graphType)
        let start = startDate.getFullYear() + '-' + (startDate.getMonth() + 1) + '-' + startDate.getDate()
        let end = endDate.getFullYear() + '-' + (endDate.getMonth() + 1) + '-' + endDate.getDate()
        const request_location = currentLocation.replace(" ", "_").toLowerCase()
        dispatch(getUpdatedGraph(start, end, graphType, request_location))
    }

    const download = () => {
        const location = currentLocation.replace(" ", "_").toLowerCase()
        axios.post('/api/downloads', { startDate, endDate, location }, {
            responseType: 'blob',
        }).then(res => {
            fileDownload(res.data, `${currentLocation + "-" + currType + "-" + handleDate(startDate) + '-' + handleDate(endDate)}.zip`);
        });
    }

    const handleDate = (dt) => {
        return dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate();
    }

    return (
        <Backdrop
            open={open}
            sx={{ zIndex: 101 }}
        >
            <AnalyticsRoot sx={{ maxWidth: '50%' }} >
                <ChartHeader>
                    <H3>{currentLocation} Hydrophone Visualization</H3>
                    <IconButton onClick={handleClose}>
                        <Icon sx={{ color: textPrimary }}>close</Icon>
                    </IconButton>
                </ChartHeader>
                <Grid container spacing={2} p={4} pb={0}>
                    <Grid item md={3} sm={12} xs={12}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Start Date"
                                value={startDate}
                                onChange={(newValue) => {
                                    setStartDate(newValue);
                                }}
                                minDate={new Date(2015, 0, 14)}
                                maxDate={new Date(2020, 11, 31)}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item md={3} sm={12} xs={12}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="End Date"
                                value={endDate}
                                onChange={(newValue) => {
                                    setEndDate(newValue);
                                }}
                                minDate={new Date(2015, 0, 14)}
                                maxDate={new Date(2020, 11, 31)}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item md={3} sm={12} xs={12}>
                        <Box>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={graphType}
                                    label="Type"
                                    defaultValue={"Spectrogram"}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={'Spectrogram'}>Spectrogram</MenuItem>
                                    <MenuItem value={'SPDF'}>SPDF</MenuItem>
                                    <MenuItem value={'Octave Band Median/Mean'}>Octave Band Median/Mean</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>

                    <Grid item md={3} sm={12} xs={12}>
                        <Button variant="contained" component="span"
                            onClick={handleUpdateGraph}
                            sx={{ mt: 1 }}
                        >
                            Update Graph
                        </Button>
                    </Grid>

                    <Grid item md={12} sm={12} xs={12}>
                        <Button variant="contained" component="span"
                            onClick={() => download()}
                            sx={{ mt: 1, backgroundColor: "#21b6ae" }}
                        >
                            Download .zip
                        </Button>
                        {/* create SPDF */}
                        {currType === 'SPDF' && <Button variant="contained" sx={{ backgroundColor: "#21b6ae", mt: 1, ml: 1 }}>
                            <a href={`data:image/jpeg;base64,${image}`} download={`${currentLocation + "-" + currType + "-" + handleDate(startDate) + '-' + handleDate(endDate)}.jpg`}>
                                Download .jpg
                            </a>
                        </Button>}
                        {/* Octave */}
                        {currType === 'Octave Band Median/Mean' && <Button variant="contained" sx={{ backgroundColor: "#21b6ae", mt: 1, ml: 1 }}>
                            <a href={`data:image/jpeg;base64,${image}`} download={`${currentLocation + "-" + currType + "-" + handleDate(startDate) + '-' + handleDate(endDate)}.jpg`}>
                                Download .jpg
                            </a>
                        </Button>}

                    </Grid>
                    {/* SPFDF */}
                    <Grid item md={3} sm={12} xs={12}></Grid>
                    {loading && <Grid item md={12} sm={12} xs={12} alignItems="center" justifyContent="center" textAlign="center" ml="-18px">
                        <CircularProgress
                            size={24}
                            className="buttonProgress"
                        />
                    </Grid>}
                    <Grid item md={12} sm={12} xs={12}>
                        {currType === 'SPDF' && image !== '' && <FlexBox>
                            <IMG src={`data:image/jpg;base64,${image}`} />
                        </FlexBox>}
                    </Grid>
                    {/* mean and medium */}
                </Grid>
                {currType === 'Spectrogram' && <FlexBox sx={{ overflow: 'auto' }} id="outer">
                </FlexBox>}
            </AnalyticsRoot >
        </Backdrop >
    )
}

export default GraphDialog
