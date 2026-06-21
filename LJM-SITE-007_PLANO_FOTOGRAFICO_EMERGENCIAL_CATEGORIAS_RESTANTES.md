# LJM-SITE-007 — Plano Fotográfico Emergencial das Categorias Restantes

| Campo | Valor |
|-------|-------|
| **ID** | LJM-SITE-007 |
| **Projeto** | LE JARDAM MOTEL — SITE (`LJMS`) |
| **Repositório** | `/Users/diogo/Documents/GitHub/lejardam` |
| **Base** | `LJM-SITE-005` · `LJM-SITE-006` · `LJM-SITE-006A` |
| **Data do plano** | 2026-06-20 |
| **Horário conclusão** | 12:37 |
| **Modo** | **Documental** — nenhuma alteração operacional |
| **Status** | ✅ **APROVADO** |

---

## Controle de escopo

| Regra | Status |
|-------|--------|
| Execução exclusiva no contexto LJMS | ✅ |
| Plano fotográfico documental | ✅ |
| Nenhum arquivo do site alterado nesta fase | ✅ |
| Não copiar imagens ao repositório | ✅ |
| Não editar `index.html` | ✅ |
| Commit / push / deploy / produção | ❌ Não executados |

---

## 1. Objetivo

Criar **plano fotográfico emergencial** para produzir, ainda hoje, as fotos reais das **5 categorias pendentes** (Luxo, Luxo Especial, Gran Luxo, Master Luxo, Hot), permitindo atingir **100% das categorias com fotos reais** e substituir definitivamente as imagens Unsplash — **sem executar captura, cópia ou publicação nesta fase**.

---

## 2. Contexto

| Fase | Status | Efeito |
|------|--------|--------|
| LJM-SITE-004 | ✅ APROVADO | `soft-1.jpg` restaurada; card/galeria Soft validados localmente |
| LJM-SITE-005 | ⚠️ APROVADO COM RESSALVAS | Inventário: Soft 6 JPG; demais categorias **zero fotos** |
| LJM-SITE-006 | ✅ APROVADO | Galeria Soft completa (6 fotos); `index.html` +1 linha; 6/6 HTTP 200 local |
| LJM-SITE-006A | ⚠️ APROVADO COM RESSALVAS | Busca read-only confirmou acervo **vazio** Luxo–Hot |
| **LJM-SITE-007** | **Esta fase** | Plano de captura emergencial |

**Cobertura fotográfica atual:** **16,7%** (1/6 categorias — Soft concluída).

**Meta pós-captura:** **100%** (6/6 categorias × 5 fotos mínimo = **25 fotos novas** + Soft 6 = **31 fotos totais**).

---

## 3. Categorias pendentes

| # | Categoria | Suítes (site) | Unsplash ativo | Acervo real | Prioridade |
|---|-----------|---------------|----------------|-------------|------------|
| 1 | **Luxo** | 10 | ✅ | ❌ | **P0 — URGENTE** |
| 2 | **Luxo Especial** | 3 | ✅ | ❌ | P1 |
| 3 | **Gran Luxo** | 1 | ✅ | ❌ | P1 |
| 4 | **Master Luxo** | 1 | ✅ | ❌ | P1 |
| 5 | **Hot** | 1 | ✅ | ❌ | P2 |

**Soft:** ✅ concluída (referência de padrão — 6 fotos, galeria + card).

---

## 4. Quantidade mínima de fotos

| Categoria | Mínimo | Card | Galeria | Total sessão |
|-----------|--------|------|---------|--------------|
| Luxo | **5** | 1 | 4 | 5 *(1 suíte representativa)* |
| Luxo Especial | **5** | 1 | 4 | 5 |
| Gran Luxo | **5** | 1 | 4 | 5 |
| Master Luxo | **5** | 1 | 4 | 5 |
| Hot | **5** | 1 | 4 | 5 |
| **Total emergencial** | | | | **25 fotos** |

*Nota Luxo:* 10 suítes físicas — fotografar **1 suíte Luxo representativa** padronizada; legendas indicam categoria, não número de unidade.

---

## 5. Padrão visual exigido

### 5.1 Regra geral (todas as categorias)

| Requisito | Obrigatório |
|-----------|-------------|
| 1 foto de capa **horizontal** | ✅ |
| 1 foto cama / ambiente principal | ✅ |
| 1 foto banheiro / hidro / ducha *(se houver)* | ✅ |
| 1 foto do **diferencial** da suíte | ✅ |
| 1 foto geral com **iluminação acesa** | ✅ |

### 5.2 Regras de composição

