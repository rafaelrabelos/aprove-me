import { Module } from '@nestjs/common';
import { IntegrationController } from '@presentation/controllers/app.integrationController';
import { IntegrationService } from '@application/services/app.integrationService';

@Module({
  imports: [],
  controllers: [IntegrationController],
  providers: [IntegrationService],
})
export class AppModule {}
