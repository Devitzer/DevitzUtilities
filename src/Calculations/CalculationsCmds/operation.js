const config = require('../../../config.json')

function operation(operation) {

    if (config.EnableDisable.calc.operation == true) {
 
    let sum = operation
    return console.log(sum)

    } else {
        console.log(config.DisabledError)
    }
 }

module.exports = operation