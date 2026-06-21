# LJM-SITE-008B — Classificação das Fotos Recebidas por Categoria

| Campo | Valor |
|-------|-------|
| **ID** | LJM-SITE-008B |
| **Projeto** | LE JARDAM MOTEL — SITE (`LJMS`) |
| **Repositório (relatório)** | `/Users/diogo/Documents/GitHub/lejardam` |
| **Base** | `LJM-SITE-008A` · `LJM-SITE-007` · `LJM-SITE-008` |
| **Data** | 2026-06-20 |
| **Horário conclusão** | 13:24 |
| **Modo** | **Somente leitura** — nenhuma cópia ao repositório |
| **Status** | ⚠️ **APROVADO COM RESSALVAS** |

---

## Controle de escopo

| Regra | Status |
|-------|--------|
| Análise read-only do acervo recebido | ✅ |
| Não copiar imagens ao repositório | ✅ |
| Não editar `index.html` | ✅ |
| Commit / push / deploy | ❌ Não executados |

---

## 1. Objetivo

Analisar as **fotos reais recebidas**, classificar por categoria de suíte, selecionar capa e galeria, reprovar inadequadas e calcular cobertura — preparando **LJM-SITE-009** — **sem alterar o site nesta fase**.

---

## 2. Pasta verificada

### Pasta informada pelo Diogo

```
/Users/diogo/Documentos/le jardam motel /Fotos Suites/
```

| Resultado | Detalhe |
|-----------|---------|
| Existe? | ❌ **Não encontrada** |
| Observação | macOS usa `Documents` (não `Documentos`); caminho exato inexistente |

### Pasta efetiva localizada (acervo recebido)

```
/Users/diogo/Documents/Le Jardam Motel Site/
```

| Resultado | Detalhe |
|-----------|---------|
| Existe? | ✅ **Sim** |
| Estrutura | Subpastas por suíte (não `Fotos Suites/` aninhada) |
| Data modificação | 2026-06-20 ~13:19 |
| Interpretação | Acervo fotográfico entregue pelo Diogo — **fonte válida LJM-SITE-008B** |

### Estrutura encontrada

```
Le Jardam Motel Site/
├── Fachada/              (2 imagens)
├── Logomarca/            (vazia)
├── Suite Luxo/           (9 imagens)
├── Suite Luxo Especial/  (7 imagens)
├── Suite Gran Luxo/      (14 imagens)
├── Suite Master/         (20 imagens) → Master Luxo
├── Suite Hot/            (8 imagens)
└── Suite Soft/           (37 imagens)
```

### Referência complementar (não reclassificada)

`/Users/diogo/Desktop/Site Lejardam/Fotos Suites/` — Soft canônico (`soft-1`…`soft-6`) já integrado no repo (LJM-SITE-006).

---

## 3. Total de fotos encontradas

| Classificação | Qtd |
|---------------|-----|
| **Total analisado** | **97** |
| Aprovadas | 87 |
| Aprovadas com ressalva | *(incluídas em aprovadas)* |
| Reprovadas | **10** |
| Indefinida | 0 |

---

## 4. Classificação por categoria

| Categoria | Pasta origem | Total | Aprovadas | Reprovadas | Suficiente (≥5)? |
|-----------|--------------|-------|-----------|------------|------------------|
| **Fachada** | `Fachada/` | 2 | 2 | 0 | N/A *(institucional)* |
| **Luxo** | `Suite Luxo/` | 9 | 9 | 0 | ✅ **Sim** |
| **Luxo Especial** | `Suite Luxo Especial/` | 7 | 7 | 0 | ✅ **Sim** |
| **Gran Luxo** | `Suite Gran Luxo/` | 14 | 13 | 1 | ✅ **Sim** |
| **Master Luxo** | `Suite Master/` | 20 | 13 | 7 | ✅ **Sim** |
| **Hot** | `Suite Hot/` | 8 | 6 | 2 | ✅ **Sim** |
| **Soft** | `Suite Soft/` | 37 | 37 | 0 | ✅ **Sim** |
| **Indefinida** | — | 0 | 0 | 0 | — |

