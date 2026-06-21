# LJM-SITE-013D — Revisão da Estratégia IA e Padronização das Imagens Promocionais

| Campo | Valor |
|-------|-------|
| **ID** | LJM-SITE-013D |
| **Projeto** | LE JARDAM MOTEL — SITE (`LJMS`) |
| **Repositório** | `/Users/diogo/Documents/GitHub/lejardam` |
| **Base** | LJM-SITE-008B · LJM-SITE-008C · LJM-SITE-012 · LJM-SITE-013C |
| **Data** | 2026-06-20 |
| **Horário conclusão** | 14:32 |
| **Modo** | **Documento estratégico exclusivo** — nenhuma alteração operacional |
| **Status** | ✅ **APROVADO** |

---

## Controle de escopo

| Regra | Status |
|-------|--------|
| Execução somente em `/Users/diogo/Documents/GitHub/lejardam` | ✅ |
| Uso de fotos reais como premissa | ✅ |
| Abandono de placeholders IA independentes | ✅ **Diretriz registrada** |
| Alteração de `index.html` / `fotos/` | ❌ Não executada nesta fase |
| Push / deploy / produção | ❌ Não executados |
| Documento LJM-SITE-013D criado | ✅ |

---

## 1. Objetivo

Revisar e substituir a estratégia anterior de **placeholders IA autônomos** (cenas inventadas ou fundo verde) por uma **estratégia SP-GEX baseada em fotos reais das suítes Le Jardam**, definindo diretriz visual oficial, matrizes de categorias/ambientações, cenas aprovadas e proibidas, e encaminhamento para **LJM-SITE-013E**.

---

## 2. Contexto

### 2.1 Evolução da trilha IA

| Fase | Estratégia IA | Status |
|------|---------------|--------|
| LJM-SITE-011 / 012 | 5 fotos reais + 1 slot IA por galeria | Implementado localmente |
| LJM-SITE-012 | Placeholders verdes `*-ia.jpg` (16 KB) | Substituídos parcialmente |
| Estado atual repo | 6 arquivos `*-ia.jpg` (~255–418 KB) | ⚠️ **Não conformes** com nova regra — cenas não derivadas de foto real da suíte |
| **LJM-SITE-013D** | **Nova regra SP-GEX** | ✅ Esta fase — estratégia apenas |
| **LJM-SITE-013E** | Produção promocional IA sobre foto real | ⏳ Próxima |

### 2.2 Nova regra SP-GEX (oficial)

| Camada | Regra |
|--------|-------|
| **Galerias oficiais do site** | **100% fotos reais** — zero cena inventada |
| **Imagens promocionais** | **Sempre partir de foto real** da suíte correspondente |
| **Papel da IA** | **Somente ambientação** sobre a foto real (casal, props, clima emocional) |
| **Proibido** | Quarto, hidro, piscina ou ambiente **fictício** ou de outro estabelecimento |

### 2.3 Acervo real disponível (referência)

| Categoria | Fotos reais no site | Pool origem (008B) | Qualidade |
|-----------|---------------------|--------------------|-----------|
| Luxo | `luxo-1` … `luxo-5` | 9 fotos 4032×3024 | ✅ Excelente |
| Luxo Especial | `luxo-especial-1` … `-5` | 7 fotos 4032×3024 | ✅ Excelente |
| Gran Luxo | `gran-luxo-1` … `-5` | 13 aprovadas | ✅ Excelente |
| Master Luxo | `master-luxo-1` … `-5` | 13 aprovadas | ✅ Excelente |
| Hot | `hot-1` … `hot-5` | 6 aprovadas | ⚠️ Capa HD; galeria 2–5 WhatsApp 2016 (~1000 px) |
| Soft | `soft-1` … `soft-5` (+ `soft-6` reserva) | 37 no acervo | ✅ Boa |

**Total fotos reais utilizáveis:** 30 no site + reservas no acervo `/Users/diogo/Documents/Le Jardam Motel Site/`.

---

## 3. Diretriz visual oficial

