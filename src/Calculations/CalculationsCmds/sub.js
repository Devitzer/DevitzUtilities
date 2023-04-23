const config = require('../../../config.json')

function sub(num1, num2) {

    if (config.EnableDisable.calc.sub == true) {

        return console.log(num1 - num2)

    } else {
        console.log(config.DisabledError)
    }

}

module.exports = sub