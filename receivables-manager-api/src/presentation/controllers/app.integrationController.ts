import { Controller, Post, Body } from '@nestjs/common';
import { IntegrationService } from '@application/services/app.integrationService';
import {
  CreateAssignorRequestModel,
  CreateAssignorProps,
} from '@application/models/requests/assignorRequestModel';
import {
  CreateReceivableRequestModel,
  CreateReceivableProps,
} from '@src/application/models/requests/receivableRequestModel';

@Controller('integration')
export class IntegrationController {
  constructor(private readonly _integrationService: IntegrationService) {}

  @Post('payable/receivable')
  async createReceivable(@Body() body: CreateReceivableProps) {
    const createReceivable = new CreateReceivableRequestModel(body);
    return this._integrationService.createReceivable(createReceivable);
  }

  @Post('payable/assignor')
  async createAssignor(@Body() body: CreateAssignorProps) {
    const createAssignor = new CreateAssignorRequestModel(body);
    return this._integrationService.createAssignor(createAssignor);
  }
}
