const config = require('../../../config.json')

function listArrayString(arrayDirectory) {

  if (config.EnableDisable.JSONUtil.listArrayString == true) {

    for (let i = 0; i < arrayDirectory.length; i++) {
      let index= i+1;
      return index + '. ' + arrayDirectory[i];;
  }
} else {
  return config.DisabledError
}
   
 }

module.exports = listArrayString