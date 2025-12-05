# 🖼️ Como Adicionar a Logo do Urubu Ecopark

## Opção 1: Colocar a imagem na pasta public (Recomendado)

1. Coloque sua imagem de logo na pasta `public/`
2. Nomeie o arquivo como `logo.png` (ou `logo.jpg`, `logo.svg`)
3. A logo aparecerá automaticamente!

**Formatos suportados:** PNG, JPG, SVG, WebP

**Tamanho recomendado:** 
- Mínimo: 128x128 pixels
- Ideal: 256x256 pixels ou maior
- Formato quadrado funciona melhor

## Opção 2: Colocar a imagem na pasta src/assets

1. Coloque sua imagem na pasta `src/assets/`
2. Importe no arquivo `Navbar.tsx`:

```typescript
import logoImage from "@/assets/logo.png";
```

3. Use a variável `logoImage` no componente

## Opção 3: Usar variável de ambiente

1. Crie/edite o arquivo `.env` na raiz do projeto
2. Adicione:

```env
VITE_LOGO_IMAGE=/caminho/para/sua/logo.png
```

## Dicas

- **Formato PNG com fundo transparente** funciona melhor
- Se a logo for muito grande, ela será redimensionada automaticamente
- Se a imagem não carregar, o ícone de folha aparecerá como fallback
- Para melhor qualidade, use SVG ou PNG de alta resolução

## Localização dos arquivos

- Logo na Navbar: `src/components/Navbar.tsx`
- Logo no Footer: `src/components/Footer.tsx`

Ambos já estão configurados para usar a imagem automaticamente!

