function pad (num: number) {
    length = convertToText(num).length
    length = 7 - length
    string = convertToText(num)
    for (let index = 0; index <= length; index++) {
        string = "" + string + " "
    }
    return string
}
let zaxis = ""
let yaxis = ""
let xaxis = ""
let tock = ""
let what = ""
let tick = ""
let string = ""
let length = 0
let lights_on = 0
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
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        lights_on = 1
        while (lights_on == 1) {
            basic.showIcon(IconNames.Heart)
            if (input.buttonIsPressed(Button.B)) {
                lights_on = 0
                break;
            }
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        basic.clearScreen()
    }
})
