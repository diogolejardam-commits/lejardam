# LJM-SITE-012 — Otimização Controlada das Imagens e Preparação das Imagens IA

| Campo | Valor |
|-------|-------|
| **ID** | LJM-SITE-012 |
| **Projeto** | LE JARDAM MOTEL — SITE (`LJMS`) |
| **Repositório** | `/Users/diogo/Documents/GitHub/lejardam` |
| **URL produção** | https://lejardammotel.com.br/ *(inalterada nesta fase)* |
| **URL validação local** | `http://127.0.0.1:8773/` |
| **Base** | LJM-SITE-010 (homologação local) · LJM-SITE-011 (decisão SP-GEX) |
| **Data execução** | 2026-06-20 |
| **Horário conclusão** | 13:43 |
| **Modo** | Otimização local + estrutura galerias — **sem push/deploy** |
| **Status** | ⚠️ **APROVADO COM RESSALVAS** |

---

## Controle de escopo

| Regra | Status |
|-------|--------|
| Execução somente em `/Users/diogo/Documents/GitHub/lejardam` | ✅ |
| Uso da base LJM-SITE-010 | ✅ |
| Uso da decisão SP-GEX (LJM-SITE-011): 5 reais + 1 IA / categoria | ✅ |
| Máximo 6 fotos por categoria | ✅ |
| Backup pré-otimização (`_backup/LJM-SITE-012/`) | ✅ |
| Push / deploy / produção / DNS / GitHub Pages | ❌ Não executados |
| Documento LJM-SITE-012 criado | ✅ |

---

## 1. Objetivo

Preparar o acervo fotográfico final para homologação e publicação: inventariar imagens, otimizar JPGs acima de 500 KB, reduzir peso total da pasta `fotos/`, definir estrutura **6 fotos por categoria** (5 reais + 1 slot IA emocional SP-GEX), validar galerias/lightbox localmente e emitir matrizes de otimização, seleção, performance e homologação.

---

## 2. Estado atual

### Antes (LJM-SITE-010)

| Métrica | Valor |
|---------|-------|
| Arquivos JPG em `fotos/` | 31 |
| Peso total | **39,5 MB** (~40 MB) |
| Arquivos > 500 KB | **21** |
| Unsplash | **0** |
| Fotos reais | **100%** |
| Galerias no `index.html` | Luxo–Hot: 5 itens · Soft: 6 itens (todas reais) |
| Impedimento performance | Payload fotográfico excessivo |

### Depois (LJM-SITE-012)

| Métrica | Valor |
|---------|-------|
| Arquivos JPG em `fotos/` | **37** (31 reais otimizados + 6 placeholders IA + `soft-6.jpg` órfão) |
| Peso total | **8,9 MB** |
| Redução | **−77,5%** (39,5 MB → 8,9 MB) |
| Arquivos > 500 KB | **0** |
| Referências no site | **36** caminhos únicos |
| HTTP 200 local | **36/36** |
| Galerias | **6 categorias × 6 fotos** (5 reais + 1 IA cada) |

---

## 3. Inventário de imagens

### 3.1 Acervo completo em `fotos/`

| # | Arquivo | Uso no site | Papel |
|---|---------|-------------|-------|
| 1–5 | `luxo-1.jpg` … `luxo-5.jpg` | ✅ Galeria Luxo | 5 fotos reais |
| 6 | `luxo-ia.jpg` | ✅ Galeria Luxo | Slot IA (placeholder) |
| 7–11 | `luxo-especial-1.jpg` … `-5.jpg` | ✅ Galeria Luxo Especial | 5 fotos reais |
| 12 | `luxo-especial-ia.jpg` | ✅ Galeria Luxo Especial | Slot IA |
| 13–17 | `gran-luxo-1.jpg` … `-5.jpg` | ✅ Galeria Gran Luxo | 5 fotos reais |
| 18 | `gran-luxo-ia.jpg` | ✅ Galeria Gran Luxo | Slot IA |
| 19–23 | `master-luxo-1.jpg` … `-5.jpg` | ✅ Galeria Master Luxo | 5 fotos reais |
| 24 | `master-luxo-ia.jpg` | ✅ Galeria Master Luxo | Slot IA |
| 25–29 | `hot-1.jpg` … `hot-5.jpg` | ✅ Galeria Hot | 5 fotos reais |
| 30 | `hot-ia.jpg` | ✅ Galeria Hot | Slot IA |
| 31–35 | `soft-1.jpg` … `soft-5.jpg` | ✅ Galeria Soft | 5 fotos reais |
| 36 | `soft-ia.jpg` | ✅ Galeria Soft | Slot IA |
| 37 | `soft-6.jpg` | ⚠️ Não referenciado | Reserva acervo (substituída por slot IA) |

