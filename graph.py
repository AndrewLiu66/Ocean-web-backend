import matplotlib
import zipfile
import numpy as np
import pandas as pd
import hvplot.xarray
from tqdm import tqdm
import holoviews as hv
import xarray as xr
from bokeh.embed import json_item
from bokeh.plotting import figure
import json
from matplotlib import pyplot as plt
from io import BytesIO
import io
from matplotlib.backends.backend_agg import FigureCanvasAgg
import base64
from flask import send_file, jsonify
fn = 'lf_specs.zarr'
specs = xr.open_dataset(fn)
matplotlib.use('Agg')


def getInitGraph(startDate, endDate, location):
    # look at 10 specific days of data
    starttime = pd.Timestamp(startDate)
    endtime = pd.Timestamp(endDate)
    base_data = specs[location]
    data_chunk = base_data.loc[starttime:endtime, :]
    graph = data_chunk.hvplot(
        x='time', y='frequency', rasterize=True, cmap='jet')
    plot = hv.render(graph)
    jso = json.dumps(json_item(plot))
    return jso
