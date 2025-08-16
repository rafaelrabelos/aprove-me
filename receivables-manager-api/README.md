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