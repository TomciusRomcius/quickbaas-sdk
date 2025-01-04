import { setupE2E } from './utils';
import ServerFunctions from '../src/server-function';
import axios from 'axios';

describe('server functions', () => {
  let serverFunctions: ServerFunctions;

  beforeAll(async () => {
    await setupE2E();
    serverFunctions = new ServerFunctions({
      backendURL: process.env.BACKEND_URL!,
    });
    await axios.post(`${process.env.BACKEND_URL!}/server-functions/create`, {
      functions: [
        {
          name: 'test-function.js',
          code: 'res.status(201).send("hello test")',
        },
      ],
      adminKey: process.env.ADMIN_KEY,
    });
  });

  it('run() should work properly', async () => {
    const res = await serverFunctions.run('test-function.js', 'hello test');
    expect(res.status).toBe(201);
    expect(res.data).toBe('hello test');
  });
});
