import axios, { AxiosResponse } from 'axios';
import { AppBackendConfigType } from './types';

export default class ServerFunctions {
  config: AppBackendConfigType;
  constructor(config: AppBackendConfigType) {
    this.config = config;
  }

  public async run(fnName: string, body: unknown): Promise<AxiosResponse> {
    return await axios.post(`${this.config.backendURL}/server-functions/run`, {
      params: body,
      name: fnName,
    });
  }
}
