let celsius = 0
basic.forever(function () {
    celsius = input.temperature()
    if (celsius == 10) {
        basic.showNumber(celsius)
        basic.showString("Ski time!")
    } else if (celsius == 20) {
        basic.showNumber(celsius)
        basic.showString("Picnic time")
    } else if (celsius == 30) {
        basic.showNumber(celsius)
        basic.showString("Beach time!")
    } else if (celsius == 40) {
        basic.showNumber(celsius)
        basic.showString("Its better to stay home!")
    } else {
        basic.showNumber(celsius)
    }
})
