# LJM-SITE-005 — Inventário Fotográfico por Categorias

| Campo | Valor |
|-------|-------|
| **ID** | LJM-SITE-005 |
| **Projeto** | LE JARDAM MOTEL — SITE (`LJMS`) |
| **Repositório** | `/Users/diogo/Documents/GitHub/lejardam` |
| **Fonte fotográfica** | `/Users/diogo/Desktop/Site Lejardam/Fotos Suites/` |
| **Base** | `LJM-SITE-002` · `LJM-SITE-003` · `LJM-SITE-004` |
| **Data do inventário** | 2026-06-20 |
| **Modo** | Documental read-only — **sem alteração operacional** |
| **Status** | ⚠️ **APROVADO COM RESSALVAS** |

---

## Controle de escopo

| Regra | Status |
|-------|--------|
| Execução exclusiva em `/Users/diogo/Documents/GitHub/lejardam` (documento) | ✅ |
| Inventário a partir de fotos reais (backup Desktop) | ✅ |
| Nenhuma foto alterada / otimizada / renomeada / movida | ✅ |
| Nenhuma imagem publicada | ✅ |
| `index.html` não alterado | ✅ |
| Commit / push / deploy | ❌ Não executados |
| Documento LJM-SITE-005 criado | ✅ |

---

## 1. Objetivo

Mapear todas as fotos reais disponíveis no backup oficial, classificar por categoria de suíte, avaliar qualidade para uso web e produzir **plano de substituição** das 5 imagens Unsplash temporárias — **sem executar substituição nesta fase**.

---

## 2. Escopo

### Incluído

- Varredura completa de `Fotos Suites/` e subpastas
- Inventário por categoria (Luxo, Luxo Especial, Gran Luxo, Master Luxo, Hot, Soft)
- Matrizes de categorias, qualidade e seleção
- Plano de substituição para LJM-SITE-006
- Respostas às 6 perguntas executivas

### Excluído

- Edição de `index.html`, assets ou configs
- Cópia de arquivos para o repositório
- Otimização, conversão PNG→JPG, renomeação
- Commit, push, deploy
- Captura fotográfica in loco (ausência documentada)

---

## 3. Estrutura de pastas

### 3.1 Backup oficial (`Fotos Suites/`)

```
/Users/diogo/Desktop/Site Lejardam/Fotos Suites/
├── Cardápio/                          (2 PNG — fora escopo suítes)
├── Fachada Nova /
│   └── Fachada 2026.PNG               (1 PNG — fachada, não categoria)
└── Suite Soft/
    ├── *.PNG                          (5 PNG originais iPhone)
    ├── soft-1 (1).jpg                 (1 JPG — duplicata errada, ver §8)
    ├── soft-2.jpg … soft-4.jpg        (3 JPG soltos — parciais)
    ├── files/                         (6 JPG — **conjunto canônico**)
    │   └── soft-1.jpg … soft-6.jpg
    └── files 2/                       (6 JPG — **idênticos a files/**)
        └── soft-1.jpg … soft-6.jpg
```

### 3.2 Pastas ausentes (crítico)

| Categoria esperada | Pasta no backup | Status |
|--------------------|-----------------|--------|
| Luxo | `Suite Luxo/` ou equivalente | ❌ **INEXISTENTE** |
| Luxo Especial | — | ❌ **INEXISTENTE** |
| Gran Luxo | — | ❌ **INEXISTENTE** |
| Master Luxo | — | ❌ **INEXISTENTE** |
| Hot | — | ❌ **INEXISTENTE** |
| Soft | `Suite Soft/` | ✅ **EXISTENTE** |

### 3.3 Estado atual no site (`index.html`)

| Categoria | Card (foto) | Galeria | Origem atual |
|-----------|-------------|---------|--------------|
| Luxo | Unsplash | vazia | Externa |
| Luxo Especial | Unsplash | vazia | Externa |
| Gran Luxo | Unsplash | vazia | Externa |
| Master Luxo | Unsplash | vazia | Externa |
| Hot | Unsplash | vazia | Externa |
| Soft | `fotos/soft-1.jpg` | 5 fotos locais | **Real** (LJM-SITE-004) |

---

## Respostas executivas (1–6)

