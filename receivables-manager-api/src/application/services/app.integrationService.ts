import { Injectable, Req, Res } from '@nestjs/common';
import { CreateReceivableRequestModel } from '@application/models/requests/receivableRequestModel';
import { CreateAssignorRequestModel } from '../models/requests/assignorRequestModel';
import CreateReceivablesUseCase, {
  createReceivablesUseCase,
} from '@domain/useCases/receivables/receivablesUseCase';

@Injectable()
export class IntegrationService {
  private readonly _receivablesUseCase: CreateReceivablesUseCase;

  constructor(receivablesUseCase: CreateReceivablesUseCase) {
    this._receivablesUseCase = receivablesUseCase;
  }

  createReceivable(@Req() req: CreateReceivableRequestModel) {
    const { id, value, emissionDate, assignor } = req.getData();

    this._receivablesUseCase.execute({ id, value, emissionDate, assignor });
    return req.getData();
  }

  createAssignor(@Req() req: CreateAssignorRequestModel) {
    return req.getData();
  }
}

export const integrationService = new IntegrationService(
  createReceivablesUseCase,
);
