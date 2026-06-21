# LJM-SITE-008 — Validação e Seleção das Fotos Reais das Categorias Restantes

| Campo | Valor |
|-------|-------|
| **ID** | LJM-SITE-008 |
| **Projeto** | LE JARDAM MOTEL — SITE (`LJMS`) |
| **Repositório** | `/Users/diogo/Documents/GitHub/lejardam` |
| **Base** | `LJM-SITE-007` |
| **Data da validação** | 2026-06-20 |
| **Horário conclusão** | 12:42 |
| **Modo** | **Somente leitura** — nenhuma alteração operacional |
| **Status** | ❌ **REPROVADO** |

---

## Controle de escopo

| Regra | Status |
|-------|--------|
| Verificação read-only das pastas esperadas | ✅ |
| Não copiar fotos ao repositório | ✅ |
| Não editar `index.html` | ✅ |
| Não comprimir / converter imagens | ✅ |
| Commit / push / deploy / produção | ❌ Não executados |
| Documento LJM-SITE-008 criado | ✅ |

---

## 1. Objetivo

Receber, validar e selecionar fotos reais das categorias **Luxo**, **Luxo Especial**, **Gran Luxo**, **Master Luxo** e **Hot** — definindo capa e galeria por categoria — **sem copiar arquivos ao repositório nem alterar o site nesta fase**.

---

## 2. Contexto

| Fase | Status | Relevância |
|------|--------|------------|
| LJM-SITE-006 | ✅ APROVADO | Soft concluída (6 fotos locais) |
| LJM-SITE-007 | ✅ APROVADO | Plano emergencial: 5 fotos × 5 categorias = **25 fotos** |
| LJM-SITE-006A | ⚠️ RESSALVAS | Acervo Luxo–Hot inexistente no disco |
| **LJM-SITE-008** | **Esta fase** | Recebimento e seleção — **acervo não entregue** |

**Meta LJM-SITE-007:** 25 fotos → 100% categorias com fotos reais → substituir 5 URLs Unsplash.

---

## 3. Pastas verificadas

Base: `/Users/diogo/Desktop/Site Lejardam/Fotos Suites/`

| Pasta esperada (LJM-SITE-007) | Existe? | Arquivos imagem | Status |
|-------------------------------|---------|-----------------|--------|
| `Luxo/` | ❌ **Não** | 0 | ❌ Não recebida |
| `Luxo Especial/` | ❌ **Não** | 0 | ❌ Não recebida |
| `Gran Luxo/` | ❌ **Não** | 0 | ❌ Não recebida |
| `Master Luxo/` | ❌ **Não** | 0 | ❌ Não recebida |
| `Hot/` | ❌ **Não** | 0 | ❌ Não recebida |
| `Suite Soft/` *(referência)* | ✅ Sim | 6 JPG canônicos | ✅ Concluída (LJM-SITE-006) |

### Pastas alternativas verificadas

| Local | Conteúdo relevante |
|-------|-------------------|
| `Documentos Le jardam/Suítes/Luxo/` etc. | Pastas vazias (0 arquivos) |
| `Documentos Le jardam/Suítes/Suíte Solar/` | 2 screenshots WhatsApp 2019 — **fora escopo site** |
| `GitHub/lejardam/fotos/` | Apenas `soft-1` … `soft-6` — **nenhuma foto Luxo–Hot copiada** ✅ |

---

## 4. Inventário recebido

### 4.1 Categorias pendentes (escopo LJM-SITE-008)

| Categoria | Esperado (LJM-SITE-007) | Recebido | Gap |
|-----------|-------------------------|----------|-----|
| Luxo | 5 (`luxo-1` … `luxo-5`) | **0** | −5 |
| Luxo Especial | 5 | **0** | −5 |
| Gran Luxo | 5 | **0** | −5 |
| Master Luxo | 5 | **0** | −5 |
| Hot | 5 | **0** | −5 |
| **Total** | **25** | **0** | **−25** |

### 4.2 Total geral (incluindo Soft)

| Origem | Fotos |
|--------|-------|
| Soft (repo + backup) | 6 ✅ |
| Luxo–Hot (pastas LJM-SITE-007) | **0** ❌ |
| **Total acervo real site** | **6 / 31** *(meta Soft 6 + pendentes 25)* |

---

## 5. Fotos aprovadas

### Categorias remanescentes

**Nenhuma foto aprovada** — acervo não recebido nas pastas esperadas.

### Referência — Soft (fora escopo seleção desta fase)

| Arquivo | Dimensões | Veredicto | Uso |
|---------|-----------|-----------|-----|
| soft-1.jpg | 1536×1024 | ✅ APROVADA | Card |
| soft-2.jpg | 1536×1024 | ✅ APROVADA | Galeria |
| soft-3.jpg | 1536×1024 | ✅ APROVADA | Galeria |
| soft-4.jpg | 1024×1536 | ✅ APROVADA | Galeria |
| soft-5.jpg | 1024×1536 | ✅ APROVADA | Galeria |
| soft-6.jpg | 1600×1066 | ✅ APROVADA | Galeria |