### 3.2 Origem das fotos reais (LJM-SITE-008B / 009)

| Categoria | Capa (`*-1`) | Fotos 2–5 |
|-----------|--------------|-----------|
| Luxo | IMG_1881 | IMG_1882, 1880, 1901, 1900 |
| Luxo Especial | IMG_1166 | IMG_1175, F47B29C7, 1174, 1165 |
| Gran Luxo | IMG_1168 | IMG_1169, 1596, 1171, 1173 |
| Master Luxo | IMG_1157 | IMG_1152, 1154, 1153, 1158 |
| Hot | IMG_1151 | WA0016, WA0018, WA0020, WA0022 *(2016, baixa res.)* |
| Soft | Acervo local | soft-1 … soft-5 *(soft-6 removida da galeria)* |

---

## 4. Imagens otimizadas

### 4.1 Matriz de Otimização

**Parâmetros:** `sips -Z 1600` (máx. 1600 px) · JPEG quality 82 · passagem extra 78/1400 px em `luxo-especial-3.jpg` · arquivos ≤ 200 KB mantidos sem resize.

| Arquivo | Antes (KB) | Depois (KB) | Redução | >500 KB antes |
|---------|------------|-------------|---------|---------------|
| gran-luxo-1.jpg | 2 033 | 398 | 80% | ✅ |
| gran-luxo-2.jpg | 2 183 | 443 | 79% | ✅ |
| gran-luxo-3.jpg | 2 175 | 425 | 80% | ✅ |
| gran-luxo-4.jpg | 2 380 | 491 | 79% | ✅ |
| gran-luxo-5.jpg | 2 625 | 499 | 80% | ✅ |
| hot-1.jpg | 1 729 | 354 | 79% | ✅ |
| hot-2.jpg | 84 | 84 | 0% | — |
| hot-3.jpg | 86 | 86 | 0% | — |
| hot-4.jpg | 114 | 114 | 0% | — |
| hot-5.jpg | 130 | 130 | 0% | — |
| luxo-1.jpg | 612 | 157 | 74% | ✅ |
| luxo-2.jpg | 623 | 163 | 73% | ✅ |
| luxo-3.jpg | 684 | 188 | 72% | ✅ |
| luxo-4.jpg | 1 179 | 273 | 76% | ✅ |
| luxo-5.jpg | 1 223 | 300 | 75% | ✅ |
| luxo-especial-1.jpg | 1 981 | 352 | 82% | ✅ |
| luxo-especial-2.jpg | 2 006 | 347 | 82% | ✅ |
| luxo-especial-3.jpg | 2 394 | 473 | 80% | ✅ |
| luxo-especial-4.jpg | 2 254 | 413 | 81% | ✅ |
| luxo-especial-5.jpg | 2 473 | 326 | 86% | ✅ |
| master-luxo-1.jpg | 1 823 | 314 | 82% | ✅ |
| master-luxo-2.jpg | 2 021 | 347 | 82% | ✅ |
| master-luxo-3.jpg | 2 010 | 380 | 81% | ✅ |
| master-luxo-4.jpg | 2 176 | 393 | 81% | ✅ |
| master-luxo-5.jpg | 2 417 | 340 | 85% | ✅ |
| soft-1.jpg | 179 | 179 | 0% | — |
| soft-2.jpg | 176 | 176 | 0% | — |
| soft-3.jpg | 180 | 180 | 0% | — |
| soft-4.jpg | 197 | 285 | −45% ⚠️ | — |
| soft-5.jpg | 129 | 129 | 0% | — |
| soft-6.jpg | 161 | 161 | 0% | — |

**Totais reais:** 39 MB → **8 MB** · **21 → 0** arquivos acima de 500 KB.

**Backup:** `_backup/LJM-SITE-012/fotos-original/` (31 arquivos originais intactos).

**Ressalva:** `soft-4.jpg` aumentou levemente (197 → 285 KB) por recompressão JPEG em arquivo já pequeno; permanece abaixo de 500 KB.

---

## 5. Seleção final por categoria

### 5.1 Matriz de Seleção Final

Padrão SP-GEX aprovado (LJM-SITE-011): **Foto 1 = capa real · Fotos 2–5 = reais · Foto 6 = IA emocional**.

