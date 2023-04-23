const config = require('../../../config.json')

function floorResult(num) {

    if (config.EnableDisable.calc.floorResult == true) {

      let floorNum = Math.floor(num)
      return floorNum

    } else {
        return config.DisabledError
    }
}

module.exports = floorResult