# banco-web-tests

## Objetivo

Este projeto tem como objetivo demonstrar aos alunos da Mentoria 2.0 como automatizar testes de aplicações web utilizando Cypress e JavaScript. O repositório serve como material didático para mostrar boas práticas de organização, uso de comandos customizados e geração de relatórios.

## Componentes do Projeto

- **Cypress**: Framework de automação de testes end-to-end.
- **Custom Commands**: Comandos personalizados para reutilização de lógicas comuns nos testes, organizados em arquivos específicos.
- **cypress-mochawesome-reporter**: Geração de relatórios detalhados em HTML após a execução dos testes.
- **Estrutura de pastas**:
  - `cypress/e2e/`: Scripts de testes automatizados.
  - `cypress/fixtures/`: Dados de apoio para os testes.
  - `cypress/support/commands/`: Implementação dos comandos customizados.
  - `cypress/reports/html/`: Relatórios gerados após a execução dos testes.

## Pré-requisitos

- Node.js instalado
- API em execução: [banco-api](http://github.com/juliodelimas/banco-api)
- Aplicação Web em execução: [banco-web](http://github.com/juliodelimas/banco-web)

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/AndyTex2003/banco-web-tests.git
   cd banco-web-tests
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```

## Execução dos Testes

1. Certifique-se de que a API e a aplicação web estejam rodando.
2. Execute os testes com o comando:
   ```bash
   npx cypress run
   ```
3. Para gerar e visualizar o relatório HTML:
   ```bash
   npx cypress run --reporter cypress-mochawesome-reporter
   # O relatório estará em cypress/reports/html/index.html
   ```

## Estrutura dos Testes

- Os testes estão localizados em `cypress/e2e/`:
  - `login.cy.js`: Testes relacionados ao login de usuários.
  - `transferencia.cy.js`: Testes de transferência bancária.
- Dados de teste estão em `cypress/fixtures/`.

## Custom Commands

Os comandos customizados estão organizados em `cypress/support/commands/`:
- `common.js`: Comandos utilitários gerais.
- `login.js`: Comandos para automação do login.
- `transferencia.js`: Comandos para automação de transferências.

Estes comandos são importados em `cypress/support/commands.js` e facilitam a reutilização de lógicas comuns nos testes.

## Relatórios

Após a execução dos testes, um relatório detalhado em HTML é gerado na pasta `cypress/reports/html/`. Basta abrir o arquivo `index.html` para visualizar os resultados.

---

Sinta-se à vontade para contribuir ou adaptar este projeto para seus estudos e automações!# banco-web-tests

## Objetivo

Este projeto tem como objetivo demonstrar aos alunos da Mentoria 2.0 como automatizar testes de aplicações web utilizando Cypress e JavaScript. Através deste repositório, você aprenderá a estruturar projetos de automação, criar comandos customizados e gerar relatórios de execução.

## Componentes do Projeto

- **Cypress**: Framework principal de automação de testes end-to-end.
- **Custom Commands**: Organização de comandos reutilizáveis para facilitar a escrita dos testes.
- **cypress-mochawesome-reporter**: Geração de relatórios detalhados em HTML após a execução dos testes.
- **Estrutura de pastas**:
  - `cypress/e2e/`: Scripts de testes automatizados.
  - `cypress/fixtures/`: Dados de apoio para os testes.
  - `cypress/support/commands/`: Implementação dos comandos customizados.
  - `cypress/reports/html/`: Relatórios gerados após a execução dos testes.

## Pré-requisitos

- Node.js instalado
- API em execução: [banco-api](http://github.com/juliodelimas/banco-api)
- Aplicação Web em execução: [banco-web](http://github.com/juliodelimas/banco-web)

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/AndyTex2003/banco-web-tests.git
   cd banco-web-tests
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```

## Execução dos Testes

1. Certifique-se de que a API e a aplicação web estejam rodando.
2. Execute os testes com o comando:
   ```bash
   npx cypress run
   ```
3. Para gerar e visualizar o relatório HTML:
   ```bash
   npx cypress run --reporter cypress-mochawesome-reporter
   # O relatório estará em cypress/reports/html/index.html
   ```

## Estrutura dos Testes

- Os testes estão localizados em `cypress/e2e/`.
  - `login.cy.js`: Testes relacionados ao login de usuários.
  - `transferencia.cy.js`: Testes de transferência bancária.
- Dados de teste estão em `cypress/fixtures/`.

## Custom Commands

Os comandos customizados estão organizados em `cypress/support/commands/`:
- `common.js`: Comandos utilitários gerais.
- `login.js`: Comandos para automação do login.
- `transferencia.js`: Comandos para automação de transferências.

Estes comandos são importados em `cypress/support/commands.js` e facilitam a reutilização de lógicas comuns nos testes.

## Relatórios

Após a execução dos testes, um relatório detalhado em HTML é gerado na pasta `cypress/reports/html/`. Basta abrir o arquivo `index.html` para visualizar os resultados.

---

Sinta-se à vontade para contribuir ou adaptar este projeto para seus estudos e automações!