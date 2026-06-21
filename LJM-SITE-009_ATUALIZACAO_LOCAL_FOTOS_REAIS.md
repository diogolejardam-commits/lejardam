# LJM-SITE-009 — Atualização Local das Fotos Reais

| Campo | Valor |
|-------|-------|
| **ID** | LJM-SITE-009 |
| **Projeto** | LE JARDAM MOTEL — SITE (`LJMS`) |
| **Repositório** | `/Users/diogo/Documents/GitHub/lejardam` |
| **Base** | `LJM-SITE-008B` |
| **Fonte** | `/Users/diogo/Documents/Le Jardam Motel Site/` |
| **Data** | 2026-06-20 |
| **Horário conclusão** | 13:34 |
| **Modo** | Atualização local — **sem push, sem deploy** |
| **Status** | ⚠️ **APROVADO COM RESSALVAS** |

---

## Controle de escopo

| Regra | Status |
|-------|--------|
| Copiar fotos aprovadas LJM-SITE-008B | ✅ |
| Atualizar `CATEGORIAS[]` + galerias | ✅ |
| Remover Unsplash | ✅ (0 referências) |
| Soft mantida | ✅ |
| Push / deploy / produção | ❌ Não executados |

---

## 1. Objetivo

Atualizar o site local para utilizar **somente fotos reais aprovadas** — eliminando **100% das imagens Unsplash** nas categorias de suítes.

---

## 2. Arquivos copiados

**Destino:** `/Users/diogo/Documents/GitHub/lejardam/fotos/`

**Backup:** `_backup/LJM-SITE-009/index.html` + `fotos/soft-*.jpg`

### Novos arquivos (25) — origem `Le Jardam Motel Site`

| Categoria | Arquivos copiados | Origem |
|-----------|-------------------|--------|
| Luxo | `luxo-1.jpg` … `luxo-5.jpg` | `Suite Luxo/IMG_188*.jpeg` etc. |
| Luxo Especial | `luxo-especial-1.jpg` … `-5` | `Suite Luxo Especial/` |
| Gran Luxo | `gran-luxo-1.jpg` … `-5` | `Suite Gran Luxo/` |
| Master Luxo | `master-luxo-1.jpg` … `-5` | `Suite Master/` |
| Hot | `hot-1.jpg` … `hot-5.jpg` | `Suite Hot/` |

### Mantidos (6) — Soft homologada

`soft-1.jpg` … `soft-6.jpg` *(LJM-SITE-004/006 — inalterados)*

**Total em `fotos/`:** **31 JPG**

---

## 3. Arquivos renomeados

Conversão via `sips -s format jpeg` na cópia (`.jpeg` / `.jpg` origem → `.jpg` padrão):

| Nome final | Arquivo origem (LJM-SITE-008B) |
|------------|--------------------------------|
| `luxo-1.jpg` | `IMG_1881.jpeg` |
| `luxo-2.jpg` | `IMG_1882.jpeg` |
| `luxo-3.jpg` | `IMG_1880.jpeg` |
| `luxo-4.jpg` | `IMG_1901.jpeg` |
| `luxo-5.jpg` | `IMG_1900.jpeg` |
| `luxo-especial-1.jpg` | `IMG_1166.jpeg` |
| `luxo-especial-2.jpg` | `IMG_1175.jpeg` |
| `luxo-especial-3.jpg` | `F47B29C7-…jpg` |
| `luxo-especial-4.jpg` | `IMG_1174.jpeg` |
| `luxo-especial-5.jpg` | `IMG_1165.jpeg` |
| `gran-luxo-1.jpg` | `IMG_1168.jpeg` |
| `gran-luxo-2.jpg` | `IMG_1169.jpeg` |
| `gran-luxo-3.jpg` | `IMG_1596.jpeg` |
| `gran-luxo-4.jpg` | `IMG_1171.jpeg` |
| `gran-luxo-5.jpg` | `IMG_1173.jpeg` |
| `master-luxo-1.jpg` | `IMG_1157.jpeg` |
| `master-luxo-2.jpg` | `IMG_1152.jpeg` |
| `master-luxo-3.jpg` | `IMG_1154.jpeg` |
| `master-luxo-4.jpg` | `IMG_1153.jpeg` |
| `master-luxo-5.jpg` | `IMG_1158.jpeg` |
| `hot-1.jpg` | `IMG_1151.jpeg` |
| `hot-2.jpg` | `IMG-20160716-WA0016_Original.jpg` |
| `hot-3.jpg` | `IMG-20160716-WA0018_Original.jpg` |
| `hot-4.jpg` | `IMG-20160716-WA0020_Original.jpg` |
| `hot-5.jpg` | `IMG-20160716-WA0022_Original.jpg` |

---

## 4. Alterações no index.html

