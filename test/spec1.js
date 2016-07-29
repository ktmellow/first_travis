const expect = require("chai").expect
const app = require('../scripty.js');

describe("Addition", function(){
  it("reality check", function(){
    expect(app.reality_check).to.equal(4)
  });
  it("should fail", function(){
    expect(reality_check).to.equal(3)
  });
});