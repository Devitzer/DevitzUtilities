const config = require('../../../config.json')

function floor(num) {

    if (config.EnableDisable.calc.floor == true) {

      let floorNum = Math.floor(num)
      return console.log(floorNum)

    } else {
        return console.log(config.DisabledError)
    }
}

module.exports = floor