/************
 * Page Object Class for web table
 *
 *
 */

function webTables() {

  this.addUserBtn = element(by.buttonText('Add User'));

  this.getAddUserBtn = function () {

    return this.addUserBtn.isDisplayed();
  }

}

module.exports = webTables();