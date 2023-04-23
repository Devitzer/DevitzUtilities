const config = require('../../../config.json')

function randomNumberResult(min = 0, max = 100) {

    if (config.EnableDisable.calc.randomNumberResult == true) {

      let random = Math.floor(Math.random() * (max - min) + min + 1)
      return `${random}`

    }


}

module.exports = randomNumberResult