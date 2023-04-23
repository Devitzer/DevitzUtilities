const config = require('../../../config.json')

function moduloString(num1, num2) {

    if (config.EnableDisable.calc.moduloString == true) {
       
        let sum = num1 / num2
        return `${sum}`

    } else {
        return config.DisabledError
    }

}

module.exports = moduloString