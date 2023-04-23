const config = require('../../../config.json')

function add(...operation) {

    if (config.EnableDisable.calc.add == true) {

    let sum = 0;
    for (let arg of operation) sum += arg;
    return console.log(sum);

    } else {
        console.log(config.DisabledError)
    }

}

module.exports = add