const expect = require('chai').expect;
const excldisj = require('../../utils/require-exo')('excldisj');

if (!excldisj)
  describe = () => {};

describe('excldisj', () => {

  it('empty arrays', () => {
    const a1 = [];
    const a2 = [];
    const expected = [];

    expect(excldisj(a1, a2)).to.have.members(expected);
  });

  it('empty first array', () => {
    const a1 = [];
    const a2 = [1, 2, 3];
    const expected = [1, 2, 3];

    expect(excldisj(a1, a2)).to.have.members(expected);
  });

  it('empty second array', () => {
    const a1 = [1, 2, 3];
    const a2 = [];
    const expected = [1, 2, 3];

    expect(excldisj(a1, a2)).to.have.members(expected);
  });

  it('same arrays', () => {
    const a1 = [1, 2, 3];
    const a2 = [1, 2, 3];
    const expected = [];

    expect(excldisj(a1, a2)).to.have.members(expected);
  });

  it('fully different arrays', () => {
    const a1 = [1, 3, 5];
    const a2 = [2, 4, 6];
    const expected = [1, 2, 3, 4, 5, 6];

    expect(excldisj(a1, a2)).to.have.members(expected);
  });

  it('partially different arrays 1', () => {
    const a1 = [1, 2, 3];
    const a2 = [2];
    const expected = [1, 3];

    expect(excldisj(a1, a2)).to.have.members(expected);
  });

  it('partially different arrays 2', () => {
    const a1 = [2];
    const a2 = [1, 2, 3];
    const expected = [1, 3];

    expect(excldisj(a1, a2)).to.have.members(expected);
  });

  it('partially different arrays 3', () => {
    const a1 = [8, 4, 3, 1, 9];
    const a2 = [2, 9, 1, 6, 7];
    const expected = [7, 6, 2, 3, 4, 8];

    expect(excldisj(a1, a2)).to.have.members(expected);
  });

});