| # | Pergunta | Resposta |
|---|----------|----------|
| **1** | Quantas fotos existem por categoria? | **Soft:** 6 JPG canônicos + 5 PNG originais · **Luxo / Luxo Especial / Gran Luxo / Master Luxo / Hot:** **0** |
| **2** | Quais possuem qualidade suficiente para o site? | **Soft JPG (`files/`):** 6/6 aprovadas (1024–1600 px) · **Soft PNG:** 5/5 resolução OK, porém peso excessivo para web · **Demais categorias:** nenhuma foto disponível |
| **3** | Quais precisam de tratamento? | PNG Soft (2,0–2,5 MB → conversão/compressão) · `soft-1 (1).jpg` (nome errado, conteúdo = soft-2) · Futuras fotos das 5 categorias ausentes (captura + pós-produção) |
| **4** | Quais categorias possuem fotos insuficientes? | **Luxo, Luxo Especial, Gran Luxo, Master Luxo, Hot** — **zero fotos** no backup |
| **5** | Qual categoria priorizar? | **Operacional imediato:** Soft (única pronta; ampliar galeria com soft-6) · **Comercial estratégico:** **Luxo** (10 suítes, categoria mais procurada) — **requer sessão fotográfica** antes de LJM-SITE-006 |
| **6** | Estrutura de galeria recomendada? | Modelo **Soft:** 1 foto card (`foto`) + galeria 4–6 itens (`src` + `legenda`); card mínimo 1200 px largura; demais categorias replicar padrão |

---

## 4. Inventário fotográfico

### 4.1 Resumo quantitativo

| Origem | Arquivos | Categorias de suíte cobertas |
|--------|----------|------------------------------|
| `Suite Soft/files/` (canônico) | 6 JPG | Soft |
| `Suite Soft/files 2/` | 6 JPG (duplicata) | Soft |
| `Suite Soft/*.PNG` | 5 PNG | Soft (originais) |
| `Suite Soft/` soltos | 4 JPG | Soft (parciais/duplicatas) |
| `Fachada Nova/` | 1 PNG | — (institucional) |
| `Cardápio/` | 2 PNG | — (cardápio) |
| **Total arquivos inventariados** | **24** | **1/6 categorias** |

### 4.2 Inventário detalhado — conjunto canônico Soft (`files/`)

| Arquivo | Dimensões | Bytes | MP | Orientação | Uso sugerido |
|---------|-----------|-------|-----|------------|--------------|
| `soft-1.jpg` | 1536×1024 | 183 534 | 1,57 | Paisagem | **Card Soft** (já no site) |
| `soft-2.jpg` | 1536×1024 | 180 803 | 1,57 | Paisagem | Galeria |
| `soft-3.jpg` | 1536×1024 | 185 019 | 1,57 | Paisagem | Galeria |
| `soft-4.jpg` | 1024×1536 | 201 918 | 1,57 | Retrato | Galeria |
| `soft-5.jpg` | 1024×1536 | 132 227 | 1,57 | Retrato | Galeria |
| `soft-6.jpg` | 1600×1066 | 165 596 | 1,71 | Paisagem | Galeria (reserva — **não no site**) |

**Integridade:** `files/` e `files 2/` — MD5 **idênticos** em soft-1..6 (duplicata de backup).

---

## 5. Fotos por categoria

### Matriz de Categorias

| Categoria | Qtd suítes (site) | Fotos backup | Fotos JPG web-ready | Fotos PNG originais | Card site atual | Galeria site |
|-----------|-------------------|--------------|---------------------|---------------------|-----------------|--------------|
| **Luxo** | 10 | **0** | 0 | 0 | Unsplash | vazia |
| **Luxo Especial** | 3 | **0** | 0 | 0 | Unsplash | vazia |
| **Gran Luxo** | 1 | **0** | 0 | 0 | Unsplash | vazia |
| **Master Luxo** | 1 | **0** | 0 | 0 | Unsplash | vazia |
| **Hot** | 1 | **0** | 0 | 0 | Unsplash | vazia |
| **Soft** | 1 | **6+5+4*** | **6** | **5** | `fotos/soft-1.jpg` ✅ | 5 fotos ✅ |

*\*6 canônicos + 5 PNG + 4 soltos (com duplicatas)*

### Matriz de Seleção — fotos candidatas por categoria

