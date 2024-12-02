import axios from 'axios';
import { AppBackendConfig } from './utils';

export default class Authentication {
  config: AppBackendConfig;

  constructor(config: AppBackendConfig) {
    this.config = config;
  }

  public async signInWithPassword(
    email: string,
    password: string,
  ): Promise<void> {
    const response = await axios.post(
      `${this.config.backendURL}/auth/sign-in-with-password`,
      {
        email: email,
        password: password,
      },
    );

    if (response.status === 200) {
      const jwt = response.data;
      document.cookie = `token: ${jwt}`;
    }
  }

  public async signUpWithPassword(
    email: string,
    password: string,
  ): Promise<void> {
    const response = await axios.post(
      `${this.config.backendURL}/auth/sign-up-with-password`,
      {
        email: email,
        password: password,
      },
    );

    if (response.status === 200) {
      const jwt = response.data;
      document.cookie = `token: ${jwt}`;
    }
  }
}
