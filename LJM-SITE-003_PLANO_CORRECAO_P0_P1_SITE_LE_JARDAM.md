# LJM-SITE-003 — Plano de Correção P0/P1 do Site Le Jardam Motel

| Campo | Valor |
|-------|-------|
| **ID** | LJM-SITE-003 |
| **Projeto** | LE JARDAM MOTEL — SITE (`LJMS`) |
| **Repositório** | `/Users/diogo/Documents/GitHub/lejardam` |
| **URL produção** | https://lejardammotel.com.br/ |
| **Governança** | GDE-GOV-050-LJMS · DEC-GOV-LJMS-004 |
| **Base** | `LJM-SITE-002_AUDITORIA_COMPLETA_SITE_PRODUCAO.md` |
| **Data do plano** | 2026-06-20 |
| **Modo** | Documental — nenhuma alteração operacional |
| **Status** | ✅ **APROVADO** |

---

## 1. Objetivo

Criar plano executivo oficial de correção dos problemas **P0** e **P1** identificados na auditoria LJM-SITE-002, definindo ordem segura de execução, matrizes de impacto, critérios de aprovação SP-GEX e trilhas futuras — **sem corrigir o site, sem alterar arquivos de produção, sem commit, push ou deploy nesta fase**.

---

## 2. Escopo

### Incluído

- Diagnóstico de causa e impacto do P0 (`soft-1.jpg`)
- Inventário de imagens quebradas e Unsplash
- Roadmap SEO, mobile, conversão e performance
- Matriz de aprovações e plano de execução faseado
- Respostas executivas às 10 perguntas da fase

### Excluído

- Edição de `index.html`, assets, configs
- Commit, push, deploy
- Alteração DNS, CNAME, GitHub Pages, domínio
- Integrações GEX, analytics em produção
- Uso de dados operacionais sensíveis

---

## 3. Base da auditoria

| Fonte | Uso neste plano |
|-------|-----------------|
| `LJM-SITE-002_AUDITORIA_COMPLETA_SITE_PRODUCAO.md` | Problemas P-001 a P-020, notas por dimensão |
| `index.html` | Array `CATEGORIAS[]` (L1542–1603), galeria Soft |
| `sitemap.xml` | 6 URLs (1 raiz + 5 com `#anchor`), lastmod 2026-04-16 |
| `robots.txt` | OK — referência sitemap |
| `site.webmanifest` | PWA ativo (referenciado pelo HTML) |
| `manifest.json` | Legado — duplicata não referenciada |
| `sw.js` | Cache parcial — correção P2 |
| `fotos/` | soft-2..5 presentes; soft-1 ausente |
| HTTP produção (2026-06-20) | soft-1.jpg → **404**; demais locais → 200 |
| Git commit `d647ff8` | *Delete fotos/soft-1.jpg* (2026-04-19) |

| Dimensão (LJM-SITE-002) | Nota |
|-------------------------|------|
| SEO | 7,5/10 |
| Mobile | 8,0/10 |
| Conversão comercial | 6,8/10 |
| Performance | 6,0/10 |

---

## 4. Problemas P0

| ID | Problema | Evidência | Correção planejada | Fase |
|----|----------|-----------|-------------------|------|
| **P0-001** | `fotos/soft-1.jpg` retorna HTTP **404** | Produção + repo local ausente | Restaurar arquivo de backup | LJM-SITE-004 |
| **P0-002** | Referências ativas no código apontam para arquivo inexistente | `CATEGORIAS[5].foto` + `galeria[0].src` | Mesmo arquivo — sem alterar index.html | LJM-SITE-004 |
| **P0-003** | Arquivo removido do repositório | Commit `d647ff8` | Recolocar em `fotos/` | LJM-SITE-004 |

---

## 5. Problemas P1

| ID | Problema | Impacto | Fase |
|----|----------|---------|------|
| **P1-001** | 5 categorias usam fotos Unsplash externas | Credibilidade, performance, dependência 3rd party | LJM-SITE-005+ |
| **P1-002** | Sitemap lista URLs com `#anchor` | SEO — fragmentos não indexáveis | LJM-SITE-006 |
| **P1-003** | `lastmod` 2026-04-16 desatualizado | Sinal fraco para crawlers | LJM-SITE-006 |
| **P1-004** | OG image = logo (não 1200×630) | Preview social subótimo | LJM-SITE-007 |
| **P1-005** | Schema `contactOption: TollFree` incorreto | SEO técnico | LJM-SITE-007 |
| **P1-006** | Sem prova social (reviews Google) | Conversão | LJM-SITE-008 |
| **P1-007** | Sem analytics (GA4/GTM) | Sem mensuração | LJM-SITE-009 |
| **P1-008** | Imagens locais pesadas | Performance 6,0/10 | LJM-SITE-010 |
| **P1-009** | Galerias vazias em 5 categorias | Perda conversão visual | LJM-SITE-005+ |
| **P1-010** | Telefone sem link `tel:` | Conversão mobile | LJM-SITE-008 |

