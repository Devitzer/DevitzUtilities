const config = require('../../../config.json')

function addResult(...operation) {

    if (config.EnableDisable.calc.addResult == true) {

    let sum = 0;
    for (let arg of operation) sum += arg;
    return sum;

    } else {
        return config.DisabledError
    }

}

module.exports = addResult