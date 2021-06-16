const { describe, expect } = require('@jest/globals');
let { randomNumber } = require('../Scripts/exercise1');


describe('Testes da função getNumber', () => {
  it('Testa se a função foi chamada, qual o seu retorno e quantas vezes foi chamda', () => {
    randomNumber = jest.fn()
      .mockReturnValue(10);

    expect(randomNumber()).toBe(10);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
  });
});