const { describe, expect, it } = require('@jest/globals');
const { getRepos, url } = require('../scripts/exercise4');

describe('Testes da função getRepos', () => {
  it('Testa se existe o repositório "sd-01-week4-5-project-todo-list" ', async () => {
    const repos = await getRepos(url);
    const hasRepo = repos.some((repo) => repo === 'sd-01-week4-5-project-todo-list');
    expect(hasRepo).toBe(true);
  });
  it('Teste se existe o repositório "sd-01-week4-5-project-meme-generator" ', async () => {
    const repos = await getRepos(url);
    const hasRepo = repos.some((repo) => repo === 'sd-01-week4-5-project-meme-generator');
    expect(hasRepo).toBe(true);
  });
});