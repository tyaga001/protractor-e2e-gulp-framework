//var ProtractorPerf = require('protractor-perf');
describe("basic test", function () {
 // var perf = new ProtractorPerf(protractor); // Initialize the perf runner  
  beforeAll(function () {
    console.log('beforeAll');
  });
  beforeEach(function () {
    console.log('beforeEach');
  });
  afterAll(function () {
    console.log('afterAll');
  });
  afterEach(function () {
    console.log('afterEach');
  });
  it("Test Case 1: to verify see the global functions hierarchy", function () {
    console.log('Sample Test 1');
  });
  it("Test Case 2: to verify see the global functions hierarchy", function () {
    browser.get('http://www.angularjs.org');
            //perf.start(); // Start measuring the metrics
            element(by.model('todoText')).sendKeys('write a protractor test');
            element(by.css('[value="add"]')).click();
           // perf.stop(); // Stop measuring the metrics 
    
           // if (perf.isEnabled) { // Is perf measuring enabled ?
                // Check for perf regressions, just like you check for functional regressions
                //expect(perf.getStats('meanFrameTime')).toBeLessThan(60); 
           // };
            var todoList = element.all(by.repeater('todo in todos'));
            expect(todoList.count()).toEqual(3);  
    });
    it('should greet the named user', function() {
      browser.get('http://www.angularjs.org');
      //browser.pause();
     // browser.explore()
      element(by.model('yourName')).sendKeys('Julie');
  
      var greeting = element(by.binding('yourName'));
  
        
      expect(greeting.getText()).toEqual('Hello Julie!');
      console.log(browser.browserName);
        
        
    });
});