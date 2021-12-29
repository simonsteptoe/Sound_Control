function pad (num: number) {
    length = convertToText(num).length
    length = 7 - length
    string = convertToText(num)
    for (let index = 0; index <= length; index++) {
        string = "" + string + " "
    }
    return string
}
radio.onReceivedString(function (receivedString) {
    x = "" + receivedString.substr(0, 6) + "  "
    y = "" + receivedString.substr(6, 6) + "  "
    z = "" + receivedString.substr(12, 6) + "  "
    serial.writeString("ABCDEFGH")
    serial.writeString("12345678")
    serial.writeString("------>>")
    serial.writeString(x)
    serial.writeString(x)
    serial.writeString(x)
    serial.writeString(y)
    serial.writeString(z)
    serial.writeLine("")
    basic.pause(300)
})
let lights_on = 0
let z = ""
let y = ""
let x = ""
let string = ""
let length = 0
radio.setGroup(55)
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
