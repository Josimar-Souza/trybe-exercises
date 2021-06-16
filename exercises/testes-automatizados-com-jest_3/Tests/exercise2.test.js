const { describe } = require('@jest/globals');
let { randomNumber } = require('../Scripts/exercise2');

describe('Testa a função randomNumber exercise2', () => {
  it ('Testes da nova implementação', () => {
    randomNumber = jest.fn().mockImplementation((a, b) => a / b);
    expect(randomNumber(10, 5)).toBe(2);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledWith(10, 5);
    expect(randomNumber).toHaveBeenCalledTimes(1);
  });
});