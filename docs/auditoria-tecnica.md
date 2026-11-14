# Auditoria técnica — JR Serralheria Artística

Data: 13/11/2026. Escopo: componentes existentes, React, TypeScript, Vite, Tailwind CSS v4, integração, acessibilidade e mobile-first.

## A. Resumo executivo

A arquitetura atual é adequada para uma landing page SPA: dados tipados separados da apresentação, componentes de UI reutilizáveis, seções bem delimitadas e estado de seleção do projeto no portfólio. Não foi necessário adicionar abstrações, dependências, rotas ou módulos comerciais.

A investigação encontrou falhas reais no link comercial, no Button, na identificação acessível do Hero, na semântica dos cards, no contraste e na preparação do HTML. O ciclo de limpeza do diálogo também precisava distinguir um fechamento real da reabertura do Strict Mode. As correções foram aplicadas preservando as fotografias, o número comercial, a composição visual e as alterações locais anteriores do usuário.

Build e lint passaram antes e depois da intervenção. Os testes de navegador descritos abaixo validaram as correções. Não há impedimento técnico identificado para começar AboutSection, ContactSection e Footer. A página ainda não está pronta para publicação, principalmente pelas seções ausentes e pelas verificações comerciais finais.

## B. Problemas encontrados

Não foram identificados problemas de severidade crítica no escopo inspecionado.

| Severidade | Arquivo(s) | Causa e impacto | Correção aplicada |
|---|---|---|---|
| Alta | `src/data/company.ts` | A URL começava com `ttps://wa.me/`, quebrando o canal comercial. | Corrigido para `https://wa.me/`. Mantidos número `5554992707452` e codificação da mensagem com `encodeURIComponent`. |
| Alta | `src/components/ui/ProjectModal/ProjectModal.tsx` | O cleanup executava `dialog.close()`, que enfileira um evento `close`; no Strict Mode o diálogo pode já estar reaberto quando esse evento chega. O callback poderia remover o modal recém-aberto. | O evento chama `onClose` somente se o diálogo continuar fechado. Abertura protegida com `dialog.open`, restauração explícita do foco e da rolagem e proteção de índices/modulo para arrays vazios. |
| Média | `src/components/ui/Button/Button.tsx` | `variant` era repassada ao HTML; a prop `href` opcional na variante de link enfraquecia a distinção dos elementos. | Removidas props de apresentação antes do spread e exigido `href` no tipo de link. Props nativas e eventos continuam disponíveis. |
| Média | `src/components/ui/Button/Button.tsx` | `border-primary` só definia cor, sem espessura; `focus-visible: outline-accent` estava separado incorretamente; faltava estado visual disabled. O texto de 14 px divergia dos 16 px documentados para botões. | Adicionados `border`, utilitário correto de foco, aparência disabled e texto de 16 px. Links `_blank` recebem `noopener noreferrer`, sem duplicar valores já informados. |
| Média | `src/components/sections/HeroSection/HeroSection.tsx` | `aria-labelledby="herro-title"` apontava para ID inexistente; o botão de contato não tinha destino nem handler. | Corrigido para `hero-title` e ligado o contato ao WhatsApp. Espaçamento mobile alinhado aos 64 px documentados; botões podem quebrar linha em larguras intermediárias. |
| Média | `src/components/ui/ProjectCard/ProjectCard.tsx` | O card clicável colocava `div`, `h3` e `p` dentro de `button`, cujo conteúdo deve ser de fraseado. | Conteúdo mantido em `article`; um botão sobreposto cobre o card, com nome acessível, descrição associada por `useId` e foco visível. Preservados callback, proporção, fotografia e zoom discreto. |
| Média | `src/styles/theme.css`, `src/styles/globals.css`, Header, Hero, FeaturedProjects, PortfolioSection e ProjectCard | Accent sobre branco resulta em 3,60:1; sobre Background, 3,30:1. Insuficiente para os textos pequenos existentes e para texto branco sobre o hover accent. | Mantidos os seis tokens originais. Acrescentado `accent-strong: #89552E`, com 6,17:1 sobre branco e 5,66:1 sobre Background, para texto pequeno e fundos com texto branco. Accent original preservado em detalhes e contornos. Justificativa adicionada ao Design System. |
| Média | `src/components/sections/HeroSection/HeroSlideshow.tsx` | Indicadores tinham somente 12 px de altura; o controle de reprodução não comunicava a parada por movimento reduzido. | Alvos de 44 × 44 px, estado inicial consultando a preferência, reprodução automática desabilitada e identificada quando há movimento reduzido. Indicadores e entrada de foco neles pausam a rotação; controle de reprodução permite pausa/retomada explícita. |
| Média | `src/components/layout/Header/Header.tsx` | Menu não fechava com Escape e podia reaparecer aberto após passar pelo desktop. Foco podia permanecer em navegação escondida após mudar de breakpoint. | Escape fecha e devolve foco ao acionador; mudança de breakpoint fecha o menu e transfere foco quando necessário. Menu mobile tem altura limitada e rolagem interna; orçamento fecha o menu. |
| Média | `index.html` | `lang="en"` contradizia o conteúdo; faltava meta description e o título estava incompleto. | Idioma `pt-BR`, título com nome comercial e cidade e descrição factual dos serviços já informados no projeto. |
| Baixa | `src/components/sections/PortfolioSection/PortfolioSection.tsx` | Mudança nos filtros não tinha anúncio de quantidade; o contorno de foco podia ser cortado pelo contêiner com overflow. | Adicionado status acessível e folga interna para o contorno dos filtros. Estado e integração do modal já existentes foram preservados. |
| Baixa | `src/styles/globals.css` | A preferência por movimento reduzido não cobria todas as transições da interface. | Desativadas animações e transições sob essa preferência; a regra existente de rolagem sem suavização foi mantida. |
| Baixa | `src/components/ui/Container/Container.tsx` | Import de tipo `Container` de `react-dom/client` não era usado e confundia-se com o componente local. | Import removido; layout e contrato de props preservados. |
| Baixa | `docs/architetura.md`, `docs/README.md` | A documentação referenciava `architecture.md`, mas o arquivo tinha outro nome; também citava `desing-system.md` e `ContractSection`. | Arquivo de arquitetura renomeado para `docs/architecture.md`, preservando o conteúdo. Referências de Design System e ContactSection corrigidas. |

