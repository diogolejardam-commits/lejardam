# LJM-SITE-014 — Publicação Controlada do Site Le Jardam Motel

| Campo | Valor |
|-------|-------|
| **ID** | LJM-SITE-014 |
| **Projeto** | LE JARDAM MOTEL — SITE (`LJMS`) |
| **Repositório** | `/Users/diogo/Documents/GitHub/lejardam` |
| **URL produção** | https://lejardammotel.com.br/ |
| **Remote** | `origin` → `https://github.com/diogolejardam-commits/lejardam.git` |
| **Branch** | `main` |
| **Data** | 2026-06-21 |
| **Status** | **REPROVADO** *(push bloqueado — ver §6)* |

---

## 1. Objetivo

Executar a publicação controlada da versão final homologada do site Le Jardam Motel no GitHub Pages, com validação pré e pós-deploy.

---

## 2. Contexto

| Item | Estado |
|------|--------|
| Pacote visual | Homologado SP-GEX (trilha 009→013F-GRAN) |
| Hero Premium | ✅ |
| Galerias Premium | ✅ |
| Gran Luxo | ✅ **100% foto real** *(IA cancelada)* |
| Promos IA corrigidas | ✅ Master · Luxo · Luxo Especial · Hot · Soft |
| DNS / domínio / GitHub Pages config | ❌ Não alterados |

---

## 3. Pacote homologado

| Categoria | Estratégia | Status |
|-----------|------------|--------|
| **Gran Luxo** | 100% foto real (5 fotos) | ✅ |
| Master Luxo | IA discreta 013F-EXEC | ✅ |
| Luxo | IA discreta 013F-EXEC | ✅ |
| Luxo Especial | IA discreta 013F-EXEC | ✅ |
| Hot | IA 013E conforme | ✅ |
| Soft | IA 013E conforme | ✅ |

**Arquivos-chave:** `index.html` · `fotos/` (36 JPG ativos + backups em `_backup/`) · `sitemap.xml` · `sw.js` · manifests · documentação LJM-SITE-*.

---

## 4. Validação pré-publicação

Executada localmente em 2026-06-21 (`http://127.0.0.1:8793/`).

| # | Check | Resultado |
|---|-------|-----------|
| 1 | Hero Premium | ✅ *"Seu refúgio de luxo em Trindade."* |
| 2 | Galerias Premium | ✅ `.cat-card-thumbs` |
| 3 | Gran Luxo sem IA | ✅ 0 refs `gran-luxo-ia` |
| 4 | Master Luxo corrigida | ✅ `master-luxo-ia.jpg` |
| 5 | Luxo corrigida | ✅ `luxo-ia.jpg` |
| 6 | Luxo Especial corrigida | ✅ `luxo-especial-ia.jpg` |
| 7 | Imagens HTTP 200 local | ✅ **35/35** refs no HTML *(Gran Luxo sem slot IA)* |
| 8 | Lightbox | ✅ `#lb-cta` |
| 9 | WhatsApp | ✅ `556235061912` |
| 10 | Mobile / Desktop | ✅ estrutura responsiva homologada |
| 11 | 0 Unsplash | ✅ |
| 12 | 0 arquitetura fictícia (Gran Luxo) | ✅ |

**Bloqueios pré-push:** **Nenhum** *(local)*

---

## 5. Commit realizado

| Campo | Valor |
|-------|-------|
| **Hash final** | `32c04eb4cc7afeb801ff55b9832cfbeb81166670` |
| **Mensagem** | `LJM-SITE-014: publicação final homologada do site Le Jardam Motel` |
| **Arquivos** | 124 changed (+12.296 linhas) |
| **Inclui** | `index.html` · promos 013F-EXEC · Gran Luxo 100% real · docs · `_backup/` · `_screenshots/` |
| **Commit anterior (não publicado)** | `a51d1ef` — promos 013F-EXEC |
| **Resultado** | ✅ **Commit local concluído** |

---

