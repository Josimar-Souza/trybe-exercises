const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  const aCount = names.reduce((acc, curr) => {
    const chars = curr.split('');
    const count = chars.reduce((acc, curr) => curr.toLowerCase() === 'a'? acc + 1 : acc, 0);
    return acc + count;
  }, 0);
  console.log(aCount);
  return aCount;
}

assert.deepStrictEqual(containsA(), 20);