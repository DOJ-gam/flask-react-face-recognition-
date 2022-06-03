from crypt import methods
from flask import Flask, request;
from flask_cors import CORS;
import json
from face_rec import FaceRec, doj;
# from PIL import image
import base64
import io
import os
import shutil
import time

app = Flask(__name__)
CORS(app)

@app.route('/api', methods=['POST', 'GET'])
def api():
    data = request.get_json()
    print(data);
    return data;



if(__name__ == '__main__'):
    app.run()