filler = ""
zaxis = ""
yaxis = ""
xaxis = ""
axisstrlensub = 0
axisstrlen = 0
axisstr = ""
axis = 0
timestrlensub = 0
timestrlen = 0
timestr = ""
time = 0
serial.redirect(SerialPin.USB_TX, SerialPin.USB_RX, BaudRate.BAUD_RATE115200)

def on_forever():
    global time, timestr, timestrlen, timestrlensub, axis, axisstr, axisstrlen, axisstrlensub, xaxis, yaxis, zaxis, filler
    basic.pause(100)
    time = control.millis()
    timestr = convert_to_text(time)
    timestrlen = len(timestr)
    timestrlensub = 7 - timestrlen
    index = 0
    while index <= timestrlensub:
        timestr = "" + timestr + " "
        index += 1
    axis = input.acceleration(Dimension.X)
    axisstr = convert_to_text(axis)
    axisstrlen = len(axisstr)
    axisstrlensub = 7 - axisstrlen
    index2 = 0
    while index2 <= axisstrlensub:
        axisstr = "" + axisstr + " "
        index2 += 1
    xaxis = axisstr
    axis = input.acceleration(Dimension.Y)
    axisstr = convert_to_text(axis)
    axisstrlen = len(axisstr)
    axisstrlensub = 7 - axisstrlen
    index3 = 0
    while index3 <= axisstrlensub:
        axisstr = "" + axisstr + " "
        index3 += 1
    yaxis = axisstr
    axis = input.acceleration(Dimension.Z)
    axisstr = convert_to_text(axis)
    axisstrlen = len(axisstr)
    axisstrlensub = 7 - axisstrlen
    index4 = 0
    while index4 <= axisstrlensub:
        axisstr = "" + axisstr + " "
        index4 += 1
    zaxis = axisstr
    filler = "xxxxxxxx"
    serial.write_string(timestr)
    serial.write_string(filler)
    serial.write_string(filler)
    serial.write_string(xaxis)
    serial.write_string(xaxis)
    serial.write_string(xaxis)
    serial.write_string(yaxis)
    serial.write_string(zaxis)
    serial.write_line("")
basic.forever(on_forever)
