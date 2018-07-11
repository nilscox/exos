const expect = require('chai').expect;
const fibo = require('../../utils/require-exo')('fibo');

if (!fibo)
  describe = () => {};

describe('fibo', () => {

  it('should compute fibo(0)', () => {
    const value = 0;
    const expected = 0;

    expect(fibo(value)).to.equal(expected);
  });

  it('should compute fibo(1)', () => {
    const value = 1;
    const expected = 1;

    expect(fibo(value)).to.equal(expected);
  });

  it('should compute fibo(2)', () => {
    const value = 2;
    const expected = 1;

    expect(fibo(value)).to.equal(expected);
  });

  it('should compute fibo(3)', () => {
    const value = 3;
    const expected = 2;

    expect(fibo(value)).to.equal(expected);
  });

  it('should compute fibo(5)', () => {
    const value = 5;
    const expected = 5;

    expect(fibo(value)).to.equal(expected);
  });

  it('should compute fibo(10)', () => {
    const value = 10;
    const expected = 55;

    expect(fibo(value)).to.equal(expected);
  });

  it('should compute fibo(25)', () => {
    const value = 25;
    const expected = 75025;

    expect(fibo(value)).to.equal(expected);
  });

  it('should compute fibo(42)', () => {
    const value = 42;
    const expected = 267914296;

    expect(fibo(value)).to.equal(expected);
  });

});
