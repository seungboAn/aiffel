import random

class MakeNumberBaseball(object):
    #TODO : 클래스 변수와 인스턴스 변수의 차이점에 대해 설명하시오.
    def __init__(self): 
        self.answer = [str(random.randint(0, 9)) for _ in range(5)] 
        self.strike = 0
        self.ball = 0        

    #TODO
    # in 연산자에 대해 설명하시오.
    def attempt(self):
        self.strike = 0
        self.ball = 0  
        answer = self.answer

        inputNumbers = input("5자리 숫자를 입력해주세요: ")
        for i in range(len(inputNumbers)):
            if (inputNumbers[i] in answer) and inputNumbers[i] == answer[i]:
                self.strike += 1
            else:
                self.ball += 1
        return (self.strike, self.ball)

def main():
    game = MakeNumberBaseball()

    while True:
        strike, ball = game.attempt()
        print(f'{strike} strike {ball} ball')
        if (strike == 5):
            print("정답입니다.")
            break
if __name__ == "__main__":
    main()