*Soft já integrada localmente (LJM-SITE-006). Não requer seleção nesta fase.*

---

## 6. Fotos rejeitadas

| ID | Arquivo / item | Motivo | Categoria |
|----|----------------|--------|-----------|
| R-01 | Pastas `Luxo/` … `Hot/` | **Pastas inexistentes** — acervo não entregue | Luxo–Hot |
| R-02 | 25 arquivos esperados (`*-1.jpg` … `*-5.jpg`) | **Arquivos ausentes** | Luxo–Hot |
| R-03 | `Screenshot_20191116-*_WhatsApp.jpg` (×2) | Screenshot WhatsApp 2019; categoria Solar não existe no site; qualidade inadequada | Suíte Solar |
| R-04 | URLs Unsplash (5) | Stock genérico — permanece até acervo real | Site produção/local |

### Validações qualitativas (LJM-SITE-007) — status

| Critério | Luxo–Hot | Observação |
|----------|----------|------------|
| Resolução ≥ 1200 px | ⬜ N/A | Sem arquivos |
| Fotos reais Le Jardam | ⬜ N/A | Sem arquivos |
| Sem pessoas | ⬜ N/A | Inspeção visual pendente |
| Sem documentos | ⬜ N/A | Inspeção visual pendente |
| Sem reflexos indevidos | ⬜ N/A | Inspeção visual pendente |
| Ambiente limpo | ⬜ N/A | Inspeção visual pendente |

---

## 7. Foto de capa por categoria

| Categoria | Capa selecionada | Status |
|-----------|------------------|--------|
| Luxo | — | ❌ **Não definida** — aguarda `luxo-1.jpg` |
| Luxo Especial | — | ❌ **Não definida** |
| Gran Luxo | — | ❌ **Não definida** |
| Master Luxo | — | ❌ **Não definida** |
| Hot | — | ❌ **Não definida** |
| Soft *(ref.)* | `fotos/soft-1.jpg` | ✅ Definida |

---

## 8. Galeria por categoria

| Categoria | Galeria selecionada | Qtd | Status |
|-----------|---------------------|-----|--------|
| Luxo | — | 0 / 4–6 | ❌ Pendente |
| Luxo Especial | — | 0 / 4–6 | ❌ Pendente |
| Gran Luxo | — | 0 / 4–6 | ❌ Pendente |
| Master Luxo | — | 0 / 4–6 | ❌ Pendente |
| Hot | — | 0 / 4–6 | ❌ Pendente |
| Soft *(ref.)* | soft-1 … soft-6 | 6 | ✅ Completa |

### Seleção planejada (aplicar quando acervo existir)

| Categoria | Capa | Galeria (ordem sugerida LJM-SITE-007) |
|-----------|------|---------------------------------------|
| Luxo | luxo-1.jpg | luxo-1, luxo-2, luxo-3, luxo-4, luxo-5 |
| Luxo Especial | luxo-especial-1.jpg | luxo-especial-1 … 5 |
| Gran Luxo | gran-luxo-1.jpg | gran-luxo-1 … 5 |
| Master Luxo | master-luxo-1.jpg | master-luxo-1 … 5 |
| Hot | hot-1.jpg | hot-1 … 5 |

---

## 9. Nomes finais recomendados

*(Inalterados vs LJM-SITE-007 — aplicar na captura)*

| Categoria | Arquivos |
|-----------|----------|
| Luxo | `luxo-1.jpg` … `luxo-5.jpg` |
| Luxo Especial | `luxo-especial-1.jpg` … `luxo-especial-5.jpg` |
| Gran Luxo | `gran-luxo-1.jpg` … `gran-luxo-5.jpg` |
| Master Luxo | `master-luxo-1.jpg` … `master-luxo-5.jpg` |
| Hot | `hot-1.jpg` … `hot-5.jpg` |

**Destino futuro (LJM-SITE-009 — não executar agora):** `/Users/diogo/Documents/GitHub/lejardam/fotos/`

---

## 10. Categorias completas

| Categoria | Mínimo | Recebido | Capa | Galeria | Completa? |
|-----------|--------|----------|------|---------|-----------|
| Soft | 5+ | 6 | ✅ | ✅ (6) | ✅ **Sim** |
| Luxo | 5 | 0 | ❌ | ❌ | ❌ **Não** |
| Luxo Especial | 5 | 0 | ❌ | ❌ | ❌ **Não** |
| Gran Luxo | 5 | 0 | ❌ | ❌ | ❌ **Não** |
| Master Luxo | 5 | 0 | ❌ | ❌ | ❌ **Não** |
| Hot | 5 | 0 | ❌ | ❌ | ❌ **Não** |

**Categorias completas:** **1 / 6** (apenas Soft)

---

## 11. Categorias pendentes

| Prioridade | Categoria | Ação necessária |
|------------|-----------|-----------------|
| **P0** | **Luxo** | Executar captura LJM-SITE-007 → depositar em `Fotos Suites/Luxo/` |
| P1 | Luxo Especial | Idem → `Luxo Especial/` |
| P1 | Gran Luxo | Idem → `Gran Luxo/` |
| P1 | Master Luxo | Idem → `Master Luxo/` |
| P2 | Hot | Idem → `Hot/` |

