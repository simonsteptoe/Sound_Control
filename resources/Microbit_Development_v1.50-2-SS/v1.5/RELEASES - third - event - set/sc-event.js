let length = 0
let string = ""
let sp = 0
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
control.onEvent(EventBusSource.MICROBIT_ID_ACCELEROMETER, EventBusValue.MICROBIT_ACCELEROMETER_EVT_DATA_UPDATE, function () {
    basic.pause(300)
    xaxis = pad(input.acceleration(Dimension.X))
    yaxis = pad(input.acceleration(Dimension.Y))
    zaxis = pad(input.acceleration(Dimension.Z))
    serial.writeString("666     ")
    serial.writeString("XXXXXXXX")
    serial.writeString("YYYYYYYY")
    serial.writeString("" + xaxis)
    serial.writeString("" + xaxis)
    serial.writeString("" + xaxis)
    serial.writeString("" + yaxis)
    serial.writeString("" + zaxis)
    serial.writeLine("")
})
