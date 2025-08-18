import { Inject, Injectable, Req } from '@nestjs/common';
import { CreateReceivableRequestModel } from '@application/models/requests/receivableRequestModel';
import { CreateAssignorRequestModel } from '@application/models/requests/assignorRequestModel';
import { IUseCase } from '@domain/contracts/IUseCase';
import { CreateReceivableDto } from '@domain/dtos/createReceivableDto';
import { ReceivableEntity } from '@domain/entities/receivableEntity';

@Injectable()
export class IntegrationService {
  constructor(
    @Inject(IUseCase)
    private readonly _receivablesUseCase: IUseCase<
      CreateReceivableDto,
      ReceivableEntity | undefined
    >,
  ) {}

  createReceivable(@Req() req: CreateReceivableRequestModel) {
    const { id, value, emissionDate, assignor } = req.getData();
    const dto = new CreateReceivableDto({
      id,
      value,
      emissionDate,
      assignor,
    });

    this._receivablesUseCase.execute(dto);
    return req.getData();
  }

  createAssignor(@Req() req: CreateAssignorRequestModel) {
    return req.getData();
  }
}
