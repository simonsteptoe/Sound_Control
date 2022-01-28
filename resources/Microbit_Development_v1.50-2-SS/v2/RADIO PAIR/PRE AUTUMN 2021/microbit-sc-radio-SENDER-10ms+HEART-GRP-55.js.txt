function pad (num: number) {
    length = convertToText(num).length
    length = 5 - length
    string = convertToText(num)
    for (let index = 0; index <= length; index++) {
        string = "" + string + " "
    }
    return string
}
let lights_on = 0
let zaxis = ""
let yaxis = ""
let xaxis = ""
let string = ""
let length = 0
radio.setGroup(55)
basic.forever(function () {
    basic.pause(10)
    xaxis = pad(input.acceleration(Dimension.X))
    yaxis = pad(input.acceleration(Dimension.Y))
    zaxis = pad(input.acceleration(Dimension.Z))
    radio.sendString("" + xaxis + yaxis + zaxis)
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