---

## 5. Fotos aprovadas

### Critérios automáticos aplicados

- Resolução lado curto ≥ 800 px
- Preferência horizontal para capa
- Duplicatas MD5/filename rejeitadas
- Screenshots rejeitados

### Resumo por categoria (pool utilizável)

| Categoria | Pool aprovado | Resolução típica | Observação |
|-----------|---------------|------------------|------------|
| Luxo | **9** | 4032×3024 JPG | Excelente |
| Luxo Especial | **7** | 4032×3024 JPG | Excelente |
| Gran Luxo | **13** | 4032×3024 JPG + PNG | PNG requer conversão |
| Master Luxo | **13** | 4032×3024 JPG + PNG | Duplicatas removidas |
| Hot | **6** | 1×4032 + 5×1000 WhatsApp 2016 | **Ressalva qualidade galeria** |
| Soft | **37** | 4032×3024 + legado JPG/PNG | Repo usa `soft-1..6` canônico |
| Fachada | **2** | 1536×1024 / 1600×900 | Uso institucional futuro |

---

## 6. Fotos reprovadas

| # | Arquivo | Categoria | Motivo |
|---|---------|-----------|--------|
| 1 | `IMG_1168 2.jpeg` | Gran Luxo | Duplicata numerada |
| 2 | `IMG_1152 2.jpeg` | Master Luxo | Duplicata numerada |
| 3 | `IMG_1154 2.jpeg` | Master Luxo | Duplicata numerada |
| 4 | `IMG_1155 2.jpeg` | Master Luxo | Duplicata numerada |
| 5 | `IMG_1155 3.jpeg` | Master Luxo | Duplicata numerada |
| 6 | `IMG_1157 2.jpeg` | Master Luxo | Duplicata numerada |
| 7 | `IMG_1158 2.jpeg` | Master Luxo | Duplicata numerada |
| 8 | `IMG_1158 3.jpeg` | Master Luxo | Duplicata numerada |
| 9 | `IMG-20160716-WA0022_Original 2.jpg` | Hot | Duplicata numerada |
| 10 | `Screenshot_20191111-202400_Keep Notes_Original.jpg` | Hot | Screenshot — não fotografia de suíte |

### Reprovações por critério qualitativo (manual recomendada LJM-SITE-009)

| Critério | Status automático |
|----------|-------------------|
| Pessoas identificáveis | ⚠️ **Inspeção visual pendente** — não detectável por script |
| Reflexos indevidos | ⚠️ Inspeção visual pendente (crítico em Hot) |
| Ambiente desorganizado | ⚠️ Inspeção visual pendente |
| Enquadramento ruim | ⚠️ Inspeção visual pendente |

---

## 7. Foto de capa sugerida por categoria

*Seleção: maior score = horizontal + resolução − peso arquivo*

| Categoria | Arquivo capa sugerido | Dimensões | Nome final sugerido |
|-----------|----------------------|-----------|---------------------|
| **Luxo** | `IMG_1881.jpeg` | 4032×3024 | `luxo-1.jpg` |
| **Luxo Especial** | `IMG_1166.jpeg` | 4032×3024 | `luxo-especial-1.jpg` |
| **Gran Luxo** | `IMG_1168.jpeg` | 4032×3024 | `gran-luxo-1.jpg` |
| **Master Luxo** | `IMG_1157.jpeg` | 4032×3024 | `master-luxo-1.jpg` |
| **Hot** | `IMG_1151.jpeg` | 4032×3024 | `hot-1.jpg` |
| **Soft** *(ref.)* | `soft-1.jpg` *(repo)* ou `IMG_3652.jpeg` *(novo acervo)* | 1536×1024 / 4032×3024 | `soft-1.jpg` *(manter canônico repo)* |

---

## 8. Galeria sugerida por categoria

### Luxo → `luxo-2.jpg` … `luxo-5.jpg`