| Categoria | Card recomendado | Galeria recomendada (ordem) | Bloqueio |
|-----------|------------------|----------------------------|----------|
| Luxo | — | — | ❌ Sem fotos |
| Luxo Especial | — | — | ❌ Sem fotos |
| Gran Luxo | — | — | ❌ Sem fotos |
| Master Luxo | — | — | ❌ Sem fotos |
| Hot | — | — | ❌ Sem fotos |
| **Soft** | `files/soft-1.jpg` | soft-1, soft-2, soft-3, soft-4, soft-5, **soft-6** | ✅ Pronto |

**Legendas sugeridas (Soft — alinhadas ao site atual + soft-6):**

| # | Arquivo | Legenda sugerida |
|---|---------|------------------|
| 1 | soft-1.jpg | Hidromassagem romântica |
| 2 | soft-2.jpg | Cama com parede iluminada |
| 3 | soft-3.jpg | Hidromassagem privativa |
| 4 | soft-4.jpg | Banheiro exclusivo |
| 5 | soft-5.jpg | Corredor com Smart TV Netflix |
| 6 | soft-6.jpg | Ambiente Soft — vista adicional *(nova)* |

---

## 6. Avaliação de qualidade

### Critérios aplicados (read-only)

| Critério | Limiar card | Limiar galeria |
|----------|-------------|----------------|
| Lado curto mínimo | ≥ 800 px (aprovada) · ≥ 1200 px (ideal) | ≥ 800 px |
| Formato web | JPG preferido | JPG preferido |
| Peso arquivo | ≤ 250 KB ideal · ≤ 500 KB aceitável | ≤ 250 KB ideal |
| Conteúdo | Correspondência real à categoria | Mesma suíte |

### Matriz de Qualidade

| ID | Arquivo / grupo | Resolução | Peso | Nota | Veredicto |
|----|-----------------|-----------|------|------|-----------|
| Q-01 | `files/soft-1.jpg` | 1536×1024 | 179 KB | JPG otimizado | ✅ **APROVADA** — card |
| Q-02 | `files/soft-2.jpg` | 1536×1024 | 177 KB | JPG otimizado | ✅ **APROVADA** — galeria |
| Q-03 | `files/soft-3.jpg` | 1536×1024 | 181 KB | JPG otimizado | ✅ **APROVADA** — galeria |
| Q-04 | `files/soft-4.jpg` | 1024×1536 | 197 KB | JPG otimizado | ✅ **APROVADA** — galeria |
| Q-05 | `files/soft-5.jpg` | 1024×1536 | 129 KB | JPG otimizado | ✅ **APROVADA** — galeria |
| Q-06 | `files/soft-6.jpg` | 1600×1066 | 162 KB | JPG otimizado | ✅ **APROVADA** — galeria reserva |
| Q-07 | PNG Soft (5 arquivos) | 1536×1024 / 1024×1536 | 2,0–2,5 MB | Resolução OK; peso alto | ⚠️ **APROVADA COM RESSALVA** — requer conversão antes de publicar |
| Q-08 | `soft-1 (1).jpg` | 1536×1024 | 177 KB | MD5 = soft-2 (nome incorreto) | ❌ **REPROVADA** — card |
| Q-09 | Luxo / Luxo Esp. / Gran / Master / Hot | — | — | Sem arquivos | ❌ **REPROVADA** — inventário vazio |
| Q-10 | `Fachada 2026.PNG` | 1536×1024 | 2,3 MB | Institucional (não suíte) | ⚠️ Fora escopo categorias |
| Q-11 | Cardápio (2 PNG) | 1024×1536 | 2,1–2,5 MB | Cardápio digital | ⚠️ Fora escopo categorias |

**Escala de qualidade resumida:**

| Nível | Definição | Qtd Soft JPG |
|-------|-----------|--------------|
| **ALTA** | Lado curto ≥ 1200 px | 0 |
| **MÉDIA** | Lado curto 800–1199 px | **6/6** |
| **BAIXA** | Lado curto < 800 px | 0 |

*Nota: resolução adequada para cards atuais (Unsplash usa w=1200); otimização de peso recomendada na fase P2 (LJM-SITE-010), não nesta fase.*

---

## 7. Fotos aprovadas

### Por categoria de suíte

