from flask import Flask, request
from flask.helpers import send_from_directory
from flask_cors import CORS, cross_origin
from graph import getInitGraph
import boto3
from config import S3_BUCKET, S3_key, S3_SECRET


def download_file(file_name, bucket):
    """
    Function to download a given file from an S3 bucket
    """
    s3 = boto3.resource('s3')
    output = f"downloads/{file_name}"
    s3.Bucket(bucket).download_file(file_name, output)
    return output


temp = download_file("lf_specs.zarr", "ocean-data-lab")


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


@app.route('/')
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, 'index.html')


if __name__ == '__main__':
    app.run()
