const config = require('../../../config.json')

function randomNumber(min = 0, max = 100) {

    if (config.EnableDisable.calc.randomNumber == true) {

      let random = Math.floor(Math.random() * (max - min) + min + 1)
      return console.log(random)

    }


}

module.exports = randomNumber