input.onButtonPressed(Button.A, function () {
    while (snooze <= 5) {
        if (input.acceleration(Dimension.Z) > -1000) {
            music.setTempo(200)
            music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Forever)
            snooze += 1
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . . . .
                . . # . .
                `)
            basic.showNumber(snooze)
            if (snooze == 6) {
                music.setTempo(300)
                music.setVolume(255)
                basic.showIcon(IconNames.No)
                basic.clearScreen()
                basic.showString("STOP NOW")
            }
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    if (snooze > 3) {
        basic.showIcon(IconNames.Sad)
        basic.clearScreen()
        basic.showString("SLEEP")
    } else {
        basic.showIcon(IconNames.Happy)
        basic.clearScreen()
        basic.showString("GOOD DAY")
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.stopAllSounds()
})
let snooze = 0
snooze = 0
basic.showString("BEGIN")
basic.clearScreen()
basic.showLeds(`
    . . # . .
    . # # . .
    # # # # #
    . # . . .
    . . # . .
    `)
basic.pause(500)
basic.clearScreen()
