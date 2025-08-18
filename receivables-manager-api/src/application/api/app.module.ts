import { Module } from '@nestjs/common';
import { IntegrationController } from '@presentation/controllers/app.integrationController';
import { IntegrationService } from '@application/services/app.integrationService';
import SqliteConnector from '@src/infra/connectors/sqliteConnector';
import { ReceivablesContext } from '@src/infra/contexts/receivablesContext';
import ReceivablesRepository from '@src/infra/repository/receivablesRepository';

@Module({
  imports: [],
  controllers: [IntegrationController],
  providers: [
    IntegrationService,
    SqliteConnector,
    ReceivablesContext,
    ReceivablesRepository,
  ],
})
export class AppModule {}