- Preferir **horizontal** para card e maioria da galeria
- Boa iluminação — luzes decorativas **acesas**
- **Sem pessoas**
- **Sem dados sensíveis** (documentos, placas, QR operacionais)
- **Sem reflexos indevidos** em espelhos (posicionar câmera fora do enquadramento)
- **Sem lixo**, objetos pessoais, roupas, produtos de limpeza visíveis
- Enquadramento limpo — linhas retas, sem cortes abruptos
- Cama arrumada, frigobar fechado, toalhas dobradas
- TV desligada ou tela neutra (sem conteúdo identificável)

### 5.3 Referência Soft (padrão atingido)

| Foto | Função | Legenda modelo |
|------|--------|----------------|
| soft-1 | Card + galeria | Ambiente principal / hidro |
| soft-2 | Galeria | Cama / parede iluminada |
| soft-3 | Galeria | Hidro alternativo |
| soft-4 | Galeria | Banheiro |
| soft-5 | Galeria | Corredor / TV |
| soft-6 | Galeria | Vista geral |

---

## 6. Padrão técnico exigido

| Parâmetro | Especificação |
|-----------|---------------|
| Resolução mínima | **1200 px** de largura (lado longo) |
| Resolução ideal | 1600–2048 px largura |
| Formato | **JPG** (preferido) ou WebP |
| Orientação card | Paisagem 3:2 ou 16:9 |
| Peso alvo | ≤ 250 KB *(pós-export; otimização LJM-SITE-010)* |
| Qualidade export JPG | 80–85% |
| Balance de branco | Neutro — evitar dominante amarela |
| Nitidez | Foco no elemento principal |
| Nomenclatura | `{categoria-slug}-{n}.jpg` — ver §8 |
| Organização | **Uma categoria por pasta** |

---

## 7. Checklist por categoria

### 7.1 Luxo — P0 (10 suítes · categoria mais procurada)

| # | Item | Detalhe |
|---|------|---------|
| 1 | **Qtd mínima** | 5 fotos |
| 2 | **Capa obrigatória** | `luxo-1.jpg` — vista geral horizontal, cama + iluminação |
| 3 | **Galeria** | luxo-2..5 — cama, hidro, banheiro/ducha, ambiente geral |
| 4 | **Ângulos** | Frontal cama · 45° ambiente · close hidro · ducha dupla · wide entrada |
| 5 | **Itens obrigatórios** | Hidromassagem · Ducha dupla · Frigobar premium · TV Smart · Cama Queen |
| 6 | **Qualidade mínima** | ≥ 1200 px largura · sem pessoas · iluminação acesa |
| 7 | **Nomes finais** | `luxo-1.jpg` … `luxo-5.jpg` |
| 8 | **Pasta** | `/Users/diogo/Desktop/Site Lejardam/Fotos Suites/Luxo/` |
| 9 | **Prioridade** | **1ª a fotografar** |
| 10 | **Checklist captura** | ☐ Suite preparada ☐ Luzes acesas ☐ Espelhos limpos ☐ 5 ângulos ☐ Revisão no celular ☐ Transferir para pasta |

**Mapa foto a foto:**

| Arquivo | Tipo | Conteúdo | Legenda sugerida |
|---------|------|----------|------------------|
| luxo-1.jpg | **Card** | Ambiente principal horizontal | Suíte Luxo — ambiente principal |
| luxo-2.jpg | Galeria | Cama Queen + decoração | Cama Queen com iluminação premium |
| luxo-3.jpg | Galeria | Hidromassagem | Hidromassagem privativa |
| luxo-4.jpg | Galeria | Ducha dupla / banheiro | Ducha dupla e acabamento premium |
| luxo-5.jpg | Galeria | Frigobar + TV Smart | Frigobar premium e TV Smart |

---

### 7.2 Luxo Especial — P1 (3 suítes)

| # | Item | Detalhe |
|---|------|---------|
| 1 | **Qtd mínima** | 5 fotos |
| 2 | **Capa** | `luxo-especial-1.jpg` — ambiente com iluminação cênica |
| 3 | **Galeria** | luxo-especial-2..5 |
| 4 | **Ângulos** | Wide ambiente · hidro dupla · sauna vapor · bar privativo · detalhe luz cênica |
| 5 | **Itens obrigatórios** | Hidro dupla · Sauna a vapor · Bar privativo · TV Smart · Iluminação cênica |
| 6 | **Qualidade** | ≥ 1200 px · vapor/sauna com cuidado reflexos |
| 7 | **Nomes** | `luxo-especial-1.jpg` … `luxo-especial-5.jpg` |
| 8 | **Pasta** | `…/Fotos Suites/Luxo Especial/` |
| 9 | **Prioridade** | **2ª** |
| 10 | **Checklist** | ☐ Sauna desligada ou vapor controlado ☐ Bar organizado ☐ 5 fotos ☐ Pasta |

