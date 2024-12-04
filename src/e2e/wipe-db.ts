import axios from 'axios';

export async function wipeTestDb(backendURL: string): Promise<void> {
  await axios.post(`${backendURL}/wipe-test-db`);
}
