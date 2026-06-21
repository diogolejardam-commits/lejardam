# LJM-SITE-002 — Auditoria Completa do Site em Produção

| Campo | Valor |
|-------|-------|
| **ID** | LJM-SITE-002 |
| **Projeto** | LE JARDAM MOTEL — SITE (`LJMS`) |
| **Repositório** | `/Users/diogo/Documents/GitHub/lejardam` |
| **URL produção** | https://lejardammotel.com.br/ |
| **Hospedagem** | GitHub Pages (CNAME: `lejardammotel.com.br`) |
| **Governança** | GDE-GOV-050-LJMS (catalogação homologada) |
| **Data da auditoria** | 2026-06-20 |
| **Modo** | Somente leitura — nenhum arquivo de produção alterado |
| **Commit analisado** | `823fa7c` (branch `main`) |
| **Status** | ✅ **APROVADO COM RESSALVAS** |

---

## 1. Objetivo

Executar auditoria técnica, comercial e de experiência do site público do Motel Le Jardam em produção, identificando problemas, riscos e oportunidades de melhoria — **sem alterar código, sem commit, sem push e sem deploy**, conforme trilha LJMS pós-catalogação GEX.

---

## 2. Escopo

| Incluído | Excluído |
|----------|----------|
| `index.html` (HTML + CSS + JS inline) | Sistemas internos (Le Jardam OS, Motel 360°, etc.) |
| `sitemap.xml`, `robots.txt`, PWA (`site.webmanifest`, `sw.js`) | Backend, APIs, integrações GEX |
| Assets locais (`fotos/`, favicons, logos) | Alterações em produção |
| Verificação HTTP em produção | Testes de carga automatizados |

---

## 3. Estrutura do projeto

```
lejardam/
├── index.html              ← Página única (~63 KB)
├── CNAME                   ← lejardammotel.com.br
├── sitemap.xml / robots.txt
├── site.webmanifest        ← Referenciado pelo HTML
├── manifest.json           ← Legado (não referenciado)
├── sw.js
├── favicons + icon-192/512.png
├── logo-lejardam.jpeg      ← 146 KB
├── fachada-lejardam.jpg    ← 254 KB
└── fotos/
    ├── soft-2.jpg … soft-5.jpg
    └── soft-1.jpg AUSENTE (commit d647ff8 removeu; 404 em produção)
```

**Stack:** HTML5 estático + CSS custom properties + JavaScript vanilla. Sem build, sem `package.json`.

---

## 4. Auditoria HTML

| Aspecto | Status | Observação |
|---------|--------|------------|
| DOCTYPE / `lang="pt-BR"` | ✅ | Correto |
| Viewport | ✅ | Configurado |
| Semântica | ✅ | header, nav, section, footer, article |
| Hierarquia headings | ✅ | 1× h1, h2 por seção |
| IDs de âncora | ✅ | #sobre, #suites, #tarifas, #servicos, #reserva, #localizacao |
| Imagens locais | ⚠️ | fachada e logo OK; `fotos/soft-1.jpg` **404** |
| Imagens externas | ⚠️ | 5 categorias usam Unsplash |
| Lightbox | ✅ | Galeria Soft (5 fotos; 1 quebrada) |
| Mapa | ✅ | iframe Google Maps + link direções |

**Seções:** Hero → Sobre → Suítes → Tarifas → Serviços → Reserva → Localização → Footer.

---

## 5. Auditoria CSS

| Aspecto | Status | Observação |
|---------|--------|------------|
| Design tokens | ✅ | Paleta verde/dourado/creme |
| Tipografia | ✅ | Playfair + Cormorant + Inter (Google Fonts) |
| Responsivo | ✅ | Breakpoints 900/700/600px |
| Nav scroll + mobile drawer | ✅ | Funcional |
| Tarifas mobile | ✅ | Tabela → cards com data-label |
| `prefers-reduced-motion` | ✅ | Respeitado |
| Grid suítes 380px min | ⚠️ | Risco scroll horizontal em ~320px |
| CSS inline ~1.000 linhas | ⚠️ | Sem cache separado |

---

## 6. Auditoria JavaScript

