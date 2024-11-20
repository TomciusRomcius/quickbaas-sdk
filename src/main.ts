import * as dotenv from 'dotenv';
dotenv.config();

// TODO: Check if the backend url is defined
const BACKEND_URL = process.env.BACKEND_URL!;

export class Auth {
  public static async signInWithPassword(email: string, password: string) {
    const response = await fetch(`BACKEND_URL/users`, {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (response.status === 200) {
      const jwt = await response.json(); 
      localStorage.setItem('auth-cookie', jwt);
      console.log(jwt);
    }
  }
}
