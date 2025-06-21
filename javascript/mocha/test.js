describe("pow", function() {

  function makeTest(x) {
    let expected = x * x * x;
    it(`${x} in the power 3 is ${expected}`, function() {
      assert.equal(pow(x, 3), expected);
    });
  }

  for (let x = 1; x <= 5; x++) {
    makeTest(x);
  }

});

describe("pow", function() {
    it("5 in power of 1 is 5", function() {
      assert.equal(pow(5,1), 5);
    });
    it("5 in power of 2 is 25", function() {
      assert.equal(pow(5,2), 25);
    });
    it("5 in power of 3 is 125", function() {
      assert.equal(pow(5,3), 125);
    });
  
});