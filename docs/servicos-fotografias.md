# Integração de fotografias e serviços — JR Serralheria Artística

Data: 13/11/2026. Implementação local, sem instalação de dependências, substituição de arquivos, alteração dos links comerciais, commit ou push.

## 1. Componentes e dados criados

- `src/data/services.ts`: interface `Service`, união `ServiceCategory` e cadastro dos quatro serviços solicitados. Cada registro contém id, title, description, image, alt e category. Os dados são independentes de `Project` e de `projects.ts`; Coberturas é uma categoria genérica de serviço, sem alterar a categoria de policarbonato do portfólio.
- `src/components/sections/ServicesSection/ServicesSection.tsx`: seção com título, apresentação, aviso explícito sobre fotografias de referência e quatro cards. Os cards usam article, figure, figcaption, heading e link de orçamento para `#contato`, com nome acessível específico por serviço.

## 2. Componentes modificados e documentação

- `src/App.tsx`: importação e inclusão de ServicesSection entre FeaturedProjects e PortfolioSection. A composição existente de AboutSection, ContactSection e Footer foi preservada.
- `docs/README.md`: sequência das seções atualizada, distinguindo serviços ilustrativos e portfólio real.
- `docs/design-system.md`: documentadas proporções, breakpoints, legendas, tratamento de imagens e navegação dos serviços.
- `docs/servicos-fotografias.md` e `docs/servicos-resultados.json`: relatório e evidências dos testes desta etapa.

Os refinamentos anteriores já presentes no Container, Hero, destaques e portfólio atendem ao pedido e foram mantidos. Nesta etapa não foi necessário modificá-los novamente. As demais alterações locais que aparecem no Git são anteriores a esta intervenção e não foram descartadas.

Sequência final: Header → HeroSection → FeaturedProjects → ServicesSection → PortfolioSection → AboutSection → ContactSection → Footer.

## 3. Fotografias utilizadas

### Novos serviços

| Serviço | Arquivo local em `public/images/services/` | Conteúdo verificado visualmente | Identificação |
|---|---|---|---|
| Móveis artísticos | `moveis-artisticos.jpg` | Estante metálica com composição geométrica e livros | Imagem ilustrativa |
| Toldos | `toldos.jpg` | Toldo sobre um pátio com mesas e cadeiras | Imagem ilustrativa |
| Coberturas | `cobertura-translucida-ilustrativa.jpg` | Cobertura de vidro em área externa | Imagem ilustrativa · cobertura de vidro |
| Serralheria sob medida | `serralheria-portoes.jpg` | Portão metálico em entrada com arco | Imagem ilustrativa |

O aviso introdutório informa que as fotos não são obras executadas pela JR. Os textos alternativos também identificam o caráter ilustrativo. A foto de vidro não foi descrita como policarbonato nem inserida no portfólio.

`estante-decorativa.jpg` foi inspecionada, mas não foi utilizada nesta composição: há um card por serviço e foi selecionada a foto `moveis-artisticos.jpg` para móveis. O arquivo extra permanece intacto e disponível.

### Seções existentes

- **Hero:** mantidas as fotografias reais `estante-ampla-metal-madeira.webp`, `estante-vertical-metal-madeira.webp` e `prateleira-suspensa-cozinha.webp`, em `public/images/projects/moveis-artisticos/`.
- **FeaturedProjects e PortfolioSection:** mantidas as mesmas três fotos referenciadas no cadastro atual de `projects.ts`. Nenhum dado de projeto foi modificado.
- **AboutSection:** mantida a foto real `estante-ampla-metal-madeira.webp`.
- **Header, ContactSection e Footer:** continuam sem fotografias.

Nenhum script de download foi executado. Nenhum arquivo original foi sobrescrito.

## 4. Layout e performance

