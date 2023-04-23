const config = require('../../../config.json')

function operationString(operation) {

    if (config.EnableDisable.calc.operationString == true) {
 
    let sum = operation
    return `${sum}`
   
    } else {
        return config.DisabledError
    }
 }

module.exports = operationString