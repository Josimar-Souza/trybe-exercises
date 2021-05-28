const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  const flattedArray = arrays.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue);
  }, []);
  return flattedArray;
}
console.log(flatten());
assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);