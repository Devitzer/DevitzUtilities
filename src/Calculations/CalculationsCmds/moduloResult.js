const config = require('../../../config.json')

function moduloResult(num1, num2) {

    if (config.EnableDisable.calc.moduloResult == true) {
        let sum = num1 / num2
        return sum

    } else {
        return config.DisabledError
    }

}

module.exports = moduloResult