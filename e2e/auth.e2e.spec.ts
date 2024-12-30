import Authentication from '../src/auth';
import { setupE2E } from './utils';

describe('Authentication flow', () => {
  let auth: Authentication;

  beforeAll(async () => {
    await setupE2E();
    auth = new Authentication({ backendURL: process.env.BACKEND_URL! });
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
