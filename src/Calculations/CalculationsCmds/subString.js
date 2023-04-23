const config = require('../../../config.json')

function subString(num1, num2) {

    if (config.EnableDisable.calc.subString == true) {
        let sum = num1 - num2
        return `${sum}`

    } else {
        return config.DisabledError
    }

}

module.exports = subString