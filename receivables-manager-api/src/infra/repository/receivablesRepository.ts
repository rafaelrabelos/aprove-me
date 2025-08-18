import {
  ReceivablesContext,
  receivablesContext,
} from '@src/infra/contexts/receivablesContext';
import { ReceivableEntity } from '@src/domain/entities/receivableEntity';
import { Injectable } from '@nestjs/common';
import { IReceivablesRepository } from '@src/domain/contracts/IReceivablesRepository';

@Injectable()
export default class ReceivablesRepository implements IReceivablesRepository {
  private readonly _context: ReceivablesContext;

  constructor(context: ReceivablesContext) {
    this._context = context;
  }

  public async create(
    receivable: ReceivableEntity,
  ): Promise<ReceivableEntity | undefined> {
    const receivablesRepo = await this._context.receivables();
    const saved = await receivablesRepo.Save(receivable);

    return saved ? saved._id : undefined;
  }

  public async getAll(): Promise<ReceivableEntity[]> {
    const receivables = await this._context.receivables();
    const found = await receivables.findMany();

    return found.map((item) => new ReceivableEntity(item));
  }

  public async getById(id: string): Promise<ReceivableEntity | null> {
    const receivable = await this._context.receivables();
    const found = await receivable.findUnique({ where: { id } });

    return found ? new ReceivableEntity(found) : null;
  }
}

export const receivablesRepository = new ReceivablesRepository(
  receivablesContext,
);
