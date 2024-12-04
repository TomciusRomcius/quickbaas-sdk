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

    if (response.status === 201) {
      this.setJwtCookie(response.data);
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

    if (response.status === 201) {
      this.setJwtCookie(response.data);
    }
  }

  public signOut(): void {
    this.removeJwtCookie();
  }

  private setJwtCookie(jwt: string): void {
    try {
      const cookie = JSON.parse(document.cookie);
      cookie['user'] = jwt;
      document.cookie = JSON.stringify(cookie);
    } catch {
      document.cookie = JSON.stringify({
        user: jwt,
      });
    }
  }

  private removeJwtCookie(): void {
    try {
      const cookie = JSON.parse(document.cookie);
      cookie['user'] = undefined;
      document.cookie = JSON.stringify(cookie);
    } catch {
      console.warn(`Trying to delete Jwt cookie when it doesn't exist`);
    }
  }
}
