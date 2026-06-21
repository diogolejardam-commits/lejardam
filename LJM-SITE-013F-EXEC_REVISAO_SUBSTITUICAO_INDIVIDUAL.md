# LJM-SITE-013F-EXEC — Revisão e Substituição Individual das Imagens Promocionais

| Campo | Valor |
|-------|-------|
| **ID** | LJM-SITE-013F-EXEC |
| **Projeto** | LE JARDAM MOTEL — SITE (`LJMS`) |
| **Repositório** | `/Users/diogo/Documents/GitHub/lejardam` |
| **Data** | 2026-06-20 |
| **Modo** | Substituição **individual** · sem commit · sem push · sem deploy |
| **Status** | **EM ANDAMENTO** *(4/6 concluídas · Hot/Soft mantidas · aguardando homologação final)* |

---

## Controle operacional

| Regra | Status |
|-------|--------|
| Push | ❌ Não executado |
| Deploy / produção | ❌ Não alterado |
| Commit | ❌ Não executado |
| Substituição em lote | ❌ Não — arquivo a arquivo |
| Backup antes de cada troca | ✅ `_backup/LJM-SITE-013F-EXEC/` |

---

## Registro por categoria

| # | Categoria | Arquivo | Status EXEC | Prévia | Backup 013E |
|---|-----------|---------|-------------|--------|-------------|
| 1 | **Gran Luxo** | `fotos/gran-luxo-ia.jpg` | ✅ **SUBSTITUÍDA** | `gran-luxo-ia-promo-013f.png` | `_backup/LJM-SITE-013F-EXEC/gran-luxo-ia-013E.jpg` |
| 2 | **Master Luxo** | `fotos/master-luxo-ia.jpg` | ✅ **SUBSTITUÍDA** | `master-luxo-ia-promo-013f.png` | `_backup/LJM-SITE-013F-EXEC/master-luxo-ia-013E.jpg` |
| 3 | **Luxo** | `fotos/luxo-ia.jpg` | ✅ **SUBSTITUÍDA** | `luxo-ia-promo-013f.png` | `_backup/LJM-SITE-013F-EXEC/luxo-ia-013E.jpg` |
| 4 | **Luxo Especial** | `fotos/luxo-especial-ia.jpg` | ✅ **SUBSTITUÍDA** | `luxo-especial-ia-promo-013f.png` | `_backup/LJM-SITE-013F-EXEC/luxo-especial-ia-013E.jpg` |
| 5 | Hot | `fotos/hot-ia.jpg` | ⏭️ **MANTIDA** *(013E conforme)* | — | `_backup/LJM-SITE-013F/fotos-ia-013E/` |
| 6 | Soft | `fotos/soft-ia.jpg` | ⏭️ **MANTIDA** *(013E conforme)* | — | `_backup/LJM-SITE-013F/fotos-ia-013E/` |

---

## Detalhe das substituições concluídas

### 1. Gran Luxo ✅

| Item | Valor |
|------|-------|
| Problema 013E | Piscina/área externa fictícia · arquitetura alterada |
| Correção | Suíte indoor Paris (`gran-luxo-2.jpg`) preservada · casal + pétalas + espumante + velas |
| Tamanho | 438 KB → **268 KB** |
| Validação local | HTTP 200 · `cmp` ≠ backup 013E |

### 2. Master Luxo ✅

| Item | Valor |
|------|-------|
| Problema 013E | TV telejornal (*"PRESO EM SÃO GONÇALO"*) |
| Correção | TV → catálogo streaming genérico (*MOVIESFLIX*) · casal + champagne + velas |
| Tamanho | 330 KB → **241 KB** |
| Validação local | HTTP 200 · `cmp` ≠ backup 013E |

### 3. Luxo ✅ *(2026-06-20 17:24)*

| Item | Valor |
|------|-------|
| Problema 013E | Bacia secundária artificial no primeiro plano |
| Correção | Pétalas + velas · arquitetura geométrica preservada · sem bacia fictícia |
| Tamanho | 295 KB → **226 KB** |
| Validação local | HTTP 200 · `cmp` ≠ backup 013E |

### 4. Luxo Especial ✅ *(2026-06-20 17:33)*

| Item | Valor |
|------|-------|
| Problema 013E | Refino premium · arquitetura NYC/mini-fridge preservada |
| Correção | Casal elegante + pétalas + espumante + velas · luz quente |
| Tamanho | 308 KB → **243 KB** |
| Validação local | HTTP 200 · `cmp` ≠ backup 013E |

---

## Validação local pós-substituição

| Check | Resultado |
|-------|-----------|
| 36/36 imagens HTTP 200 | ✅ |
| `index.html` HTTP 200 | ✅ |
| Galerias / lightbox / WhatsApp *(código)* | ✅ inalterado |
| `git diff --name-only` | `fotos/gran-luxo-ia.jpg` · `fotos/master-luxo-ia.jpg` · `fotos/luxo-ia.jpg` · `fotos/luxo-especial-ia.jpg` |

---

## Impacto LJM-SITE-014

| Bloqueio anterior | Status |
|-------------------|--------|
| Gran Luxo reprovada | ✅ **Corrigida localmente** |
| Master Luxo reprovada | ✅ **Corrigida localmente** |
| Luxo revisar | ✅ **Corrigida localmente** |
| Publicação | **Ainda bloqueada** *(sem commit/push)* |

**Mínimo para retomar 014:** Gran + Master ✅ atendido localmente. Recomendado concluir revisão Luxo antes do push.

---

## Próximos passos (requer OK explícito)

1. **Hot / Soft (5–6)** — mantidas 013E *(conformes)* salvo nova decisão SP-GEX
4. Homologação visual final SP-GEX
5. Commit local *(fase separada)* → retomar LJM-SITE-014

---

*Atualizado: 2026-06-20 17:33 — LE JARDAM MOTEL — SITE*
