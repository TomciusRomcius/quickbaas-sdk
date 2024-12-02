import axios from 'axios';
import type { AppBackendConfig } from './utils';

export default class Database {
  config: AppBackendConfig;

  constructor(config: AppBackendConfig) {
    this.config = config;
  }

  public async get(path: string) {
    const res = await axios.post(
      `${this.config.backendURL}/database-client/get`,
      {
        path: path,
      },
    );

    return res.data;
  }

  public async set(path: string, value: unknown) {
    const res = await axios.post(
      `${this.config.backendURL}/database-client/set`,
      {
        path: path,
        value: value,
      },
    );

    return res.data;
  }

  public async push(path: string, value: unknown) {
    await axios.post(`${this.config.backendURL}/database-client/push`, {
      path: path,
      value: value,
    });
  }

  public async delete(path: string) {
    await axios.post(`${this.config.backendURL}/database-client/delete`, {
      path: path,
    });
  }
}
