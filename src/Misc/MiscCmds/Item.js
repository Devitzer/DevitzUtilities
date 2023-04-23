const config = require('../../../config.json')

class Item {
    constructor(itemName, itemPrice) {
      if (config.EnableDisable.misc.Item == true) {
      this.itemName = itemName
      this.itemPrice = itemPrice
    } else {
      return config.DisabledError
    }
  }
  }

module.exports = Item