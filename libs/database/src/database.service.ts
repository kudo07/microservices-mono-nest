import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';

@Injectable()
export class DatabaseService implements OnModuleDestroy {
  private pool: Pool;
  public db: NodePgDatabase<typeof schema>;

  constructor() {
    const connectionString =
      'postgresql://nestmicros:nestmicros@localhost:9999/nestmicros?schema=public';
    this.pool = new Pool({ connectionString });
    this.db = drizzle(this.pool, { schema });

    console.log('database connected');
  }
  async onModuleDestroy() {
    await this.pool.end();
  }
  get schema() {
    return schema;
  }
}
