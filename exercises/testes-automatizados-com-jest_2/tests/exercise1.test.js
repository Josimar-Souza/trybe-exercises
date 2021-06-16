const { describe, it, expect } = require('@jest/globals')
const { uppercase } = require('../scripts/exercise1')

describe('Testes da função uppercase', () => {
  it('Testa se a variavel uppercase é uma função', () => {
    expect(typeof(uppercase)).toBe('function');
  });
  it('Testa a chamada do callback da função', (done) => {
    const callback = (strUpperCase) => {
      setTimeout(() => {
        expect(strUpperCase).toBe('JOSIMAR');
        done();
      }, 2000);
    }
    uppercase('josimar', callback);
  });
});