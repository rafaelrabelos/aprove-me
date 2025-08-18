import SqliteConnector from '@infra/connectors/sqliteConnector';
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ReceivablesContext {
  private _connector: SqliteConnector;
  private _prisma: PrismaClient;

  constructor() {
    this._connector = new SqliteConnector();
    this._prisma = this._connector.getClient();
  }

  public get prisma(): PrismaClient {
    return this._prisma;
  }

  status(): string {
    return this._connector.status();
  }

  public async receivables() {
    return this._prisma.receivable;
  }

  public async assignors() {
    return this._prisma.assignor;
  }
}

export const receivablesContext = new ReceivablesContext();
