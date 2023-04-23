const config = require('../../../config.json')

function round(num) {

    if (config.EnableDisable.calc.round == true) {

      let roundedNum = Math.round(num)
      return console.log(roundedNum)

    } else {
        return console.log(config.DisabledError)
    }
}

module.exports = round