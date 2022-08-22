import matplotlib
import pandas as pd
import hvplot.xarray
import holoviews as hv
import xarray as xr
from bokeh.embed import json_item
import json
import io
from flask import make_response,jsonify
import hvplot.pandas
import sys
import gzip
sys.path.insert(0, './utils')
matplotlib.use('Agg')


def generateSpectrogramGraph(startDate, endDate, location, specs):
    starttime = pd.Timestamp(startDate)
    endtime = pd.Timestamp(endDate)
    base_data = specs[location]
    data_chunk = base_data.loc[starttime:endtime, :]
    graph = data_chunk.hvplot(
        x='time', y='frequency', rasterize=True, cmap='jet', width=1000, height=500)
    plot = hv.render(graph)
    return plot

def generateSpectrogram(startDate, endDate, location, specs):
    plot = generateSpectrogramGraph(startDate, endDate, location, specs)
    jso = json.dumps(json_item(plot))
    return jso

def generateSpectrogramCsvValue(slice_data, location):
    slice_frame = slice_data.to_dataframe()
    slice_frame = slice_frame.reset_index()
    slice_frame[location] = slice_frame[location].fillna(0)
    slice_dict = slice_frame.to_dict('records')

    return jsonify({"data": slice_dict})