## 6. Push realizado

| Tentativa | Resultado |
|-----------|-----------|
| `git push origin main` (HTTPS) | ❌ `fatal: could not read Username for 'https://github.com': Device not configured` |
| `git push git@github.com:...` (SSH) | ❌ `Permission denied (publickey)` |

| Campo | Valor |
|-------|-------|
| **Push `origin/main`** | ❌ **NÃO REALIZADO** |
| **Branch local** | `main` **2 commits à frente** de `origin/main` |

**Ação necessária (Diogo):**

```bash
cd /Users/diogo/Documents/GitHub/lejardam
git push origin main
```

Aguardar 1–3 minutos e revalidar §7.

---

## 7. Validação da produção

Verificação em https://lejardammotel.com.br/ em 2026-06-21 *(versão parcial — push pendente)*.

| # | Check | Resultado |
|---|-------|-----------|
| 1 | HTTP 200 home | ✅ |
| 2 | Hero Premium | ✅ *"Seu refúgio"* |
| 3 | Galerias | ✅ |
| 4 | Lightbox | ⚠️ versão anterior parcial |
| 5 | WhatsApp | ✅ |
| 6 | Fotos reais | ✅ parcial |
| 7 | Gran Luxo 100% real | ❌ produção ainda referencia `gran-luxo-ia` |
| 8 | Master Luxo 013F-EXEC | ⚠️ `master-luxo-ia.jpg` HTTP 200 *(versão pode ser anterior)* |
| 9 | 0 imagens quebradas | ✅ refs testadas HTTP 200 |
| 10 | 0 placeholders verdes | ✅ |
| 11 | 0 Unsplash | ✅ |
| 12 | Mobile / Desktop | ✅ *(versão atual carrega)* |

**Produção ainda não reflete commit `32c04eb`** (Gran Luxo sem IA).

---

## 8. Riscos

| ID | Risco | Sev. |
|----|-------|------|
| RK-01 | Push bloqueado por credenciais Git | **Alta** |
| RK-02 | Produção desatualizada vs. local homologado | **Alta** |
| RK-03 | Repo aumentado com `_backup/` no commit | Média |
| RK-04 | Hot 2–5 baixa resolução | Baixa |

---

## 9. Ressalvas

| Ressalva | Detalhe |
|----------|---------|
| Push pendente | 2 commits locais não publicados |
| Gran Luxo produção | Ainda exibe slot IA até push |
| Galeria Gran Luxo | 5 fotos reais local vs. 6 slots em produção |
| SEO técnico | lastmod sitemap · OG image — pendente |
| Hot 2–5 | Origem WhatsApp 2016 |

---

## 10. Resultado final

### Checklist obrigatório

| Validação | Status |
|-----------|--------|
| Commit realizado | ✅ `32c04eb` |
| Push realizado | ❌ |
| GitHub Pages atualizado | ❌ |
| Produção HTTP 200 | ✅ |
| Hero Premium em produção | ✅ |
| Galerias Premium em produção | ⚠️ parcial |
| WhatsApp funcional | ✅ |
| 0 imagens quebradas (refs testadas) | ✅ |
| Documento criado | ✅ |
| Gran Luxo 100% real em produção | ❌ *(pendente push)* |

### Status final

## **REPROVADO**

**Motivo:** commit local concluído com sucesso; **push não executado** por ausência de credenciais GitHub no ambiente Cursor. Produção **não reflete** pacote final homologado (Gran Luxo 100% real + promos 013F-EXEC).

**Reclassificação esperada após `git push origin main` + revalidação §7:** **APROVADO COM RESSALVAS** ou **APROVADO**.

---

## 11. Próxima fase

1. **Imediato:** Diogo executa `git push origin main` e revalida produção.
2. **LJM-SITE-015** — Encerramento Oficial do Projeto Site Le Jardam Motel.

---

*Relatório LJM-SITE-014 — 2026-06-21 06:43 — LE JARDAM MOTEL — SITE*
