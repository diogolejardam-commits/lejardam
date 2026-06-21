# LJM-SITE-008C — Plano de Uso de Fotos com Casais nas Suítes

| Campo | Valor |
|-------|-------|
| **ID** | LJM-SITE-008C |
| **Projeto** | LE JARDAM MOTEL — SITE (`LJMS`) |
| **Repositório (relatório)** | `/Users/diogo/Documents/GitHub/lejardam` |
| **Base** | `LJM-SITE-007` · `LJM-SITE-008B` |
| **Governança** | GDE-GOV-050-LJMS · SP-GEX *(quando aplicável)* |
| **Data** | 2026-06-20 |
| **Horário conclusão** | 13:29 |
| **Modo** | **Documental** — nenhuma alteração operacional |
| **Status** | ✅ **APROVADO** |

---

## Controle de escopo

| Regra | Status |
|-------|--------|
| Plano documental | ✅ |
| Não alterar produção | ✅ |
| Não editar `index.html` | ✅ |
| Não usar fotos internet sem licença | ✅ *(plano apenas)* |
| Não usar pessoas reais sem autorização | ✅ *(plano apenas)* |
| Push / deploy | ❌ Não executados |

---

## 1. Objetivo

Avaliar **como e onde** inserir fotos com casais nas suítes **antes da publicação final**, respeitando **autorização de uso de imagem**, **privacidade** e **padrão visual premium** — **sem aplicar alterações nesta fase**.

---

## 2. Contexto

| Estado atual | Detalhe |
|--------------|---------|
| Acervo ambiente | 97 fotos classificadas (LJM-SITE-008B) — **sem casais** no acervo recebido |
| Cards de categoria | `CATEGORIAS[].foto` = background do card |
| Galeria | `CATEGORIAS[].galeria[]` + lightbox *(Soft: 6 fotos ambiente)* |
| LJM-SITE-007 | Exige **sem pessoas** na captura inicial |
| Próxima fase técnica | LJM-SITE-009 — ambiente puro primeiro; casais como **camada opcional controlada** |

**Princípio desta fase:** fotos com casais são **complemento emocional**, nunca substituto das fotos de ambiente que provam a suíte real.

---

## 3. Onde fotos com casais podem entrar no site

### 3.1 Mapa de pontos de inserção

| # | Área do site | Elemento atual | Casal permitido? | Prioridade | Observação |
|---|--------------|----------------|------------------|------------|------------|
| 1 | **Hero** (`header.hero`) | Gradiente + tipografia — **sem foto** | ⚠️ Opcional futuro | P2 | Imagem full-width discreta; não explícita |
| 2 | **Sobre** (`#sobre`) | `fachada-lejardam.jpg` | ❌ Não | — | Manter institucional (fachada) |
| 3 | **Card categoria** (`cat-card-visual`) | `CATEGORIAS[].foto` | ❌ **Não recomendado** | — | Card = prova do ambiente real |
| 4 | **Galeria / lightbox** | `CATEGORIAS[].galeria[]` | ✅ **Sim** | **P0** | 1 slot opcional por categoria |
| 5 | **Seção reserva** (`#reserva`) | Texto + CTAs | ⚠️ Background futuro | P3 | Silhueta/back view apenas |
| 6 | **OG / redes sociais** | `logo-lejardam.jpeg` | ❌ Não casal | — | Manter marca ou ambiente sem rosto |
| 7 | **Tarifas / localização** | Tabelas + mapa | ❌ Não | — | Fora escopo visual |
| 8 | **Nova subseção** *(futuro)* | — | ✅ Ideal | P1 | Bloco “A experiência” entre Suítes e Tarifas |

### 3.2 Recomendação arquitetural (LJM-SITE-009+)

```text
CARD (capa)     → 100% ambiente puro     [luxo-1.jpg etc.]
GALERIA 1–4     → 100% ambiente puro     [luxo-2 … luxo-5]
GALERIA 5–6     → OPCIONAL com casal     [luxo-casal-1.jpg]  ← só se autorizado
HERO / RESERVA  → OPCIONAL editorial     [hero-casal.jpg]    ← fase posterior
```

