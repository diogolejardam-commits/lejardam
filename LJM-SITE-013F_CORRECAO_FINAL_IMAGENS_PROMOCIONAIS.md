# LJM-SITE-013F — Correção Final das Imagens Promocionais (Modo Seguro · Read-Only)

| Campo | Valor |
|-------|-------|
| **ID** | LJM-SITE-013F |
| **Projeto** | LE JARDAM MOTEL — SITE (`LJMS`) |
| **Repositório** | `/Users/diogo/Documents/GitHub/lejardam` |
| **Data** | 2026-06-20 |
| **Modo** | **READ-ONLY** — nenhuma substituição, commit, push ou deploy |
| **Commit HEAD** | `a971f76541814e883f38c89426dd4656c469d36d` |
| **Status** | **PENDENTE CONFIRMAÇÃO** *(correção real em fase separada)* |

---

## 0. Controle de execução (resposta ao bloqueio operacional)

| Regra | Status |
|-------|--------|
| Push | ❌ Não executado |
| Deploy / produção | ❌ Não alterado |
| Branch `main` | ❌ Não alterado *(sem diff em arquivos rastreados)* |
| Substituição em lote de imagens | ❌ **Interrompida antes de aplicar** |
| Cópia para `fotos/` | ❌ Não realizada |
| Commit | ❌ Não realizado |

**Confirmação técnica:** os 6 arquivos `fotos/*-ia.jpg` ativos são **idênticos** ao backup LJM-SITE-013E (`cmp` OK). Timestamps: `2026-06-20 14:40`.

---

## 1. Objetivo desta entrega

Avaliar conformidade SP-GEX das imagens promocionais LJM-SITE-013E, listar correções necessárias e **planejar** substituições **sem executá-las**, aguardando confirmação explícita em fase separada.

---

## 2. Contexto

| Item | Estado |
|------|--------|
| Imagens promocionais ativas | 6 × `fotos/*-ia.jpg` (LJM-SITE-013E) |
| `index.html` | Referencia os 6 slots IA · Hero/Galerias Premium homologados |
| Produção | Fora de escopo desta fase |
| Tentativa 013F anterior | Gerou 6 PNG de prévia **fora do repo**; conversão/substituição **não concluída** |

---

## 3. Validação read-only — imagens 013E ativas

| Arquivo | BASE 013D/013E | Problemas SP-GEX identificados | Severidade |
|---------|----------------|--------------------------------|------------|
| `gran-luxo-ia.jpg` | `gran-luxo-2.jpg` | Piscina/área externa **inexistente** inventada; arquitetura alterada; sensação artificial | **Crítica** |
| `master-luxo-ia.jpg` | `master-luxo-4.jpg` | TV com **telejornal** (*"PRESO EM SÃO GONÇALO"*) | **Crítica** |
| `luxo-ia.jpg` | `luxo-4.jpg` | Banheira/bacia secundária artificial no primeiro plano; hidro real não ambientada | Média |
| `luxo-especial-ia.jpg` | `luxo-especial-4.jpg` | Sem hidro visível *(BASE também não exibe)*; restante coerente | Baixa |
| `hot-ia.jpg` | `hot-1.jpg` | TV desligada · arquitetura preservada · pétalas/velas OK | **Conforme** |
| `soft-ia.jpg` | `soft-1.jpg` | Hidro **cheia**, pétalas, velas, água visível | **Conforme** |

### Checklist SP-GEX (013E ativo)

| Regra | Resultado |
|-------|-----------|
| R1 — Arquitetura 100% real | ❌ Falha Gran Luxo |
| R2 — Sem elementos fictícios | ❌ Falha Gran Luxo |
| R3 — Hidros cheias/ligadas | ⚠️ Soft OK · Gran/Master/Luxo parcial |
| R4 — TVs neutras/streaming | ❌ Falha Master Luxo |
| R5 — Casais elegantes/discretos | ✅ Maioria OK |
| R6 — Ambientação permitida | ✅ OK onde aplicável |