**Mapa foto a foto:**

| Arquivo | Conteúdo | Legenda sugerida |
|---------|----------|------------------|
| luxo-especial-1.jpg | **Card** — ambiente cênico | Luxo Especial — refinamento elevado |
| luxo-especial-2.jpg | Hidro dupla | Hidromassagem dupla |
| luxo-especial-3.jpg | Sauna a vapor | Sauna a vapor privativa |
| luxo-especial-4.jpg | Bar privativo | Bar privativo |
| luxo-especial-5.jpg | Iluminação cênica wide | Iluminação cênica exclusiva |

---

### 7.3 Gran Luxo — P1 (1 suíte exclusiva)

| # | Item | Detalhe |
|---|------|---------|
| 1 | **Qtd mínima** | 5 fotos |
| 2 | **Capa** | `gran-luxo-1.jpg` — piscina privativa ou ambiente principal |
| 3 | **Galeria** | gran-luxo-2..5 |
| 4 | **Ângulos** | Piscina · sauna seca · hidro dupla · bar completo · cromoterapia |
| 5 | **Itens obrigatórios** | Piscina privativa · Sauna seca · Cromoterapia · Hidro dupla · Bar completo |
| 6 | **Qualidade** | ≥ 1200 px · água limpa · sem reflexos indesejados |
| 7 | **Nomes** | `gran-luxo-1.jpg` … `gran-luxo-5.jpg` |
| 8 | **Pasta** | `…/Fotos Suites/Gran Luxo/` |
| 9 | **Prioridade** | **3ª** |
| 10 | **Checklist** | ☐ Piscina limpa ☐ Luzes cromoterapia acesas ☐ 5 fotos ☐ Pasta |

**Mapa foto a foto:**

| Arquivo | Conteúdo | Legenda sugerida |
|---------|----------|------------------|
| gran-luxo-1.jpg | **Card** — piscina ou suite | Gran Luxo — exclusividade total |
| gran-luxo-2.jpg | Piscina privativa | Piscina privativa |
| gran-luxo-3.jpg | Sauna seca | Sauna seca |
| gran-luxo-4.jpg | Hidro dupla + cromoterapia | Hidromassagem com cromoterapia |
| gran-luxo-5.jpg | Bar completo | Bar completo privativo |

---

### 7.4 Master Luxo — P1 (1 suíte · experiência definitiva)

| # | Item | Detalhe |
|---|------|---------|
| 1 | **Qtd mínima** | 5 fotos |
| 2 | **Capa** | `master-luxo-1.jpg` — sala de estar ou piscina aquecida |
| 3 | **Galeria** | master-luxo-2..5 |
| 4 | **Ângulos** | Sala estar · piscina aquecida · sauna+vapor · hidro 2p · champanheira |
| 5 | **Itens obrigatórios** | Piscina aquecida · Sauna + Vapor · Hidro 2 pessoas · Champanheira · Sala de estar |
| 6 | **Qualidade** | ≥ 1200 px · enquadramento premium |
| 7 | **Nomes** | `master-luxo-1.jpg` … `master-luxo-5.jpg` |
| 8 | **Pasta** | `…/Fotos Suites/Master Luxo/` |
| 9 | **Prioridade** | **4ª** |
| 10 | **Checklist** | ☐ Champanheira preparada (sem marca) ☐ Sala arrumada ☐ 5 fotos ☐ Pasta |

**Mapa foto a foto:**

| Arquivo | Conteúdo | Legenda sugerida |
|---------|----------|------------------|
| master-luxo-1.jpg | **Card** — sala ou piscina | Master Luxo — a experiência definitiva |
| master-luxo-2.jpg | Piscina aquecida | Piscina aquecida privativa |
| master-luxo-3.jpg | Sauna + vapor | Sauna e vapor |
| master-luxo-4.jpg | Hidro 2 pessoas | Hidromassagem para dois |
| master-luxo-5.jpg | Sala de estar + champanheira | Sala de estar com champanheira |

---

### 7.5 Hot — P2 (1 suíte · clima envolvente)