| # | Arquivo origem | Nome final | Dimensões |
|---|----------------|------------|-----------|
| 2 | `IMG_1882.jpeg` | `luxo-2.jpg` | 4032×3024 |
| 3 | `IMG_1880.jpeg` | `luxo-3.jpg` | 4032×3024 |
| 4 | `IMG_1901.jpeg` | `luxo-4.jpg` | 4032×3024 |
| 5 | `IMG_1900.jpeg` | `luxo-5.jpg` | 4032×3024 |

### Luxo Especial → `luxo-especial-2` … `-5`

| # | Arquivo origem | Nome final |
|---|----------------|------------|
| 2 | `IMG_1175.jpeg` | `luxo-especial-2.jpg` |
| 3 | `F47B29C7-…jpg` | `luxo-especial-3.jpg` |
| 4 | `IMG_1174.jpeg` | `luxo-especial-4.jpg` |
| 5 | `IMG_1165.jpeg` | `luxo-especial-5.jpg` |

### Gran Luxo → `gran-luxo-2` … `-5`

| # | Arquivo origem | Nome final |
|---|----------------|------------|
| 2 | `IMG_1169.jpeg` | `gran-luxo-2.jpg` |
| 3 | `IMG_1596.jpeg` | `gran-luxo-3.jpg` |
| 4 | `IMG_1171.jpeg` | `gran-luxo-4.jpg` |
| 5 | `IMG_1173.jpeg` | `gran-luxo-5.jpg` |

### Master Luxo → `master-luxo-2` … `-5`

| # | Arquivo origem | Nome final |
|---|----------------|------------|
| 2 | `IMG_1152.jpeg` | `master-luxo-2.jpg` |
| 3 | `IMG_1154.jpeg` | `master-luxo-3.jpg` |
| 4 | `IMG_1153.jpeg` | `master-luxo-4.jpg` |
| 5 | `IMG_1158.jpeg` | `master-luxo-5.jpg` |

### Hot → `hot-2` … `-5` ⚠️

| # | Arquivo origem | Nome final | Ressalva |
|---|----------------|------------|----------|
| 2 | `IMG-20160716-WA0016_Original.jpg` | `hot-2.jpg` | 1000×1000 — **substituir se houver foto nova** |
| 3 | `IMG-20160716-WA0018_Original.jpg` | `hot-3.jpg` | Idem |
| 4 | `IMG-20160716-WA0020_Original.jpg` | `hot-4.jpg` | Idem |
| 5 | `IMG-20160716-WA0022_Original.jpg` | `hot-5.jpg` | Idem |

**Recomendação Hot:** manter `IMG_1151.jpeg` como capa; **recapturar 4 fotos** modernas ≥1200 px para galeria, se possível, antes de LJM-SITE-009.

### Soft *(referência — repo já integrado)*

Galeria ativa no repo: `soft-1` … `soft-6` (LJM-SITE-006). Novo acervo oferece 37 alternativas — troca **opcional** na LJM-SITE-009.

---

## 9. Categorias completas

| Categoria site | Mínimo | Pool aprovado | Capa | Galeria (4+) | Completa? |
|----------------|--------|---------------|------|--------------|-----------|
| Luxo | 5 | 9 | ✅ | ✅ | ✅ **Sim** |
| Luxo Especial | 5 | 7 | ✅ | ✅ | ✅ **Sim** |
| Gran Luxo | 5 | 13 | ✅ | ✅ | ✅ **Sim** |
| Master Luxo | 5 | 13 | ✅ | ✅ | ✅ **Sim** |
| Hot | 5 | 6 | ✅ | ⚠️ 4×1000px | ⚠️ **Sim com ressalva** |
| Soft | 5 | 37 + repo 6 | ✅ | ✅ | ✅ **Sim** |

**Categorias completas para substituir Unsplash:** **6 / 6** *(Hot com ressalva de qualidade na galeria)*

---

## 10. Categorias pendentes

