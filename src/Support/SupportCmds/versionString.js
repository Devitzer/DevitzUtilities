const wheretheversionis = require('../../../package.json')
const config = require('../../../config.json')

function versionString() {

    if (config.EnableDisable.support.versionString == true) {

        return `${wheretheversionis.version}`

    } else {
        return config.DisabledError
    }

}

module.exports = versionString