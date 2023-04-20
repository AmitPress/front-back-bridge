from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def home():
    return "hi"

@app.route('/sum', methods=['POST'])
def sum():
    n = request.form.get('number')
    n = int(n) + 5
    result = {
        'valu': n
    }
    return jsonify(result)

if __name__ == "__main__":
    app.run(port=6500)