---

## 6. Impacto comercial

| Aspecto | Situação atual | Impacto | Após correção P0/P1 |
|---------|----------------|---------|---------------------|
| **Credibilidade visual** | Card Soft sem foto de capa; 5 cats com fotos genéricas | Visitante pode desconfiar da qualidade real das suítes | Fotos reais = confiança |
| **Galeria Soft** | 1/5 fotos quebrada na lightbox | Experiência ruim na única categoria com galeria | 5/5 fotos OK |
| **Conversão WhatsApp** | CTAs funcionam, mas visual fraco | Cliques podem cair por aparência amadora | Visual profissional aumenta intenção |
| **SEO local** | Bom foundation, sitemap subótimo | Perda marginal de indexação | Sitemap limpo |
| **Prova social** | Ausente | Sem reforço de decisão | Reviews visíveis |
| **Mensuração** | Sem analytics | Impossível medir ROI do site | GA4 ativo |

**Estimativa de impacto P0 isolado:** corrigir `soft-1.jpg` elimina o único erro visível imediato na categoria Soft — **impacto alto na credibilidade**, baixo risco técnico.

**Estimativa de impacto P1 completo:** conversão de 6,8 → **≥ 8,5/10**; performance de 6,0 → **≥ 7,5/10**.

---

## Respostas executivas (1–10)

| # | Pergunta | Resposta |
|---|----------|----------|
| **1** | Causa provável do erro soft-1.jpg? | Arquivo **deletado do repositório** no commit `d647ff8` (19/04/2026), enquanto `index.html` **continua referenciando** `fotos/soft-1.jpg` em `CATEGORIAS[5].foto` e `galeria[0]`. O código não foi atualizado após a remoção. |
| **2** | Impacto comercial da imagem quebrada? | Card da suíte **Soft** aparece sem foto de capa; galeria inicia com imagem quebrada (1/5). Reduz credibilidade e pode afastar reservas via WhatsApp nessa categoria. Soft é a única categoria com galeria completa — impacto **desproporcional**. |
| **3** | Arquivos afetados futuramente? | **P0:** `fotos/soft-1.jpg` (novo). **P1:** `index.html` (CATEGORIAS[], meta OG, Schema, tel:), `sitemap.xml`, possivelmente `og-lejardam.jpg` (novo), `fotos/*.jpg` (novos), `sw.js` (P2), `site.webmanifest` (P2). |
| **4** | Imagens a substituir? | **Restaurar:** `fotos/soft-1.jpg`. **Substituir Unsplash (5):** capas Luxo, Luxo Especial, Gran Luxo, Master Luxo, Hot. **Otimizar (P1):** logo, fachada, fotos soft-2..5. **Criar:** og-lejardam.jpg 1200×630. |
| **5** | Melhorias SEO prioritárias? | (1) Corrigir sitemap — só URL raiz; (2) Atualizar lastmod; (3) Criar OG image 1200×630; (4) Corrigir Schema TollFree; (5) Prerender suítes no HTML (P2). |
| **6** | Melhorias mobile prioritárias? | (1) Corrigir soft-1 (visual mobile); (2) Reduzir grid suítes de 380px → 280px; (3) aria-expanded menu; (4) link tel: clicável. |
| **7** | Melhorias conversão prioritárias? | (1) Restaurar soft-1; (2) Fotos reais 6/6 categorias; (3) Google Reviews; (4) tel: link; (5) GA4 para medir cliques WhatsApp. |
| **8** | Melhorias performance prioritárias? | (1) Eliminar Unsplash → fotos locais; (2) Comprimir logo/fachada; (3) WebP; (4) Self-host fontes Google (P2). |
| **9** | Ordem segura de execução? | 004 (P0 soft-1) → 005 (fotos reais) → 006 (sitemap) → 007 (OG/Schema) → 008 (conversão) → 009 (GA4) → 010 (performance) → 011+ (P2). **Uma fase por deploy.** |
| **10** | Aprovações antes da implementação? | **Toda fase:** checklist A1–A8 + aprovação escrita SP-GEX (DEC-GOV-LJMS-004). **P0:** SP-GEX antes de commit/push. **P1 conteúdo:** SP-GEX. **M4 infra (DNS):** SP-GEX + deliberação GDE. |

