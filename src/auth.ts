import axios from 'axios';
import { AppBackendConfig } from './utils';
import { UserType } from './types';
import JWT from './jwt';

export default class Authentication {
  public user: UserType | null = null;

  private config: AppBackendConfig;
  private readonly jwtUserKey = 'user';

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
      JWT.setJwtCookie(this.jwtUserKey, response.data);
      this.user = { email };
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
      JWT.setJwtCookie(this.jwtUserKey, response.data);
      this.user = { email };
    }
  }

  public signOut(): void {
    JWT.removeJwtCookie(this.jwtUserKey);
    this.user = null;
  }
}
