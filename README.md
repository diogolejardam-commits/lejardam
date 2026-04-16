# Site Le Jardam — Guia de Publicação

## Arquivos entregues
- `index.html` — site completo em arquivo único (HTML + CSS + JS)
- `logo-lejardam.jpeg` — logomarca oficial (usada em nav, footer, favicon e Open Graph)

Pronto para GitHub Pages, sem build, sem dependências.

---

## O que esta versão tem

✅ **Logomarca oficial** aplicada em:
- Navegação (topo, troca de efeito ao rolar)
- Footer
- Favicon da aba do navegador
- Ícone de app iOS (apple-touch-icon)
- Imagem de compartilhamento em redes sociais (Open Graph)

✅ **WhatsApp (62) 3506-1912** ativo em 3 pontos

✅ **Endereço** Av. Padre Pelágio, Qd. 01 Lt. 22 — Setor Laguna Parque, Trindade/GO

✅ **17 suítes** com distribuição real:

| Categoria | Qtd |
|---|---|
| Soft | 1 |
| Hot | 1 |
| Luxo | 10 |
| Luxo Especial | 3 |
| Gran Luxo | 1 |
| Master Luxo | 1 |

✅ **Seção TARIFAS nova** — duas tabelas com toggle:
- **Segunda a Quinta** (tabela semana)
- **Sexta a Domingo** (tabela fim de semana)
- Todas as 6 categorias com valores de 2h, 3h, pernoite e hora adicional
- Master Luxo destacada em cada tabela (★ dourada)
- Observação: "Pernoite com café da manhã incluso"
- No mobile, tabela vira cards empilhados automaticamente

---

## 1. Personalizar antes de publicar

Abra o `index.html` e localize `const CONFIG = {` (perto do final). Já está preenchido com os dados reais, mas edite se precisar trocar o Instagram:

```js
const CONFIG = {
  whatsapp: '556235061912',
  whatsappMsg: 'Olá! Gostaria de verificar disponibilidade no Le Jardam.',
  instagram: 'https://instagram.com/',           // ← colar @ oficial aqui
  endereco: 'Av. Padre Pelágio, Qd. 01 Lt. 22 — Setor Laguna Parque, Trindade/GO',
  telefone: '(62) 3506-1912',
};
```

### Ajustar valores da tabela
As tabelas de tarifas estão no HTML (não no JS). Procure por `TABELA SEMANA` e `TABELA FDS` — cada linha corresponde a uma categoria com os quatro valores (2h, 3h, pernoite, hora adicional).

---

## 2. Publicar no GitHub Pages

### Passo a passo
1. Acesse https://github.com/new
2. Nome do repo: `lejardam`
3. Público · Add README · **Create repository**
4. Na página do repo, clique em **Add file → Upload files**
5. **Arraste os DOIS arquivos juntos:**
   - `index.html`
   - `logo-lejardam.jpeg`
6. **Commit changes**
7. Vá em **Settings → Pages**
8. Em *Source*, selecione `Deploy from a branch`
9. Branch: `main` · Pasta: `/ (root)` · **Save**
10. Aguarde ~1 min. URL:
    ```
    https://diogolejardam-commits.github.io/lejardam/
    ```

⚠️ **Importante:** os dois arquivos precisam ficar na mesma pasta (raiz do repo), senão a logo não carrega.

### Domínio próprio (ex: `lejardam.com.br`)
1. Publique como acima.
2. Em **Settings → Pages → Custom domain**, insira `lejardam.com.br`.
3. No Registro.br (ou onde comprou o domínio), configure:
   - Registro **A** para: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Registro **CNAME** `www` apontando para `diogolejardam-commits.github.io`
4. Marque **Enforce HTTPS** depois que o certificado for emitido (até 24h).

---

## 3. Estrutura completa do site (ordem)

1. **Hero** — Logo + slogan + 2 CTAs (Reservar · Ver tarifas)
2. **Sobre** — Texto institucional com capitular
3. **Suítes** — 17 cards com filtro por 6 categorias
4. **Tarifas** — Tabelas Seg-Qui e Sex-Dom com toggle
5. **Serviços** — 6 cards (garagem, 24h, hidro, gourmet, TV, ar)
6. **Reserva** — CTA direto pro WhatsApp
7. **Localização** — Endereço + horários + pagamentos
8. **Footer** — Links + branding
9. **Botão flutuante WhatsApp** — sempre visível

---

## 4. Próximas evoluções (quando quiser)

- Trocar os gradientes das suítes por **fotos reais** (basta substituir o `<div class="suite-visual">` por `<img>`)
- Adicionar formulário de reserva com integração direta no Google Sheets do Le Jardam (Apps Script)
- Criar página de galeria por suíte
- Google Maps embutido na seção Localização
- PWA com ícone na home screen (mesmo padrão do FinControl 360)

---

## Paleta aplicada

| Token | Hex | Uso |
|---|---|---|
| Verde 900 | `#1e3519` | Fundo hero, footer, reserva, suítes |
| Verde 800 | `#2d4a24` | Headers tarifas, destaques |
| Verde 700 | `#4a7a3d` | Cor primária da marca |
| Dourado | `#c9a961` | Acentos, CTAs, destaque Master |
| Creme | `#f7f2e7` | Fundo claro |

Tipografia: **Playfair Display** (display) + **Cormorant Garamond** (body) + **Inter** (UI).
