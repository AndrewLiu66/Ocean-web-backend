from graph import getInitGraph
from graph import getUpdatedGraph
from flask import Flask, request, send_file, jsonify, make_response
from bokeh.embed import json_item
from flask_cors import CORS, cross_origin
from flask import send_file
import pandas as pd
import xarray as xr
from flask.helpers import send_from_directory
from download import generateSpectrogramCsvValue
from download import generateCsvOctave
from download import generateCsvSPDF
import ujson as json
import gzip

app = Flask(__name__, static_folder="build", static_url_path="")
CORS(app)

fn = 'lf_specs.zarr'
specs = xr.open_dataset(fn)


@app.route('/api', methods=['GET'])
@cross_origin()
def index():
    return {
        "tutorial": "Flask React Heroku"
    }


@app.route('/api/getInitGraph', methods=['POST'])
@cross_origin()
def getInit():
    request_data = request.get_json()
    startDate = request_data['startDate']
    endDate = request_data['endDate']
    location = request_data['location']
    return getInitGraph(startDate, endDate, location)


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
    return getUpdatedGraph(startDate, endDate, graphType, location, f0)


@app.route('/api/downloads', methods=['POST'])
@cross_origin()
def download():
    with app.app_context():
        request_data = request.get_json()
        startDate = request_data['startDate']
        endDate = request_data['endDate']
        location = request_data['location']
        type = request_data['currType']
        frequency = request_data['frequency']
        starttime = pd.Timestamp(startDate)
        endtime = pd.Timestamp(endDate)
        slice_data = specs[location].loc[starttime:endtime, :]

        if type == 'Spectrogram':
            return generateSpectrogramCsvValue(slice_data, location)
        elif type == 'Octave Band':
            return generateCsvOctave(slice_data, location, frequency)
        else:
            return generateCsvSPDF(slice_data)

        # content = gzip.compress(json.dumps(data).encode('utf8'), 5)
        # response = make_response(content)
        # response.headers['Content-length'] = len(content)
        # response.headers['Content-Encoding'] = 'gzip'
        # return response


@app.route('/api/test', methods=['GET'])
@cross_origin()
def download2():
    slice_data = specs['axial_base'].loc['2018-03-12 00:00:05':'2018-03-13 02:03:24', :]
    slice_frame = slice_data.to_dataframe()
    slice_frame = slice_frame.reset_index()
    slice_frame['axial_base'] = slice_frame['axial_base'].fillna(0)
    slice_frame['time'] = slice_frame['time'].astype(str)
    slice_dict = slice_frame.to_dict('records')
    return jsonify({"data": slice_dict})


@app.route('/')
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, 'index.html')


if __name__ == '__main__':
    app.run()
