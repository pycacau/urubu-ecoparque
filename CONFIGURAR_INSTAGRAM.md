# 🚀 Configuração Rápida do Instagram

## Passo a Passo Simplificado

### 1️⃣ Criar App no Facebook (5 minutos)

1. Acesse: https://developers.facebook.com/apps/
2. Clique em **"Criar App"**
3. Escolha: **"Outro"** → **"Instagram Basic Display"**
4. Preencha o nome: `Urubu Ecopark`

### 2️⃣ Configurar o App (3 minutos)

1. No painel do app, vá em **"Produtos"** → **"Instagram Basic Display"**
2. Clique em **"Criar"**
3. Em **"Configurações Básicas"**, adicione:
   - **URIs de Redirecionamento OAuth Válidos**: 
     - `http://localhost:5173/auth/callback` (desenvolvimento)
     - `https://seu-dominio.com/auth/callback` (produção)

### 3️⃣ Obter Token (2 minutos)

**Opção Rápida (Graph API Explorer):**

1. Acesse: https://developers.facebook.com/tools/explorer/
2. Selecione seu app no dropdown superior
3. Clique em **"Gerar Token"** → **"Obter Token de Acesso do Usuário"**
4. Marque as permissões:
   - ✅ `instagram_basic`
   - ✅ `pages_show_list`
5. Clique em **"Gerar Token de Acesso"**
6. **Copie o token gerado** (você vai precisar dele!)

### 4️⃣ Converter para Token de Longa Duração (60 dias)

O token que você obteve expira em 1 hora. Para converter para 60 dias:

1. Abra o terminal na pasta do projeto
2. Execute (substitua os valores):

```bash
# Substitua SHORT_TOKEN pelo token que você copiou
# Substitua CLIENT_SECRET pelo Client Secret do seu app (encontre em Configurações Básicas)

curl "https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=SEU_CLIENT_SECRET&access_token=SHORT_TOKEN"
```

3. Você receberá um JSON com um novo token. Copie o valor de `access_token`

### 5️⃣ Configurar no Projeto (1 minuto)

1. Crie um arquivo `.env` na raiz do projeto (se não existir)
2. Adicione esta linha:

```env
VITE_INSTAGRAM_ACCESS_TOKEN=cole_seu_token_aqui
```

3. Salve o arquivo
4. Reinicie o servidor:

```bash
npm run dev
```

### 6️⃣ Testar

1. Acesse: http://localhost:5173/blog
2. Os posts do Instagram devem aparecer! 🎉

## ⚠️ Importante

- O token expira em 60 dias. Você precisará renová-lo periodicamente
- Para produção, use HTTPS nas URLs de redirecionamento
- Mantenha o token seguro e não o compartilhe publicamente

## 🔄 Renovar Token (quando expirar)

Quando o token expirar (após 60 dias), você pode renová-lo:

```bash
curl "https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=SEU_TOKEN_ATUAL"
```

Isso retornará um novo token válido por mais 60 dias.

## ❓ Problemas Comuns

**"Invalid access token"**
- Verifique se copiou o token completo
- Certifique-se de que o token não expirou
- Gere um novo token

**"User not authorized"**
- Certifique-se de que a conta @urubuecoparque está autorizada no app
- Vá em "Usuários de teste" e adicione a conta

**Nenhum post aparece**
- Verifique se a conta tem posts públicos
- Certifique-se de que o token tem as permissões corretas

## 📞 Precisa de Ajuda?

Consulte o arquivo `INSTAGRAM_SETUP.md` para instruções mais detalhadas.

