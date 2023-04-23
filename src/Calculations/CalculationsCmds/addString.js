const config = require('../../../config.json')

function addString(...operation) {

    if (config.EnableDisable.calc.addString == true) {

    let sum = 0;
    for (let arg of operation) sum += arg;
    return `${sum}`;

    } else {
        return config.DisabledError
    }

}

module.exports = addString