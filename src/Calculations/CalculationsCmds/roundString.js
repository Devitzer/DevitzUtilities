const config = require('../../../config.json')

function roundString(num) {

    if (config.EnableDisable.calc.roundString == true) {

      let roundedNum = Math.round(num)
      return `${roundedNum}`

    } else {
        return config.DisabledError
    }
}

module.exports = roundString