| Categoria | Aprovadas (uso imediato) | Aprovadas com ressalva | Total utilizável |
|-----------|--------------------------|------------------------|------------------|
| Luxo | 0 | 0 | **0** |
| Luxo Especial | 0 | 0 | **0** |
| Gran Luxo | 0 | 0 | **0** |
| Master Luxo | 0 | 0 | **0** |
| Hot | 0 | 0 | **0** |
| **Soft** | **6 JPG** (`files/soft-1..6`) | **5 PNG** (backup/alta res.) | **6** |

### Lista consolidada — Soft (aprovadas para LJM-SITE-006)

| Prioridade | Arquivo fonte | Destino repo (planejado) | Função |
|------------|---------------|--------------------------|--------|
| P0 | `files/soft-1.jpg` | `fotos/soft-1.jpg` | Card *(já restaurado LJM-SITE-004)* |
| P1 | `files/soft-2.jpg` | `fotos/soft-2.jpg` | Galeria *(já no repo)* |
| P1 | `files/soft-3.jpg` | `fotos/soft-3.jpg` | Galeria *(já no repo)* |
| P1 | `files/soft-4.jpg` | `fotos/soft-4.jpg` | Galeria *(já no repo)* |
| P1 | `files/soft-5.jpg` | `fotos/soft-5.jpg` | Galeria *(já no repo)* |
| P2 | `files/soft-6.jpg` | `fotos/soft-6.jpg` | Galeria *(novo — LJM-SITE-006)* |

---

## 8. Fotos reprovadas

| ID | Arquivo | Motivo | Ação |
|----|---------|--------|------|
| R-01 | `soft-1 (1).jpg` | Conteúdo idêntico a `soft-2.jpg` (MD5 `fbcdd81f…`); nome enganoso | Ignorar; usar `files/soft-1.jpg` |
| R-02 | `Suite Soft/soft-2.jpg` (raiz) | Hash ≠ `files/soft-2.jpg`; conjunto inconsistente na raiz | Usar apenas `files/` |
| R-03 | `Suite Soft/soft-3.jpg`, `soft-4.jpg` (raiz) | Mesma inconsistência vs canônico | Usar apenas `files/` |
| R-04 | `files 2/*` | Duplicata integral de `files/` | Manter como backup; não publicar duas vezes |
| R-05 | Luxo, Luxo Especial, Gran Luxo, Master Luxo, Hot | **Zero fotos** no backup | Sessão fotográfica obrigatória |
| R-06 | Unsplash (5 URLs no site) | Stock genérico — não representa Le Jardam | Substituir quando houver fotos reais |

---

## 9. Plano de substituição

### Plano de Substituição — fases

```text
LJM-SITE-005 (esta fase)     Inventário + seleção          ✅ Documental
        │
        ▼
LJM-SITE-006                 Substituição controlada       Soft completo + HTML
        │                    · Copiar soft-6 (se aprovado)
        │                    · Atualizar CATEGORIAS[] Soft
        │                    · Substituir Unsplash SOMENTE se fotos existirem
        │
        ▼
[BLOQUEIO]                   Captura fotográfica           Luxo → Hot (5 cats)
        │                    · Mínimo 1 card + 4 galeria por categoria
        │                    · Entregar em Fotos Suites/<Categoria>/
        │
        ▼
LJM-SITE-006b (ou 007)       Substituição Unsplash         Após captura
        │                    · luxo-1.jpg … hot-1.jpg
        │                    · Galerias por categoria
        │
        ▼
LJM-SITE-010                 Otimização performance        Compressão WebP/JPG
```

### Matriz de substituição Unsplash → real

| Categoria | URL Unsplash atual (index.html) | Foto real disponível | Ação LJM-SITE-006 | Dependência |
|-----------|--------------------------------|----------------------|-------------------|-------------|
| Luxo | `photo-1631049307264…` | ❌ | **Manter Unsplash** | Captura fotográfica |
| Luxo Especial | `photo-1590490360182…` | ❌ | **Manter Unsplash** | Captura |
| Gran Luxo | `photo-1582719478250…` | ❌ | **Manter Unsplash** | Captura |
| Master Luxo | `photo-1618773928121…` | ❌ | **Manter Unsplash** | Captura |
| Hot | `photo-1601571481255…` | ❌ | **Manter Unsplash** | Captura |
| **Soft** | `fotos/soft-1.jpg` | ✅ | **Já real** — ampliar galeria (+soft-6) | Nenhuma |

