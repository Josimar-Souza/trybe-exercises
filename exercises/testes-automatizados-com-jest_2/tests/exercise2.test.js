const { describe, it, expect } = require('@jest/globals');
const { getUserName } = require('../scripts/exercise2');

describe('Testa a função getUserName', () => {  
  it('Testa caso o usuário seja encontrado', async () => {
    expect.assertions(1);
    const userName = await getUserName(4);
    expect(userName).toBe('Mark');
  });
  it('Testa caso o usuário não seja encontrado', async () => {
    expect.assertions(1);
    try{
      await getUserName(7);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 7 not found.' });
    }
  });
}); 