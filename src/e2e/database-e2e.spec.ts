import Database from '../database';
import { wipeTestDb } from './wipe-db';

const backendURL = 'http://localhost:3000';

describe('database module', () => {
  const db = new Database({
    backendURL: backendURL,
  });

  beforeAll(async () => {
    await wipeTestDb(backendURL);
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
