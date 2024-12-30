import axios from 'axios';
import type { AppBackendConfig } from './utils';

export default class Database {
  private config: AppBackendConfig;

  constructor(config: AppBackendConfig) {
    this.config = config;
  }

  public async get(path: string): Promise<unknown> {
    const res = await axios.post(
      `${this.config.backendURL}/database-client/get`,
      {
        path: path,
      },
    );

    return res.data.result;
  }

  public async set(path: string, value: unknown): Promise<void> {
    await axios.post(`${this.config.backendURL}/database-client/set`, {
      path: path,
      value: value,
    });
  }

  public async push(path: string, value: unknown): Promise<void> {
    await axios.post(`${this.config.backendURL}/database-client/push`, {
      path: path,
      value: value,
    });
  }

  public async delete(path: string): Promise<void> {
    await axios.post(`${this.config.backendURL}/database-client/delete`, {
      path: path,
    });
  }
}
