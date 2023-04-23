const config = require('../../../config.json')

function opResult(operation) {

    if (config.EnableDisable.calc.opResult == true) { 
 
    let sum = operation
    return sum

    } else {
        return config.DisabledError
    }  
 }

module.exports = opResult