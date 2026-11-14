# Refinamento visual e responsivo — JR Serralheria Artística

Data: 13/11/2026. Referências lidas: README da documentação, Design System, arquitetura e auditoria técnica. Implementação local com apoio da skill Sites; nenhuma publicação, biblioteca adicional, commit ou push.

## A. Melhorias aplicadas

- **Container e tema:** largura externa máxima de 1360 px. Padding horizontal de 20 px no mobile, 32 px a partir de 768 px e 40 px a partir de 1024 px; área útil máxima de 1280 px. O conteúdo continua fluido e centralizado.
- **Header:** alinhamento acompanha o container ampliado, com mais espaço entre grupos no desktop. Logo à esquerda, navegação equilibrada e orçamento à direita; altura de 80 px, sticky, links e toda a lógica de menu preservados.
- **HeroSection:** padding vertical de 40/56/64 px, grid desktop de `0.9fr 1.1fr` e gap de 48 px. Título mantém os tamanhos existentes; CTAs e texto comercial preservados.
- **HeroSlideshow:** área quadrada no desktop e controles mais próximos da fotografia. Fotografias usam `object-contain`: móveis e estruturas aparecem inteiros, com enquadramento neutro quando a proporção do arquivo difere da área. Mantidas as proporções de área no mobile (4:5) e tablet (5:4). Autoplay, pausa, transição, ARIA, alvos de 44 px e preferência de movimento permanecem funcionais.
- **FeaturedProjects:** padding desktop de 80 px, menor distância entre apresentação e cards e gap desktop de 32 px. Uma, duas e três colunas nos breakpoints existentes. Fotografias crescem com o container, sem mudar o cadastro ou os conteúdos.
- **ProjectCard:** proporção 4:5 preservada, padding de 16 px no mobile e 20 px a partir do tablet. Estrutura flexível mantém alturas consistentes por linha, com distância de 8 px entre textos. Article, botão sobreposto, foco, descrição acessível e callback foram preservados.
- **PortfolioSection:** acompanha a largura maior e o gap de 32 px; padding desktop reduzido para 80 px. Mantidos filtros com rolagem própria no mobile, anúncio dos resultados, estado vazio e ProjectModal.
- **AboutSection:** fundo branco preservado, grid desktop `0.95fr 1.05fr`, gap de 48 px e texto limitado a 576 px. Fotografia completa em área quadrada no desktop e largura controlada no tablet. Especialidades em uma coluna a 320 px e duas a partir de 375 px, evitando células estreitas. Conteúdo e CTA mantidos.
- **ContactSection:** fundo grafite preservado; chamada e ações distribuídas em duas colunas no desktop. Botões alinhados à direita em uma coluna de até 384 px; empilhados e com largura disponível no mobile. Texto usa tokens existentes em vez dos valores de cor locais. Variante `inverse` resolve o conflito do botão branco com o Button primário.
- **Footer:** padding de 40/48 px e separação final menor. Colunas proporcionais à marca, navegação e contato; composição progressiva de uma para duas e três colunas. Links têm altura mínima de 32 px, melhorando a área de interação sem aumentar excessivamente o rodapé. Dados comerciais e links preservados.

O conflito do contato foi confirmado por estilo calculado antes da alteração: fundo branco e texto branco no primeiro botão. Agora o fundo é Surface e o texto Primary; no hover o fundo vira Background e o texto continua Primary. O foco da variante inverse é branco sobre o fundo grafite.

## B. Arquivos modificados

| Arquivo | Finalidade |
|---|---|
| `src/styles/theme.css` | `--container-site` de 1200 para 1360 px. |
| `src/components/ui/Container/Container.tsx` | Padding desktop de 40 px. |
| `src/components/layout/Header/Header.tsx` | Espaçamento desktop entre grupos; aproveitamento do novo container. |
| `src/components/sections/HeroSection/HeroSection.tsx` | Padding, proporção de colunas, gap e proteção de largura do texto. |
| `src/components/sections/HeroSection/HeroSlideshow.tsx` | Área quadrada desktop, fotos completas e proximidade dos controles. |
| `src/components/sections/FeaturedProjects/FeaturedProjects.tsx` | Padding, separações e gap dos cards. |
| `src/components/ui/ProjectCard/ProjectCard.tsx` | Padding responsivo, distância entre textos e altura consistente por linha. |
| `src/components/sections/PortfolioSection/PortfolioSection.tsx` | Padding da seção e gap desktop. |
| `src/components/sections/AboutSection/AboutSection.tsx` | Relação foto/texto, enquadramento, limite de leitura e especialidades. |
| `src/components/sections/ContactSection/ContactSection.tsx` | Distribuição responsiva, tokens e uso da variante inverse. |
| `src/components/ui/Button/Button.tsx` | Nova variante semântica inverse, sem mudar a lógica dos elementos. |
| `src/components/layout/Footer/Footer.tsx` | Padding, proporção de colunas e links. |
| `docs/design-system.md` | Novos valores de layout e regras de imagem e da variante inverse. |
| `docs/refinamento-visual.md` | Relatório desta intervenção. |
| `docs/refinamento-resultados.json` | Medições antes/depois e resultados executáveis. |

As implementações locais de AboutSection, ContactSection, Footer e sua composição no App já estavam presentes ao iniciar. Foram preservadas e refinadas. **`src/App.tsx` não foi alterado nesta intervenção.** Dados dos projetos, categorias, URLs, fotografias e textos comerciais permaneceram inalterados. Os seis tokens originais, accent-strong e fontes também foram preservados.