| Tipo | Status |
|------|--------|
| Acervo recebido Luxo–Hot | ✅ **Recebido** — pasta `Le Jardam Motel Site` |
| Pastas Desktop `Fotos Suites/Luxo/` etc. | ⬜ Ainda vazias — **copiar seleção na LJM-SITE-009** |
| Substituição Unsplash no site | ⬜ Pendente — **LJM-SITE-009** |
| Hot — fotos modernas galeria | ⚠️ **Recomendado recapturar** 4 fotos |
| Inspeção visual (pessoas/reflexos) | ⚠️ Pendente revisão humana |

**Nenhuma categoria permanece sem acervo mínimo** após localização do acervo em `Documents/Le Jardam Motel Site`.

---

## 11. Riscos

| ID | Risco | Severidade | Mitigação |
|----|-------|------------|-----------|
| RK-01 | Caminho informado ≠ caminho real | Média | Documentado; usar `Le Jardam Motel Site` como fonte |
| RK-02 | Hot — galeria WhatsApp 2016 (1000 px) | **Alta** | Recaptura ou aceitar com ressalva; capa moderna OK |
| RK-03 | PNG 2–3 MB — performance | Média | Converter JPG na LJM-SITE-009 |
| RK-04 | Pessoas/reflexos não auditados automaticamente | Média | Revisão visual Diogo antes cópia |
| RK-05 | Soft — duplicidade repo vs novo acervo | Baixa | Manter `soft-1..6` canônico salvo decisão contrária |
| RK-06 | Arquivos 4032 px — peso alto | Média | Redimensionar/comprimir LJM-SITE-009 ou fase performance |

---

## 12. Próxima fase recomendada

### LJM-SITE-009 — Cópia Controlada das Fotos Aprovadas para o Repositório e Atualização Local do Site

| Etapa | Ação |
|-------|------|
| 1 | Revisão visual das 25 seleções (especialmente Hot) |
| 2 | Exportar JPG ~1600 px, ≤250 KB |
| 3 | Copiar para `lejardam/fotos/` com nomes finais |
| 4 | Atualizar `CATEGORIAS[]` — substituir Unsplash |
| 5 | Validar HTTP 200 local |
| 6 | **Sem push/deploy** até SP-GEX |

### Cobertura fotográfica pós-seleção

| Métrica | Antes LJM-SITE-008B | Após seleção (potencial) |
|---------|---------------------|--------------------------|
| Categorias com acervo | 1/6 (16,7%) | **6/6 (100%)** |
| Fotos selecionadas site | 6 (Soft) | **31** (6+25) |
| Unsplash substituível | 0/5 | **5/5** *(Hot c/ ressalva)* |

---

## Validações obrigatórias

| Validação | Resultado |
|-----------|-----------|
| Pasta verificada | ✅ *(informada ❌ · efetiva ✅)* |
| Total fotos encontradas | **97** |
| Categorias completas | **6/6** *(Hot c/ ressalva)* |
| Categorias pendentes acervo | **0** *(pendente cópia/site)* |
| `index.html` não alterado | ✅ |
| Nenhuma imagem copiada ao repo | ✅ |
| Nenhum commit / push / deploy | ✅ |
| Documento LJM-SITE-008B criado | ✅ |

---

## Resultado final

**⚠️ APROVADO COM RESSALVAS**

| Ressalva | Descrição |
|----------|-----------|
| RESS-008B-01 | Pasta informada inexistente — acervo em `Documents/Le Jardam Motel Site` |
| RESS-008B-02 | Hot — 4 fotos galeria WhatsApp 2016 (1000 px) — qualidade inferior |
| RESS-008B-03 | Inspeção visual pessoas/reflexos pendente |
| RESS-008B-04 | PNGs pesados — conversão necessária na LJM-SITE-009 |

**Conclusão:** acervo **suficiente** para concluir site com **100% fotos reais** nas 6 categorias, com **ressalva Hot**.

---

*Documento emitido na fase LJM-SITE-008B — Classificação Fotos Recebidas.*
*Projeto: LE JARDAM MOTEL — SITE — execução read-only.*