---

## Matriz P0

| ID | Problema | Causa | Arquivo | Produção | Ação | Fase | Aprovação |
|----|----------|-------|---------|:--------:|------|------|-----------|
| P0-001 | soft-1.jpg 404 | Commit delete d647ff8 | `fotos/soft-1.jpg` | 404 | Restaurar backup | 004 | SP-GEX |
| P0-002 | Card Soft sem capa | Referência a arquivo ausente | index.html (sem editar) | Quebrado | Restaurar arquivo | 004 | SP-GEX |
| P0-003 | Galeria 1/5 quebrada | galeria[0] → soft-1 | `fotos/soft-1.jpg` | 404 | Restaurar arquivo | 004 | SP-GEX |

**Backup oficial candidato:** `/Users/diogo/Desktop/Site Lejardam/Fotos Suites/Suite Soft/files/soft-1.jpg`

---

## Matriz P1

| ID | Problema | Prioridade | Esforço | Impacto | Fase | Depende de |
|----|----------|:----------:|:-------:|:-------:|------|------------|
| P1-001 | 5 cats Unsplash | Alta | Médio | Alto | 005+ | P0 |
| P1-002 | Sitemap #anchors | Alta | Baixo | Médio | 006 | — |
| P1-003 | lastmod velho | Média | Baixo | Baixo | 006 | — |
| P1-004 | OG image | Média | Baixo | Médio | 007 | — |
| P1-005 | Schema TollFree | Baixa | Baixo | Baixo | 007 | — |
| P1-006 | Sem reviews | Média | Baixo | Alto | 008 | — |
| P1-007 | Sem GA4 | Média | Baixo | Alto | 009 | SP-GEX |
| P1-008 | Imagens pesadas | Média | Médio | Médio | 010 | Fotos reais |
| P1-009 | Galerias vazias | Alta | Médio | Alto | 005+ | Fotos reais |
| P1-010 | Sem tel: | Baixa | Baixo | Médio | 008 | — |

---

## 7. Matriz SEO

| Critério | Atual | Meta P1 | Ação | Fase | Prioridade |
|----------|:-----:|:-------:|------|------|:----------:|
| Title / description | 9/10 | Manter | — | — | — |
| Canonical | 10/10 | Manter | — | — | — |
| Sitemap (só `/`) | 4/10 | 10/10 | Remover #anchors | 006 | **Alta** |
| lastmod atualizado | 5/10 | 9/10 | Atualizar data | 006 | Média |
| OG image 1200×630 | 6/10 | 9/10 | Criar og-lejardam.jpg | 007 | Média |
| Schema LodgingBusiness | 8/10 | 9/10 | Corrigir TollFree | 007 | Baixa |
| Conteúdo suítes indexável | 6/10 | 8/10 | HTML estático (P2) | 011 | Baixa |
| robots.txt | 10/10 | Manter | — | — | — |

**Nota SEO atual:** 7,5/10 → **Meta pós-P1:** ≥ 8,5/10

---

## 8. Matriz Mobile

| Critério | Atual | Meta P1 | Ação | Fase | Prioridade |
|----------|:-----:|:-------:|------|------|:----------:|
| Viewport / menu | 9/10 | Manter | — | — | — |
| soft-1 quebrado mobile | 3/10 | 10/10 | Restaurar foto | 004 | **Alta** |
| Grid suítes 380px | 6/10 | 9/10 | minmax 280px | 011 | Média |
| Tarifas responsivas | 10/10 | Manter | — | — | — |
| tel: clicável | 4/10 | 9/10 | Adicionar link | 008 | Média |
| WA flutuante | 10/10 | Manter | — | — | — |
| Performance 3G | 5/10 | 7/10 | Fotos locais + WebP | 010 | Média |
| aria-expanded menu | 6/10 | 9/10 | A11y fix | 011 | Baixa |

**Nota Mobile atual:** 8,0/10 → **Meta pós-P1:** ≥ 8,5/10

---

## 9. Matriz Conversão

