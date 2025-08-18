import { ReceivableEntity } from '@domain/entities/receivableEntity';
import { IUseCase } from '@domain/contracts/IReceivablesUseCase';
import type { IReceivablesRepository } from '@domain/contracts/IReceivablesRepository';
import { receivablesRepository } from '@infra/repository/receivablesRepository';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class CreateReceivablesUseCase
  implements IUseCase<Props, ReceivableEntity | undefined>
{
  constructor(
    private readonly _receivablesRepository: IReceivablesRepository,
  ) {}

  public async execute({ id, value, emissionDate, assignor }: Props) {
    const receivableEntity = new ReceivableEntity({
      id,
      value,
      emissionDate,
      assignor,
    });
    const userAccount =
      await this._receivablesRepository.create(receivableEntity);

    return this.result(userAccount);
  }

  private result(entity?: ReceivableEntity) {
    return entity;
  }
}

export const createReceivablesUseCase = new CreateReceivablesUseCase(
  receivablesRepository,
);

export interface Props {
  id: string;
  value: number;
  emissionDate: Date;
  assignor: string;
}
