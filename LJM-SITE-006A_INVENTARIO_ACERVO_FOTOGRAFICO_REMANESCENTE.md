# LJM-SITE-006A — Inventário e Localização de Acervo Fotográfico das Categorias Remanescentes

| Campo | Valor |
|-------|-------|
| **ID** | LJM-SITE-006A |
| **Projeto** | LE JARDAM MOTEL — SITE (`LJMS`) |
| **Repositório** | `/Users/diogo/Documents/GitHub/lejardam` |
| **Base** | `LJM-SITE-005` · `LJM-SITE-006` |
| **Data do inventário** | 2026-06-20 |
| **Modo** | **Somente leitura** — nenhum arquivo alterado |
| **Status** | ⚠️ **APROVADO COM RESSALVAS** |

---

## Controle de escopo

| Regra | Status |
|-------|--------|
| Busca read-only em Desktop, Documents, iCloud, Pictures, Downloads | ✅ |
| Nenhum arquivo alterado | ✅ |
| Nenhum commit / push / deploy | ✅ |
| Nenhuma imagem modificada | ✅ |
| Documento LJM-SITE-006A criado | ✅ |

---

## 1. Objetivo

Localizar fotos reais das categorias **Luxo**, **Luxo Especial**, **Gran Luxo**, **Master Luxo** e **Hot** em acervos locais e na nuvem — **sem alterar nenhum arquivo** — para orientar a substituição das imagens Unsplash e a fase LJM-SITE-006B.

---

## 2. Escopo

### Pesquisado

- Pastas Desktop, Documents, iCloud Drive, Pictures, Downloads
- Diretórios Le Jardam, Motel, Suítes, Fotos Suites
- Histórico Git do repositório `lejardam` (somente leitura)
- Palavras-chave: luxo, luxo especial, gran luxo, master luxo, hot, suíte, suite, motel, le jardam, fotos suites

### Excluído

- Alteração de arquivos, cópias, otimização, publicação
- Fotos de Cardápio, logomarcas, fachada (fora escopo categorias de suíte)
- Categoria **Soft** (já inventariada LJM-SITE-005/006 — referência comparativa)

---

## 3. Diretórios pesquisados

| # | Raiz | Acessível | Observação |
|---|------|-----------|------------|
| 1 | `/Users/diogo/Desktop` | ✅ | 37 pastas relevantes identificadas |
| 2 | `/Users/diogo/Documents` | ✅ | Inclui `GitHub/lejardam`, MOTEL 360 |
| 3 | `/Users/diogo/Library/Mobile Documents/com~apple~CloudDocs` | ✅ | iCloud Drive |
| 4 | `/Users/diogo/Pictures` | ✅ | Sem acervo Le Jardam por nome |
| 5 | `/Users/diogo/Downloads` | ✅ | Sem arquivos por keyword de suíte |

### Pastas estruturais encontradas (Le Jardam — Desktop)

Base: `/Users/diogo/Desktop/Documentos Gerenciais 🍃/Documentos Le jardam/Suítes/`

| Pasta | Categoria site | Arquivos | Status |
|-------|----------------|----------|--------|
| `Luxo` | Luxo | **0** | ❌ Vazia |
| `Luxo Especial` | Luxo Especial | **0** | ❌ Vazia |
| `Projeto luxo especial` | Luxo Especial | **0** | ❌ Vazia |
| `Gran luxo` | Gran Luxo | **0** | ❌ Vazia |
| `Master` | Master Luxo | **0** | ❌ Vazia |
| `Suíte Hot` | Hot | **0** | ❌ Vazia |
| `Suite Soft.` | Soft | **0** | ❌ Vazia (acervo real em `Site Lejardam/`) |
| `Suíte Solar` | — *(não catalogada no site)* | **2** | ⚠️ Legado 2019 |

### Outros locais relevantes