| # | Item | Detalhe |
|---|------|---------|
| 1 | **Qtd mínima** | 5 fotos |
| 2 | **Capa** | `hot-1.jpg` — cama redonda + iluminação cênica |
| 3 | **Galeria** | hot-2..5 |
| 4 | **Ângulos** | Cama redonda · espelho teto *(sem câmera no reflexo)* · iluminação · som ambiente · pole *(discreto)* |
| 5 | **Itens obrigatórios** | Espelho de teto · Iluminação cênica · Som ambiente · Cama redonda · Pole dance |
| 6 | **Qualidade** | ≥ 1200 px · **cuidado extremo com espelhos** |
| 7 | **Nomes** | `hot-1.jpg` … `hot-5.jpg` |
| 8 | **Pasta** | `…/Fotos Suites/Hot/` |
| 9 | **Prioridade** | **5ª (última)** |
| 10 | **Checklist** | ☐ Espelho teto — câmera fora do reflexo ☐ Luzes coloridas acesas ☐ 5 fotos ☐ Pasta |

**Mapa foto a foto:**

| Arquivo | Conteúdo | Legenda sugerida |
|---------|----------|------------------|
| hot-1.jpg | **Card** — cama redonda | Hot — clima envolvente |
| hot-2.jpg | Iluminação cênica wide | Iluminação cênica |
| hot-3.jpg | Cama redonda close | Cama redonda |
| hot-4.jpg | Espelho de teto *(ângulo seguro)* | Espelho de teto |
| hot-5.jpg | Ambiente som + decoração | Som ambiente e atmosfera |

---

## 8. Nomes dos arquivos

### Resumo consolidado

| Categoria | Arquivos | Card (= `-1`) |
|-----------|----------|---------------|
| Luxo | `luxo-1.jpg` … `luxo-5.jpg` | luxo-1.jpg |
| Luxo Especial | `luxo-especial-1.jpg` … `luxo-especial-5.jpg` | luxo-especial-1.jpg |
| Gran Luxo | `gran-luxo-1.jpg` … `gran-luxo-5.jpg` | gran-luxo-1.jpg |
| Master Luxo | `master-luxo-1.jpg` … `master-luxo-5.jpg` | master-luxo-1.jpg |
| Hot | `hot-1.jpg` … `hot-5.jpg` | hot-1.jpg |

### Destino futuro no repositório (LJM-SITE-008+ — **não executar agora**)

```
/Users/diogo/Documents/GitHub/lejardam/fotos/
├── soft-1.jpg … soft-6.jpg     ✅ existentes
├── luxo-1.jpg … luxo-5.jpg     ⬜ pendente
├── luxo-especial-1.jpg … -5    ⬜ pendente
├── gran-luxo-1.jpg … -5        ⬜ pendente
├── master-luxo-1.jpg … -5      ⬜ pendente
└── hot-1.jpg … hot-5.jpg       ⬜ pendente
```

---

## 9. Estrutura de pastas recomendada

### Base temporária (captura hoje)

```
/Users/diogo/Desktop/Site Lejardam/Fotos Suites/
├── Suite Soft/          ✅ existente — concluída
│   └── files/           (soft-1 … soft-6)
├── Luxo/                ⬜ criar / usar
│   ├── luxo-1.jpg
│   ├── luxo-2.jpg
│   ├── luxo-3.jpg
│   ├── luxo-4.jpg
│   └── luxo-5.jpg
├── Luxo Especial/       ⬜ criar / usar
├── Gran Luxo/           ⬜ criar / usar
├── Master Luxo/         ⬜ criar / usar
└── Hot/                 ⬜ criar / usar
```

### Pasta alternativa (já existente vazia)

`/Users/diogo/Desktop/Documentos Gerenciais 🍃/Documentos Le jardam/Suítes/` — subpastas Luxo, Luxo Especial, Gran luxo, Master, Suíte Hot **vazias**. Podem receber cópia espelhada após captura, mas **fonte oficial para LJM-SITE-008:** `Site Lejardam/Fotos Suites/`.

---

## 10. Ordem de captura

### Cronograma emergencial (mesmo dia)

| Ordem | Horário sugerido | Categoria | Suíte | Tempo est. | Fotos |
|-------|------------------|-----------|-------|------------|-------|
| **1** | Bloco 1 | **Luxo** | 1 representativa | 20 min | 5 |
| **2** | Bloco 2 | **Luxo Especial** | 1 das 3 | 20 min | 5 |
| **3** | Bloco 3 | **Gran Luxo** | única | 25 min | 5 |
| **4** | Bloco 4 | **Master Luxo** | única | 25 min | 5 |
| **5** | Bloco 5 | **Hot** | única | 20 min | 5 |
| — | Final | Revisão + transferência | — | 15 min | — |

**Tempo total estimado:** ~2h05 (+ deslocamento entre suítes).

### Sequência operacional por suíte