### 3.1 Princípio-mãe

> **A suíte real é a prova. A IA é o enriquecimento emocional.**

Toda imagem promocional deve ser **reconhecível como a mesma suíte Le Jardam** — mesma hidromassagem, mesma piscina, mesmos revestimentos, mesma iluminação base. A IA **não cria** o ambiente; **ambienta** o ambiente já fotografado.

### 3.2 Fluxo de produção (LJM-SITE-013E)

```text
1. Selecionar foto real BASE (≥1200 px, enquadramento limpo)
2. Validar que BASE prova o diferencial da categoria
3. Aplicar IA de ambientação IN-PAINTING sobre a BASE
   └── adicionar: casal elegante, espumante, velas, pétalas, café etc.
4. Revisão humana: ambiente = Le Jardam? ✅ / ❌
5. Exportar JPG otimizado ≤500 KB
6. Nomear: {categoria}-promo.jpg ou substituir slot conforme decisão 013E
```

### 3.3 Padrão visual adotado

| Dimensão | Padrão |
|----------|--------|
| **Base fotográfica** | 100% foto real Le Jardam — arquivo origem registrado |
| **Técnica IA** | Ambientação / inpainting — **não** text-to-image livre |
| **Casal** | Adulto 25–45 · elegante · executivo/moderno · sem rosto identificável preferencial |
| **Enquadramento** | Mesmo ângulo e perspectiva da foto base |
| **Paleta** | Verde `#1e3519` · ouro `#c9a961` · cream `#f7f2e7` — coerente com site |
| **Iluminação** | Preservar iluminação real; realçar cênica apenas se coerente |
| **Formato final** | JPG · max 1600 px · ≤ 500 KB |
| **Tom** | Premium · discreto · romântico · hospitalidade de motel de luxo |
| **Uso no site** | Separar **galeria documental** (100% real) de **promo emocional** (1 por categoria, fase 013E) |

### 3.4 Arquitetura recomendada no site (pós-013E)

| Elemento | Conteúdo | Regra |
|----------|----------|-------|
| Card capa | Foto real ambiente | 100% real — **nunca** IA |
| Galeria fotos 1–N | Ambiente puro real | **100% real** |
| Slot promocional *(opcional)* | 1 imagem IA ambientada | Derivada de foto real · fora ou após galeria documental |
| Hero | Foto real *(atual: master-luxo-1)* | 100% real |

**Decisão 013E:** converter galerias para **5 ou 6 fotos 100% reais** e mover promo IA para arquivo dedicado `{cat}-promo.jpg` **ou** substituir slot 6 apenas se a promo for inpainting comprovado sobre real.

---

## 4. Respostas executivas (1–6)

### 4.1 Quais fotos reais são melhores para ambientação IA?

| Categoria | Foto BASE recomendada | Motivo |
|-----------|----------------------|--------|
| **Luxo** | **`luxo-4.jpg`** *(hidromassagem privativa)* | Enquadramento de banheira/hidro — ideal para casal, espumante, velas, pétalas |
| **Luxo Especial** | **`luxo-especial-4.jpg`** *(hidro dupla)* | Dupla + bar/sauna no acervo; hidro ampla para props românticos |
| **Gran Luxo** | **`gran-luxo-2.jpg`** *(piscina privativa)* | Diferencial único — alto impacto visual; ambientação premium à beira da piscina |
| **Master Luxo** | **`master-luxo-4.jpg`** *(hidro para dois)* | Categoria topo; hidro + clima íntimo; alternativa: `master-luxo-2.jpg` (piscina aquecida) |
| **Hot** | **`hot-1.jpg`** *(capa HD 4032×3024)* | **Única base HD confiável** — evitar hot-2..5 para IA até recaptura |
| **Soft** | **`soft-1.jpg`** *(hidromassagem romântica)* | Já rotulada romântica; alternativa: `soft-3.jpg` (hidro privativa) |

**Reserva acervo:** `soft-6.jpg` pode entrar na galeria 100% real Soft, liberando slot promo.

