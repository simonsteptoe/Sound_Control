let length = 0
let string = ""
let tick = ""
let what = ""
let tock = ""
let xaxis = ""
let yaxis = ""
let zaxis = ""
function pad (num: number) {
    length = convertToText(num).length
    length = 7 - length
    string = convertToText(num)
    for (let index = 0; index <= length; index++) {
        string = "" + string + " "
    }
    return string
}
basic.forever(function () {
    basic.pause(300)
    tick = pad(control.eventTimestamp())
    what = pad(control.eventValue())
    tock = pad(control.millis())
    xaxis = pad(input.acceleration(Dimension.X))
    yaxis = pad(input.acceleration(Dimension.Y))
    zaxis = pad(input.acceleration(Dimension.Z))
    serial.writeString("666     ")
    serial.writeString("xxxxxxxx")
    serial.writeString("yyyyyyyy")
    serial.writeString(xaxis)
    serial.writeString(xaxis)
    serial.writeString(xaxis)
    serial.writeString(yaxis)
    serial.writeString(zaxis)
    serial.writeLine("")
})
