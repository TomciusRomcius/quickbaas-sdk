import axios from 'axios';
import { config } from 'dotenv';

export async function wipeTestDb(): Promise<void> {
  await axios.post(`${process.env.BACKEND_URL}/wipe-test-db`, {
    adminKey: 'secret',
  });
}

export async function setupE2E(): Promise<void> {
  config({ path: './.env.test' });
  console.log(process.env.BACKEND_URL);
  if (!process.env.BACKEND_URL) {
    throw new Error('BACKEND_URL is not defined');
  }
  await wipeTestDb();
}