| Funcionalidade | Status | Observação |
|----------------|--------|------------|
| CONFIG centralizado | ✅ | WhatsApp, endereço, telefone |
| Render 6 categorias / 17 suítes | ✅ | Via CATEGORIAS[] |
| Toggle tarifas semana/FDS | ✅ | ARIA básico em tabs |
| WhatsApp dinâmico | ✅ | Hero + flutuante + footer + por categoria |
| Lightbox + swipe + teclado | ✅ | Soft only |
| Menu mobile | ⚠️ | Sem aria-expanded |
| Service Worker | ⚠️ | Cache incompleto |
| Dependência JS | ⚠️ | Suítes vazias sem JS; sem noscript |

---

## 7. Auditoria SEO

| Item | Status | Detalhe |
|------|--------|---------|
| title / description / canonical | ✅ | Completos |
| Open Graph + Twitter Card | ✅ | Presentes |
| Schema.org LodgingBusiness | ✅ | Rico (endereço, geo, amenities) |
| Geo tags | ✅ | Trindade/GO |
| Sitemap com #anchors | ⚠️ | Google não indexa fragmentos como páginas |
| lastmod sitemap | ⚠️ | 2026-04-16 desatualizado |
| OG image | ⚠️ | Logo JPEG declarado 1200×630 |
| Schema contactOption TollFree | ⚠️ | Incorreto para número BR local |
| Conteúdo suítes via JS | ⚠️ | Crawlers modernos executam JS; HTML estático seria mais seguro |
| meta keywords | ⚠️ | Obsoleto |

**Nota SEO: 7,5/10**

---

## 8. Auditoria Mobile

| Item | Status |
|------|--------|
| Viewport + menu hamburger | ✅ |
| Tipografia fluida (clamp) | ✅ |
| Tarifas responsivas | ✅ |
| WhatsApp flutuante 58px | ✅ |
| Mapa aspect-ratio adaptativo | ✅ |
| Grid 380px mínimo | ⚠️ |
| Performance 3G (fonts + Unsplash) | ⚠️ |
| PWA instalável | ✅ |

**Nota Mobile: 8,0/10**

---

## 9. Auditoria PWA

| Item | Status |
|------|--------|
| site.webmanifest (HTML) | ✅ Ícones PNG dedicados |
| manifest.json legado | ⚠️ Duplicata não referenciada |
| sw.js registrado | ✅ HTTP 200 |
| Cache SW | ⚠️ Só /, index.html, logo, manifest.json |
| Shortcuts WA + Tarifas | ✅ |

---

## 10. Auditoria Comercial

| Elemento | Status |
|----------|--------|
| WhatsApp (62) 3506-1912 | ✅ 4+ pontos de contato |
| Tarifas 6 cat × 2 períodos | ✅ |
| Endereço + mapa + rotas | ✅ |
| Instagram @lejardam | ✅ |
| Horários 24h + pagamentos | ✅ |
| Fotos reais das suítes | ❌ 5/6 stock Unsplash; Soft com foto quebrada |
| Prova social / reviews | ❌ Ausente |
| Telefone clicável tel: | ⚠️ Ausente |
| Analytics | ❌ Ausente |

**Nota Conversão: 6,8/10**

---

## 11. Problemas encontrados

### Respostas diretas

| # | Pergunta | Resposta |
|---|----------|----------|
| 1 | Site tecnicamente saudável? | **Sim, com ressalvas** |
| 2 | Erros críticos? | **1:** `fotos/soft-1.jpg` → HTTP **404** |
| 3 | Erros médios? | **8** (ver matriz P-002 a P-012) |
| 4 | Erros baixos? | **10** (ver matriz P-013 a P-020) |
| 5 | Links quebrados? | **Sim:** soft-1.jpg |
| 6 | Imagens ausentes? | **Sim:** soft-1.jpg |
| 7 | Problemas SEO? | **Moderados** |
| 8 | Problemas mobile? | **Leves** |
| 9 | Problemas acessibilidade? | **Moderados** |
| 10 | 20 melhorias principais? | Seção 12 |

---

## 12. Melhorias recomendadas — Top 20

