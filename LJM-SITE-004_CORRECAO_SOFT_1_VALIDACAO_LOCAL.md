# LJM-SITE-004 — Correção Controlada dos Erros Críticos (Soft-1)

| Campo | Valor |
|-------|-------|
| **ID** | LJM-SITE-004 |
| **Projeto** | LE JARDAM MOTEL — SITE (`LJMS`) |
| **Repositório** | `/Users/diogo/Documents/GitHub/lejardam` |
| **URL produção** | https://lejardammotel.com.br/ *(não alterada nesta fase)* |
| **Governança** | GDE-GOV-050-LJMS · DEC-GOV-LJMS-004 |
| **Base** | `LJM-SITE-002` · `LJM-SITE-003` |
| **Data da execução** | 2026-06-20 |
| **Modo** | Correção local controlada — **sem push, sem deploy** |
| **Status** | ✅ **APROVADO** |

---

## Controle de escopo

| Regra | Status |
|-------|--------|
| Execução exclusiva em `/Users/diogo/Documents/GitHub/lejardam` | ✅ |
| Não colar em Governança / LJINT / LJ OS / outros sistemas | ✅ |
| Restaurar `fotos/soft-1.jpg` | ✅ |
| Backup local criado | ✅ |
| Testes locais HTTP 200 | ✅ |
| Alterar tarifas / SEO / sitemap / WhatsApp / layout | ❌ Não executado |
| Alterar outras categorias | ❌ Não executado |
| Push / deploy | ❌ Não executado |

---

## 1. Diagnóstico

### 1.1 Problema identificado (LJM-SITE-002 / LJM-SITE-003)

| ID | Problema | Causa raiz | Impacto |
|----|----------|------------|---------|
| **P0-001** | `fotos/soft-1.jpg` retornava HTTP **404** em produção | Arquivo removido no commit `d647ff8` (2026-04-19) | Card Soft com imagem quebrada |
| **P0-002** | Referências ativas no código apontavam para arquivo inexistente | `index.html` mantido com paths locais | Galeria Soft e lightbox falhavam na 1ª foto |
| **P0-003** | Repositório local sem `soft-1.jpg` | Mesmo commit de remoção | Preview local inconsistente com código |

### 1.2 Estado antes da correção

```
fotos/
├── soft-1.jpg   ❌ AUSENTE
├── soft-2.jpg   ✅ presente (180 803 bytes)
├── soft-3.jpg   ✅ presente (185 019 bytes)
├── soft-4.jpg   ✅ presente (201 918 bytes)
└── soft-5.jpg   ✅ presente (132 227 bytes)
```

### 1.3 Referências Soft em `index.html` (inalteradas — conforme escopo)

| Uso | Path | Linha ref. |
|-----|------|------------|
| Foto do card (`CATEGORIAS[5].foto`) | `fotos/soft-1.jpg` | L1592 |
| Galeria item 1 | `fotos/soft-1.jpg` | L1594 |
| Galeria item 2 | `fotos/soft-2.jpg` | L1595 |
| Galeria item 3 | `fotos/soft-3.jpg` | L1596 |
| Galeria item 4 | `fotos/soft-4.jpg` | L1597 |
| Galeria item 5 | `fotos/soft-5.jpg` | L1598 |

**Total referências Soft:** 6 paths · **5 arquivos distintos** · todos devem existir em `fotos/`.

---

## 2. Arquivo restaurado

### 2.1 Origem (backup oficial)

| Campo | Valor |
|-------|-------|
| **Fonte** | `/Users/diogo/Desktop/Site Lejardam/Fotos Suites/Suite Soft/files/soft-1.jpg` |
| **Tamanho origem** | 183 534 bytes |
| **Data origem** | 2026-04-19 11:25 |

### 2.2 Destino

| Campo | Valor |
|-------|-------|
| **Destino** | `/Users/diogo/Documents/GitHub/lejardam/fotos/soft-1.jpg` |
| **Tamanho destino** | 183 534 bytes |
| **MD5** | `65b38c9966da9a011649736b55b1f50b` |
| **SHA-256** | `915243432788587b0c15bae8152893f0d75a05cd22942d35b803ce0e4fc106df` |
| **Integridade** | ✅ MD5 origem = MD5 destino |

### 2.3 Backup local pré-correção

| Item | Local |
|------|-------|
| Backup fotos existentes | `_backup/LJM-SITE-004/fotos/` |
| Conteúdo preservado | `soft-2.jpg` · `soft-3.jpg` · `soft-4.jpg` · `soft-5.jpg` |
| Nota | `soft-1.jpg` não existia no repo — backup registra estado anterior |

### 2.4 Alterações no repositório

| Arquivo | Ação |
|---------|------|
| `fotos/soft-1.jpg` | **Adicionado** (restaurado) |
| `index.html` | **Não alterado** |
| `sitemap.xml` | **Não alterado** |
| Demais categorias | **Não alteradas** |

---

## 3. Evidência local

### 3.1 Servidor local

| Campo | Valor |
|-------|-------|
| Comando | `python3 -m http.server 8765` |
| Diretório raiz | `/Users/diogo/Documents/GitHub/lejardam` |
| Base URL | `http://127.0.0.1:8765/` |

### 3.2 HTTP status — todos os recursos Soft

