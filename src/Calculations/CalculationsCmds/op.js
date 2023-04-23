const config = require('../../../config.json')

function op(operation) {

    if (config.EnableDisable.calc.op == true) {
 
    let sum = operation
    return console.log(sum)

    } else {
        console.log(config.DisabledError)
    }  
 }

module.exports = op