describe("sample test- outer describe block", function () {
  beforeEach(function () {
    console.log('beforeEach in outer block');
  });

  afterEach(function () {
    console.log('afterEach');
  });
   describe(" Inner describe block", function () {
     beforeAll(function () {
       console.log('beforeAll inner block');
     });
     it("Basic test block to see the global functions hierarchy", function () {
       console.log('Sample Test 1');
     });

     it("Basic test block to see the global functions hierarchy", function () {
       console.log('Sample Test 2');
     });
   });
});