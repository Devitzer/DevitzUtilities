const config = require('../../../config.json')

function multiResult(num1, num2) {

    if (config.EnableDisable.calc.multiResult == true) {

        let sum = num1 * num2
        return sum

    } else {
        return config.DisabledError
    }

}

module.exports = multiResult