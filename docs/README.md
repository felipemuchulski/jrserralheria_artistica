# JR Serralheria Artística - Documentação

### 1. Visão geral

Este projeto consiste no desenvolvimento de uma landing page instituicional para a JR Serralheria Artística, com foco na apresentação dos serviços e no portfólio de projetos realizados pela empresa.

A aplicação será desenvolvida utilizando React, TypeScript, Vite e Tailwind CSS.

O projeto adotará uma arquitetur front-end baseada em componentes reutilizáveis e princípios de desenvolvimento mobile-first.

### 2. Objetivos

- Apresentar a identidade e os trabalhos da JR Serralheria Artística.
- Disponibilizar uma galeria de projetos organizada por categorias.
- Destacar projetos selecionados na página principal.
- Facilitar o contato comercial por meio de WhatsApp e Instagram.
- Garantir uma experiência responsiva, acessível e visualmente consistente.
- Manter uma estrutura de código simples, documentada e de fácil manutenção.

### 3. Identidade visual

A identidade visual adotará o conceito Indusrial Elegante, utilizando fundos claros, tipografia moderna e detalhes em tons metálicos.

**Cores principais:**

Token               Cor
Background          #F7F5F0
Primary             #24282C
Accent              #B77945
Surface             #FFFFFF
Muted               #62686B
Border              #E5E2DC

A definição técnica dos estilos fica em src/styles/theme.css

As regras completas de estilizaçõ estão disponíveis em docs/design-system.md

### 4. Estrutura de landing page

A interface será composta pelas seguintes seções:

1. Header - Navegação principal.
2. HeroSection - Apresentação da marca e slideshow de projetos.
3. FeaturedProjects - Projetos em destaque.
4. PortfolioSection - Galeria completa com filtros.
5. AboutSection - Apresentação da empresa.
6. ContractSection - Contato comercial e orçamento.
7. Footer - Informações e links complementares.

### 5. Tecnologias
- React - Construção da interface
- TypeScript - Tipagem e organização do código.
- Vite - Ambiente de desenvolvimento e build.
- Tailwind CSS v4 - Estilização e responsividade

Bibliotecas adicionais serão avaliadas conforme a necessidade de cada componente.

### 6. Padrões do projeto

- Desenvolvimento mobile-first;
- Componentização e reutilização;
- Cores e fontes centralizadas no Design System.
- Tipagem explícita para estruturas de dados.
- Uso de HTML semântico.
- Acessibilidade para navegação por teclado.
- Otimização de imagens e carregamento. 
- Animações discretas e não obrigatórias para uso de página.

### 7. Organização da documentação

- README.md - Visão geral do projeto
- desing-system.md - Regras visuais e de responsividade.
- architecture.md - Organização de componentes e arquivos.

### Publicação 

A aplciação será preprada para hospedagem na Vercel, com versionamento do código no Github

O projeto não necessita de back-end na versão inicial.
