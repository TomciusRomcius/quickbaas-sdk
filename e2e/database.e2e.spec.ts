import Database from '../src/database';
import { setupE2E } from './utils';

describe('database module', () => {
  let db: Database;

  beforeAll(async () => {
    await setupE2E();
    db = new Database({
      backendURL: process.env.BACKEND_URL!,
    });
  });
  it('set() and get() functionality should work correctly with simple values', async () => {
    const path = 'app.name';
    const value = 'test';
    await db.set(path, value);
    const retrievedValue = await db.get(path);
    expect(retrievedValue).toBe(value);
  });

  it('set() and get() functionality should work with objects', async () => {
    const path = 'app.config';

    const value = {
      name: 'App',
      version: '1.0.0',
    };

    await db.set(path, value);
    const retrievedValue = (await db.get(path)) as typeof value;
    expect(retrievedValue.name).toBe(value.name);
    expect(retrievedValue.version).toBe(value.version);
  });
});
