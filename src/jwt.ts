export default class JWT {
  public static setJwtCookie(key: string, jwt: string): void {
    try {
      const cookie = JSON.parse(document.cookie);
      cookie[key] = jwt;
      document.cookie = JSON.stringify(cookie);
    } catch {
      document.cookie = JSON.stringify({
        [key]: jwt,
      });
    }
  }

  public static removeJwtCookie(key: string): void {
    try {
      const cookie = JSON.parse(document.cookie);
      cookie[key] = undefined;
      document.cookie = JSON.stringify(cookie);
    } catch {
      console.warn(`Trying to delete Jwt cookie when it doesn't exist`);
    }
  }
}
