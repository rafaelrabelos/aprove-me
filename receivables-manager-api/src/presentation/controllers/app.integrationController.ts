import { Controller, Get } from '@nestjs/common';
import { IntegrationService } from '@application/services/app.integrationService';

@Controller('integration')
export class IntegrationController {
  constructor(private readonly integrationService: IntegrationService) {}

  @Get()
  getHello(): string {
    return this.integrationService.getHello();
  }
}
