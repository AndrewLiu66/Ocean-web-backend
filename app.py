import json
from graph import getInitGraph
from graph import getUpdatedGraph
from flask import Flask, request, Response, send_file, jsonify
from bokeh.embed import json_item
from flask_cors import CORS, cross_origin
import requests
from flask import send_file
import zipfile
import io
import zipfile
import time
import base64
import pandas as pd
import xarray as xr
from flask.helpers import send_from_directory

app = Flask(__name__, static_folder="front-end/build", static_url_path="")
CORS(app)


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
    frequency = request_data['frequency']

    return getUpdatedGraph(startDate, endDate, graphType, location)


@app.route('/api/downloads', methods=['POST'])
@cross_origin()
def download():
    request_data = request.get_json()
    startDate = request_data['startDate']
    endDate = request_data['endDate']
    location = request_data['location']
    starttime = pd.Timestamp(startDate)
    endtime = pd.Timestamp(endDate)
    base_data = specs[location]
    slice_data = base_data.loc[starttime:endtime, :]
    slice_frame = slice_data.to_dataframe()
    slice_frame.to_csv("result.csv.zip", compression="zip")

    FILEPATH = r"./result.csv.zip"
    fileobj = io.BytesIO()
    with zipfile.ZipFile(fileobj, 'w') as zip_file:
        zip_info = zipfile.ZipInfo(FILEPATH)
        zip_info.date_time = time.localtime(time.time())[:6]
        zip_info.compress_type = zipfile.ZIP_DEFLATED
        with open(FILEPATH, 'rb') as fd:
            zip_file.writestr(zip_info, fd.read())
    fileobj.seek(0)

    # Changed line below
    return Response(fileobj.getvalue(),
                    mimetype='application/zip',
                    headers={'Content-Disposition': 'attachment;filename=your_filename.zip'})


@app.route('/')
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, 'index.html')


if __name__ == '__main__':
    app.run()
