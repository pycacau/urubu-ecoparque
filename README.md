# Urubu Ecoparque - Website

Website oficial do Urubu Ecoparque, desenvolvido para promover experiências únicas em contato com a natureza.

## 🚀 Sobre o Projeto

Este projeto é o website oficial do Urubu Ecoparque, um parque ecológico que oferece diversas atividades, festas, trilhas e muito mais em meio à natureza.

## ✨ Funcionalidades

- **Design Responsivo**: Totalmente adaptado para dispositivos móveis, tablets e desktops
- **Galeria de Fotos**: Carrossel automático com imagens do parque
- **Cardápio Completo**: Página dedicada à Urubudega com cardápio completo
- **Integração Instagram**: Feed automático do Instagram (@urubuecoparque)
- **Animações Suaves**: Efeitos parallax e animações de natureza
- **Tema Natureza**: Design inspirado na natureza com cores e elementos temáticos

## 🛠️ Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Vite** - Build tool e dev server
- **React Router** - Roteamento para aplicações React
- **Shadcn UI** - Componentes UI modernos e acessíveis
- **Lucide React** - Ícones SVG

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/pycacau/urubu-ecoparque.git
cd urubu-ecoparque
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra seu navegador em `http://localhost:8080`

## 🏗️ Build para Produção

Para criar uma build de produção:

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`.

## 📝 Estrutura do Projeto

```
urubu-ecoparque/
├── public/          # Arquivos estáticos
├── src/
│   ├── assets/      # Imagens e recursos
│   ├── components/  # Componentes React
│   ├── pages/       # Páginas da aplicação
│   ├── lib/         # Utilitários
│   └── index.css    # Estilos globais
├── index.html       # HTML principal
└── vite.config.ts   # Configuração do Vite
```

## 📄 Páginas

- **Início** (`/`) - Página principal com hero, features e seções principais
- **Sobre** (`/sobre`) - Informações sobre o parque
- **Entradas** (`/entradas`) - Opções de entradas e preços
- **Festas** (`/festas`) - Informações sobre eventos e festas
- **Urubudega** (`/urubudega`) - Cardápio completo do restaurante
- **Blog** (`/blog`) - Feed do Instagram e posts em destaque

## 🔧 Configuração

### Instagram API

Para usar o feed do Instagram, configure a variável de ambiente:

```env
VITE_INSTAGRAM_ACCESS_TOKEN=seu_token_aqui
```

Veja mais detalhes em `CONFIGURAR_INSTAGRAM.md`.

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1280px+)

## 🎨 Personalização

As cores e temas podem ser personalizados em:
- `src/tailwind.config.ts` - Configuração do Tailwind
- `src/index.css` - Variáveis CSS e estilos globais

## 📄 Licença

Este projeto é propriedade do Urubu Ecoparque.

## 👨‍💻 Desenvolvido por

Desenvolvido com dedicação para o Urubu Ecoparque.

---

**Urubu Ecoparque** - Viva experiências únicas em contato com a natureza! 🌿