**Bloqueio:** LJM-SITE-009 (cópia ao repositório) **não pode iniciar** até reexecução bem-sucedida de LJM-SITE-008 com acervo presente.

---

## 12. Percentual de cobertura

### Por categoria

| Categoria | Cobertura |
|-----------|-----------|
| Soft | **100%** |
| Luxo | **0%** |
| Luxo Especial | **0%** |
| Gran Luxo | **0%** |
| Master Luxo | **0%** |
| Hot | **0%** |

### Global

| Métrica | Valor |
|---------|-------|
| Categorias com acervo completo | **1 / 6** = **16,7%** |
| Fotos recebidas vs meta (31) | **6 / 31** = **19,4%** |
| Unsplash substituível agora | **0 / 5** URLs |
| **Conclusão fotográfica site** | **16,7%** — **sem progresso desde LJM-SITE-006A** |

```text
COBERTURA LJMS — PÓS LJM-SITE-008
Soft          ████████████████████ 100%
Luxo          ░░░░░░░░░░░░░░░░░░░░   0%
Luxo Especial ░░░░░░░░░░░░░░░░░░░░   0%
Gran Luxo     ░░░░░░░░░░░░░░░░░░░░   0%
Master Luxo   ░░░░░░░░░░░░░░░░░░░░   0%
Hot           ░░░░░░░░░░░░░░░░░░░░   0%
GLOBAL        ███░░░░░░░░░░░░░░░░░ 16,7%
```

---

## 13. Riscos

| ID | Risco | Severidade | Mitigação |
|----|-------|------------|-----------|
| RK-01 | **Acervo zero** — captura LJM-SITE-007 não executada | **Crítica** | Executar sessão fotográfica hoje; criar pastas em `Fotos Suites/` |
| RK-02 | LJM-SITE-009 bloqueada | Alta | Revalidar LJM-SITE-008 após entrega das 25 fotos |
| RK-03 | Site permanece 83% Unsplash | Alta | Impacto credibilidade/conversão |
| RK-04 | Pastas planejadas não criadas | Média | Criar manualmente as 5 subpastas antes da captura |
| RK-05 | Confusão Soft vs pendentes | Baixa | Soft concluída — foco exclusivo Luxo–Hot |

---

## 14. Resultado final

### Critérios de aprovação

| Critério | Status |
|----------|--------|
| Fotos reais avaliadas | ⚠️ Avaliadas — **zero recebidas** |
| Fotos aprovadas selecionadas | ❌ Nenhuma (Luxo–Hot) |
| Capa definida por categoria | ❌ 0/5 |
| Galeria definida por categoria | ❌ 0/5 |
| Cobertura calculada | ✅ |
| Nenhuma alteração operacional | ✅ |
| Acervo suficiente para 100% Unsplash | ❌ **Não** |

### Substituição Unsplash

| Pergunta | Resposta |
|----------|----------|
| Acervo suficiente para substituir 100% Unsplash? | ❌ **Não** — faltam 25 fotos em 5 categorias |
| Soft substituída | ✅ Sim (local) |
| Luxo–Hot substituíveis | ❌ Não |

### Status da fase

**❌ REPROVADO**

**Motivo:** acervo fotográfico das categorias remanescentes **não foi entregue** nas pastas definidas em LJM-SITE-007. Impossível concluir seleção de capa e galeria.

---

## 15. Próxima fase recomendada

### Ação imediata (humana — pré-requisito)

1. Criar pastas em `/Users/diogo/Desktop/Site Lejardam/Fotos Suites/`:
   - `Luxo/` · `Luxo Especial/` · `Gran Luxo/` · `Master Luxo/` · `Hot/`
2. Executar captura conforme **LJM-SITE-007** (25 fotos, ordem Luxo → Hot)
3. **Reexecutar LJM-SITE-008** após deposição dos arquivos

### Fase automática (após aprovação LJM-SITE-008)

**LJM-SITE-009** — Cópia Controlada das Fotos Aprovadas para o Repositório e Preparação Local.

*(Bloqueada até LJM-SITE-008 aprovado com acervo presente.)*

---

## Validações obrigatórias

| Validação | Resultado |
|-----------|-----------|
| LJM-SITE-007 usada como base | ✅ |
| Pastas verificadas | ✅ (5 inexistentes + Soft OK) |
| Total fotos encontradas (Luxo–Hot) | **0** |
| Categorias completas | **1** (Soft) |
| Categorias pendentes | **5** (Luxo–Hot) |
| Nenhuma foto copiada ao repositório | ✅ |
| `index.html` não alterado nesta fase | ✅ |
| Nenhum commit / push / deploy | ✅ |
| Documento LJM-SITE-008 criado | ✅ |

---

*Documento emitido na fase LJM-SITE-008 — Validação e Seleção.*
*Projeto: LE JARDAM MOTEL — SITE — execução read-only.*
