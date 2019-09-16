from flask import Flask
from flask import request
app = Flask(__name__)

@app.route('/taco', methods=['GET'])
def hello_world():
    data = request.args.get('level')
    return data
