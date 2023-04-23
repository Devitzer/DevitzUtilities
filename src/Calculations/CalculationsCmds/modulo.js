const config = require('../../../config.json')

function modulo(num1, num2) {

    if (config.EnableDisable.calc.modulo == true) {

        return console.log(num1 / num2)

    } else {
        console.log(config.DisabledError)
    }

}

module.exports = modulo