**Não alterar `index.html` nesta fase** — registro para implementação local futura.

---

## 4. Padrão visual das fotos com casal

### 4.1 Diretriz premium Le Jardam

| Critério | Especificação |
|----------|---------------|
| **Tom** | Íntimo, elegante, discreto — nunca vulgar |
| **Enquadramento** | Casal secundário ao ambiente (≤ 30% do frame) |
| **Posição** | Costas, perfil, silhueta ou mãos entrelaçadas — **rostos não identificáveis** preferencial |
| **Iluminação** | Luz cênica da suíte acesa; tons quentes; sem flash direto |
| **Vestuário** | Casual elegante / roupão — nada explícito |
| **Privacidade** | Sem números de suíte, documentos, placas, telas com dados |
| **Resolução** | ≥ 1200 px largura; horizontal preferido |
| **Formato** | JPG; peso ≤ 250 KB pós-otimização |
| **Tratamento** | Leve desaturação + contraste premium; alinhado ao site (verde/dourado) |

### 4.2 Proibições visuais

- Conteúdo sexual explícito ou suggestivo excessivo
- Menores de idade em qualquer frame
- Bebidas alcoólicas com marca legível *(ressalva champanheira Master Luxo — desfocar rótulo)*
- Pessoas olhando para câmera com rosto identificável **sem autorização escrita**
- Stock genérico de bancos de imagem sem **model release** comercial
- IA generativa de pessoas sem disclosure e licença clara

---

## 5. Quais categorias devem receber foto com casal

| Categoria | Receber foto casal? | Prioridade | Justificativa |
|-----------|---------------------|------------|---------------|
| **Hot** | ✅ **Sim** | P0 | Proposta “clima envolvente”; maior fit emocional |
| **Master Luxo** | ✅ **Sim** | P1 | Experiência definitiva; casal reforça exclusividade |
| **Gran Luxo** | ✅ **Sim** | P1 | Exclusividade total; piscina/sauna com silhueta |
| **Luxo Especial** | ✅ **Sim** | P1 | Refinamento + iluminação cênica |
| **Luxo** | ⚠️ **Opcional** | P2 | Volume alto (10 suítes) — 1 foto galeria se autorizada |
| **Soft** | ⚠️ **Opcional** | P3 | Tom “conforto essencial” — ambiente puro prioritário |
| **Hero / institucional** | ⚠️ **Opcional** | P3 | Casal genérico editorial — não vinculado a suíte específica |

**Mínimo recomendado:** **1 foto com casal** nas categorias Hot, Master Luxo, Gran Luxo e Luxo Especial (**4 fotos** no total).

**Máximo recomendado:** **1 foto casal por categoria** (6) + **nunca** substituir a capa (`*-1.jpg`).

---

## 6. Separação: ambiente puro vs. foto com casal

### 6.1 Taxonomia de arquivos

| Tipo | Prefixo sugerido | Uso no site | Obrigatório LJM-SITE-009 |
|------|------------------|-------------|---------------------------|
| **Ambiente puro** | `{cat}-{n}.jpg` | Capa + galeria principal | ✅ Sim (5 por categoria) |
| **Casal autorizado** | `{cat}-casal-{n}.jpg` | Galeria slot 6 ou seção editorial | ⚠️ Opcional |
| **Editorial geral** | `experiencia-{n}.jpg` | Hero / bloco futuro | ⚠️ Opcional |

### 6.2 Matriz por categoria (plano alvo)

