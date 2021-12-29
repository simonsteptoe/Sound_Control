from microbit import *


def pad(num):
    length = len(str(num))
    length = 8 - length
    string = str(num)
    index = 0
    while index < length:
        string = "" + string + " "
        index += 1
    return string

# No l.just in Micropython??????
def pad2(num):
    s_data = str(num)
    s_data = s_data.ljust(8, ' ')
    return s_data


def get_data():

    xaxis = pad(accelerometer.get_x())
    yaxis = pad(accelerometer.get_y())
    zaxis = pad(accelerometer.get_z())
 
    uart.write('666     ')
    uart.write('xxxxxxxx')
    uart.write("yyyyyyyy")
   
    uart.write(xaxis)
    uart.write(xaxis)
    uart.write(xaxis)
    uart.write(yaxis)
    uart.write(zaxis)
   
    uart.write('\r')

while True:
    get_data()
    sleep(300)
    