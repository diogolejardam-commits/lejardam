# LJM-SITE-014 — Publicação Controlada do Site Le Jardam Motel

| Campo | Valor |
|-------|-------|
| **ID** | LJM-SITE-014 |
| **Projeto** | LE JARDAM MOTEL — SITE (`LJMS`) |
| **Repositório** | `/Users/diogo/Documents/GitHub/lejardam` |
| **URL produção** | https://lejardammotel.com.br/ |
| **Remote** | `origin` → `https://github.com/diogolejardam-commits/lejardam.git` |
| **Branch** | `main` |
| **Data** | 2026-06-20 |
| **Status** | *(atualizado pós-push)* |

---

## 1. Objetivo

Publicar controladamente o site homologado (Hero Premium, Galerias Premium, fotos reais + promos IA SP-GEX) no **GitHub Pages**, com validação pré e pós-deploy.

---

## 2. Contexto

| Item | Estado |
|------|--------|
| Trilha homologada | 009 → 013F-EXEC |
| Commit base site premium | `a971f76541814e883f38c89426dd4656c469d36d` *(já em produção)* |
| Correção promos IA | LJM-SITE-013F-EXEC *(4 substituídas · Hot/Soft mantidas)* |
| DNS / domínio / GitHub Pages config | ❌ Não alterados |

---

## 3. Fases base

LJM-SITE-009 · 010 · 012 · 013 · 013B · 013C · 013D · 013E · **013F · 013F-EXEC**

---

## 4. Validação pré-publicação

Executada localmente em 2026-06-20.

| # | Check | Resultado |
|---|-------|-----------|
| 1 | git status | ✅ 4 `*-ia.jpg` modificados (013F-EXEC) |
| 2 | Arquivos conferidos | ✅ |
| 3 | `index.html` Hero Premium | ✅ inalterado nesta publicação |
| 4 | Pasta `fotos/` | ✅ 37 JPG |
| 5 | 0 placeholders IA verdes | ✅ |
| 6 | 0 Unsplash | ✅ |
| 7 | 0 suítes fictícias | ✅ *(Gran Luxo piscina fictícia removida)* |
| 8 | 0 imagens quebradas local | ✅ **36/36 HTTP 200** |
| 9 | Galerias Premium | ✅ |
| 10 | Lightbox | ✅ |
| 11 | WhatsApp `556235061912` | ✅ |
| 12 | Mobile / Desktop | ✅ *(estrutura homologada)* |
| 13 | sitemap.xml | ✅ |
| 14 | sw.js | ✅ |
| 15 | Promos 013F-EXEC homologadas | ✅ Gran · Master · Luxo · Luxo Especial |

**Bloqueios pré-push:** **Nenhum**

---

## 5. Arquivos publicados

### Commit anterior (site premium — já em produção)

| Path | Status |
|------|--------|
| `index.html` | ✅ Publicado (`a971f76`) |
| `fotos/` *(acervo real + promos 013E)* | ✅ Publicado |
| `sitemap.xml` · `sw.js` · manifests | ✅ Publicado |

### Commit desta publicação (013F-EXEC)

| Path | Alteração |
|------|-----------|
| `fotos/gran-luxo-ia.jpg` | ✅ Substituída — sem piscina fictícia |
| `fotos/master-luxo-ia.jpg` | ✅ Substituída — TV streaming |
| `fotos/luxo-ia.jpg` | ✅ Substituída — sem bacia fictícia |
| `fotos/luxo-especial-ia.jpg` | ✅ Substituída — refino premium |
| `fotos/hot-ia.jpg` | ⏭️ Mantida 013E |
| `fotos/soft-ia.jpg` | ⏭️ Mantida 013E |
| `LJM-SITE-014_PUBLICACAO_CONTROLADA.md` | ✅ Atualizado |

---

## 6. Commit realizado

*(Preenchido após commit)*

---

## 7. Push realizado

*(Preenchido após push)*

---

## 8. Validação pós-publicação

*(Preenchido após deploy GitHub Pages)*

---

## 9. Ressalvas

| Ressalva | Impacto |
|----------|---------|
| Hot 2–5 baixa resolução (WhatsApp 2016) | Não bloqueante |
| SEO técnico pendente (lastmod sitemap, OG image) | Não bloqueante |
| Promos IA — revisão humana SP-GEX recomendada pós-deploy | Monitorar |
| `sw.js` referencia `manifest.json` | Menor |

---

## 10. Resultado final

*(Preenchido após validação produção)*

---

## 11. Próxima fase recomendada

**LJM-SITE-015 — Encerramento Oficial do Projeto Site Le Jardam Motel**

---

*Relatório LJM-SITE-014 — LE JARDAM MOTEL — SITE*
