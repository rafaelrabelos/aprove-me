import { ReceivablesContext } from '@infra/contexts/receivablesContext';
import { ReceivableEntity } from '@domain/entities/receivableEntity';
import { Injectable } from '@nestjs/common';
import { IReceivablesRepository } from '@domain/contracts/IReceivablesRepository';

@Injectable()
export default class ReceivablesRepository implements IReceivablesRepository {
  constructor(private readonly _context: ReceivablesContext) {}

  public async create(receivable: ReceivableEntity): Promise<ReceivableEntity> {
    const repo = await this._context.receivables();
    const data = {
      id: receivable.id(),
      value: receivable.getValue(),
      emissionDate: receivable.getEmissionDate(),
      assignor: receivable.getAssignorId(),
    };

    const saved = await repo.create({ data });

    const resultEntity = new ReceivableEntity(saved);

    return resultEntity;
  }

  public async getAll(): Promise<ReceivableEntity[]> {
    const repo = await this._context.receivables();

    const found = await repo.findMany();

    return found.map((item) => new ReceivableEntity(item));
  }

  public async getById(id: string): Promise<ReceivableEntity | null> {
    const repo = await this._context.receivables();

    const found = await repo.findUnique({ where: { id } });

    return found ? new ReceivableEntity(found) : null;
  }
}
