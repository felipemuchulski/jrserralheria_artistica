# Arquitetura Front-end — JR Serralheria Artística

## 1. Organização

A aplicação será uma SPA (Single Page Application), desenvolvida com React e TypeScript.

Não haverá back-end na primeira versão. As informações dos projetos serão mantidas em arquivos tipados no front-end.

## 2. Componentes

### layout/

Componentes estruturais compartilhados, como Header e Footer.

### sections/

Componentes que representam seções completas da landing page, como HeroSection, FeaturedProjects e PortfolioSection.

### ui/

Componentes reutilizáveis, independentes de uma seção específica, como Button, Container, ProjectCard e SectionHeading.

### data/

Informações utilizadas para renderizar o portfólio, incluindo projetos, categorias, descrições e caminhos de imagens.

### types/

Contratos TypeScript utilizados pelos dados e componentes.

### styles/

Arquivos responsáveis pelos tokens de design e pelas regras globais de CSS.

## 3. Convenções

- Componentes React: PascalCase.
- Variáveis e funções: camelCase.
- Arquivos de componentes: PascalCase.tsx.
- Arquivos de dados: camelCase.ts.
- Tipos e interfaces: PascalCase.
- Preferir exportações nomeadas para componentes reutilizáveis.
- Manter o App.tsx responsável apenas pela composição das seções.
- Não incluir lógica complexa diretamente nos componentes de apresentação.

## 4. Responsividade

Todos os componentes devem ser construídos inicialmente para telas pequenas.

Utilizar os modificadores responsivos do Tailwind para acrescentar comportamentos em telas maiores.

## 5. Fluxo de desenvolvimento

1. Identificar a responsabilidade do componente.
2. Criar a estrutura semântica em JSX.
3. Aplicar os tokens do Design System.
4. Implementar o layout mobile.
5. Adaptar o componente ao desktop.
6. Adicionar interações e animações.
7. Verificar acessibilidade, responsividade e funcionamento.
8. Executar o build e registrar as alterações no Git.