| # | Melhoria | Prioridade |
|---|----------|------------|
| 1 | Restaurar/substituir `fotos/soft-1.jpg` | P0 |
| 2 | Substituir fotos Unsplash por fotos reais | P1 |
| 3 | Completar galerias das 5 categorias | P1 |
| 4 | Otimizar imagens (WebP, compressão) | P1 |
| 5 | Criar imagem OG 1200×630 dedicada | P1 |
| 6 | Simplificar sitemap (só URL raiz) | P1 |
| 7 | Atualizar lastmod sitemap | P1 |
| 8 | Prerender suítes no HTML estático | P2 |
| 9 | Self-host ou subset de fontes | P2 |
| 10 | Expandir cache Service Worker | P2 |
| 11 | Unificar/remover manifest.json legado | P2 |
| 12 | Corrigir Schema contactOption | P2 |
| 13 | aria-expanded no menu mobile | P2 |
| 14 | Focus trap no lightbox | P2 |
| 15 | Skip link acessibilidade | P3 |
| 16 | Grid suítes minmax 280px | P3 |
| 17 | Link tel:+556235061912 | P2 |
| 18 | Integrar Google Reviews | P2 |
| 19 | Google Analytics 4 | P2 |
| 20 | Separar CSS/JS externos | P3 |

---

## 13. Ranking de prioridades

| Prioridade | Prazo | Itens |
|------------|-------|-------|
| **P0** | Imediato | Restaurar soft-1.jpg |
| **P1** | 1–2 sem | Fotos reais, OG, sitemap, galerias |
| **P2** | 2–4 sem | Performance, SW, GA4, a11y |
| **P3** | Backlog | Split CSS/JS, print CSS |

---

## Matriz de Problemas

| ID | Sev. | Área | Problema | Evidência |
|----|------|------|----------|-----------|
| P-001 | **Crítico** | Imagens | soft-1.jpg 404 | HTTP 404 produção; commit d647ff8 |
| P-002 | Médio | Imagens | 5 cats Unsplash | CATEGORIAS[].foto externo |
| P-003 | Médio | SEO | Sitemap com #anchors | sitemap.xml L10–33 |
| P-004 | Médio | SEO | lastmod desatualizado | 2026-04-16 |
| P-005 | Médio | SEO | OG image dimensões | logo como OG |
| P-006 | Médio | SEO | Schema TollFree incorreto | JSON-LD L105 |
| P-007 | Médio | Perf. | Google Fonts 3 famílias | link L117 |
| P-008 | Médio | Perf. | JPEGs sem WebP | fachada 254KB, logo 146KB |
| P-009 | Médio | PWA | SW cache incompleto | sw.js ASSETS |
| P-010 | Médio | PWA | manifest duplicado | manifest.json vs site.webmanifest |
| P-011 | Médio | A11y | Menu sem aria-expanded | #menuToggle |
| P-012 | Médio | A11y | Lightbox sem focus trap | modal L1489 |
| P-013 | Baixo | HTML | Logo href="#" | L1128 |
| P-014 | Baixo | HTML | WA href="#" pré-JS | L1381, L1522 |
| P-015 | Baixo | HTML | Suítes só via JS | #suitesGrid vazio |
| P-016 | Baixo | CSS | Grid 380px | L466 |
| P-017 | Baixo | SEO | meta keywords | L11 |
| P-018 | Baixo | Comercial | Sem tel: link | #phoneLine |
| P-019 | Baixo | Comercial | Sem prova social | — |
| P-020 | Baixo | Analytics | Sem GA4/GTM | — |

---

## Matriz de Melhorias

| ID | Melhoria | Esforço | Impacto | Prioridade |
|----|----------|---------|---------|------------|
| M-001 | Restaurar soft-1.jpg | Baixo | Alto | P0 |
| M-002 | Fotos reais 6 cats | Médio | Alto | P1 |
| M-003 | Galerias completas | Médio | Alto | P1 |
| M-004 | OG 1200×630 | Baixo | Médio | P1 |
| M-005 | Sitemap só / | Baixo | Médio | P1 |
| M-006 | WebP imagens | Médio | Médio | P2 |
| M-007 | HTML estático suítes | Médio | Médio | P2 |
| M-008 | Self-host fontes | Médio | Médio | P2 |
| M-009 | Expandir cache SW | Baixo | Baixo | P2 |
| M-010 | Unificar manifest | Baixo | Baixo | P2 |
| M-011 | aria-expanded + focus | Médio | Médio | P2 |
| M-012 | Skip link | Baixo | Baixo | P3 |
| M-013 | Grid 280px | Baixo | Baixo | P3 |
| M-014 | tel: link | Baixo | Médio | P2 |
| M-015 | Google Reviews | Médio | Alto | P2 |
| M-016 | GA4 | Baixo | Alto | P2 |
| M-017 | Split CSS/JS | Alto | Médio | P3 |
| M-018 | Schema TollFree | Baixo | Baixo | P3 |
| M-019 | noscript fallback | Baixo | Baixo | P3 |
| M-020 | Banner promoções | Médio | Médio | P3 |