**Nota visual 013E:** **7,2 / 10**  
**Nota visual alvo 013F:** **≥ 8,5 / 10** *(após correções homologadas)*

---

## 4. Validação read-only — site (sem alteração)

| Check | Resultado |
|-------|-----------|
| `index.html` — 6 refs `*-ia.jpg` | ✅ |
| Unsplash no HTML | ✅ 0 |
| Galerias `.cat-card-thumbs` | ✅ presente |
| Lightbox `#lb-cta` | ✅ presente |
| WhatsApp `556235061912` | ✅ presente |
| Hero Premium | ✅ presente |
| 36 refs JPG no HTML | ✅ todos existem em `fotos/` |
| `git diff` arquivos rastreados | ✅ vazio |

---

## 5. Arquivos que **SERIAM** alterados *(fase futura — NÃO executado)*

### 5.1 Substituição planejada (1:1)

| Destino no repo | Origem proposta (prévia) | BASE real | Ação planejada |
|-----------------|--------------------------|-----------|----------------|
| `fotos/gran-luxo-ia.jpg` | `gran-luxo-ia-promo-013f.png` | `gran-luxo-2.jpg` | Remover piscina fictícia; manter suíte indoor Paris; casal + pétalas + espumante + luz quente |
| `fotos/master-luxo-ia.jpg` | `master-luxo-ia-promo-013f.png` | `master-luxo-4.jpg` | TV → catálogo streaming genérico; manter mural NYC |
| `fotos/luxo-ia.jpg` | `luxo-ia-promo-013f.png` | `luxo-4.jpg` | Pétalas/velas; sem bacia fictícia |
| `fotos/luxo-especial-ia.jpg` | `luxo-especial-ia-promo-013f.png` | `luxo-especial-4.jpg` | Casal + pétalas + espumante; arquitetura preservada |
| `fotos/hot-ia.jpg` | `hot-ia-promo-013f.png` | `hot-1.jpg` | Refino menor *(013E já conforme)* |
| `fotos/soft-ia.jpg` | `soft-ia-promo-013f.png` | `soft-1.jpg` | Refino hidro com água/movimento *(013E já conforme)* |

**Localização das prévias PNG (fora do repo):**  
`/Users/diogo/.cursor/projects/Users-diogo-Documents-Le-Jardam-OS/assets/*-ia-promo-013f.png`

**Pipeline proposto (somente após confirmação):**
1. Backup adicional → `_backup/LJM-SITE-013F-EXEC/fotos-ia-013E/`
2. Conversão PNG → JPG 1200px @85% (`sips`)
3. Substituir **somente** os 6 arquivos acima
4. Validação local HTTP 36/36
5. Revisão humana SP-GEX pixel a pixel
6. **Sem commit automático**

---

## 6. Arquivos que **NÃO** serão tocados *(nesta fase e recomendação geral)*

| Path | Motivo |
|------|--------|
| `index.html` | Código homologado 013B — sem necessidade estrutural |
| `fotos/*-1..5.jpg` | Galeria 100% real |
| `sitemap.xml` · `sw.js` · `manifest.json` · `site.webmanifest` | Fora do escopo 013F |
| `CNAME` · DNS · GitHub Pages | **Proibido** |
| Branch `main` remota | **Proibido push** |
| Produção `lejardammotel.com.br` | **Proibido deploy** |
| Demais docs `LJM-SITE-*.md` | Documentação histórica |

---

## 7. Respostas executivas (avaliação 013E — read-only)

