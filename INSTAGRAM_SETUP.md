# 📸 Guia de Configuração do Instagram Feed

Este guia vai te ajudar a conectar o feed do Instagram @urubuecoparque ao site.

## Passo 1: Criar App no Facebook Developers

1. Acesse: https://developers.facebook.com/
2. Faça login com sua conta do Facebook
3. Clique em **"Meus Apps"** → **"Criar App"**
4. Escolha o tipo: **"Outro"** → **"Instagram Basic Display"**
5. Preencha:
   - Nome do App: `Urubu Ecopark Website`
   - Email de contato: seu email
   - Finalidade: `Website`

## Passo 2: Configurar Instagram Basic Display

1. No painel do app, vá em **"Produtos"** → **"Instagram Basic Display"**
2. Clique em **"Criar novo app"**
3. Adicione o produto **"Instagram Basic Display"**

## Passo 3: Configurar URLs de Redirecionamento

1. Vá em **"Configurações Básicas"** do app
2. Em **"Domínios do App"**, adicione:
   - Seu domínio (ex: `urubuecopark.com.br`)
   - Ou `localhost` para desenvolvimento
3. Em **"URIs de Redirecionamento OAuth Válidos"**, adicione:
   - `https://seu-dominio.com/auth/instagram/callback`
   - Para desenvolvimento: `http://localhost:5173/auth/instagram/callback`

## Passo 4: Criar Usuário de Teste (Desenvolvimento)

1. Vá em **"Funções"** → **"Funções"**
2. Adicione você mesmo como **"Administrador"** ou **"Desenvolvedor"**
3. Vá em **"Usuários de teste"** → **"Adicionar usuários de teste"**
4. Adicione a conta do Instagram @urubuecoparque

## Passo 5: Obter Access Token

### Opção A: Token de Longa Duração (Recomendado)

1. Acesse: https://developers.facebook.com/tools/explorer/
2. Selecione seu app no dropdown
3. Em **"Permissões"**, selecione:
   - `instagram_basic`
   - `pages_show_list`
4. Clique em **"Gerar Token de Acesso"**
5. Copie o token gerado

### Opção B: Usando o Graph API Explorer

1. Acesse: https://developers.facebook.com/tools/explorer/
2. Selecione seu app
3. Clique em **"Obter Token"** → **"Obter Token de Acesso do Usuário"**
4. Selecione as permissões necessárias
5. Autorize o app
6. Copie o token

### Opção C: Token de Longa Duração (60 dias)

Após obter o token de curta duração:

```bash
# Substitua SHORT_LIVED_TOKEN pelo token que você obteve
curl -X GET "https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=SEU_CLIENT_SECRET&access_token=SHORT_LIVED_TOKEN"
```

## Passo 6: Configurar no Projeto

1. Crie um arquivo `.env` na raiz do projeto (se não existir)
2. Adicione:

```env
VITE_INSTAGRAM_ACCESS_TOKEN=seu_token_aqui
```

3. Reinicie o servidor de desenvolvimento:
```bash
npm run dev
```

## Passo 7: Verificar Funcionamento

1. Acesse a página `/blog` do site
2. Os posts do Instagram devem aparecer automaticamente
3. Se não aparecer, verifique o console do navegador para erros

## Troubleshooting

### Erro: "Invalid access token"
- Verifique se o token está correto no `.env`
- Certifique-se de que o token não expirou
- Gere um novo token se necessário

### Erro: "User not authorized"
- Certifique-se de que a conta do Instagram está autorizada
- Verifique se a conta está adicionada como usuário de teste

### Posts não aparecem
- Verifique se a conta @urubuecoparque tem posts públicos
- Certifique-se de que o token tem as permissões corretas
- Verifique o console do navegador para erros

## Renovação do Token

Os tokens do Instagram expiram. Para renovar:

1. Acesse: https://developers.facebook.com/tools/explorer/
2. Gere um novo token
3. Atualize o arquivo `.env`
4. Reinicie o servidor

## Alternativa: Usar Serviço de Terceiros

Se a configuração direta for complicada, você pode usar serviços como:
- **Instagram Feed API** (https://www.instagramfeedapi.com/)
- **RapidAPI Instagram** (https://rapidapi.com/)
- **Apify Instagram Scraper** (https://apify.com/)

Esses serviços fornecem APIs mais simples de usar.

## Suporte

Se tiver problemas, consulte:
- Documentação oficial: https://developers.facebook.com/docs/instagram-basic-display-api
- Stack Overflow: https://stackoverflow.com/questions/tagged/instagram-api