---

## Matriz SEO

| Critério | Nota | Status |
|----------|------|--------|
| Title / description | 9/10 | ✅ |
| Canonical | 10/10 | ✅ |
| Open Graph | 7/10 | ⚠️ |
| Schema.org | 8/10 | ⚠️ |
| Sitemap | 4/10 | ⚠️ |
| Robots.txt | 10/10 | ✅ |
| Conteúdo indexável | 6/10 | ⚠️ |
| Core Web Vitals (est.) | 6/10 | ⚠️ |
| Mobile-friendly | 8/10 | ✅ |

---

## Matriz Mobile

| Critério | Nota | Status |
|----------|------|--------|
| Viewport | 10/10 | ✅ |
| Menu responsivo | 8/10 | ✅ |
| CTAs / WA flutuante | 10/10 | ✅ |
| Tarifas mobile | 10/10 | ✅ |
| Grid suítes | 6/10 | ⚠️ |
| Performance 3G | 5/10 | ⚠️ |
| PWA | 8/10 | ✅ |
| Touch galeria | 9/10 | ✅ |

---

## Matriz Conversão Comercial

| Critério | Nota | Status |
|----------|------|--------|
| WhatsApp visível | 10/10 | ✅ |
| Tarifas | 10/10 | ✅ |
| Endereço / mapa | 10/10 | ✅ |
| Fotos suítes | 3/10 | ❌ |
| Prova social | 0/10 | ❌ |
| Instagram | 8/10 | ✅ |
| Mensuração | 0/10 | ❌ |
| tel: clicável | 4/10 | ⚠️ |

---

## Matriz Performance

| Métrica | Valor est. | Status |
|---------|------------|--------|
| index.html | ~63 KB | ⚠️ |
| logo-lejardam.jpeg | 146 KB | ⚠️ |
| fachada-lejardam.jpg | 254 KB | ⚠️ |
| fotos/ (4 arquivos) | ~700 KB | ⚠️ |
| Google Fonts | ~80–120 KB | ⚠️ |
| Unsplash (5 imgs) | ~500 KB+ | ⚠️ |
| **Total 1ª carga** | **~1,5–2,5 MB** | ⚠️ |
| HTTPS + CDN Fastly | ✅ | ✅ |
| Lazy loading | Parcial | ⚠️ |

**Nota Performance: 6,0/10**

---

## Verificação produção (2026-06-20)

| Recurso | HTTP |
|---------|------|
| `/` | 200 ✅ |
| `/fotos/soft-1.jpg` | **404 ❌** |
| `/fotos/soft-2.jpg` | 200 ✅ |
| `/site.webmanifest` | 200 ✅ |
| `/sw.js` | 200 ✅ |
| favicons / logo / fachada | 200 ✅ |

---

## 14. Conclusão

O site **https://lejardammotel.com.br/** está **operacional, publicado e comercialmente funcional**, agora sob governança **LJMS** (GDE-GOV-050-LJMS). A arquitetura estática single-page é adequada: SEO bem configurado no `<head>`, conversão WhatsApp em múltiplos pontos, tarifas transparentes e mapa integrado.

As lacunas principais: **imagem ausente** (`soft-1.jpg`), **fotos stock** em 5 categorias e **refinamentos** de SEO, performance e prova social.

---

## Controle de execução

| Critério | Resultado |
|----------|:---------:|
| Auditoria concluída | ✅ |
| Site/produção não alterados | ✅ |
| Nenhum commit / push / deploy | ✅ |
| Relatório entregue | ✅ |
| Trilha GEX LJMS respeitada | ✅ |

---

## STATUS FINAL

# ✅ APROVADO COM RESSALVAS

**Próxima fase sugerida:** `LJM-SITE-003` — Plano de correção P0/P1 (restaurar soft-1.jpg, fotos reais, sitemap) — **somente após autorização SP-GEX e trilha formal DEC-GOV-LJMS-004**.

---

*Trilha: LJM-SITE-002 · Projeto LJMS · Repositório `/Users/diogo/Documents/GitHub/lejardam`*
