input.onButtonPressed(Button.AB, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    if (snooze > 2) {
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
basic.forever(function () {
    if (input.acceleration(Dimension.Z) > 1500) {
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
    }
    if (snooze == 5) {
        music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Forever)
        music.setTempo(300)
        basic.showIcon(IconNames.No)
        basic.clearScreen()
        basic.showString("STOP NOW")
        control.reset()
    }
})