### 4.2 Qual categoria possui melhor potencial visual?

| Rank | Categoria | Potencial | Justificativa |
|------|-----------|-----------|---------------|
| **1** | **Gran Luxo** | ⭐⭐⭐⭐⭐ | Piscina privativa + hidro cromoterapia + sauna — diferenciais únicos e fotogenicidade máxima |
| **2** | **Master Luxo** | ⭐⭐⭐⭐⭐ | Piscina aquecida + hidro 2 pessoas + sauna/vapor — topo de linha |
| **3** | **Luxo Especial** | ⭐⭐⭐⭐ | Bar privativo + hidro dupla + iluminação cênica |
| **4** | **Soft** | ⭐⭐⭐⭐ | Hidro romântica + parede iluminada — tom emocional natural |
| **5** | **Luxo** | ⭐⭐⭐ | Acervo excelente; menos exclusividade visual que Gran/Master |
| **6** | **Hot** | ⭐⭐ | ⚠️ Galeria 2–5 baixa res.; promo depende de `hot-1` ou **recaptura urgente** |

### 4.3 Quais cenas promocionais são recomendadas?

| ID | Cena | Props | Categorias ideais |
|----|------|-------|-----------------|
| AP-01 | Casal elegante à beira da hidro | Espumante, velas | Luxo, Luxo Especial, Master, Soft |
| AP-02 | Banheira/hidro cheia com pétalas | Pétalas, velas, luz cênica | Luxo, Soft, Luxo Especial |
| AP-03 | Casal brindando na área da piscina | Espumante, taças | Gran Luxo, Master Luxo |
| AP-04 | Café da manhã na cama / mesa | Bandeja, café, croissant | Master Luxo, Gran Luxo *(pernoite)* |
| AP-05 | Silhueta casal — iluminação cênica | Som ambiente implícito | Hot, Luxo Especial |
| AP-06 | Decoração romântica discreta | Pétalas, toalhas dobradas, luz âmbar | Todas |
| AP-07 | Casal de costas / mãos dadas | Sem rosto visível | Universal — compliance privacidade |

### 4.4 Quais cenas devem ser evitadas?

| ID | Cena proibida | Motivo |
|----|---------------|--------|
| PB-01 | Quarto/suíte gerada do zero (text-to-image) | Viola regra “ambiente real Le Jardam” |
| PB-02 | Hidromassagem de outro hotel / stock genérico | Falsidade comercial |
| PB-03 | Piscina ou sauna inventadas | Diferencial falso |
| PB-04 | Nudez ou conteúdo explícito | Proibido SP-GEX |
| PB-05 | Rosto de pessoa real identificável famosa | Risco jurídico |
| PB-06 | Marcas de terceiros visíveis | Proibido SP-GEX |
| PB-07 | Ambiente desorganizado / sujo | Prejudica percepção premium |
| PB-08 | Placeholder verde ou fundo sólido | Abandonado nesta revisão |
| PB-09 | IA sobre `hot-2`…`hot-5` sem recaptura | Base ≤1000 px — qualidade insuficiente |
| PB-10 | Casal em suíte de categoria errada *(ex.: promo Gran Luxo sobre foto Luxo)* | Quebra coerência categórica |

### 4.5 Quantas imagens promocionais devem existir por categoria?

| Uso | Qtd recomendada | Observação |
|-----|-----------------|------------|
| **Site — galeria oficial** | **0 IA** | Galeria = **100% real** (5 ou 6 fotos ambiente) |
| **Site — promo emocional** | **1 por categoria** | Derivada de foto BASE real · slot dedicado ou `{cat}-promo.jpg` |
| **Redes / WhatsApp / ads** | **0–2 extras** *(opcional)* | Variantes da mesma BASE (ex.: com/sem casal) |
| **Total mínimo produção 013E** | **6 imagens** (1 × 6 categorias) | Obrigatório |
| **Total ideal produção 013E** | **6 site + 6 reserva social** | 12 — se budget permitir |

### 4.6 Qual padrão visual deve ser adotado?

