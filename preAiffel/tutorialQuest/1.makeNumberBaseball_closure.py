import random

        
def attempt():
    strike = 0
    print("게임을 시작합니다.")
    def checker(answer, inputNumbers):
        nonlocal strike
        ball = 0
        del_answer = []
        for i in range(len(inputNumbers)):
            if (inputNumbers[i] in answer) and inputNumbers[i] == answer[i]:
                strike += 1
                del_answer.append(inputNumbers[i])
                print(f'{inputNumbers[i]} correct!')
            else:
                ball += 1
                print(f'{inputNumbers[i]} incorrect!')
        for i in range(len(del_answer)):
            answer.remove(del_answer[i])
        print(f'\n점수판: {strike} strike, {ball} ball')
        return strike, ball
    return checker

def main():
    answer = [str(random.randint(0, 9)) for _ in range(5)]
    print(answer) 
    checker = attempt()
    while True:
        inputNumbers = input(f'{len(answer)}자리 숫자를 입력해 주세요.')
        if len(answer) != len(inputNumbers):
            continue
        checker(answer, inputNumbers)
        if answer == []:
            print("전부 맞췄습니다.")
            break

if __name__ == "__main__":
    main()