| Local | Conteúdo fotográfico suítes |
|-------|---------------------------|
| `/Users/diogo/Desktop/Site Lejardam/Fotos Suites/Suite Soft/files/` | **Soft apenas** (6 JPG) |
| `/Users/diogo/Documents/GitHub/lejardam/fotos/` | **Soft apenas** (soft-1..6) |
| `/Users/diogo/Documents/MOTEL 360` | **0 imagens** encontradas |
| iCloud `DOCUMENTOS LEJARDAM MOTEL/` | Apenas logomarca antiga |
| Git `lejardam` — histórico `fotos/` | Apenas Soft + PNG Soft removidos + IMG genéricos removidos |

---

## Respostas executivas (1–10)

| # | Pergunta | Resposta |
|---|----------|----------|
| **1** | Existem fotos reais dessas categorias? | **Não.** Nenhuma foto real de Luxo, Luxo Especial, Gran Luxo, Master Luxo ou Hot localizada |
| **2** | Onde estão localizadas? | **Inexistentes.** Pastas-reserva existem vazias em `Documentos Le jardam/Suítes/`; único acervo real permanece **Soft** em `Site Lejardam/Fotos Suites/` |
| **3** | Quantas fotos por categoria? | Luxo **0** · Luxo Especial **0** · Gran Luxo **0** · Master Luxo **0** · Hot **0** · Soft **6** *(referência)* |
| **4** | Quais possuem qualidade suficiente? | **Nenhuma** das 5 categorias remanescentes · Soft: 6 JPG aprovados (1024–1600 px) |
| **5** | Quais categorias continuam sem fotos? | **Todas as 5 remanescentes** |
| **6** | Quais já podem substituir Unsplash? | **Nenhuma** das 5 · **Soft** já substituída localmente (LJM-SITE-004/006) |
| **7** | Acervo suficiente para concluir o site? | **Não** — faltam **5 categorias** (mín. 1 card + 4 galeria cada ≈ 25 fotos) |
| **8** | Qual categoria precisa ser fotografada? | **Todas:** Luxo *(prioridade comercial)*, Luxo Especial, Gran Luxo, Master Luxo, Hot |
| **9** | Percentual real de conclusão fotográfica? | **16,7%** (1/6 categorias com acervo completo) |
| **10** | Site pode ser encerrado após essas fotos? | **Não.** Encerramento visual depende de captura das 5 categorias + SP-GEX deploy + fases P1 restantes (SEO, performance) |

---

## 4. Acervo encontrado

### 4.1 Categorias remanescentes (Luxo → Hot)

**Resultado:** ❌ **Acervo zero** em todos os diretórios pesquisados.

Evidências:

- Pastas organizacionais criadas mas **sem arquivos**
- Busca por filename (`*luxo*`, `*hot*`, `*gran*luxo*`, `*master*luxo*`) — **0 imagens válidas** *(2 falsos positivos GEX descartados)*
- MOTEL 360 — sem imagens de suítes
- iCloud — sem acervo fotográfico de suítes
- Git `lejardam` — **nunca** houve `luxo-*.jpg`, `hot-*.jpg`, etc.; apenas Soft e temporários `IMG_*.JPG` (removidos, não recuperados no disco)

### 4.2 Referência — Soft (fora escopo remanescente, baseline)

| Fonte canônica | JPG | Status site local |
|----------------|-----|-------------------|
| `Site Lejardam/.../Suite Soft/files/` | soft-1 … soft-6 | ✅ Integrado (`fotos/`) |

### 4.3 Achado lateral — Suíte Solar (não substitui categorias site)

| Arquivo | Dimensões | Ano | Veredicto |
|---------|-----------|-----|-----------|
| `Screenshot_20191116-193659_WhatsApp.jpg` | 1077×812 | 2019 | ❌ Reprovada — screenshot WhatsApp, categoria inexistente no site |
| `Screenshot_20191116-193712_WhatsApp.jpg` | 1080×812 | 2019 | ❌ Reprovada — idem |

### 4.4 Histórico Git — `fotos/` (read-only)

