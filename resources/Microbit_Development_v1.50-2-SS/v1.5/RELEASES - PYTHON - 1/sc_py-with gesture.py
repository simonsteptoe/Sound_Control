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
    
    if  accelerometer.is_gesture("shake") or accelerometer.is_gesture("8g") or accelerometer.is_gesture("left") or accelerometer.is_gesture("right") or accelerometer.is_gesture("up") or accelerometer.is_gesture("down"):
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
        
        sleep(5)
    else:
        return

while True:
    get_data()
   
    