| Categoria | Foto 1 (capa) | Foto 2 | Foto 3 | Foto 4 | Foto 5 | Foto 6 (IA) |
|-----------|---------------|--------|--------|--------|--------|-------------|
| **Luxo** | luxo-1.jpg | luxo-2.jpg | luxo-3.jpg | luxo-4.jpg | luxo-5.jpg | luxo-ia.jpg |
| **Luxo Especial** | luxo-especial-1.jpg | luxo-especial-2.jpg | luxo-especial-3.jpg | luxo-especial-4.jpg | luxo-especial-5.jpg | luxo-especial-ia.jpg |
| **Gran Luxo** | gran-luxo-1.jpg | gran-luxo-2.jpg | gran-luxo-3.jpg | gran-luxo-4.jpg | gran-luxo-5.jpg | gran-luxo-ia.jpg |
| **Master Luxo** | master-luxo-1.jpg | master-luxo-2.jpg | master-luxo-3.jpg | master-luxo-4.jpg | master-luxo-5.jpg | master-luxo-ia.jpg |
| **Hot** | hot-1.jpg | hot-2.jpg | hot-3.jpg | hot-4.jpg | hot-5.jpg | hot-ia.jpg |
| **Soft** | soft-1.jpg | soft-2.jpg | soft-3.jpg | soft-4.jpg | soft-5.jpg | soft-ia.jpg |

**Alteração Soft:** `soft-6.jpg` removida da galeria (permanece no disco como reserva); slot 6 reservado para IA conforme SP-GEX.

**Implementação:** `index.html` — array `CATEGORIAS[]` atualizado (comentário LJM-SITE-012); botão galeria exibe **「6 fotos」** por categoria.

---

## 6. Estratégia IA

### 6.1 Matriz de Fotos IA

| Categoria | Arquivo reservado | Status | Dimensões | Peso | Legenda lightbox |
|-----------|-------------------|--------|-----------|------|------------------|
| Luxo | `fotos/luxo-ia.jpg` | 🟡 Placeholder | 1200×800 | 15 KB | Ambientação emocional — IA (reservado SP-GEX) |
| Luxo Especial | `fotos/luxo-especial-ia.jpg` | 🟡 Placeholder | 1200×800 | 15 KB | idem |
| Gran Luxo | `fotos/gran-luxo-ia.jpg` | 🟡 Placeholder | 1200×800 | 15 KB | idem |
| Master Luxo | `fotos/master-luxo-ia.jpg` | 🟡 Placeholder | 1200×800 | 15 KB | idem |
| Hot | `fotos/hot-ia.jpg` | 🟡 Placeholder | 1200×800 | 15 KB | idem |
| Soft | `fotos/soft-ia.jpg` | 🟡 Placeholder | 1200×800 | 15 KB | idem |

### 6.2 Diretrizes para LJM-SITE-013+

