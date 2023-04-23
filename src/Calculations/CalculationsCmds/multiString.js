const config = require('../../../config.json')

function multiString(num1, num2) {

    if (config.EnableDisable.calc.multiString == true) {
        let sum = num1 * num2
        return `${sum}`

    } else {
        return config.DisabledError
    }

}

module.exports = multiString