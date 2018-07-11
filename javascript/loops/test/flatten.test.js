const expect = require('chai').expect;
const flatten = require('../../utils/require-exo')('flatten');

if (!flatten)
  describe = () => {};

describe('flatten', () => {

  it('empty array', () => {
    const a = [];
    const expected = [];

    expect(flatten(a)).to.have.members(expected);
  });

  it('one dimentional array', () => {
    const a = [1, 2, 3];
    const expected = [1, 2, 3];

    expect(flatten(a)).to.have.members(expected);
  });

  it('one dimentional array with empty array', () => {
    const a = [1, 2, [], 3];
    const expected = [1, 2, 3];

    expect(flatten(a)).to.have.members(expected);
  });

  it('two dimentional array', () => {
    const a = [[1], 2, 3];
    const expected = [1, 2, 3];

    expect(flatten(a)).to.have.members(expected);
  });

  it('two dimentional array 2', () => {
    const a = [1, [2], [3, 4], [5, 6, 7]];
    const expected = [1, 2, 3, 4, 5, 6, 7];

    expect(flatten(a)).to.have.members(expected);
  });

  it('multi dimentional array', () => {
    const a = [[1, [2]], [3, [[4, 5, [6]]], [7], [8, [9]]]];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    expect(flatten(a)).to.have.members(expected);
  });

});