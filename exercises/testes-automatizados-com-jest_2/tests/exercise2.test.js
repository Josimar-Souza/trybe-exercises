const { describe, it, expect } = require('@jest/globals');
const { getUserName } = require('../scripts/exercise2');

describe('Testa a função getUserName', () => {
  expect.assertions(2);
  it('Testa caso o usuário seja encontrado', async () => {
    const userName = await getUserName(4);
    expect(userName).toBe('Mark');
  });
  it('Testa caso o usuário não seja encontrado', async () => {
    try{
      getUserName(7);
    } catch(error) {
      expect(error).toEqual({ error: 'User with ' + id + ' not found.' });
    }
  });
});