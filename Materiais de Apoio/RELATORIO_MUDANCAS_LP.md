# Relatório de Mudanças — LP Gabriel Carneiro

> Documento de conferência: lista cada alteração solicitada ao longo do projeto e o que foi de fato entregue no arquivo `lp-gabriel-carneiro.html`. Organizado por rodada de pedidos, na ordem em que foram feitos. Use para bater ponto a ponto com o time antes de aprovar a publicação.
>
> Legenda: ✅ Feito · 🟡 Feito parcialmente / depende de decisão do time · ⬜ Não solicitado nesta rodada (ver observação)

---

## Rodada 1 — Ajustes de estilo, hover e formulário

| # | Solicitação | Status | O que foi feito |
|---|---|---|---|
| 1.1 | Manter fonte Archivo, mas diminuir uso de bold em títulos; destacar palavras-chave em âmbar no mesmo título | ✅ | Peso da fonte reduzido (800→500) nesta rodada; palavras-chave passaram a usar `<span class="accent">` em âmbar e negrito, em todos os H2 principais |
| 1.2 | Remover o ícone na cor verde/oliva (destoante) | ✅ | Ícone do card "Autoconhecimento" trocado de verde-oliva para âmbar-escuro |
| 1.3 | Adicionar hover effects e efeitos sutis de destaque | ✅ | Elevação e sombra em cards, zoom sutil em fotos, sublinhado/cor em links de navegação e rodapé, glow em campos de formulário no foco |
| 1.4 | Levar o formulário também para o início da página | ✅ | Formulário rápido inserido logo após o hero (`id="form"`); formulário completo mantido perto do fim (`id="form-final"`) |
| 1.5 | Todos os formulários com os campos: nome, e-mail, telefone, nome da empresa, "por que esse palestrante", botão "Contratar Gabriel Carneiro" | ✅ | Campos padronizados nos dois formulários; campos extras (sobrenome, tipo de evento, faixa de investimento) removidos para bater com a lista pedida |
| 1.6 | Menu/header em caixa alta, discreto, sem bold | ✅ | Nav em uppercase, peso leve, opacidade reduzida com hover em âmbar *(nota: na Rodada 4 o header foi redesenhado — ver seção correspondente)* |
| 1.7 | Remover "• Palestrantes" ao lado do logo no header | ✅ | Removido do header nesta rodada; o mesmo texto ainda existia no rodapé — removido depois, na Rodada 3 |

---

## Rodada 2 — Atualização de imagens