| Arquivo | Status atual | Categoria inferida |
|---------|--------------|-------------------|
| soft-1..6.jpg | Restaurados localmente | Soft |
| UUID PNG (5) | Removidos do repo; existem no backup Soft Desktop | Soft |
| IMG_0369..0387.JPG, IMG_4817.PNG | Removidos; **não encontrados no disco** | Indeterminado — possivelmente Soft/iPhone |

---

## 5. Categorias atendidas

| Categoria | Fotos reais | Card | Galeria (≥4) | Substitui Unsplash |
|-----------|-------------|------|--------------|-------------------|
| Luxo | 0 | ❌ | ❌ | ❌ |
| Luxo Especial | 0 | ❌ | ❌ | ❌ |
| Gran Luxo | 0 | ❌ | ❌ | ❌ |
| Master Luxo | 0 | ❌ | ❌ | ❌ |
| Hot | 0 | ❌ | ❌ | ❌ |
| **Soft** *(referência)* | **6** | ✅ | ✅ (6) | ✅ *(local)* |

**Categorias remanescentes atendidas:** **0 / 5**

---

## 6. Categorias pendentes

| Prioridade | Categoria | Qtd suítes | Fotos mínimas sugeridas | Pasta destino sugerida |
|------------|-----------|------------|-------------------------|------------------------|
| **P0** | **Luxo** | 10 | 1 card + 4–6 galeria | `Documentos Le jardam/Suítes/Luxo/` |
| P1 | Luxo Especial | 3 | 1 + 4–5 | `…/Luxo Especial/` |
| P1 | Gran Luxo | 1 | 1 + 5 | `…/Gran luxo/` |
| P1 | Master Luxo | 1 | 1 + 5 | `…/Master/` |
| P2 | Hot | 1 | 1 + 4 | `…/Suíte Hot/` |

**Total estimado a capturar:** **25–30 fotos** para cobertura mínima completa.

---

## 7. Matriz de fotos

| Categoria | Local esperado | Encontrado | Qtd | Card | Galeria | Observação |
|-----------|----------------|------------|-----|------|---------|------------|
| Luxo | `Suítes/Luxo/` | Pasta vazia | 0 | — | — | Estrutura pronta |
| Luxo Especial | `Suítes/Luxo Especial/` | Pasta vazia | 0 | — | — | + `Projeto luxo especial/` vazia |
| Gran Luxo | `Suítes/Gran luxo/` | Pasta vazia | 0 | — | — | — |
| Master Luxo | `Suítes/Master/` | Pasta vazia | 0 | — | — | Nome abreviado vs site |
| Hot | `Suítes/Suíte Hot/` | Pasta vazia | 0 | — | — | — |
| Soft *(ref.)* | `Site Lejardam/.../files/` | ✅ | 6 | soft-1 | soft-1..6 | Concluída |

---

## 8. Matriz de qualidade

*Aplicável apenas onde há arquivos. Categorias remanescentes: **sem dados**.*

| Categoria | Arquivos avaliados | Aprovadas | Aprovadas c/ ressalva | Reprovadas | Qualidade média |
|-----------|-------------------|-----------|----------------------|------------|-----------------|
| Luxo | 0 | 0 | 0 | 0 | — |
| Luxo Especial | 0 | 0 | 0 | 0 | — |
| Gran Luxo | 0 | 0 | 0 | 0 | — |
| Master Luxo | 0 | 0 | 0 | 0 | — |
| Hot | 0 | 0 | 0 | 0 | — |
| Soft *(ref.)* | 6 JPG canônicos | 6 | 0 | 0 | Média (1024–1600 px) |

**Critério:** lado curto ≥ 800 px · JPG ≤ 500 KB ideal · conteúdo real da suíte.

---

## 9. Percentual de cobertura

### Por categoria (site = 6 categorias)

| Métrica | Valor |
|---------|-------|
| Categorias com acervo completo (card + galeria ≥4) | **1 / 6** |
| Categorias remanescentes com ≥1 foto | **0 / 5** |
| **Conclusão fotográfica global** | **16,7%** |