| Elemento | Atual | Meta P1 | Ação | Fase | Prioridade |
|----------|:-----:|:-------:|------|------|:----------:|
| WhatsApp (4+ pontos) | 10/10 | Manter | — | — | — |
| Tarifas publicadas | 10/10 | Manter | — | — | — |
| Mapa + rotas | 10/10 | Manter | — | — | — |
| Fotos reais suítes | 3/10 | 10/10 | Unsplash → local | 004–005 | **Alta** |
| Galerias por categoria | 2/10 | 8/10 | Expandir galerias | 005+ | Alta |
| Prova social / reviews | 0/10 | 7/10 | Link Google Business | 008 | Média |
| tel: link | 4/10 | 9/10 | +556235061912 | 008 | Média |
| GA4 / mensuração | 0/10 | 8/10 | Instalar tag | 009 | Média |
| CTA por categoria WA | 9/10 | Manter | — | — | — |

**Nota Conversão atual:** 6,8/10 → **Meta pós-P1:** ≥ 8,5/10

---

## 10. Matriz Performance

| Recurso | Tamanho | Problema | Ação P1 | Ganho est. | Fase |
|---------|:-------:|----------|---------|:----------:|------|
| index.html | ~63 KB | CSS/JS inline | Manter (split=P2) | — | — |
| logo-lejardam.jpeg | 146 KB | Grande | Comprimir/WebP | ~70% | 010 |
| fachada-lejardam.jpg | 254 KB | Grande | WebP ~120KB | ~50% | 010 |
| fotos/soft-*.jpg | ~700 KB | OK qualidade | Comprimir ao restaurar | ~30% | 004–010 |
| Unsplash (5 imgs) | ~500 KB+ | 3rd party + latência | Fotos locais | Elimina externo | 005 |
| Google Fonts | ~80–120 KB | Render-blocking | Self-host (P2) | ~50% | 011 |
| sw.js cache | Parcial | Offline limitado | Expandir ASSETS | UX | 011 |

| KPI | Atual | Meta P1 |
|-----|:-----:|:-------:|
| Nota performance | 6,0/10 | ≥ 7,5/10 |
| 1ª carga estimada | 1,5–2,5 MB | < 1,2 MB |
| Requisições 3rd party | Unsplash + Fonts + Maps | Maps + Fonts → depois só Maps |

---

## 11. Matriz de Aprovação

| # | Critério | Obrigatório | Quem valida |
|---|----------|:-----------:|-------------|
| A1 | Plano LJM-SITE-00X documentado | ✅ | Governança / Cursor |
| A2 | Escopo fechado (arquivos listados) | ✅ | Responsável técnico |
| A3 | Preview local validado | ✅ | Responsável técnico |
| A4 | Nenhum dado sensível exposto | ✅ | SP-GEX |
| A5 | Evidência registrada (screenshot/checklist) | ✅ | Responsável técnico |
| A6 | Rollback definido (`git revert`) | ✅ | Responsável técnico |
| A7 | **Aprovação escrita SP-GEX** | ✅ | **SP-GEX (Diogo)** |
| A8 | Janela Cursor correta (LJMS) | ✅ | Operador |

### Aprovação por fase

| Fase | Escopo | Quem autoriza | Deploy? |
|------|--------|---------------|:-------:|
| LJM-SITE-003 | Plano documental | — (esta fase) | ❌ |
| LJM-SITE-004 | Restaurar soft-1.jpg | SP-GEX | Somente após A7 |
| LJM-SITE-005 | Fotos reais | SP-GEX | Somente após A7 |
| LJM-SITE-006 | Sitemap | SP-GEX | Somente após A7 |
| LJM-SITE-007 | OG + Schema | SP-GEX | Somente após A7 |
| LJM-SITE-008 | tel: + Reviews | SP-GEX | Somente após A7 |
| LJM-SITE-009 | GA4 | SP-GEX | Somente após A7 |
| LJM-SITE-010 | WebP/compressão | SP-GEX | Somente após A7 |

### Template registro SP-GEX

```
AUTORIZAÇÃO SP-GEX — LJM-SITE-00X
Data: ____/____/2026
Autorizado por: SP-GEX (Diogo)
Escopo: [arquivos]
Rollback: git revert [hash]
Deploy autorizado: SIM / NÃO
```

---

## 12. Plano de Execução

