import Database from '../database';

const backendURL = 'http://localhost:3000';

describe('database module', () => {
  const db = new Database({
    backendURL: backendURL,
  });

  it('should set() and get() functionality', async () => {
    console.log('TEst');
    const path = 'app.name';
    const value = 'test';
    await db.set(path, value);
    const retrievedValue = await db.get(path);
    expect(retrievedValue).toBe(value);
  });
});
