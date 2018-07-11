const expect = require('chai').expect;
const exp = require('../../utils/require-exo')('exp');

if (!exp)
  describe = () => {};

describe('exp', () => {

  it('exp(1, 0)', () => {
    const base = 1;
    const exponent = 0;
    const expected = 1;

    expect(exp(base, exponent)).to.equal(expected);
  });

  it('exp(1, 1)', () => {
    const base = 1;
    const exponent = 1;
    const expected = 1;

    expect(exp(base, exponent)).to.equal(expected);
  });

  it('exp(1, 8)', () => {
    const base = 1;
    const exponent = 8;
    const expected = 1;

    expect(exp(base, exponent)).to.equal(expected);
  });

  it('exp(2, 0)', () => {
    const base = 2;
    const exponent = 0;
    const expected = 1;

    expect(exp(base, exponent)).to.equal(expected);
  });

  it('exp(2, 1)', () => {
    const base = 2;
    const exponent = 1;
    const expected = 2;

    expect(exp(base, exponent)).to.equal(expected);
  });

  it('exp(2, 8)', () => {
    const base = 2;
    const exponent = 8;
    const expected = 256;

    expect(exp(base, exponent)).to.equal(expected);
  });

  it('exp(5, 3)', () => {
    const base = 5;
    const exponent = 3;
    const expected = 125;

    expect(exp(base, exponent)).to.equal(expected);
  });

  it('exp(4, 7)', () => {
    const base = 4;
    const exponent = 7;
    const expected = 16384;

    expect(exp(base, exponent)).to.equal(expected);
  });

  it('exp(0, 0)', () => {
    const base = 0;
    const exponent = 0;

    expect(exp(base, exponent)).to.be.NaN;
  });

});
