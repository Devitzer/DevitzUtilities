const config = require('../../../config.json')

function pickRandomArray(arrayDirectory) {

   if (config.EnableDisable.JSONUtil.pickRandomArray == true) {

    var randomPick = arrayDirectory[Math.floor(Math.random()*arrayDirectory.length)];
    return console.log(randomPick)

   } else {

    return console.log(config.DisabledError)

   }

}

module.exports = pickRandomArray;