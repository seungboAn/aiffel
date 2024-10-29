from flask import Flask, jsonify, send_file, request
from flask_cors import CORS
import os

app = Flask(__name__, static_folder='static')
CORS(app)

import random

class MakeNumberBaseball(object):
    def __init__(self): 
        self.answer = [str(random.randint(0, 9)) for _ in range(5)] 
        self.strike = 0
        self.ball = 0        

    def attempt(self, inputNumbers):
        self.strike = 0
        self.ball = 0  
        answer = self.answer

        print(f'입력받은 숫자: {inputNumbers}')
        print(f'정답: {answer}')
        for i in range(len(inputNumbers)):
            if (inputNumbers[i] in answer) and inputNumbers[i] == answer[i]:
                self.strike += 1
            else:
                self.ball += 1
        return (self.strike, self.ball)

game = MakeNumberBaseball()

@app.route('/', methods=['GET'])
def main():
    return jsonify({"message": "Hello flask"})

@app.route('/getHelloworld', methods=['GET'])
def hello_world():
    return jsonify({"message": "Python이 보내는 메시지는 World Hello입니다."})

@app.route('/playGame', methods=['POST'])
def play_game():
    data = request.get_json()
    inputNumbers = data.get("numbers")
    result = game.attempt(inputNumbers)

    if result[0] != 5:
        return jsonify({"message": f'틀렸습니다. {result[0]} strike {result[1]} ball'}), 200
    return jsonify({"message": '정답입니다.'}), 200

@app.route('/getGenAI', methods=['GET'])
def gen_ai():
    file_path = os.path.join(app.static_folder, 'ai.webp')
    if os.path.exists(file_path):
        return send_file(file_path, mimetype='image/webp')
    else:
        return jsonify({"error": "File not found"}), 404

if __name__ == '__main__':
    app.run(port=5000)
