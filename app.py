from graph import getInitGraph
from graph import getUpdatedGraph
from flask import Flask, request, send_file
from flask_cors import CORS, cross_origin
from flask.helpers import send_from_directory
from bokeh.io.export import get_screenshot_as_png
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options
from ImageToBlob import serve_pil_image
from Spectrogram import generateSpectrogramGraph
from Spectrogram import generateSpectrogramCsvValue
from SPDF import generateCsvSPDF
from Octave import generateOctave
from Octave import generateCsvOctave
import holoviews as hv
import pandas as pd
import xarray as xr
import sys

sys.path.insert(0, './CTPgraph')
sys.path.insert(0, './utils')
sys.path.insert(0, './SpecGraph')

from CTPgraph import generateCTP
from CTPgraph import generateCTPgraph
from CTPgraph import downloadCtdCsv

app = Flask(__name__, static_folder="build", static_url_path="")
CORS(app)
fn = 'lf_specs.zarr'
specs = xr.open_dataset(fn)

# ***** TESTING PURPOSE API *****
@app.route('/api', methods=['GET'])
@cross_origin()
def index():
    return {
        "tutorial": "Add new map"
    }

# ***** GENERATE GRAPH *****
# get CTP graph based on location selected
@app.route('/api/getCTP', methods=['POST'])
@cross_origin()
def getCTP():
    request_data = request.get_json()
    location = request_data['location']
    return generateCTP(location)

@app.route('/api/getInitGraph', methods=['POST'])
@cross_origin()
def getInit():
    request_data = request.get_json()
    startDate = request_data['startDate']
    endDate = request_data['endDate']
    location = request_data['location']
    result = getInitGraph(startDate, endDate, location, specs)
    return result


@app.route('/api/getUpdatedGraph', methods=['POST'])
@cross_origin()
def getUpdate():
    request_data = request.get_json()
    startDate = request_data['startDate']
    endDate = request_data['endDate']
    location = request_data['location']
    graphType = request_data['graphType']
    # for Octave Band only
    f0 = int(request_data['frequency'])
    return getUpdatedGraph(startDate, endDate, graphType, location, specs, f0)

@app.route('/api/getUpdateCtpGraph', methods=['POST'])
@cross_origin()
def getUpdateCTD():
    return {}

# ***** DOWNLOAD *****
# get png of format blob for download
@app.route('/api/downloadPng', methods=['POST'])
@cross_origin()
def downloadPNG():
    options = Options()
    options.headless = True
    driver = webdriver.Chrome(ChromeDriverManager().install(), options=options)
    driver.headless=True
    with app.app_context():
        request_data = request.get_json()
        startDate = request_data['startDate']
        endDate = request_data['endDate']
        location = request_data['location']
        graphtype = request_data['currType']
        frequency = request_data['frequency']
        if graphtype == 'Spectrogram':
            plot = generateSpectrogramGraph(startDate, endDate, location, specs)
        elif graphtype == "Octave Band":
            plot = generateOctave(location, startDate, endDate, frequency, specs)
        else:
            plot = generateCTPgraph(location)
        image = get_screenshot_as_png(plot, width=900, height=400, driver=driver)
        return serve_pil_image(image)


@app.route('/api/downloads', methods=['POST'])
@cross_origin()
def download():
    with app.app_context():
        request_data = request.get_json()
        startDate = request_data['startDate']
        endDate = request_data['endDate']
        starttime = pd.Timestamp(startDate)
        endtime = pd.Timestamp(endDate)
        location = request_data['location']
        if request_data['selectedValue'] == 'CTD':
            return downloadCtdCsv(location, startDate, endDate)
        type = request_data['currType']
        frequency = request_data['frequency']
        slice_data = specs[location].loc[starttime:endtime, :]
        if type == 'Spectrogram':
            return generateSpectrogramCsvValue(slice_data, location)
        elif type == 'Octave Band':
            return generateCsvOctave(slice_data, location, frequency)
        else:
            return generateCsvSPDF(slice_data)

# ***** RENDER *****
# render front-end build
@app.route('/')
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run()
