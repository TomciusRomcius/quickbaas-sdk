import Database from '../database';

const backendURL = 'http://localhost:3000';

describe('Database module', () => {
  const db = new Database({
    backendURL: backendURL,
  });

  it('set() and get() functionality shoul work', async () => {
    console.log('TEst');
    const path = 'app.name';
    const value = 'test';
    await db.set(path, value);
    const retrievedValue = await db.get(path);
    expect(retrievedValue).toBe(value);
  });
});
