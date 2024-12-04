import Authentication from '../auth';
import { wipeTestDb } from './wipe-db';

const backendURL = 'http://localhost:3000';

describe('Authentication flow', () => {
  const auth = new Authentication({
    backendURL: backendURL,
  });

  beforeAll(async () => {
    await wipeTestDb(backendURL);
  });

  it('sign up, sign out and sign in should work properly and set cookies correctly', async () => {
    const email = 'email@gmail.com';
    const password = 'superpassword.88';
    await auth.signUpWithPassword(email, password);
    let cookie = JSON.parse(document.cookie);
    expect(cookie['user']).toBeDefined();
    await auth.signOut();
    cookie = JSON.parse(document.cookie);
    expect(cookie['user']).toBeUndefined();
    await auth.signInWithPassword(email, password);
    cookie = JSON.parse(document.cookie);
    expect(cookie['user']).toBeDefined();
  });
});
