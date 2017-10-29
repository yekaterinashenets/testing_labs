describe("sum", function() {
  it("2+5=7", function() {
    assert.equal(sum(2, 5), 7);
  });
  it("-3+8=5", function() {
    assert.equal(sum(-3, 8), 5);
  });
});

describe("substr", function() {
  it("2-5=3", function() {
    assert.equal(substr(2, 5), -3);
  });
  it("-3-8=-11", function() {
    assert.equal(substr(-3, 8), -11);
  });
});

describe("mult", function() {
  it("2*5=10", function() {
    assert.equal(mult(2, 5), 10);
  });
  it("-3*0=0", function() {
    assert.equal(mult(-3, 0), 0);
  });
});

describe("div", function() {
  it("6/3=2", function() {
    assert.equal(div(6, 3), 2);
  });
  it("-3/0=err", function() {
    assert.equal(div(-3, 0), 'err');
  });
});