| # | Solicitação | Status | O que foi feito |
|---|---|---|---|
| 2.1 | Atualizar as imagens da página com as fotos da pasta `Fotos - Gabriel Carneiro` | ✅ | As imagens embutidas anteriormente **não eram** as fotos oficiais (eram versões de baixa qualidade herdadas de uma sessão anterior, uma com marca d'água de rede social). Foram substituídas pelas 3 fotos reais: `foto-hero.jpg` (hero), `o-profissional.jpg` (seção "O palestrante", reaproveitada também no bloco de citação da época), `foto-cta.jpg` (CTA final) — conferido por checksum (MD5) byte a byte |

---

## Rodada 3 — Reestruturação de conteúdo, correções e 1ª nova identidade visual

| # | Solicitação | Status | O que foi feito |
|---|---|---|---|
| 3.1 | Remover o logo da Polo do header e inserir o nome "GABRIEL CARNEIRO" | ✅ | Header passou a exibir o wordmark "GABRIEL CARNEIRO"; logo da Polo mantido só no rodapé (assinatura, conforme regra de "Exclusivo Polo") |
| 3.2 | Remodelar o hero para mais impacto ("soco") | ✅ | H1 ampliado, kicker com a frase-manifesto do Instituto adicionada acima do título, tratamento visual reforçado |
| 3.3 | Remover "PALESTRANTES" repetido do eyebrow, deixar só "PALESTRANTE EXCLUSIVO POLO" | ✅ | Corrigido no selo do hero |
| 3.4 | Trocar "PARA QUEM É" por "TEMAS ABORDADOS" com palavras-chave dos assuntos do Gabriel | ✅ | Chips trocados por: Autorresponsabilidade, Alta performance, Tomada de decisão, Autoconhecimento prático, Protagonismo, Gestão de conflitos, Propósito, Decisão sob pressão |
| 3.5 | Corrigir: autor de 5 livros; best-seller "O Encantador de Pessoas" com +150 mil cópias vendidas; incluir bullets PUCRS / COMUNICAÇÃO / NEUROCIÊNCIA | ✅ | Bio e lista de credenciais corrigidas na seção "O palestrante"; tags `/ PUCRS /COMUNICAÇÃO /NEUROCIÊNCIA` adicionadas |
| 3.6 | Usar os Pilares de Entrega do Media Kit e replicar na LP | ✅ | Nova seção "Pilares da Entrega" criada com os 5 pilares oficiais do material |
| 3.7 | Remover a foto das provas sociais; usar os depoimentos exatamente como no material | ✅ | Card de citação com foto removido; os 4 depoimentos reais do Media Kit (nome + empresa) passaram a ser exibidos como texto puro |
| 3.8 | Remover a seção "Como a Polo conduz a contratação" | ✅ | Seção removida por completo (contradizia a regra de "Exclusivo Polo": contratação sem intermediário) |
| 3.9 | Remover "• Palestrantes" ao lado do logo no rodapé | ✅ | Removido |
| 3.10 | Seguir a estrutura de página da jornada de leitura revisada (Hero → Problema → Resultado mostrado → Autoridade → Cenário depois → Prova social → FAQ → Footer) | ✅ | Página reordenada nessa sequência; seções "O problema", "O método no palco" (resultado mostrado) e "Depois da palestra" (cenário depois) criadas do zero |
| 3.11 | Incluir elementos de "montanha"/"subida ao topo"; reimaginar identidade visual se necessário | 🟡 | Implementado nesta rodada (silhueta de montanha no hero, ícone de bússola, paleta azul/petróleo) — **porém revertido na Rodada 4** a pedido do cliente (ver abaixo). Registrado aqui só para manter o histórico completo |
| 3.12 | Considerar a nova paleta de cores oficial | ✅ | Paleta de `PALETA DE CORES GABRIEL CARNEIRO.pdf` (sand/âmbar/navy/sky/ice) incorporada — segue em uso até a versão atual |
| 3.13 | Usar a referência de página (montanha/topo/bússola, tresmarescapital.com) como estrutura visual | 🟡 | Aplicado nesta rodada; **substituído na Rodada 4** por uma referência diferente, fornecida pelo próprio cliente (`ref lp lawyer.jpg`) |
| 3.14 | Incluir logos de empresas contratantes na prova social | ✅ | 10 logos reais (TIM, Sicredi, Vivo, Bosch, Unimed, Marcopolo, Itaú, Havan, Nestlé, SLC Agrícola) aplicados. Corrigido também um bug nos arquivos de origem: 4 logos (Sicredi, Itaú, Marcopolo, SLC) não tinham atributo `viewBox` e apareciam cortados/invisíveis — corrigido antes de embutir |
| 3.15 | Manter todos os pontos de contato da Polo; não usar/reproduzir os meios de contato do Instituto | ✅ | Contatos do Instituto (Instagram, telefone pessoal do Gabriel) nunca foram usados; rodapé manteve só os canais institucionais da Polo já existentes |

---

## Rodada 4 — Curadoria de mídia + refinamento visual (identidade atual)

| # | Solicitação | Status | O que foi feito |
|---|---|---|---|
| 4.1 | Fazer a curadoria da pasta de fotos e vídeos | ✅ | 103 fotos avaliadas e organizadas em subpastas (`_Selecionadas_Palco_Evento`: 47, `_Selecionadas_Perfil_Autoridade`: 19, `_Selecionadas_Expedicao_Natureza`: 9, `_Duplicatas`: 19, `_Descartar_Casual_Pessoal`: 6, `_Descartar_Qualidade`: 3). 16 vídeos catalogados por nome/tamanho/data (conteúdo não analisado — sem ferramenta de vídeo no ambiente). Relatório completo em `CURADORIA_FOTOS_VIDEOS.md` |
| 4.2 | Atualizar o markdown de contexto do projeto | ✅ | `CONTEXTO_PROJETO_GABRIEL_CARNEIRO.md` reescrito: histórico de decisões, sistema de design atual, pendências reais, inventário de assets |
| 4.3 | Sair do estado minimalista; trazer mais profissionalismo, acabamento, refinamento, autoridade | ✅ | Identidade visual totalmente refeita: fundo navy quase-preto em seções "ilha" arredondadas alternando com seções claras, tipografia voltou a ser bold (800), botões de duas partes (pílula + ícone circular), badges em pílula, fileira de estatísticas no hero |
| 4.4 | Remover os elementos de montanha (hero) e bússola ("Depois da Palestra") — falta de refinamento | ✅ | Silhueta de montanha e ícone de bússola removidos por completo; nenhum ícone genérico de "expedição" ficou na página |
| 4.5 | Preencher o lado direito vazio das seções Pilares da Entrega, Depois da Palestra e Prova Social | ✅ | Pilares da Entrega: grade de 5 cards (2 colunas + 1 linha final). Depois da Palestra: coluna direita com 3 cards de resultado (ícone de check). Prova Social: grade de logos + depoimentos preenchendo o espaço |
| 4.6 | Logos da Prova Social em cinza claro, com hover para cinza escuro | ✅ | Efeito trocado de "revelar cor original" para escala de cinza com opacidade variável (claro → escuro) |
| 4.7 | Renomear a seção "PROVA SOCIAL" para "POR ONDE JÁ PASSAMOS" | ✅ | Selo/eyebrow da seção atualizado |
| 4.8 | Depoimentos com eyebrow "O QUE DIZEM"; design mais sutil (fundo azul quebrava a página) | ✅ | Eyebrow "O QUE DIZEM" adicionada; cards trocados de bloco navy sólido para cards claros e sutis (branco, borda fina, aspas em âmbar) |
| 4.9 | Seguir totalmente o design da referência `ref lp lawyer.jpg` | ✅ | Sistema de design inteiro realinhado a essa referência: nav em pílula escura flutuante, botões de duas partes com ícone de seta, badges em pílula, fileira de estatísticas, cards com tag + botão circular, seções "ilha" escuras alternando com seções claras |

---

## Observações finais

- Este relatório cobre **o que foi pedido e entregue neste projeto**. Para a lista de **pendências em aberto** (itens que dependem de decisão do time ou de material que ainda não existe — ex.: SLA de resposta comercial, domínio/CRM definitivo, revisão manual dos vídeos brutos, validação das sinopses das palestras com o próprio Gabriel), ver a seção 8 do `CONTEXTO_PROJETO_GABRIEL_CARNEIRO.md`.
- Os itens marcados 🟡 na Rodada 3 (motivo de montanha/bússola e a referência tresmarescapital.com) foram implementados fielmente quando pedidos, e depois **revertidos por pedido explícito do próprio cliente** na Rodada 4 — não são erros, são decisões substituídas por uma rodada de feedback posterior.
- Arquivo vivo da LP: `lp-gabriel-carneiro.html`. Backups das versões anteriores (antes de cada reformulação grande) ficam guardados fora da pasta do projeto, disponíveis sob pedido caso seja necessário comparar telas antes/depois.