Ver **§3.3 Diretriz visual oficial** — resumo:

1. **Foto real BASE obrigatória** — arquivo rastreável.
2. **IA = ambientação only** — inpainting de casal/props/clima.
3. **Premium Le Jardam** — paleta verde/ouro, elegância, discrição.
4. **Galeria documental separada da promo emocional.**
5. **Revisão humana** antes de publicar — checklist “É a nossa suíte?”.

---

## 5. Matriz de categorias

| Categoria | Fotos reais galeria (meta) | Foto BASE promo IA | Cena promo recomendada | Potencial | Prioridade 013E |
|-----------|----------------------------|--------------------|------------------------|-----------|-----------------|
| **Luxo** | 5–6 *(100% real)* | `luxo-4.jpg` | Hidro + casal + espumante + velas | ⭐⭐⭐ | P1 |
| **Luxo Especial** | 5–6 | `luxo-especial-4.jpg` | Hidro dupla + decoração cênica | ⭐⭐⭐⭐ | P1 |
| **Gran Luxo** | 5–6 | `gran-luxo-2.jpg` | Piscina + brinde + casal elegante | ⭐⭐⭐⭐⭐ | **P0** |
| **Master Luxo** | 5–6 | `master-luxo-4.jpg` | Hidro casal + champanhe | ⭐⭐⭐⭐⭐ | **P0** |
| **Hot** | 5–6 *(recaptura 2–5)* | `hot-1.jpg` | Iluminação cênica + silhueta casal | ⭐⭐ | P2 *(após recaptura)* |
| **Soft** | 6 *(incl. soft-6 reserva)* | `soft-1.jpg` | Hidro romântica + pétalas | ⭐⭐⭐⭐ | P1 |

---

## 6. Matriz de ambientações

| Ambientação | Foto BASE típica | Permitido | Proibido |
|-------------|------------------|-----------|----------|
| **Hidro romântica** | `*-4.jpg` hidro | Casal, pétalas, velas, espuma | Trocar modelo de banheira |
| **Piscina premium** | `gran-luxo-2`, `master-luxo-2` | Casal, espumante, toalhas | Inventar piscina |
| **Café da manhã** | `master-luxo-3`, `gran-luxo-3` | Bandeja, café, pernoite | Quarto genérico stock |
| **Iluminação cênica** | `hot-1`, `luxo-especial-2` | Silhueta, luz âmbar | Mudar arquitetura do quarto |
| **Sauna / vapor** | `luxo-especial-5`, `master-luxo-5` | Toalhas, vapor leve, casal discreto | Sauna inventada |
| **Bar privativo** | `luxo-especial-3` | Espumante, taças | Bar de outro hotel |

---

## 7. Cenas aprovadas (consolidado SP-GEX)

| # | Elemento | Uso |
|---|----------|-----|
| ✅ | Casal elegante (25–45) | Promo emocional |
| ✅ | Banheira/hidro cheia *(real Le Jardam)* | Base + ambientação |
| ✅ | Espumante / taças | Props românticos |
| ✅ | Café da manhã | Pernoite / Master·Gran |
| ✅ | Velas | Atmosfera |
| ✅ | Pétalas | Decoração romântica |
| ✅ | Decoração romântica discreta | Universal |
| ✅ | Casal de costas / sem rosto | Privacidade + compliance |

---

## 8. Cenas proibidas (consolidado SP-GEX)

| # | Elemento | Motivo |
|---|----------|--------|
| ❌ | Quarto fictício | Não é Le Jardam |
| ❌ | Suíte fictícia | Falsidade |
| ❌ | Hidromassagem fictícia | Falsidade |
| ❌ | Ambiente diferente do Le Jardam | Viola regra base real |
| ❌ | Cenário inventado (text-to-image) | Abandono estratégia anterior |
| ❌ | Placeholder verde independente | Abandonado LJM-SITE-013D |
| ❌ | Nudez / explícito | SP-GEX |
| ❌ | Marcas terceiros | SP-GEX |

