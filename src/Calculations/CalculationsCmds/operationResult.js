const config = require('../../../config.json')

function operationResult(operation) {

    if (config.EnableDisable.calc.operationResult == true) {

    let sum = operation
    return sum
   
    } else {
        return config.DisabledError
    }
 }

module.exports = operationResult