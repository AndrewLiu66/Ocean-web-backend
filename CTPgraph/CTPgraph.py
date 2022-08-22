from bokeh.embed import json_item
from zipfile import ZipFile,ZIP_DEFLATED
from io import BytesIO
import numpy as np
import pandas as pd
import os
import holoviews as hv
from holoviews import opts
from flask import send_file, jsonify
hv.extension('bokeh')
import gzip
import xarray as xr
import json
import re


#Generates 2 plots, contour plot & scatter plot next to it
def generateCTPgraph(location):

    if location not in ['axial_base', 'oregon_offshore', 'oregon_shelf', 'oregon_slope']:
        location = 'axial_base'

    fileName = location + "_2015-01-01_2022-01-01"
    data = pd.read_csv("./CTPgraph/" + fileName + ".csv")

    char = "_"
    indices = [i.start() for i in re.finditer(char,fileName)]

    #grab strings
    locationName = fileName[:indices[1]]
    startDate = fileName[indices[1]+1:indices[2]]
    endDate = fileName[indices[2]+1:]

    #format locationName into title format
    locationName = locationName.replace("_"," ").title()

    time = pd.date_range(startDate, endDate)
    depth = np.arange(3000)

    ds = xr.Dataset(
        data_vars=dict(
            SoundSpeed=(["depth","time"], data)
        ),
        coords=dict(
            time=(["time"], time),
            depth=(["depth"], depth),
        ),
        attrs=dict(description="Sound Data"),
    )

    #holoviews wrapper
    hv_ds = hv.Dataset(ds)[:,:]
    soundspeed = hv_ds.to(hv.Image, kdims=["time","depth"])

    posxy = hv.streams.Tap(source=soundspeed, x=startDate)

    def tap_date(x, y):
        date = pd.to_datetime(x)
        strDate = str(date.date())
        return hv.Scatter(data[strDate], label=f'{strDate}: Speed of Sound [m/s] vs Depth[m]')
    #create dynamic map that takes in the tap stream and creates scatters plots based on date value from click
    tap_dmap = hv.DynamicMap(tap_date, streams=[posxy])

    graph = (soundspeed + tap_dmap).opts(
        opts.Image(
            title=locationName + " Speed of Sound with Depth vs Time",
            width=600, height=500,
            tools=['hover'],

            ylabel='Depth [m]',
            invert_yaxis=True,
            ylim=(0,250),

            xlabel='Date',

            cmap='viridis',
            colorbar=True,
        ),

        opts.Scatter(
            framewise=True,
            width=375, height=500,
            tools=['hover'],
            invert_axes=True,

            ylabel='Speed of Sound [m/s]',
            yaxis='right',
            invert_yaxis=True,
            ylim=(1460, 1520),

            xlabel='Depth',
            xlim=(0,200),
        ),
    )
    plot = hv.render(graph)
    return plot

def generateCTP(location):
    graph = generateCTPgraph(location)
    return json.dumps(json_item(graph))

def downloadCtpCsv():
    df = pd.read_csv('./CTPgraph/axial_base_2015-01-01_2022-01-01.csv')
    df_dict = df.to_dict('records')
    return jsonify({"data": df_dict})