```
┌─────────────────────────────────────────────────────────┐
│  LJM-SITE-003  Plano documental              ✅ ATUAL   │
└────────────────────────┬────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────┐
│  LJM-SITE-004  P0: Restaurar fotos/soft-1.jpg           │
│  • Selecionar backup Desktop                            │
│  • Copiar para repo (sem editar index.html)             │
│  • Preview local — card + lightbox 5/5                  │
│  • Relatório LJM-SITE-004                               │
│  • SP-GEX autoriza → commit → push → verificar HTTP 200 │
└────────────────────────┬────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────┐
│  LJM-SITE-005  P1: Fotos reais (Soft completa + Luxo)  │
└────────────────────────┬────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────┐
│  LJM-SITE-006  P1: Sitemap + lastmod                    │
└────────────────────────┬────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────┐
│  LJM-SITE-007  P1: OG image + Schema fix                 │
└────────────────────────┬────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────┐
│  LJM-SITE-008  P1: tel: + Google Reviews                │
└────────────────────────┬────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────┐
│  LJM-SITE-009  P1: Google Analytics 4                   │
└────────────────────────┬────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────┐
│  LJM-SITE-010  P1: Compressão + WebP                    │
└────────────────────────┬────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────┐
│  LJM-SITE-011+ P2: SW cache, a11y, split CSS/JS         │
└─────────────────────────────────────────────────────────┘
```

**Regra de ouro:** uma correção por fase · nunca combinar imagem + sitemap + analytics no mesmo deploy.

---

## 13. Ordem recomendada

| Ordem | Fase | Prioridade | Risco | Dependência |
|:-----:|------|:----------:|:-----:|-------------|
| 1 | LJM-SITE-004 — soft-1.jpg | **P0** | Baixo | Nenhuma |
| 2 | LJM-SITE-005 — fotos reais | P1 | Médio | P0 |
| 3 | LJM-SITE-006 — sitemap | P1 | Baixo | — |
| 4 | LJM-SITE-007 — OG/Schema | P1 | Baixo | — |
| 5 | LJM-SITE-008 — conversão | P1 | Baixo | — |
| 6 | LJM-SITE-009 — GA4 | P1 | Baixo | SP-GEX privacidade |
| 7 | LJM-SITE-010 — performance | P1 | Médio | Fotos reais |
| 8 | LJM-SITE-011+ — P2 | P2 | Baixo | P1 completo |

---

## 14. Riscos

| ID | Risco | Prob. | Impacto | Mitigação |
|----|-------|:-----:|:-------:|-----------|
| R-01 | Restaurar soft-1 errado | Média | Médio | Comparar com soft-2..5 antes de commit |
| R-02 | Push sem homologação | Baixa | Alto | DEC-GOV-LJMS-004 + checklist A1–A8 |
| R-03 | Fotos reais indisponíveis (5 cats) | Alta | Médio | Manter Unsplash temporariamente; priorizar Soft + Luxo |
| R-04 | Compressão degrada qualidade | Média | Médio | Manter originais em backup Desktop |
| R-05 | GA4 e privacidade | Baixa | Baixo | Anonimização IP; sem PII |
| R-06 | Confundir repo Desktop vs GitHub | Média | Alto | Sempre editar repo oficial |
| R-07 | Deploy fora de pico indesejado | Baixa | Médio | Agendar com SP-GEX |

---

## 15. Conclusão

O plano executivo P0/P1 está **completo e aprovado**. O bloqueador crítico imediato é **`fotos/soft-1.jpg` (HTTP 404)**, causado pela remoção no commit `d647ff8` sem atualização das referências — solução identificada via backup local.

Esta fase (LJM-SITE-003) **não corrigiu o site**, **não alterou arquivos de produção**, **não realizou commit, push ou deploy**.

**Próxima fase automática:** LJM-SITE-004 — Correção Controlada da Imagem Quebrada Soft e Validação Local Sem Deploy.

---

## Validações obrigatórias

| Validação | Resultado |
|-----------|:---------:|
| LJM-SITE-002 usada como base | ✅ |
| Nenhum arquivo de produção alterado | ✅ |
| Nenhum commit realizado | ✅ |
| Nenhum push realizado | ✅ |
| Nenhum deploy realizado | ✅ |
| Documento LJM-SITE-003 criado/atualizado | ✅ |
| P0 documentado | ✅ |
| P1 documentado | ✅ |
| SEO / Mobile / Conversão / Performance documentados | ✅ |

---

## STATUS FINAL

# ✅ APROVADO

---

*Trilha LJM-SITE-003 · Projeto LJMS · Repositório `/Users/diogo/Documents/GitHub/lejardam`*
