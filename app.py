from flask import Flask, request
from flask.helpers import send_from_directory
from flask_cors import CORS, cross_origin
from graph import getInitGraph

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


@app.route('/')
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, 'index.html')


if __name__ == '__main__':
    app.run()
