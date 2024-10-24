from flask import Flask, jsonify, send_file
from flask_cors import CORS
import os

app = Flask(__name__, static_folder='static')
CORS(app)

@app.route('/', methods=['GET'])
def main():
    return jsonify({"message": "Hello flask"})

@app.route('/getHelloworld', methods=['GET'])
def hello_world():
    return jsonify({"message": "Python에서 보내는 Hello World입니다."})

@app.route('/getGenAI', methods=['GET'])
def gen_ai():
    file_path = os.path.join(app.static_folder, 'ai.webp')  # static 폴더의 파일 경로
    if os.path.exists(file_path):
        return send_file(file_path, mimetype='image/webp')
    else:
        return jsonify({"error": "File not found"}), 404

if __name__ == '__main__':
    app.run(port=5000)
