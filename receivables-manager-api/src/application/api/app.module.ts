import { Module } from '@nestjs/common';
import { IntegrationController } from '@presentation/controllers/app.integrationController';
import { IntegrationService } from '@application/services/app.integrationService';
import SqliteConnector from '@infra/connectors/sqliteConnector';
import { ReceivablesContext } from '@infra/contexts/receivablesContext';
import ReceivablesRepository from '@infra/repository/receivablesRepository';
import CreateReceivablesUseCase from '@domain/useCases/receivables/receivablesUseCase';
import { IUseCase } from '@domain/contracts/IUseCase';
import { IReceivablesRepository } from '@domain/contracts/IReceivablesRepository';

const Providers = {
  adapters: [],
  infraResources: [SqliteConnector],
  repositories: [
    ReceivablesContext,
    { provide: IReceivablesRepository, useClass: ReceivablesRepository },
  ],
  services: [IntegrationService],
  usecases: [
    {
      provide: IUseCase,
      useClass: CreateReceivablesUseCase,
    },
  ],
};

const Controllers = {
  integration: [IntegrationController],
};

@Module({
  imports: [],
  controllers: [...Controllers.integration],
  providers: [
    ...Providers.adapters,
    ...Providers.infraResources,
    ...Providers.repositories,
    ...Providers.services,
    ...Providers.usecases,
  ],
})
export class AppModule {}