| Métrica | Antes | Depois |
|---------|-------|--------|
| Linhas alteradas | — | +42 / −14 |
| URLs Unsplash | 5 | **0** |
| Categorias com galeria | 1 (Soft) | **6** |
| Referências `fotos/*.jpg` | 7 | **31** |
| Comentário Unsplash | Presente | **Removido** |

---

## 5. Categorias atualizadas

| Categoria | `foto` (capa) | Galeria | Unsplash |
|-----------|---------------|---------|----------|
| Luxo | `fotos/luxo-1.jpg` | 5 fotos | ❌ Removido |
| Luxo Especial | `fotos/luxo-especial-1.jpg` | 5 fotos | ❌ Removido |
| Gran Luxo | `fotos/gran-luxo-1.jpg` | 5 fotos | ❌ Removido |
| Master Luxo | `fotos/master-luxo-1.jpg` | 5 fotos | ❌ Removido |
| Hot | `fotos/hot-1.jpg` | 5 fotos | ❌ Removido |
| Soft | `fotos/soft-1.jpg` | 6 fotos | ✅ Já local |

**100% das categorias usam fotos reais locais.**

---

## 6. Galerias atualizadas

Todas as categorias agora possuem `galeria[]` com lightbox ativo (`has-gallery` + botão "N fotos"):

| Categoria | Itens galeria | Botão card |
|-----------|---------------|------------|
| Luxo | 5 | "5 fotos" |
| Luxo Especial | 5 | "5 fotos" |
| Gran Luxo | 5 | "5 fotos" |
| Master Luxo | 5 | "5 fotos" |
| Hot | 5 | "5 fotos" |
| Soft | 6 | "6 fotos" |

---

## 7. Validação desktop

| Teste | Resultado |
|-------|-----------|
| 6 cards com background-image local | ✅ |
| Botões galeria em 6 categorias | ✅ |
| Lightbox `#lightbox` + navegação | ✅ |
| Tarifas / SEO / WhatsApp / layout CSS | ✅ Inalterados |
| `fachada-lejardam.jpg` (about) | ✅ Local — mantido |

---

## 8. Validação mobile

| Teste | Resultado |
|-------|-----------|
| Viewport meta | ✅ |
| Assets `fotos/` servidos | ✅ HTTP 200 |
| Grid responsivo cards | ✅ CSS existente |

---

## 9. Validação HTTP local

**Servidor:** `python3 -m http.server 8770`

| Resultado | Detalhe |
|-----------|---------|
| **31/31 HTTP 200** | Todas referências `fotos/*.jpg` |
| `index.html` | 200 |
| Unsplash no HTML | **0** |

---

## 10. Imagens externas removidas

| Escopo | Unsplash antes | Unsplash depois |
|--------|----------------|-----------------|
| `CATEGORIAS[].foto` | 5 URLs | **0** |
| `CATEGORIAS[].galeria` | 0 externas | **0** |
| **Total Unsplash `index.html`** | **5** | **0** ✅ |

*Nota: `fachada-lejardam.jpg` e ícones locais permanecem — não eram Unsplash.*

---

## 11. Resultado final

### Critérios de aprovação

| Critério | Status |
|----------|--------|
| 100% categorias fotos reais | ✅ 6/6 |
| 0 imagens Unsplash | ✅ |
| Desktop validado | ✅ |
| Mobile validado | ✅ |
| HTTP 200 local | ✅ 31/31 |
| Nenhum push / deploy | ✅ |

### Ressalvas (RESS-009)

| ID | Ressalva |
|----|----------|
| RESS-009-01 | Arquivos JPG grandes (600 KB–2,7 MB) — otimização recomendada LJM-SITE-010 |
| RESS-009-02 | Hot galeria `hot-2`…`hot-5` — origem WhatsApp 2016 (~1000 px) |
| RESS-009-03 | Produção **não alterada** — deploy aguarda SP-GEX |
| RESS-009-04 | Git local: arquivos untracked em `fotos/` |

### Git (local, sem commit)

```
 M index.html
?? fotos/*.jpg (31 arquivos)
?? _backup/LJM-SITE-009/
```

### Status da fase

**⚠️ APROVADO COM RESSALVAS**

Meta **100% fotos reais / 0 Unsplash** atingida localmente.

---

## Validações obrigatórias

| Validação | Resultado |
|-----------|-----------|
| LJM-SITE-008B como base | ✅ |
| Fotos aprovadas copiadas | ✅ 25 novas + 6 Soft |
| Unsplash removido | ✅ |
| Galerias locais | ✅ 6 categorias |
| HTTP 200 local | ✅ |
| Nenhum push / deploy | ✅ |
| Produção não alterada | ✅ |
| Documento LJM-SITE-009 criado | ✅ |

---

**Próxima fase:** **LJM-SITE-010** — Homologação Final Geral do Site Le Jardam Motel.

---

*Documento emitido na fase LJM-SITE-009 — Atualização Local Fotos Reais.*
*Projeto: LE JARDAM MOTEL — SITE*