1. Substituir cada `*-ia.jpg` por imagem emocional gerada por IA (SP-GEX), mantendo nome de arquivo ou atualizando `CATEGORIAS[]`.
2. Briefing sugerido por categoria: casal, iluminação cênica, atmosfera premium — **sem rosto identificável**, alinhado à identidade Le Jardam.
3. Target pós-IA: ≤ 400 KB por imagem IA · max 1600 px · JPEG quality 82.
4. Placeholders atuais: fundo verde escuro (#1A2E24) — visíveis no lightbox até troca final.

---

## 7. Performance

### 7.1 Matriz de Performance

| Indicador | LJM-SITE-010 | LJM-SITE-012 | Δ |
|-----------|--------------|--------------|---|
| Peso `fotos/` | 39,5 MB | **8,9 MB** | **−77,5%** |
| Maior arquivo | ~2,7 MB | **499 KB** | ✅ |
| Arquivos > 500 KB | 21 | **0** | ✅ |
| Referências site | 31 | 36 | +5 slots IA |
| HTTP 200 imagens | 31/31 | **36/36** | ✅ |
| Unsplash | 0 | 0 | ✅ |
| Lazy load lightbox | Sim | Sim | — |
| Capas card (background-image) | 6 | 6 | — |

### 7.2 Estimativa de carga por sessão típica

| Cenário | Antes | Depois |
|---------|-------|--------|
| Capas 6 categorias (visíveis) | ~3,5 MB | ~1,8 MB |
| Galeria completa 1 categoria (6 fotos) | ~8–12 MB | ~1,5–2,5 MB |
| Galeria Hot (5 fotos pequenas + IA) | ~2,2 MB | ~0,7 MB |

**Conclusão performance:** impedimento **alto** de LJM-SITE-010 **resolvido localmente**. Produção permanece na versão anterior até deploy autorizado.

---

## 8. Mobile

| Verificação | Resultado |
|-------------|-----------|
| `<meta viewport>` presente | ✅ |
| CSS responsivo (`@media`) | ✅ |
| Cards categorias empilham | ✅ |
| Botão 「6 fotos」 tocável | ✅ |
| Lightbox fullscreen mobile | ✅ |
| Navegação swipe/teclas lightbox | ✅ |
| Imagens otimizadas reduzem LCP mobile | ✅ Melhorado |

**Ressalva:** Hot fotos 2–5 permanecem baixa resolução (~1000 px origem WhatsApp 2016) — visível em mobile ampliado.

---

## 9. Desktop

| Verificação | Resultado |
|-------------|-----------|
| Grid 6 categorias | ✅ |
| Capas `background-image` carregam | ✅ 6/6 |
| Lightbox abre/fecha (ESC, overlay, botões) | ✅ |
| Contador 「N / 6」 | ✅ |
| Thumbnails lightbox | ✅ 6 por categoria |
| Placeholder IA visível (fundo escuro) | ✅ |
| WhatsApp CTA por categoria | ✅ |

---

## 10. Checklist de homologação

### 10.1 Validações obrigatórias

| # | Item | Status |
|---|------|--------|
| 1 | Confirmar uso da LJM-SITE-010 | ✅ Base auditada |
| 2 | Confirmar decisão SP-GEX LJM-SITE-011 (5+1) | ✅ Estrutura aplicada |
| 3 | Máximo 6 fotos por categoria | ✅ |
| 4 | 5 fotos reais por categoria | ✅ |
| 5 | Espaço reservado foto IA | ✅ 6 placeholders |
| 6 | Redução de peso das imagens | ✅ −77,5% |
| 7 | Nenhuma imagem quebrada | ✅ 36/36 HTTP 200 |
| 8 | Nenhum push realizado | ✅ |
| 9 | Nenhum deploy realizado | ✅ |
| 10 | Produção inalterada | ✅ |
| 11 | Documento LJM-SITE-012 criado | ✅ |

### 10.2 Checklist funcional

| # | Teste | Resultado |
|---|-------|-----------|
| 1 | Inventário completo | ✅ |
| 2 | Otimização JPG | ✅ |
| 3 | Galerias 6×6 categorias | ✅ |
| 4 | Lightbox Luxo (6 fotos) | ✅ |
| 5 | Lightbox Soft (5 reais + IA) | ✅ |
| 6 | `index.html` HTTP 200 | ✅ |
| 7 | Backup original preservado | ✅ |
| 8 | Imagens IA finais geradas | ⏳ Pendente fase IA |
| 9 | Hot galeria alta resolução | ⏳ Pendente acervo |
| 10 | Commit/push/deploy | ⏳ LJM-SITE-013 |

---

## 11. Resultado final

### Parecer

| Critério | Avaliação |
|----------|-----------|
| Imagens otimizadas | ✅ Aprovado |
| Estrutura final 6 fotos/categoria | ✅ Aprovado |
| Performance melhorada | ✅ Aprovado (−77,5%) |
| Galerias validadas localmente | ✅ Aprovado |
| Placeholders IA (não finais) | ⚠️ Ressalva |
| Hot fotos 2–5 baixa res. | ⚠️ Ressalva herdada |
| `soft-6.jpg` órfão no disco | ⚠️ Ressalva menor |

### Status final

## ⚠️ APROVADO COM RESSALVAS

**Motivo:** Estrutura SP-GEX implementada, performance resolvida, galerias e lightbox validados localmente. Ressalvas: imagens IA ainda são placeholders; galeria Hot com fotos 2016; `soft-6.jpg` fora da galeria mas no acervo.

**Arquivos alterados nesta fase:**

- `fotos/*.jpg` — 31 otimizados + 6 placeholders IA criados
- `index.html` — galerias atualizadas para 6 itens (5 reais + 1 IA)
- `_backup/LJM-SITE-012/fotos-original/` — backup completo
- `LJM-SITE-012_OTIMIZACAO_IMAGENS_PREPARACAO_IA.md` — este documento

---

## 12. Próxima fase

**LJM-SITE-013 — Homologação Final Geral para Publicação do Site Le Jardam Motel**

Entregáveis esperados:

1. Homologação cruzada desktop + mobile + lightbox pós-IA (quando disponível).
2. Decisão sobre deploy condicionado (commit + push + GitHub Pages).
3. Resolução pendências SEO de LJM-SITE-010.
4. Substituição placeholders `*-ia.jpg` ou aprovação explícita para publicar com placeholders temporários.

---

*Gerado em 2026-06-20 13:43 · Repositório local only · Sem push · Sem deploy · Produção inalterada*