Referência de acessibilidade: [WCAG 2.2 — W3C](https://www.w3.org/TR/WCAG22/) e [controle de conteúdo automático](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide). Os testes executados não constituem certificação completa de conformidade WCAG.

### Achados sem necessidade de refatoração

- `ProjectCategory` contém exatamente as quatro categorias esperadas. `Project`, callbacks, `Record` e dados são coerentes; não há uso de `any` nos componentes auditados.
- Os três IDs de projetos atuais são únicos. Só há projetos cadastrados em móveis artísticos; estados vazios nas outras três categorias são esperados.
- `FeaturedProjects` usa corretamente `filter` e `slice(0, 3)`, omite a seção vazia e renderiza cards informativos sem `onSelect`. A abertura de detalhes está integrada no portfólio, conforme o uso atual do callback opcional.
- `Container`, `App`, `main`, configuração do Vite e imports de CSS cumprem seus papéis. O `App` compõe as seções e o `main.tsx` mantém Strict Mode.
- Os seis tokens originais, `max-w-site` de 1200 px, `rounded-card` de 12 px e `rounded-button` de 8 px estão corretos. Tailwind v4 está conectado pelo plugin do Vite e pelo import CSS.
- Inter e Manrope carregaram no navegador nos pesos efetivamente usados. Uma consulta inicial a Manrope 400, que não é usada na página, foi corrigida para Manrope 700 na instrumentação.
- `src/App.css` contém estilos antigos, mas não é importado: não produz conflito atual. Assets iniciais de React/Vite, `hero.png` e arquivos vazios preparados para componentes futuros foram preservados.
- Não há dependência adicional demonstradamente desnecessária no conjunto inspecionado. `npm ls --depth=0` terminou sem erros. Não foi feita auditoria de vulnerabilidades ou benchmark em rede móvel.

## C. Arquivos modificados

- `src/data/company.ts`: protocolo do WhatsApp.
- `src/components/ui/Container/Container.tsx`: remoção do import de tipo sem uso.
- `src/components/ui/Button/Button.tsx`: contrato de link/botão, props nativas, borda, foco, disabled, segurança de links, tamanho documentado e contraste.
- `src/components/ui/ProjectCard/ProjectCard.tsx`: semântica do card clicável, associação da descrição e contraste.
- `src/components/ui/ProjectModal/ProjectModal.tsx`: ciclo de vida do diálogo, Strict Mode, foco, rolagem, índices e largura do modal. O arquivo já estava criado localmente antes da auditoria e continua sem commit.
- `src/components/layout/Header/Header.tsx`: Escape, breakpoint, foco, limite de altura mobile, fechamento no orçamento e contraste.
- `src/components/sections/HeroSection/HeroSection.tsx`: ARIA, contato funcional, espaço mobile, quebra de linha dos botões e contraste.
- `src/components/sections/HeroSection/HeroSlideshow.tsx`: preferência de movimento, controles, alvos de toque, pausa e identificação do carrossel.
- `src/components/sections/FeaturedProjects/FeaturedProjects.tsx`: contraste dos textos e do hover do link; lógica preservada.
- `src/components/sections/PortfolioSection/PortfolioSection.tsx`: anúncio de resultados, espaço para foco dos filtros e contraste; implementação local de filtros/modal preservada.
- `src/styles/theme.css`: variante semântica de accent com contraste suficiente.
- `src/styles/globals.css`: movimento reduzido e contraste da seleção de texto.
- `index.html`: idioma, título e descrição.
- `docs/architecture.md`: renomeado de `docs/architetura.md`, sem mudança de conteúdo.
- `docs/README.md`: referências corrigidas.
- `docs/design-system.md`: justificativa e regra de uso da variante accent.
- `docs/auditoria-tecnica.md` e `docs/auditoria-browser-resultados.json`: relatório e evidências de execução.

`src/App.tsx` já continha alterações locais ao iniciar a auditoria; a integração existente do portfólio foi preservada e não foi alterada por esta intervenção. `projects.ts`, tipos, configurações, dependências e fotografias não precisaram de alteração. AboutSection, ContactSection e Footer não foram implementados. Não houve commit ou push.

## D. Validação dos componentes

| Componente | Status | Observações |
|---|---|---|
| Container | Aprovado no escopo | Largura e margens responsivas; import sem uso removido. |
| Button | Corrigido e validado | Elementos nativos, props, disabled, borda, foco e segurança de links. |
| Header | Corrigido e validado | Mobile, Escape, fechamento por link, resize e sticky testados. Âncoras futuras continuam pendentes das respectivas seções. |
| HeroSection | Corrigido e validado | Um H1, ARIA correto, fotografias existentes, CTAs com destino. |
| HeroSlideshow | Corrigido e validado | Automático, pausa direta, seleção, retomada, movimento reduzido, arrays vazio/único/reduzido e cleanup. |
| ProjectCard | Corrigido e validado | Card informativo ou clicável, callback, descrição acessível e fallback sem foto. |
| FeaturedProjects | Validado | Somente featured, até três, seção vazia omitida e grid responsivo. |
| PortfolioSection | Ajustado e validado | Todos os filtros, categorias vazias, estado, rolagem horizontal e integração com modal. |
| ProjectModal | Corrigido e validado | Diálogo nativo, Escape/botão, foco, rolagem, Strict Mode, desmontagem e galeria circular. |

## E. Resultados dos testes

### Execução real

- `npm run build`: aprovado, TypeScript e build de produção. CSS aproximadamente 21,21 kB (5,00 kB gzip) e JS aproximadamente 235,87 kB (73,19 kB gzip). Esses tamanhos não equivalem a métricas de Core Web Vitals.
- `npm run lint`: aprovado, sem erros.
- `git diff --check`: aprovado para os arquivos rastreados.
- `npm ls --depth=0`: aprovado.
- Chromium headless já instalado, controlado por CDP; aplicação servida pelo Vite em `127.0.0.1:5173`. Nenhuma biblioteca foi instalada.
- 16 grupos de verificações executáveis passaram; os resultados estão em `auditoria-browser-resultados.json`. Instrumentação desta sessão: `node /private/tmp/jr-audit-cdp.mjs` com o servidor Vite iniciado.
- Larguras 320, 375, 425, 768, 1024 e 1440 px, altura de 900 px: sem overflow horizontal do documento. Modal sem overflow horizontal e contido no viewport. Verificadas abertura em Strict Mode, foco inicial, Tab, Escape, restauração do foco e rolagem em cada largura.
- Menu mobile: abertura, Escape, fechamento ao selecionar Projetos, transição mobile–desktop–mobile e Header sticky.
- Filtros: Todos e Móveis artísticos exibem três projetos; Toldos, Policarbonato e Serralheria exibem o estado vazio. Estado pressionado e rolagem horizontal mobile verificados.
- Slideshow: passagem após cinco segundos, pausa direta, seleção de indicador, pausa persistente, retomada, imagem ativa acessível única e prioridade alta inicial. Controles medidos em 44 × 44 px. Movimento reduzido testado no carregamento e alterado em tempo real; transição calculada de zero segundos nessa preferência.
- Casos limites em fixtures temporárias no navegador, sem alterar dados do repositório: modal com zero, uma e três fotos; navegação da primeira para a última e vice-versa; desmontagem com modal aberto; slideshow vazio, único e com array reduzido; card sem foto; Button disabled e link externo; destaques com mais de três itens e lista vazia.
- Instrumentação dos intervalos: um intervalo ativo no slideshow em Strict Mode; zero após esvaziar o array ou desmontar. Não foram observadas exceções JavaScript. Isso verifica os recursos instrumentados, não prova ausência de todo tipo de vazamento de memória.
- Inter 400 e Manrope 700: carregamento confirmado com a API de fontes e estilos calculados.
- Referências `aria-labelledby` e `aria-describedby` presentes apontam para IDs existentes; ausência de atributo `variant` no HTML confirmada.
- Capturas de 320 e 1440 px inspecionadas visualmente. A navegação de teclado testada é parcial; não houve teste com leitor de tela.

### Inspeção estática e limites

- As três referências únicas de imagens usadas pelo Hero e pelos dados responderam HTTP 200 no servidor local. Os seis usos de caminhos nos dois arquivos correspondem a arquivos existentes.
- Existem 18 fotografias WebP em `public/images/projects`, somando 496.184 bytes (cerca de 485 KiB). A maior tem 65.810 bytes. Não há duplicatas por SHA-256. Nem todas as fotos estão cadastradas como projetos, o que não caracteriza arquivo ausente.
- Cards mantêm proporção 4:5 e carregamento lazy; Hero usa prioridade alta na primeira imagem. `loading="lazy"` nas imagens sobrepostas restantes é apenas uma indicação: não garante que o navegador deixe de baixá-las quando estão próximas do viewport. Os arquivos atuais são pequenos; não foi necessário substituir ou recomprimir fotos.
- Os textos alternativos descrevem os projetos conforme os dados existentes; não foi verificada a autoria comercial de cada fotografia. Nenhuma imagem foi substituída.
- URL de WhatsApp e mensagem com acentos, espaços, `&` e `?` foram geradas e verificadas por código. Número tem código de país 55, DDD 54 e nove dígitos locais. O Instagram possui estrutura HTTPS válida. Abertura no aplicativo, titularidade dos perfis e recebimento de mensagens não foram testados.
- Testes de viewport em Chromium não substituem Safari/iOS, Android real, orientação horizontal, zoom alto, leitor de tela, condições de rede lenta ou auditoria completa WCAG.
- O HTML tem `pt-BR`, título, descrição, um H1 e headings de seções/cards. Não foi observada diretiva explícita de bloqueio de indexação nos arquivos inspecionados. A indexação e a configuração do ambiente publicado não foram testadas.

## F. Pendências

### 1. Antes de continuar

Nenhum bloqueio técnico identificado para iniciar os próximos componentes. Os problemas de funcionamento encontrados dentro do escopo foram corrigidos.

### 2. Melhorias que podem aguardar

- Remover, em uma limpeza separada, CSS e assets do template que não são usados; atualizar o README raiz, ainda baseado no template.
- Rever medidas tipográficas específicas dos títulos de seção e cards com o Design System quando o conteúdo final estiver pronto. Não foi alterada arbitrariamente a composição tipográfica existente.
- Avaliar se os cards de destaque também devem abrir detalhes; hoje são informativos e o portfólio oferece essa interação.
- Enriquecer descrições e textos alternativos após confirmar detalhes e autoria de cada trabalho com a empresa.

### 3. Antes da publicação

- Implementar AboutSection, ContactSection e Footer; os links `#sobre` e `#contato` do Header ainda não encontram seções. Não foram criadas seções fictícias para ocultar essa pendência.
- Confirmar o funcionamento do número comercial e do Instagram em dispositivos reais, sem mudar o número sem confirmação.
- Confirmar autorização e identificação das fotografias como projetos executados pela empresa; completar o cadastro das categorias conforme material aprovado.
- Substituir o favicon do template pela identidade aprovada. Não foi inventado logotipo nesta auditoria.
- Testar em Safari/iOS e Android, com toque, zoom, leitor de tela e navegação por teclado mais ampla. Repetir as seis larguras com as seções finais.
- Validar o domínio e a hospedagem: HTTPS, base de implantação, indexação e metadados de compartilhamento. Definir canonical e demais metadados dependentes da URL final somente após conhecê-la.
- Medir desempenho em condições reais de rede e conferir a entrega das fontes na hospedagem final.

## G. Conclusão

**Sim. A arquitetura e os componentes atuais estão estáveis, dentro do escopo testado, para iniciar AboutSection, ContactSection e Footer.** Não foi identificado impedimento técnico restante para essa etapa. A aprovação para continuar o desenvolvimento não representa liberação para publicação: as pendências de conteúdo, seções futuras, dispositivos reais e serviços externos ainda precisam ser concluídas.