1. Preparar ambiente (5 min)
2. Foto capa horizontal (`-1`)
3. Foto cama / ambiente principal (`-2`)
4. Foto hidro / banheiro (`-3`)
5. Foto diferencial (`-4`)
6. Foto geral iluminada (`-5`)
7. Revisar no dispositivo
8. Renomear e salvar na pasta da categoria

---

## 11. Riscos

| ID | Risco | Impacto | Mitigação |
|----|-------|---------|-----------|
| RK-01 | Tempo insuficiente para 5 suítes hoje | Alto | Seguir ordem P0→P2; Luxo obrigatório primeiro |
| RK-02 | Reflexos em espelhos (Hot, banheiros) | Médio | Ângulo lateral; fotógrafo fora do frame |
| RK-03 | Iluminação inconsistente entre categorias | Médio | Sempre luzes decorativas acesas; mesmo horário |
| RK-04 | Luxo — 10 suítes, 1 foto set | Baixo | Legenda por categoria; futuro: variar se necessário |
| RK-05 | Arquivos HEIC/iPhone sem conversão | Médio | Exportar JPG ≥1200 px antes de salvar |
| RK-06 | Pastas vazias em Documentos Le jardam | Baixo | Usar `Site Lejardam/Fotos Suites/` como canonical |
| RK-07 | Publicação acidental antes SP-GEX | Alto | LJM-SITE-008 valida antes de copiar ao repo |

---

## 12. Critério de aprovação fotográfica

Uma categoria será **aprovada para LJM-SITE-008** quando:

| # | Critério | Obrigatório |
|---|----------|-------------|
| 1 | 5 arquivos JPG na pasta correta | ✅ |
| 2 | Nomenclatura `{cat}-{1..5}.jpg` | ✅ |
| 3 | Largura ≥ 1200 px em todas | ✅ |
| 4 | Capa (`-1`) horizontal | ✅ |
| 5 | Itens/features da categoria visíveis | ✅ |
| 6 | Sem pessoas / dados sensíveis | ✅ |
| 7 | Iluminação acesa em ≥ 1 foto geral | ✅ |
| 8 | Revisão visual no celular/desktop | ✅ |

**Reprovação automática se:** blur excessivo · exposição estourada · reflexo do fotógrafo · objeto pessoal visível · largura < 800 px.

---

## 13. Próxima fase recomendada

**LJM-SITE-008** — Recebimento, Validação e Seleção das Fotos Reais das Categorias Restantes.

| Pré-requisito LJM-SITE-008 | Responsável |
|----------------------------|-------------|
| 25 fotos capturadas conforme este plano | Equipe Le Jardam |
| Arquivos nas pastas `Fotos Suites/{Categoria}/` | Equipe Le Jardam |
| Checklist §12 aprovado por categoria | LJM-SITE-008 |

**Após LJM-SITE-008:** cópia controlada → `fotos/` → atualização `CATEGORIAS[]` → validação HTTP local → SP-GEX deploy.

---

## 14. Conclusão

Este plano define **captura emergencial de 25 fotos** em **5 categorias**, seguindo o padrão Soft já concluído, para elevar cobertura de **16,7% → 100%**.

Esta fase **não alterou** arquivos do site.

Esta fase **não copiou** imagens ao repositório.

Esta fase **não publicou** nada.

**Prioridade absoluta hoje:** **Luxo** (P0) — categoria mais procurada, 10 suítes, maior impacto comercial.

---

## Validações obrigatórias

| Validação | Resultado |
|-----------|-----------|
| LJM-SITE-006 usada como base | ✅ |
| Soft concluída (6 fotos) | ✅ |
| Luxo, Luxo Especial, Gran Luxo, Master Luxo, Hot pendentes | ✅ |
| Nenhum arquivo do site alterado nesta fase | ✅ |
| Nenhum commit | ✅ |
| Nenhum push | ✅ |
| Nenhum deploy | ✅ |
| Documento LJM-SITE-007 criado | ✅ |

---

## Critérios de aprovação da fase

| Critério | Status |
|----------|--------|
| Plano fotográfico criado | ✅ |
| Checklist por categoria criado | ✅ |
| Padrão técnico definido | ✅ |
| Nomes de arquivos definidos | ✅ |
| Ordem de captura definida | ✅ |
| Nenhuma alteração operacional | ✅ |

---

## Status final

**✅ APROVADO**

---

*Documento emitido na fase LJM-SITE-007 — Plano Fotográfico Emergencial.*
*Projeto: LE JARDAM MOTEL — SITE — repositório `/Users/diogo/Documents/GitHub/lejardam`.*
