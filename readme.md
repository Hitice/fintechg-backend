# FintechG Backend

Backend modular para o app FintechG, construído com NestJS, Node.js e PostgreSQL (via TypeORM). Fornece APIs seguras para autenticação, cadastros financeiros, transações e queries de dashboard. Focado em segurança (JWT, bcrypt, rate limiting), escalabilidade e conformidade (LGPD/GDPR via consent timestamps).

## Funcionalidades Exemplificadas
- **Autenticação**: Endpoints /auth/register e /auth/login com JWT (access 15min, refresh server-side). Exemplo: Registro de user "ghost@exemplo.com" com senha hashed, gerando token válido até 2025 (refresh rotativo).
- **Cadastros**: POST /financas/contas, /clientes, /fornecedores. Exemplo: Crie uma conta "Banco Y" associada a um user, persistida no DB.
- **Transações**: POST /financas/entradas e /saidas. Exemplo: Registre entrada de R$1000 em 07/11/2025, atualizando balanços.
- **Dashboard Queries**: GET /dashboard/balanco com filtros (ano/mês). Exemplo: Retorne métricas mensais de 2025, incluindo total entradas/saídas e dados para gráficos.
- **Upload**: Integração com S3 para logos (futuro endpoint /upload).
- **Segurança**: Validação com Zod, proteção OWASP (ex.: prepared statements contra SQL injection). Exemplo: Rate limit em logins para prevenir brute force.

O backend serve dados ao frontend via REST API.

## Requisitos
- Node.js 18+
- PostgreSQL 15+ (instale com `sudo apt install postgresql`)
- NestJS CLI: `npm install -g @nestjs/cli`

## Setup e Execução
1. Clone o repo: `git clone https://github.com/Hitice/fintechg-backend.git`
2. Instale dependências: `cd fintechg-backend && npm install`
3. Configure .env: Copie .env.example e adicione DATABASE_URL=postgres://user:senha@localhost:5432/fintechg
4. Rode migrações: `npm run typeorm migration:run` (se configurado)
5. Rode localmente: `npm run start:dev` (acessa em http://localhost:3000)
6. Teste endpoints: Use Postman para /auth/login.
7. Deploy exemplo: Heroku/AWS (use GitHub Actions para CI/CD).

## Estrutura do Código
- `src/auth/`: AuthModule, Controller, Service para JWT/bcrypt.
- `src/financas/`: Módulos para cadastros e transações.
- `src/entities/`: Entidades TypeORM (ex.: User com consentTimestamp).
- `src/shared/`: Utilitários reutilizáveis.

## Convenções
- Branches: `feature/nome-feature` (ex.: feature/auth-otp)
- Commits: Semânticos (feat:, fix:, chore:)
- Nomenclatura: kebab-case para arquivos, PascalCase para classes.

## Integrações Pendentes
- Frontend: Conecte a https://github.com/Hitice/fintechg
- Testes: Jest para units (adicionar em sprints).
- Segurança: Integre Snyk para scans.

Para issues ou contribuições, abra um PR!