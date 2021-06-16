const { describe, it, expect } = require('@jest/globals');
const { getUserName } = require('../scripts/exercise2');

describe('Testa a função getUserName', () => {  
  it('Testa caso o usuário seja encontrado', () => {
    return getUserName(4).then((userName) => {
      expect(userName).toBe('Mark');
    });
  });
  it('Testa caso o usuário não seja encontrado', () => {
    expect.assertions(1);
    return getUserName(7).catch((error) => {
      expect(error).toEqual({ error: 'User with 7 not found.' });
    });
  });
});