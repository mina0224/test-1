basic.showIcon(IconNames.Heart)
basic.pause(500)
basic.showIcon(IconNames.SmallHeart)
basic.pause(500)
music.playMelody("C5 A B G A F G E ", 120)
basic.showLeds(`
    # # # . .
    # . . # .
    # . . # .
    # . . # .
    # # # . .
    `)
basic.forever(function () {
	
})
