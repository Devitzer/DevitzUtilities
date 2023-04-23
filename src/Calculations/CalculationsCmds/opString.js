const config = require('../../../config.json')

function opString(operation) {
 
    if(config.EnableDisable.calc.opString == true) {

    let sum = operation
    return `${sum}`
   
    } else {
        return config.DisabledError
    }
 }

module.exports = opString