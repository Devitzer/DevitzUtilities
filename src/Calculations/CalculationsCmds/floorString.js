const config = require('../../../config.json')

function floorString(num) {

    if (config.EnableDisable.calc.floorString == true) {

      let floorNum = Math.floor(num)
      return `${floorNum}`

    } else {
        return config.DisabledError
    }
}

module.exports = floorString