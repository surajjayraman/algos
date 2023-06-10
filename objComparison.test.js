const eqObjects = require('./objcomparison');

test('returns object comparison true', () => {
  expect(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })).toBe(true);
});

test('returns object comparison false', () => {
  expect(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })).toBe(false);
});