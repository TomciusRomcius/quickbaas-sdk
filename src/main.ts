import axios from 'axios';

type AuthConfigType = {
  backendURL: string;
};

export class Auth {
  static config?: AuthConfigType;

  static initialize(config: AuthConfigType) {
    this.config = config;
  }

  public static async signInWithPassword(email: string, password: string) {
    if (!Auth.config) {
      // TODO: handle error
      return;
    }

    const response = await axios.post(
      `${Auth.config.backendURL}/auth/sign-in-with-password`,
      {
        email: email,
        password: password,
      },
    );

    if (response.status === 200) {
      const jwt = response.data;
      localStorage.setItem('auth-cookie', jwt);
      console.log(jwt);
    }
  }

  public static async signUpWithPassword(email: string, password: string) {
    if (!Auth.config) {
      // TODO: handle error
      return;
    }

    const response = await axios.post(
      `${Auth.config.backendURL}/auth/sign-up-with-password`,
      {
        email: email,
        password: password,
      },
    );

    if (response.status === 200) {
      const jwt = response.data;
      localStorage.setItem('auth-cookie', jwt);
      console.log(jwt);
    }
  }
}