| Recurso | HTTP | Tamanho (bytes) |
|---------|------|-----------------|
| `/index.html` | **200** | 63 023 |
| `/fotos/soft-1.jpg` | **200** | 183 534 |
| `/fotos/soft-2.jpg` | **200** | 180 803 |
| `/fotos/soft-3.jpg` | **200** | 185 019 |
| `/fotos/soft-4.jpg` | **200** | 201 918 |
| `/fotos/soft-5.jpg` | **200** | 132 227 |

**Resultado:** ✅ **6/6 HTTP 200**

### 3.3 Verificação de existência física

| Arquivo | Existe no disco | Referenciado no HTML |
|---------|-----------------|----------------------|
| `fotos/soft-1.jpg` | ✅ | ✅ (card + galeria[0]) |
| `fotos/soft-2.jpg` | ✅ | ✅ |
| `fotos/soft-3.jpg` | ✅ | ✅ |
| `fotos/soft-4.jpg` | ✅ | ✅ |
| `fotos/soft-5.jpg` | ✅ | ✅ |

---

## 4. Testes executados

### 4.1 Card Soft

| Teste | Método | Resultado |
|-------|--------|-----------|
| Categoria Soft definida em `CATEGORIAS[5]` | Inspeção estática | ✅ `nome: 'Soft'`, `qtd: 1` |
| Foto do card (`c.foto`) | Path `fotos/soft-1.jpg` + HTTP 200 | ✅ |
| Classe `has-gallery` | `galeria.length === 5` | ✅ aplicada |
| Botão galeria (`cat-card-gallery-btn`) | Render condicional + `data-cat-index="5"` | ✅ |
| Contador "5 fotos" | `c.galeria.length` | ✅ |
| Background-image do card | URL resolvível localmente | ✅ |

### 4.2 Galeria Soft

| Teste | Resultado |
|-------|-----------|
| Array `galeria` com 5 itens | ✅ |
| Cada `src` aponta para arquivo existente | ✅ |
| Legendas presentes (5) | ✅ |
| `abrirGaleria(CATEGORIAS[5])` wired via click handler | ✅ |

### 4.3 Lightbox

| Elemento / função | Presente |
|-------------------|----------|
| `#lightbox` | ✅ |
| `#lb-img` | ✅ |
| `#lb-close` | ✅ |
| `abrirGaleria()` | ✅ |
| `fecharGaleria()` | ✅ |
| `renderFotoAtual()` | ✅ |
| `renderMiniaturas()` | ✅ |
| Navegação prev/next | ✅ |
| Contador `1 / 5` … `5 / 5` | ✅ (lógica intacta) |
| 1ª foto lightbox = `fotos/soft-1.jpg` | ✅ HTTP 200 |

### 4.4 Mobile

| Teste | Resultado |
|-------|-----------|
| `<meta name="viewport" content="width=device-width, initial-scale=1.0">` | ✅ |
| Regras `@media` responsivas | ✅ 14 regras |
| Assets Soft servidos igualmente em mobile viewport | ✅ (mesmos paths HTTP 200) |
| Layout / CSS | **Não alterado** (conforme escopo) |

### 4.5 Desktop

| Teste | Resultado |
|-------|-----------|
| Card grid + visual background | ✅ código intacto |
| Lightbox fullscreen overlay | ✅ CSS `.lightbox.open` presente |
| Assets Soft HTTP 200 | ✅ |

### 4.6 Git / deploy

| Verificação | Resultado |
|-------------|-----------|
| `git push` executado | ❌ Não |
| Deploy GitHub Pages | ❌ Não |
| `git status` — arquivos novos | `?? fotos/soft-1.jpg`, `?? _backup/`, docs LJM |

---

## 5. Resultado final

### 5.1 Critérios de aprovação

| Critério | Status |
|----------|--------|
| `soft-1.jpg` restaurada | ✅ |
| Card Soft operacional (local) | ✅ |
| Galeria Soft operacional (local) | ✅ |
| Lightbox operacional (estrutura + assets) | ✅ |
| Nenhum erro HTTP local nos paths Soft | ✅ |
| Nenhum push | ✅ |
| Nenhum deploy | ✅ |

### 5.2 Pendências remanescentes (fora escopo LJM-SITE-004)

| Item | Fase |
|------|------|
| Produção ainda retorna 404 para `soft-1.jpg` até commit + deploy autorizado SP-GEX | Pós-LJM-SITE-004 |
| 5 categorias com fotos Unsplash genéricas | **LJM-SITE-005** |
| Sitemap com `#anchors` | LJM-SITE-006+ (planejado) |
| Performance / analytics | P1/P2 futuras |

### 5.3 Status da fase

**✅ APROVADO**

Correção P0 concluída localmente. Integridade do backup confirmada. Todos os paths Soft resolvem HTTP 200 no servidor local. Nenhuma alteração proibida executada.

---

## Próxima fase

**LJM-SITE-005** — Substituição das fotos genéricas por fotos reais do Le Jardam Motel.

---

## Conclusão operacional

Esta fase **restaurou** o arquivo crítico ausente e **validou** localmente card, galeria e lightbox da categoria Soft.

Esta fase **não fez push**.

Esta fase **não fez deploy**.

Deploy em produção requer trilha formal SP-GEX conforme DEC-GOV-LJMS-004.

---

*Documento emitido na fase LJM-SITE-004 — Correção Controlada P0.*
*Projeto: LE JARDAM MOTEL — SITE — repositório `/Users/diogo/Documents/GitHub/lejardam`.*
