# Receivables Manager API

API desenvolvida em NestJS para gerenciamento de recebíveis e cedentes, conforme desafio Bankme.

## Descrição

Esta API permite cadastrar, consultar, editar e excluir recebíveis e cedentes, além de autenticação via JWT e processamento de lotes. O projeto segue boas práticas de validação, testes, autenticação, permissões e documentação.

## Sumário

- [Descrição](#descrição)
- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Como rodar](#como-rodar)
- [Testes](#testes)
- [Endpoints](#endpoints)
- [Níveis do desafio](#níveis-do-desafio)
- [Docker](#docker)
- [Referências](#referências)
- [Estrutura de Pastas do Projeto](#estrutura-de-pastas-do-projeto)

## Requisitos

- Node.js >= 18
- npm >= 9
- [NestJS CLI](https://docs.nestjs.com/cli/overview)
- [Prisma CLI](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-cli)
- Docker (opcional)

## Instalação

```bash
npm install
```

## Como rodar

### Desenvolvimento

```bash
npm run start
```

### Watch mode

```bash
npm run start:dev
```

### Produção

```bash
npm run build
npm run start:prod
```

## Testes

### Unitários

```bash
npm run test
```

### E2E

```bash
npm run test:e2e
```

### Cobertura

```bash
npm run test:cov
```

## Endpoints

- `POST /integrations/payable` — Cadastro de recebível
- `GET /integrations/payable/:id` — Consulta de recebível
- `PUT /integrations/payable/:id` — Edição de recebível
- `DELETE /integrations/payable/:id` — Exclusão de recebível
- `POST /integrations/assignor` — Cadastro de cedente
- `GET /integrations/assignor/:id` — Consulta de cedente
- `PUT /integrations/assignor/:id` — Edição de cedente
- `DELETE /integrations/assignor/:id` — Exclusão de cedente
- `POST /integrations/auth` — Autenticação (JWT)
- `POST /integrations/payable/batch` — Processamento de lote de pagáveis

## Níveis do desafio

1. **Validação:** Validação dos campos conforme regras de negócio.
2. **Persistência:** Banco de dados SQLite via Prisma.
3. **Testes:** Testes unitários e E2E.
4. **Autenticação:** JWT nas rotas protegidas.
5. **Permissões:** Cadastro e validação de permissões no banco.
6. **Infra e Doc:** Dockerfile e docker-compose para ambiente.
7. **Lotes:** Processamento assíncrono de lotes de pagáveis.
8. **Resiliência:** Retry e fila morta para falhas em lotes.
9. **Cloud:** Pipeline de deploy em nuvem.
10. **Infra as Code:** Provisionamento via Terraform.

## Docker

Para rodar via Docker:

```bash
docker-compose up --build
```

## Referências

- [NestJS Documentation](https://docs.nestjs.com)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Desafio Bankme](../README.md)

# Estrutura de Pastas do Projeto

O projeto utiliza uma estrutura modular dentro da pasta `src`, organizada por contexto e responsabilidade. Os imports são facilitados por aliases configurados via `module-alias` e `tsconfig.json`.

## Estrutura

```
src/
├── application/   # Serviços, casos de uso e lógica de aplicação
├── domain/        # Entidades, interfaces e regras de negócio
├── infra/         # Implementações de infraestrutura (DB, providers, etc)
├── presentation/  # Controllers, DTOs e validações das rotas
├── main.ts        # Ponto de entrada da aplicação
```

## Aliases

- `@application` → src/application
- `@domain` → src/domain
- `@infra` → src/infra
- `@presentation` → src/presentation

## Exemplo de Importação

```typescript
import { AppService } from '@application/services/app.service';
```

## Benefícios

- Organização clara por contexto
- Imports mais limpos e fáceis de manter
- Facilidade para escalar