| Categoria | Ambiente puro (obrig.) | Casal (opcional) | Pasta sugerida |
|-----------|------------------------|------------------|----------------|
| Luxo | luxo-1 … luxo-5 | luxo-casal-1.jpg | `…/Luxo/casal/` |
| Luxo Especial | luxo-especial-1 … 5 | luxo-especial-casal-1.jpg | `…/Luxo Especial/casal/` |
| Gran Luxo | gran-luxo-1 … 5 | gran-luxo-casal-1.jpg | `…/Gran Luxo/casal/` |
| Master Luxo | master-luxo-1 … 5 | master-luxo-casal-1.jpg | `…/Master Luxo/casal/` |
| Hot | hot-1 … hot-5 | hot-casal-1.jpg | `…/Hot/casal/` |
| Soft | soft-1 … soft-6 *(repo)* | soft-casal-1.jpg | `…/Soft/casal/` |

### 6.3 Regra de ouro

> **Ambiente prova veracidade. Casal vende emoção.**  
> Nunca publicar casal **sem** as 5 fotos de ambiente da mesma categoria já aprovadas.

---

## 7. Riscos legais de uso de imagem

| ID | Risco | Base legal | Severidade | Mitigação |
|----|-------|------------|------------|-----------|
| LG-01 | Uso de imagem sem autorização | LGPD Art. 7 · CC Art. 20 (direito à imagem) | **Crítica** | Termo de autorização assinado por **todos** identificáveis |
| LG-02 | Rosto identificável em site público | Mesmo | **Alta** | Costas/silhueta ou autorização escrita com escopo web |
| LG-03 | Funcionário/hóspede captado sem consentimento | LGPD | **Alta** | Suíte vazia + modelos contratados ou staff autorizado |
| LG-04 | Stock sem model release comercial | Lei 9.610/98 (direitos autorais) | **Alta** | **Proibido** — só acervo próprio ou stock com licença comercial + release |
| LG-05 | Conteúdo interpretado como pornográfico | Decência · políticas Meta/Google Ads | **Média** | Padrão visual §4 — revisão SP-GEX |
| LG-06 | Menor em imagem | ECA Art. 241 · LGPD | **Crítica** | **Zero tolerância** — verificação de idade de modelos |
| LG-07 | Ex-funcionário/modelo revoga consentimento | Contrato | Média | Cláusula de revogação + procedimento de remoção ≤ 48 h |
| LG-08 | Uso em OG/WhatsApp preview não previsto no termo | Contrato | Média | Termo deve listar: site, redes sociais, materiais GEX |

### 7.1 Termo mínimo de autorização (anexo recomendado)

O termo deve conter:

1. Nome completo e CPF dos autorizados
2. Descrição das fotos (data, suíte, arquivos)
3. **Escopo:** site lejardammotel.com.br, galeria, redes sociais Le Jardam
4. Prazo: indeterminado ou com data de revisão
5. Direito de revogação e contato
6. Declaração de maioridade
7. Assinatura ( física ou digital ICP / DocuSign)

**Arquivo sugerido:** `AUTORIZACAO_IMAGEM_CASAL_LJMS-{YYYYMMDD}.pdf` — pasta Governança / arquivo Le Jardam.

---

## 8. Critério de aprovação SP-GEX

Publicação de fotos com casais exige **deliberação SP-GEX adicional** à LJM-SITE-009 (ambiente puro).

### 8.1 Checklist SP-GEX — Fotos com casal

| # | Critério | Obrigatório |
|---|----------|-------------|
| 1 | Termo de autorização arquivado e referenciado | ✅ |
| 2 | Ambiente puro da categoria já aprovado (LJM-SITE-008B) | ✅ |
| 3 | Foto casal revisada visualmente (padrão §4) | ✅ |
| 4 | Nenhum rosto identificável **ou** autorização nominal do rosto | ✅ |
| 5 | Arquivo nomeado `{cat}-casal-1.jpg` em subpasta `casal/` | ✅ |
| 6 | Não substitui capa (`*-1.jpg`) | ✅ |
| 7 | DEC-GOV-LJMS-004 respeitado (trilha formal produção) | ✅ |
| 8 | Parecer jurídico/privacidade *(se rosto identificável)* | ⚠️ Condicional |
| 9 | Aprovação explícita PROP-LJMS / responsável Le Jardam | ✅ |
| 10 | Registro em ata SP-GEX: **DEC-LJMS-CASAL-001** *(sugerido)* | ✅ |

