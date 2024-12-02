import Authentication from './auth';
import Database from './database';
import type { AppBackendConfig } from './utils';

export class BackendApplication {
  public config: AppBackendConfig;
  public auth: Authentication;
  public db: Database;

  constructor(config: AppBackendConfig) {
    this.config = config;
    this.auth = new Authentication(config);
    this.db = new Database(config);
  }
}
