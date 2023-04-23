const config = require('../../../config.json')

function subResult(num1, num2) {

    if (config.EnableDisable.calc.subResult == true) {

        let sum = num1 - num2
        return sum

    } else {
        return config.DisabledError
    }

}

module.exports = subResult