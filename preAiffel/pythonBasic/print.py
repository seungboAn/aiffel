import os

#1 화면에 Hello World 문자열을 출력하세요.
print("""#1
Hello World""")

#2 화면에 Mary's cosmetics을 출력하세요. (중간에 '가 있음에 주의하세요)
print("""#2
Mary's cosmetics""")

#3 화면에 아래 문장을 출력하세요. (중간에 "가 있음에 주의하세요.)
# 신씨가 소리질렀다. "도둑이야".
print('''#3
신씨가 소리질렀다. "도둑이야"''')

#4 화면에 C:\Windows를 출력하세요.
# C:\Windows는 시스템 루트 폴더이다. 아래 코드를 통해 시스템 루트 경로는 환경 변수 'SYSTEMROOT'에 포함되어있는 걸 알 수 있다.
# for key, value in os.environ.items():
#     print(f"{key}: {value}")
print(f'''#4
{os.environ.get('SYSTEMROOT')}''')

#5 다음 코드를 실행해보고 \t와 \n의 역할을 설명해보세요.
# print("안녕하세요.\n만나서\t\t반갑습니다.")
print('''#5
\\n은 줄바꿈을 의미한다.
\\t는 탭을 의미한다.''')

#6 print 여러 데이터 출력
# print 함수에 두 개의 단어를 입력한 예제입니다. 아래 코드의 출력 결과를 예상해봅시다.
print("#6")
print("오늘은", "일요일")
print("위 코드는 2개의 문자열이 합쳐지고, sep=' ', end='\\n'가 적용된 문자열이 출력될 것이다.")

#7 print() 함수를 사용하여 다음과 같이 출력하세요.
# naver;kakao;sk;samsung
print("#7")
print("naver", "kakao", "sk", "samsung", sep=';')

#8 print() 함수를 사용하여 다음과 같이 출력하세요.
# naver/kakao/sk/samsung
print("#8")
print("naver", "kakao", "sk", "samsung", sep='/')

#9 print 줄바꿈
# 다음 코드를 수정하여 줄바꿈이 없이 출력하세요. (힌트: end='') print 함수는 두 번 사용합니다. 세미콜론 (;)은 한줄에 여러 개의 명령을 작성하기 위해 사용합니다.
print("#9")
print("first", end='');print("second")

#10
print(f'''#10
{5 / 3}''')