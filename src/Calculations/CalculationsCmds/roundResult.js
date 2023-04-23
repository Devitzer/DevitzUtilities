const config = require('../../../config.json')

function roundResult(num) {

    if (config.EnableDisable.calc.roundResult == true) {

      let roundedNum = Math.round(num)
      return roundedNum

    } else {
        return config.DisabledError
    }
}

module.exports = roundResult