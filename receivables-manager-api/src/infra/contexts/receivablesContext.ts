import SqliteConnector from '@infra/connectors/sqliteConnector';
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@src/../generated/prisma';

@Injectable()
export class ReceivablesContext {
  private _prisma: PrismaClient;

  constructor(private readonly _connector: SqliteConnector) {
    this._prisma = this._connector.getClient();
  }

  public get prisma(): PrismaClient {
    return this._prisma;
  }

  status(): string {
    return this._connector.status();
  }

  public async receivables() {
    this._prisma.$connect();
    return this._prisma.receivable;
  }

  public async assignors() {
    this._prisma.$connect();
    return this._prisma.assignor;
  }
}
