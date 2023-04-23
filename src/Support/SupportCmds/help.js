const config = require('../../../config.json')

function help() {

    if (config.EnableDisable.support.help == true) {

    console.log('If you want to see all categories and their commands, in your code put "console.log(devitz)" and if you have devitz package required you will get all information! Real support for this coming soon!')

    } else {
        return console.log(config.DisabledError)
    }
}

module.exports = help