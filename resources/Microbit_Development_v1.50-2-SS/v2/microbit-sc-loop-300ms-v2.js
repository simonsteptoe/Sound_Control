let time = 0
let timestr = ""
let timestrlen = 0
let timestrlensub = 0
let axis = 0
let axisstr = ""
let axisstrlen = 0
let axisstrlensub = 0
let xaxis = ""
let yaxis = ""
let zaxis = ""
let filler = ""
basic.forever(function () {
    basic.pause(300)
    time = control.millis()
    timestr = convertToText(time)
    timestrlen = timestr.length
    timestrlensub = 7 - timestrlen
    for (let index = 0; index <= timestrlensub; index++) {
        timestr = "" + timestr + " "
    }
    axis = input.acceleration(Dimension.X)
    axisstr = convertToText(axis)
    axisstrlen = axisstr.length
    axisstrlensub = 7 - axisstrlen
    for (let index = 0; index <= axisstrlensub; index++) {
        axisstr = "" + axisstr + " "
    }
    xaxis = axisstr
    axis = input.acceleration(Dimension.Y)
    axisstr = convertToText(axis)
    axisstrlen = axisstr.length
    axisstrlensub = 7 - axisstrlen
    for (let index = 0; index <= axisstrlensub; index++) {
        axisstr = "" + axisstr + " "
    }
    yaxis = axisstr
    axis = input.acceleration(Dimension.Z)
    axisstr = convertToText(axis)
    axisstrlen = axisstr.length
    axisstrlensub = 7 - axisstrlen
    for (let index = 0; index <= axisstrlensub; index++) {
        axisstr = "" + axisstr + " "
    }
    zaxis = axisstr
    filler = "xxxxxxxx"
    serial.writeString(timestr)
    serial.writeString(filler)
    serial.writeString(filler)
    serial.writeString(xaxis)
    serial.writeString(xaxis)
    serial.writeString(xaxis)
    serial.writeString(yaxis)
    serial.writeString(zaxis)
    serial.writeLine("")
})
