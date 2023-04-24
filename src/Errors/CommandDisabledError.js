const config = require('../../config.json')

class CommandDisabledError{
    constructor() {
        throw new Error(config.DisabledError)
    }
}

module.exports = CommandDisabledError