| # | Pergunta | Resposta |
|---|----------|----------|
| 1 | Quais imagens seriam corrigidas? | **4 prioritárias:** Gran Luxo, Master Luxo, Luxo, Luxo Especial · **2 opcionais:** Hot, Soft |
| 2 | Quais TVs seriam ajustadas? | **Master Luxo** (013E: telejornal) → streaming genérico na prévia 013F |
| 3 | Quais hidros receberiam água? | **Soft** já conforme · **Luxo/Gran** — promo bedroom sem hidro; hidros vazios em galeria real (`gran-luxo-4/5`) permanecem fora do slot IA |
| 4 | Quais elementos seriam removidos? | Piscina/área externa fictícia (Gran Luxo) · telejornal (Master) · bacia secundária artificial (Luxo) |
| 5 | Arquitetura alterada remanescente? | **Sim** em `gran-luxo-ia.jpg` e parcialmente `luxo-ia.jpg` *(013E ativo)* |
| 6 | Elementos fictícios remanescentes? | **Sim** — piscina Gran Luxo *(crítico)* |
| 7 | Parecem Le Jardam? | Hot/Soft/Luxo Especial: sim · Gran Luxo/Master Luxo: **não plenamente** |
| 8 | Nova nota visual? | **7,2** (013E ativo) · **~8,7 estimada** pós-prévias 013F *(requer homologação humana)* |
| 9 | Pendências? | Homologação SP-GEX das 6 prévias PNG · execução controlada arquivo a arquivo |
| 10 | Site pronto para publicação? | **Não** enquanto Gran Luxo e Master Luxo 013E estiverem ativos |

---

## 8. Riscos

| ID | Risco | Sev. | Mitigação |
|----|-------|------|-----------|
| RK-01 | Substituição em lote sem revisão | Alta | Fase separada · 1 arquivo por vez · confirmação explícita |
| RK-02 | IA reintroduzir piscina/TV news | Alta | Revisão humana SP-GEX antes de copiar |
| RK-03 | Backup `_backup/LJM-SITE-013F/` criado na tentativa anterior | Baixa | Apenas cópias read-only; não altera `fotos/` |
| RK-04 | PNG fora do repo não versionados | Média | Copiar prévias para `_backup/LJM-SITE-013F/sources-promo/` na fase EXEC |
| RK-05 | Publicação acidental (014) com 013E | Alta | Concluir 013F-EXEC antes de reabrir LJM-SITE-014 |

---

## 9. Side effects já existentes (não revertidos nesta fase)

| Item | Local | Impacto |
|------|-------|---------|
| Backup read-only 013E | `_backup/LJM-SITE-013F/fotos-ia-013E/` | Nenhum no site |
| Cópias BASE | `_backup/LJM-SITE-013F/bases-reais/` | Nenhum no site |
| Prévias PNG | Cursor assets (fora repo) | Nenhum no site |

**Nenhum arquivo em `fotos/` ou `index.html` foi modificado pela tentativa 013F.**

---

## 10. Resultado desta fase (modo seguro)

| Critério | Status |
|----------|--------|
| Validação read-only | ✅ |
| Lista de alterações futuras | ✅ |
| Relatório gerado antes de alteração | ✅ |
| 0 substituições executadas | ✅ |
| 0 commits | ✅ |
| 0 push / deploy | ✅ |

### Status final LJM-SITE-013F (modo seguro)

## **PENDENTE CONFIRMAÇÃO**

Homologação SP-GEX das prévias + autorização explícita para fase de execução.

---

## 11. Próxima etapa segura recomendada

### **LJM-SITE-013F-EXEC** *(nova fase — requer OK explícito de Diogo)*

1. Diogo revisa visualmente as 6 PNG em `assets/*-ia-promo-013f.png`.
2. Aprova ou rejeita **categoria por categoria**.
3. Cursor substitui **apenas 1 arquivo por vez**, com validação local após cada um.
4. Atualiza este documento com status **APROVADO / RESSALVAS / REPROVADO**.
5. **Somente então** retomar **LJM-SITE-014** (publicação controlada).

---

*Relatório gerado em modo read-only — LJM-SITE-013F / LE JARDAM MOTEL — SITE*