### Recomendações de captura (5 categorias ausentes)

| Categoria | Qtd suítes | Mínimo fotos | Prioridade captura | Cenas sugeridas |
|-----------|------------|--------------|-------------------|-----------------|
| **Luxo** | 10 | 1 card + 4 galeria | **P0 comercial** | Hidro, cama, frigobar, TV, banheiro |
| Luxo Especial | 3 | 1 + 4 | P1 | Sauna, bar, iluminação cênica |
| Gran Luxo | 1 | 1 + 5 | P1 | Piscina privativa, sauna, hidro |
| Master Luxo | 1 | 1 + 5 | P1 | Piscina aquecida, sala, champanheira |
| Hot | 1 | 1 + 4 | P2 | Iluminação, espelho teto, ambiente |

**Entrega esperada:** pastas `Fotos Suites/Suite Luxo/`, `Suite Luxo Especial/`, etc., espelhando estrutura `Suite Soft/files/`.

### Estrutura de galeria recomendada (padrão Soft)

| Elemento | Especificação |
|----------|---------------|
| `foto` (card) | 1 JPG paisagem 1536×1024 ou 1600×1066 — ambiente principal |
| `galeria[]` | 4–6 itens `{ src, legenda }` |
| Nomenclatura repo | `fotos/{categoria-slug}-{n}.jpg` ex.: `luxo-1.jpg`, `hot-3.jpg` |
| Lightbox | Automático quando `galeria.length > 0` |
| Botão "N fotos" | Renderizado pelo template existente |

---

## 10. Próxima fase recomendada

### LJM-SITE-006 — Substituição Controlada das Fotos das Categorias e Validação Local

| Escopo LJM-SITE-006 | Condição |
|---------------------|----------|
| Ampliar galeria Soft (+ `soft-6.jpg`) | ✅ Pode executar |
| Atualizar `index.html` Soft | ✅ Pode executar |
| Substituir Unsplash Luxo–Hot | ❌ **Bloqueado** até captura fotográfica |
| Validação HTTP 200 local | ✅ Obrigatória |
| Push / deploy | ❌ Proibido (SP-GEX) |

### Ação humana pré-requisito (ressalva principal)

**Providenciar sessão fotográfica** das suítes Luxo, Luxo Especial, Gran Luxo, Master Luxo e Hot e depositar arquivos em `Fotos Suites/` antes de substituir as 5 URLs Unsplash.

---

## Validações obrigatórias

| Validação | Resultado |
|-----------|-----------|
| Uso de fotos reais como fonte de inventário | ✅ |
| Nenhuma foto alterada | ✅ |
| Nenhuma imagem publicada | ✅ |
| Nenhum commit | ✅ |
| Nenhum push | ✅ |
| Nenhum deploy | ✅ |
| Documento LJM-SITE-005 criado | ✅ |

---

## Critérios de aprovação

| Critério | Status |
|----------|--------|
| Inventário criado | ✅ |
| Categorias mapeadas | ✅ |
| Fotos aprovadas identificadas | ✅ (Soft) |
| Plano de substituição criado | ✅ |
| Nenhuma alteração operacional | ✅ |

---

## Status final

**⚠️ APROVADO COM RESSALVAS**

| Ressalva | Descrição |
|----------|-----------|
| **RESS-005-01** | Apenas **Soft** possui fotos reais no backup; **5 categorias sem inventário fotográfico** |
| **RESS-005-02** | Substituição total Unsplash **bloqueada** em LJM-SITE-006 para Luxo–Hot |
| **RESS-005-03** | PNG originais Soft requerem conversão/compressão antes de uso direto (JPG canônico preferido) |
| **RESS-005-04** | Prioridade comercial **Luxo** depende de captura externa a esta fase |

**Próxima fase:** **LJM-SITE-006** — Substituição controlada (Soft + validação local; Unsplash demais categorias mantido até novas fotos).

---

*Documento emitido na fase LJM-SITE-005 — Inventário Fotográfico por Categorias.*
*Projeto: LE JARDAM MOTEL — SITE — repositório `/Users/diogo/Documents/GitHub/lejardam`.*
