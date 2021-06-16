const { describe } = require('@jest/globals');
let { randomNumber } = require('../Scripts/exercise3');

describe('testes da função randomNumber exercise3', () => {
  afterEach(() => {
    randomNumber = jest.fn().mockImplementation((a) => a * 2);
  })

  it('teste de implementação inicial', () => {
    randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);
    expect(randomNumber(2, 2, 2)).toBe(8);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledWith(2, 2, 2);
    expect(randomNumber).toHaveBeenCalledTimes(1);
  });
  it('teste de implementação depois do afterEach', () => {
    expect(randomNumber(2)).toBe(4);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledWith(2);
    expect(randomNumber).toHaveBeenCalledTimes(1);
  });
});