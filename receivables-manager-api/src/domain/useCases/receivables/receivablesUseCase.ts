import { ReceivableEntity } from '@domain/entities/receivableEntity';
import { IUseCase } from '@src/domain/contracts/IUseCase';
import { IReceivablesRepository } from '@domain/contracts/IReceivablesRepository';
import { Inject, Injectable } from '@nestjs/common';
import { CreateReceivableDto } from '@domain/dtos/createReceivableDto';

@Injectable()
export default class CreateReceivablesUseCase
  implements IUseCase<CreateReceivableDto, ReceivableEntity | undefined>
{
  constructor(
    @Inject(IReceivablesRepository)
    private readonly _receivablesRepository: IReceivablesRepository,
  ) {}
  /**
   * Executes the use case to create a receivable.
   * @param dto - The data transfer object containing receivable details.
   * @returns A promise that resolves to the created ReceivableEntity or undefined.
   */
  public async execute(dto: CreateReceivableDto) {
    const receivableEntity = dto.getData();
    const userAccount =
      await this._receivablesRepository.create(receivableEntity);

    return this.result(userAccount);
  }

  private result(entity?: ReceivableEntity) {
    return entity;
  }
}
