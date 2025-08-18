import { Injectable, Req, Res } from '@nestjs/common';
import { CreateReceivableRequestModel } from '@application/models/requests/receivableRequestModel';
import { CreateAssignorRequestModel } from '../models/requests/assignorRequestModel';

@Injectable()
export class IntegrationService {
  createReceivable(@Req() req: CreateReceivableRequestModel) {
    return req.getData();
  }

  createAssignor(@Req() req: CreateAssignorRequestModel) {
    return req.getData();
  }
}