## C. Comparação antes e depois

Medições reais em Chromium, viewport de 1440 × 900 px:

| Medida | Antes | Depois |
|---|---:|---:|
| Largura externa máxima do container | 1200 px | 1360 px |
| Largura útil | 1104 px | 1280 px |
| Início do conteúdo a partir da borda esquerda | 168 px | 80 px |
| Padding vertical do Hero por lado | 112 px | 64 px |
| Altura total do Hero | 938 px | 861,6 px |
| Área reservada à fotografia principal | 520 × 650 px | 677,6 × 677,6 px |
| Largura do card em destaque | 352 px | 405,3 px |
| Padding vertical das seções por lado, desktop | 112 px | 80 px |
| Texto do botão branco de orçamento | Branco, ilegível | Grafite, legível |

A área útil aumentou cerca de **15,9%** e os cards ficaram cerca de **15,2%** mais largos, com os gaps mais generosos. A área reservada à fotografia principal é mais ampla; `object-contain` preserva a foto completa, portanto a largura do arquivo efetivamente desenhado depende de sua proporção e pode ser menor que a área reservada.

Em 1920 px, o container respeita o limite de 1360 px: a borda do conteúdo útil começa a 320 px, antes em 408 px. Margens continuam intencionais para legibilidade em monitores largos.

No mobile, as margens de 20 px, botões empilhados, coluna única dos cards e filtros roláveis foram mantidos. Em 320 px, o Hero passou de 1054 para 998 px, sem alterar a escala do título. As fotos não foram esticadas para preencher espaço. O novo enquadramento neutro evita o recorte excessivo das fotografias verticais no Hero/tablet e na apresentação institucional.

## D. Testes realizados

### Verificações executadas

- `npm run lint`: aprovado.
- `npm run build`: aprovado.
- `git diff --check`: aprovado.
- Chromium headless já disponível no ambiente, com Vite local; nenhuma biblioteca foi instalada.
- **18 grupos de regressão funcional:** layout e modal nas oito larguras, menu mobile, Escape, resize, sticky, filtros, estados vazios, slideshow automático, pausa direta, retomada, indicadores, movimento reduzido, ARIA, fontes, URLs, imagens, dados vazios e unitários, navegação circular do modal, desmontagem e restauração de foco/rolagem, destaques e limpeza de intervalos no Strict Mode. Nenhuma exceção JavaScript observada.
- **9 grupos específicos de refinamento:** oito larguras e estados hover/foco da variante inverse. Verificados ausência de overflow horizontal, ausência de transbordamento horizontal nos textos inspecionados, âncoras com destino existente, fotos carregadas com ajuste proporcional, fundos de About/Contact, cores originais, alvos dos botões de contato, empilhamento mobile e alturas dos cards por linha.
- **Larguras:** 320, 375, 425, 768, 1024, 1280, 1440 e 1920 px; altura de 900 px. Todos os grupos passaram.
- Capturas de página completa antes/depois em 320, 768, 1440 e 1920 px. Inspecionadas visualmente a composição desktop, Hero, destaques, Sobre, contato e rodapé; também capturas específicas do Hero em mobile, tablet e desktop, Sobre em 320 px e contato em 1440 px.
- Fontes Inter e Manrope carregadas; fotografias existentes responderam corretamente no servidor local. Nenhuma imagem recebeu ajuste que estique sua proporção: Hero/About usam contain e os cards mantêm cover.
- Botão inverse medido: fundo branco/texto grafite, hover Background/texto grafite e contorno de foco branco. O problema anterior de texto branco sobre branco deixou de ocorrer.

As evidências estão em `refinamento-resultados.json`. Scripts temporários da sessão: `/private/tmp/jr-refine-before.mjs`, `/private/tmp/jr-refine-after.mjs`, `/private/tmp/jr-refine-regression.mjs` e `/private/tmp/jr-refine-visual.mjs`. As capturas estão em `/private/tmp/jr-refine-before-*.png` e `/private/tmp/jr-refine-after-*.png`.

### Limitações

A validação usa emulação de viewport em Chromium; não substitui dispositivos físicos, Safari/iOS, teste com leitor de tela ou aprovação visual do cliente. Abertura de WhatsApp/Instagram nos respectivos aplicativos e envio de mensagens não foram testados. A proporção cover dos cards continua realizando o recorte visual existente, sem distorção; o arquivo completo fica disponível no modal.

## E. Pendências

- Revisar visualmente o enquadramento neutro do Hero e de Sobre com o responsável pela identidade: foi adotado para mostrar os móveis completos. O acabamento pode ser ajustado depois, sem trocar as fotos.
- Confirmar a preferência pela distribuição em duas colunas do contato no desktop; a versão implementada privilegia texto à esquerda e ações de mesma largura à direita.
- Verificar a versão final em dispositivos reais, principalmente Safari/iOS e Android, além de leitor de tela e zoom elevado.
- Permanecem as verificações comerciais e de publicação registradas na auditoria anterior. As três seções novas já estão integradas no estado atual do usuário; a antiga pendência de criá-las não descreve mais a versão presente.

Não há bloqueio funcional identificado para avaliar o refinamento. Nenhuma aprovação foi presumida para publicação ou versionamento.

## F. Conclusão

**Sim. A landing page apresenta melhor aproveitamento do espaço desktop, preservando a experiência mobile-first e as funcionalidades existentes dentro do escopo testado.** O ganho foi confirmado por medições e inspeção visual, além de build, lint e testes de interação. O layout continua baseado na estrutura e na identidade Industrial Elegante já existentes.
