const expect = require('chai').expect;
const isColor = require('../../utils/require-exo')('isColor');

if (!isColor)
  describe = () => {};

describe('isColor', () => {

  it('empty string', () => {
    const str = '';
    const expected = false;

    expect(isColor(str)).to.equal(expected);
  });

  it('#000000', () => {
    const str = '#000000';
    const expected = true;

    expect(isColor(str)).to.equal(expected);
  });

  it('#FFFFFF', () => {
    const str = '#FFFFFF';
    const expected = true;

    expect(isColor(str)).to.equal(expected);
  });

  it('coucou', () => {
    const str = 'coucou';
    const expected = false;

    expect(isColor(str)).to.equal(expected);
  });

  it('000FFF', () => {
    const str = '000FFF';
    const expected = false;

    expect(isColor(str)).to.equal(expected);
  });

  it('#123456', () => {
    const str = '#123456';
    const expected = true;

    expect(isColor(str)).to.equal(expected);
  });

  it('#ABCDEF', () => {
    const str = '#ABCDEF';
    const expected = true;

    expect(isColor(str)).to.equal(expected);
  });

  it('#00CAFE', () => {
    const str = '#00CAFE';
    const expected = true;

    expect(isColor(str)).to.equal(expected);
  });

  it('#FFFTHE', () => {
    const str = '#FFFTHE';
    const expected = false;

    expect(isColor(str)).to.equal(expected);
  });

  it('#03C85A', () => {
    const str = '#03C85A';
    const expected = true;

    expect(isColor(str)).to.equal(expected);
  });

  it('#ABCDEG', () => {
    const str = '#ABCDEG';
    const expected = false;

    expect(isColor(str)).to.equal(expected);
  });

  it('#03C85A4', () => {
    const str = '#03C85A4';
    const expected = false;

    expect(isColor(str)).to.equal(expected);
  });

  it('#03C85', () => {
    const str = '#03C85';
    const expected = false;

    expect(isColor(str)).to.equal(expected);
  });

  it('#03C854FF', () => {
    const str = '#03C854FF';
    const expected = true;

    expect(isColor(str)).to.equal(expected);
  });

  it('#03C854FG', () => {
    const str = '#03C854FG';
    const expected = false;

    expect(isColor(str)).to.equal(expected);
  });

  it('#03C854FFF', () => {
    const str = '#03C854FFF';
    const expected = false;

    expect(isColor(str)).to.equal(expected);
  });

});