- Container de 1360 px, com padding horizontal de 20/32/40 px, já existente e preservado.
- Hero já usa grid desktop `0.9fr 1.1fr`, padding vertical 40/56/64 px e gap de 48 px. Foram mantidas as fotos reais por apresentarem diretamente o material da empresa; não foi necessário trocar o slideshow por imagens ilustrativas.
- Destaques e portfólio já aproveitam a área útil ampliada e mantêm ProjectCard, filtros e modal.
- Serviços com fundo Surface, seção alinhada ao mesmo Container, padding vertical de 64 px no mobile e 80 px no desktop.
- Grid de uma coluna abaixo de 768 px, duas de 768 a 1279 px e quatro a partir de 1280 px. A escolha mantém legibilidade em desktops de 1024 px, em vez de forçar quatro cards estreitos.
- Fotografias em área 4:5, `object-cover`, sem esticar a proporção. O recorte do portão privilegia a parte inferior da foto para mostrar a estrutura; o recorte da cobertura foi inspecionado para manter o vidro reconhecível.
- Legendas abaixo das imagens, com fundo e texto dos tokens existentes; não dependem de sobreposição sobre a fotografia para permanecer legíveis.
- Cards com alturas consistentes por linha, padding responsivo, títulos e descrições curtos e links de orçamento com altura mínima de 44 px.
- Zoom discreto de 5% em hover ou foco dentro do card somente com `motion-safe`; transições respeitam a regra global de movimento reduzido. Não foram criadas interações falsas nem adicionados tab stops a elementos estáticos.
- Imagens com `loading="lazy"` e `decoding="async"`, abaixo do Hero; aspect ratio reserva espaço antes do carregamento. Nenhuma URL externa de fotografia é usada em tempo de execução.
- Os quatro JPG somam **1.652.685 bytes, aproximadamente 1,58 MiB**, entre 309 e 515 KiB por arquivo, todos com largura de 1400 px. São maiores que as fotos WebP do portfólio. Foram mantidos os arquivos fornecidos; versões responsivas e formatos WebP/AVIF podem reduzir o custo em rede móvel em uma etapa posterior, preservando os originais.

## 5. Testes mobile-first e funcionais

### Executados

- Chromium headless já instalado, servido pelo Vite local. Nenhuma ferramenta adicional foi instalada.
- Larguras **320, 375, 425, 768, 1024, 1440 e 1920 px**, além de **1280 px** para verificar a entrada das quatro colunas. Altura de viewport de 900 px.
- **11 grupos específicos de serviços:** ordem das seções, registros tipados, categorias, exclusividade das fotos ilustrativas na seção, HTTP 200 e tipo JPEG dos quatro arquivos; oito larguras; teclado e movimento reduzido; ausência de exceções JavaScript.
- Verificados quatro cards, legendas, nomeação da cobertura como vidro, ausência de overflow horizontal e transbordamento de texto na nova seção, colunas esperadas, alinhamento ao Container de Hero/portfólio, imagens decodificadas sem distorção e links com altura mínima de 44 px.
- Navegação por teclado do link de orçamento, foco visível e destino `#contato`; com movimento reduzido, transição calculada em zero segundos e transformação inexistente.
- Capturas inspecionadas visualmente em 320, 768, 1024, 1440 e 1920 px, incluindo a seção completa nas larguras de comparação.
- **18 grupos de regressão** da página: modal nas oito larguras, menu mobile, Escape, resize, sticky, filtros e estados vazios, slideshow automático, pausa/retomada/indicadores, movimento reduzido, fontes, ARIA, links gerados, imagens, fixtures com arrays vazios, navegação circular, restauração de foco e rolagem, destaques e limpeza de intervalos em Strict Mode.
- `git diff --check`: aprovado. `git diff --exit-code -- src/data/projects.ts src/data/company.ts`: aprovado, confirmando que cadastro de projetos e links comerciais continuam sem alterações.

Evidências de execução: `docs/servicos-resultados.json`. Instrumentação temporária: `/private/tmp/jr-services-check.mjs` e `/private/tmp/jr-services-regression.mjs`. As capturas estão em `/private/tmp/jr-services-*.png`.

### Limites

Os testes usam viewports em Chromium; não equivalem a testes físicos em Android/iOS, Safari, leitor de tela ou avaliação completa WCAG. A propriedade lazy é declarada no código; não foi medido o cronograma de downloads em rede móvel. A abertura de WhatsApp/Instagram nos aplicativos externos não foi testada.

## 6. Lint e build

- `npm run lint`: aprovado, sem erros.
- `npm run build`: aprovado, incluindo a verificação TypeScript e o build Vite.
- Nenhuma dependência, fonte ou cor nova foi adicionada.

## 7. Pendências visuais e comerciais

- Revisar os enquadramentos e os novos textos de apresentação com a empresa; as fotos ilustrativas estão explicitamente separadas das obras próprias.
- Confirmar documentação de origem/licenças das fotografias fornecidas antes da publicação. O script de download local indica URLs da Pexels; esta etapa não verificou as licenças de cada fotografia.
- Considerar derivados WebP/AVIF e tamanhos responsivos para reduzir os 1,58 MiB de JPG, sem sobrescrever os originais.
- Validar em dispositivos reais, com leitor de tela e rede móvel, além dos links comerciais nos aplicativos externos.

A nova seção está integrada e validada no escopo descrito. O portfólio real permanece separado dos exemplos ilustrativos, com todas as funcionalidades existentes preservadas nos testes executados.
