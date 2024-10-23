




import io
import sys

def custom_print(*args, **kwargs):
    print(*args, **kwargs)

output = io.StringIO()
sys.stdout = output

x = {'sep': ':', 'end': ''}
y = {'sep': ':'}

custom_print(1, 2, 3, **x)
x_res = output.getvalue()
x_values = [char for char in x_res]

custom_print(1, 2, 3, **y)
y_res = output.getvalue()[len(x_res):]
y_values = [char for char in y_res]


sys.stdout = sys.__stdout__
print(f'x: {x_values}')
print(f'y: {y_values}')