const config = require('../../../config.json')

function listArray(arrayDirectory) {

  if (config.EnableDisable.JSONUtil.listArray == true) {

    for (let i = 0; i < arrayDirectory.length; i++) {
      let index= i+1;
      console.log(index + '. ' + arrayDirectory[i]);;
  }
} else {
  return console.log(config.DisabledError)
}
   
 }

module.exports = listArray