### 8.2 Resultado SP-GEX

| Veredicto | Condição |
|-----------|----------|
| **APROVADO** | Todos os itens ✅ |
| **APROVADO COM RESSALVAS** | Silhueta sem termo nominal — apenas com termo genérico de sessão |
| **REPROVADO** | Termo ausente · rosto identificável sem autorização · conteúdo inadequado |

**Regra:** SP-GEX casal é **independente** do pacote ambiente LJM-SITE-009. Pode publicar ambiente **sem** casal; **não** publicar casal **sem** SP-GEX.

---

## 9. Próxima fase — aplicação local

### Sequência recomendada

```text
LJM-SITE-009A  →  Copiar/aplicar fotos AMBIENTE (Luxo–Hot) + index.html local
       │
       ▼
[Sessão fotográfica casal + termos]  ← ação humana
       │
       ▼
LJM-SITE-009B  →  Inserir fotos casal na galeria (slot 6) — local only
       │
       ▼
SP-GEX CASAL   →  DEC-LJMS-CASAL-001
       │
       ▼
Deploy         →  Somente após SP-GEX ambiente + casal (se aplicável)
```

### LJM-SITE-009 (imediata — sem casais)

Conforme prompt operacional:

- Seleção e aplicação local das **fotos de ambiente aprovadas** (LJM-SITE-008B)
- Substituir Unsplash
- **Não incluir casais** até LJM-SITE-009B + SP-GEX casal

### LJM-SITE-009B *(futura — casais)*

- Copiar `{cat}-casal-1.jpg` → `fotos/`
- Adicionar à `galeria[]` como 6º item *(nunca `foto` capa)*
- Legendas sugeridas: *"Momentos a dois"* · *"Experiência exclusiva"* — sem nomes
- Validação HTTP 200 local; sem push/deploy

---

## 10. Respostas às tarefas (1–7)

| # | Tarefa | Resposta resumida |
|---|--------|-------------------|
| 1 | Onde entrar | Galeria (P0), bloco editorial futuro (P1), hero/reserva opcional (P2–P3) — **não** card capa |
| 2 | Padrão visual | Premium, discreto, silhueta/costas, ambiente protagonista |
| 3 | Quais categorias | Hot, Master, Gran Luxo, Luxo Especial (obrig. recom.); Luxo/Soft opcional |
| 4 | Separar tipos | `{cat}-{n}.jpg` ambiente vs `{cat}-casal-{n}.jpg` em subpasta `casal/` |
| 5 | Riscos legais | LGPD, direito à imagem, model release, menores — §7 |
| 6 | SP-GEX | Checklist §8 + DEC-LJMS-CASAL-001 |
| 7 | Próxima fase | LJM-SITE-009 ambiente → captura casal → LJM-SITE-009B → SP-GEX |

---

## Validações obrigatórias

| Validação | Resultado |
|-----------|-----------|
| Plano criado | ✅ |
| Riscos documentados | ✅ |
| Nenhuma alteração operacional | ✅ |
| `index.html` não alterado | ✅ |
| Nenhum push / deploy | ✅ |
| Documento LJM-SITE-008C criado | ✅ |

---

## Critérios de aprovação da fase

| Critério | Status |
|----------|--------|
| Plano criado | ✅ |
| Riscos documentados | ✅ |
| Nenhuma alteração operacional | ✅ |
| Nenhum push / deploy | ✅ |

---

## Status final

**✅ APROVADO**

Plano documental concluído. Fotos com casais **permitidas apenas como camada opcional** pós-ambiente, com termo de autorização e SP-GEX dedicado.

**Próxima fase:** **LJM-SITE-009** — Seleção e Aplicação Local das Fotos Aprovadas *(ambiente puro — sem casais)*.

---

*Documento emitido na fase LJM-SITE-008C — Plano de Uso de Fotos com Casais.*
*Projeto: LE JARDAM MOTEL — SITE — execução documental.*
