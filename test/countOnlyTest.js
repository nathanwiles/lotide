
const countOnly = require("../countOnly");
const assert = require("chai").assert;

// test data
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});



describe("#countOnly", () => {
  it("returns 1 for 'Jason' in firstNames", () => {
    assert.equal(result1["Jason"], 1);
  })
  it("returns undefined for 'Karima' in firstNames", () => {
    assert.isUndefined(result1["Karima"]);
  })
  it("returns 2 for 'Fang' in firstNames", () => {
    assert.equal(result1["Fang"], 2);
  })
  it("returns undefined for 'Agouhanna' in firstNames", () => {
    assert.isUndefined(result1["Agouhanna"]);
  })

});