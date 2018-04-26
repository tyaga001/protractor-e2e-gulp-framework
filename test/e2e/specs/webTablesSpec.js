/*********
 *
 * Spec class for web table module
 *
 *
 */

var webTables = require('./webTablePageObject');

describe("Verify web table complete functionality", function () {

  var webTab = new webTables();

  beforeAll(function () {
    console.log('before all block');
  });

  beforeEach(function () {
    browser.get('http://www.way2automation.com/angularjs-protractor/webtables/');
    console.log('on webtables page');
  });

  it("Basic test to check add user button is present on home page", function () {

    webTab.getAddUserBtn().then(function (btn) {
      expect(btn).toBe(true);
      console.log('btn'+ btn);
    })

  });

  it("Basic test block to see the global functions hierarchy", function () {
    console.log('Sample Test 2');
  });

});