---

## 9. Abandono da estratégia anterior

| Item anterior | Decisão LJM-SITE-013D |
|---------------|----------------------|
| Slot galeria 6 = IA autônoma | ❌ **Abandonado** para galeria oficial |
| Placeholders verdes 16 KB | ❌ **Abandonados** |
| `*-ia.jpg` gerados sem foto base *(estado repo atual)* | ⚠️ **Marcados não conformes** — substituir na 013E |
| Regra 5 reais + 1 IA na galeria (LJM-SITE-011/012) | 🔄 **Revogada** → galeria 100% real + promo separada |
| LJM-SITE-008C “casal como complemento emocional” | ✅ **Mantido e reforçado** com base real obrigatória |

**Nenhum arquivo do site foi alterado nesta fase** — a transição estrutural ocorrerá na **LJM-SITE-013E**.

---

## 10. Riscos

| ID | Risco | Sev. | Mitigação 013E |
|----|-------|------|----------------|
| RK-01 | IA alterar arquitetura da suíte na ambientação | Alta | Inpainting conservador + revisão humana |
| RK-02 | Hot sem base HD suficiente | Alta | Recapturar hot-2..5 antes da promo Hot |
| RK-03 | `*-ia.jpg` atuais não conformes publicados por engano | Média | Não publicar até 013E homologada |
| RK-04 | Confusão galeria vs promo | Média | Separar arquivos `{cat}-promo.jpg` |
| RK-05 | Excesso de props (poluição visual) | Baixa | Max 2–3 elementos por cena |

---

## 11. Parecer executivo

A revisão **LJM-SITE-013D** corrige o rumo estratégico: o Le Jardam **não precisa de suítes inventadas** — possui acervo real robusto (97 fotos classificadas, 30 integradas). A IA deve atuar como **camada emocional sobre prova fotográfica**, não como substituto.

**Gran Luxo** e **Master Luxo** concentram o maior potencial promocional. **Hot** exige recaptura antes da produção IA ideal. Os arquivos `*-ia.jpg` atuais no repositório **não atendem** a nova regra e devem ser **reproduzidos na 013E** a partir das fotos BASE indicadas neste documento.

| Critério de aprovação 013D | Resultado |
|----------------------------|-----------|
| Estratégia revisada | ✅ |
| Diretriz visual definida | ✅ |
| Categorias mapeadas | ✅ |
| Próxima etapa definida | ✅ LJM-SITE-013E |
| Nenhuma alteração operacional | ✅ |
| Push / deploy | ❌ Não executados |

---

## 12. Decisão final

| Campo | Valor |
|-------|-------|
| **Status LJM-SITE-013D** | ✅ **APROVADO** |
| **Nova regra SP-GEX** | Galerias 100% real · Promo IA só sobre foto real |
| **Placeholders IA independentes** | ❌ **Abandonados** |
| **Arquivos `*-ia.jpg` atuais** | ⚠️ Substituir na 013E |

---

## 13. Próxima fase recomendada

### LJM-SITE-013E — Produção das Imagens Promocionais IA Baseadas nas Fotos Reais das Suítes

**Entregáveis esperados:**

1. Produzir **6 imagens promocionais** (1/categoria) via ambientação IA sobre fotos BASE desta matriz.
2. Ajustar galerias do site para **100% fotos reais** *(incorporar `soft-6` ou reservas do acervo)*.
3. Substituir ou renomear `*-ia.jpg` → `{categoria}-promo.jpg` conforme arquitetura final.
4. Homologar com checklist “É a nossa suíte?” + HTTP 200.
5. Encaminhar para **LJM-SITE-014 — Publicação Controlada**.

**Ordem de produção sugerida:** Gran Luxo → Master Luxo → Luxo Especial → Soft → Luxo → Hot *(após recaptura)*.

---

*Gerado em 2026-06-20 14:32 · Repositório `/Users/diogo/Documents/GitHub/lejardam` · Documento estratégico only · Sem push · Sem deploy · Produção inalterada*
