const wheretheversionis = require('../../../package.json')
const config = require('../../../config.json')

function version() {

    if (config.EnableDisable.support.version == true) {

    return console.log(wheretheversionis.version)

    } else {
        return console.log(config.DisabledError)
    }
}

module.exports = version