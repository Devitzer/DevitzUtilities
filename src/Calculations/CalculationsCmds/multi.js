const config = require('../../../config.json')

function multi(num1, num2) {

    if (config.EnableDisable.calc.multi== true) {

        return console.log(num1 * num2)

    } else {
        console.log(config.DisabledError)
    }

}

module.exports = multi