### Por fotos (estimativa mínima 30 fotos = 6 cats × 5)

| Métrica | Valor |
|---------|-------|
| Fotos disponíveis (Soft) | 6 |
| Fotos necessárias (mínimo) | ~30 |
| **Cobertura por volume** | **20,0%** |

### Substituição Unsplash

| Item | Status |
|------|--------|
| URLs Unsplash restantes no site | **5** (Luxo → Hot) |
| Substituíveis agora | **0** |
| Soft (real) | ✅ Concluída localmente |

```text
COBERTURA FOTOGRÁFICA LJMS
████████████████░░░░░░░░░░░░░░░░░░░░░░░░  16,7% (1/6 categorias)
Soft ████████████████████  100%
Luxo ░░░░░░░░░░░░░░░░░░░░    0%
Luxo Especial ░░░░░░░░░░░░    0%
Gran Luxo ░░░░░░░░░░░░░░░░    0%
Master Luxo ░░░░░░░░░░░░░░    0%
Hot ░░░░░░░░░░░░░░░░░░░░░░    0%
```

---

## 10. Próxima ação recomendada

### Imediata (humana — pré-requisito LJM-SITE-006B)

1. **Sessão fotográfica presencial** nas 5 categorias remanescentes, priorizando **Luxo** (10 suítes, maior impacto comercial).
2. Depositar arquivos nas pastas já existentes em `Documentos Le jardam/Suítes/` **ou** espelhar estrutura `Site Lejardam/Fotos Suites/Suite {Categoria}/files/`.
3. Mínimo por categoria: **1 foto paisagem (card)** + **4 fotos galeria** com legendas.

### Automática (após acervo disponível)

| Fase | Ação |
|------|------|
| **LJM-SITE-006B** | Seleção oficial das fotos reais para substituição Unsplash |
| **LJM-SITE-006C** *(implícita)* | Cópia controlada + atualização `CATEGORIAS[]` por categoria |
| **LJM-SITE-007** | Deliberação SP-GEX para publicação |

### Bloqueio LJM-SITE-006B

⚠️ **LJM-SITE-006B não pode selecionar fotos para Luxo–Hot** enquanto acervo permanecer vazio. Execução limitada a **validação do plano Soft** e **preparação de matriz de seleção vazia** para categorias pendentes.

---

## Validações obrigatórias

| Validação | Resultado |
|-----------|-----------|
| Nenhum arquivo alterado | ✅ |
| Nenhum commit | ✅ |
| Nenhum push | ✅ |
| Nenhum deploy | ✅ |
| Nenhuma imagem modificada | ✅ |
| Documento LJM-SITE-006A criado | ✅ |

---

## Critérios de aprovação

| Critério | Status |
|----------|--------|
| Acervo mapeado | ✅ |
| Categorias classificadas | ✅ |
| Cobertura calculada | ✅ |
| Próxima ação definida | ✅ |

---

## Status final

**⚠️ APROVADO COM RESSALVAS**

| Ressalva | Descrição |
|----------|-----------|
| **RESS-006A-01** | **Zero fotos** para Luxo, Luxo Especial, Gran Luxo, Master Luxo e Hot |
| **RESS-006A-02** | Pastas-reserva existem mas estão **vazias** — estrutura organizacional pronta |
| **RESS-006A-03** | LJM-SITE-006B **bloqueada** para substituição Unsplash até captura fotográfica |
| **RESS-006A-04** | Busca iCloud limitada a arquivos sincronizados localmente; Photos Library sem indexação por keyword |

**Próxima fase:** **LJM-SITE-006B** — Seleção Oficial das Fotos Reais *(condicionada à disponibilização do acervo)*.

---

*Documento emitido na fase LJM-SITE-006A — Inventário Acervo Remanescente.*
*Projeto: LE JARDAM MOTEL — SITE — execução read-only.*
