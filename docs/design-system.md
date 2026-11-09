# Design System — JR Serralheria Artística

## 1. Conceito visual

O site seguirá o estilo **Industrial Elegante**, inspirado em portfólios de projetos metálicos e arquitetura contemporânea.

A principal referência de organização visual é o portfólio da K Metal Work & Design.

A interface deverá priorizar fotografias dos projetos, espaços em branco e textos objetivos.

## 2. Cores

| Token | Hexadecimal | Aplicação |
|---|---|---|
| Background | `#F7F5F0` | Fundo principal |
| Primary | `#24282C` | Títulos, botões e seções escuras |
| Accent | `#B77945` | Detalhes e elementos de destaque |
| Surface | `#FFFFFF` | Superfícies e cards |
| Muted | `#62686B` | Textos secundários |
| Border | `#E5E2DC` | Separadores e bordas |

Os tokens serão mantidos em `src/styles/theme.css`. Não duplicar suas definições em componentes individuais.

O uso da cor Accent deve ser moderado, principalmente para detalhes decorativos, indicadores e estados interativos.

## 3. Tipografia

**Fonte de títulos:** Manrope.

**Fonte de corpo:** Inter.

| Elemento | Mobile | Desktop |
|---|---|---|
| Hero H1 | 36 px | 60 px |
| Título de seção H2 | 28 px | 40 px |
| Subtítulo H3 | 22 px | 28 px |
| Texto principal | 16 px | 18 px |
| Texto auxiliar | 14 px | 14 px |
| Botões | 16 px | 16 px |

Os tamanhos poderão utilizar valores fluidos quando apropriado.

## 4. Espaçamentos

Adotar a escala padrão de espaçamentos do Tailwind CSS.

- Margens laterais: 20 px no mobile.
- Margens laterais no desktop: 48 a 64 px quando houver espaço suficiente.
- Largura máxima do conteúdo: 1200 px.
- Espaçamento entre seções: 64 px no mobile e aproximadamente 112 px no desktop.
- Espaçamento interno de cards: 16 a 24 px.
- Intervalo entre elementos: preferencialmente múltiplos de 4 px.

## 5. Layout responsivo

O desenvolvimento será iniciado pelo mobile.

Breakpoints padrão do Tailwind:

| Breakpoint | Largura mínima |
|---|---|
| Base | Sem largura mínima |
| sm | 640 px |
| md | 768 px |
| lg | 1024 px |
| xl | 1280 px |
| 2xl | 1536 px |

Utilizar os breakpoints conforme as necessidades reais do conteúdo, evitando adaptações arbitrárias.

## 6. Componentes

### Header

- Logo posicionada à esquerda.
- Navegação horizontal no desktop.
- Menu hambúrguer no mobile.
- Fundo claro e posicionamento sticky.
- Links de navegação por âncoras.

### Botões

- Variante primária: fundo Primary e texto branco.
- Variante secundária: fundo transparente e borda Primary.
- Altura mínima recomendada: 44 px.
- Estados visuais para hover, foco e desabilitado.

### ProjectCard

- Fotografia como principal elemento.
- Título curto e categoria.
- Proporções de imagem consistentes.
- Hover discreto no desktop.
- Abertura de visualização detalhada.

### Galeria

- Filtros por categorias.
- Layout mobile com duas colunas, quando a largura permitir.
- Layout desktop com três colunas.
- Fotografias com tratamento visual consistente.

## 7. Imagens

As imagens terão prioridade na apresentação do site.

Diretrizes:

- Preferir fotografias reais dos projetos da JR.
- Utilizar formatos otimizados, como WebP ou AVIF.
- Manter proporções consistentes dentro das galerias.
- Definir textos alternativos descritivos.
- Evitar imagens ilustrativas apresentadas como trabalhos realizados pela empresa.
- Não utilizar imagens de terceiros sem licença ou autorização.

## 8. Animações

As animações devem ser discretas e funcionais.

| Elemento | Animação |
|---|---|
| Hero | Entrada suave |
| Slideshow | Transição entre fotografias |
| ProjectCard | Zoom sutil na imagem |
| Seções | Revelação suave durante rolagem |
| Modal | Transição de entrada e saída |
| Menu mobile | Abertura curta e suave |

Sempre respeitar `prefers-reduced-motion`.

Animações automáticas não devem impedir a navegação ou a interação com o conteúdo.

## 9. Acessibilidade

- Utilizar elementos semânticos.
- Garantir contraste adequado entre fundo e texto.
- Exibir estados visíveis de foco.
- Permitir navegação por teclado.
- Utilizar rótulos acessíveis em botões e controles.
- Oferecer mecanismos para pausar conteúdos que se movimentam automaticamente.
- Testar a interface com diferentes tamanhos de tela e níveis de zoom.

## 10. Boas práticas

- Evitar códigos de cores diretamente nos componentes.
- Priorizar utilitários Tailwind.
- Evitar CSS global específico de componentes.
- Reutilizar componentes e tokens sempre que possível.
- Validar responsividade desde o início.
- Não adicionar dependências sem necessidade concreta.