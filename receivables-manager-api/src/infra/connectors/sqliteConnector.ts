import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

/**
 * SqliteConnector handles the connection to the SQLite database using Prisma
 * @example
 * ```ts
 * const connector = new SqliteConnector();
 * const prisma = connector.getClient();
 * ```
 */
@Injectable()
export default class SqliteConnector {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient({
      log: ['query', 'info', 'warn', 'error'],
      errorFormat: 'pretty',
    });
  }

  public getClient(): PrismaClient {
    return this.prisma;
  }

  public async connect(): Promise<void> {
    await this.prisma.$connect();
  }

  public async disconnect(): Promise<void> {
    await this.prisma.$disconnect();
  }

  public status(): string {
    return this.prisma ? 'connected' : 'disconnected';
  }
}
