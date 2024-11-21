import axios from "axios";

type AuthConfigType = {
  backendURL: string;
}

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

    console.log(this.config?.backendURL);
    const response = await axios.post(`${Auth.config.backendURL}/user`, {
      email: "cool email",
      password: "cool password",
    });

    if (response.status === 200) {
      const jwt = response.data;
      localStorage.setItem('auth-cookie', jwt);
      console.log(jwt);
    }
  }
}
