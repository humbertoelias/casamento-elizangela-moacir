PROJETO DO SITE DE CASAMENTO - ELIZÂNGELA & MOACIR

SITE DE CASAMENTO - PASSO A PASSO SIMPLES

1) O QUE TEM NESTA PASTA
- app = páginas principais do site
- components = partes do site separadas em blocos
- public/galeria = fotos do casal
- src/data/wedding.ts = arquivo mais importante para editar nomes, data, local, textos, presentes e chave Pix

2) ARQUIVO MAIS IMPORTANTE PARA VOCÊ EDITAR
Abra:
- src/data/wedding.ts

É nele que você troca:
- nomes do casal
- frase principal
- data
- local
- textos da história
- presentes
- chave Pix

3) COMO TROCAR AS FOTOS
Abra a pasta:
- public/galeria

Se quiser trocar as fotos:
- apague as fotos que estão lá
- coloque as suas novas fotos
- dê a elas os nomes:
  foto1.jpg
  foto2.jpg
  foto3.jpg
  foto4.jpg
  foto5.jpg
  foto6.jpg
  foto7.jpg
  foto8.jpg

Se quiser usar mais ou menos fotos, abra depois o arquivo:
- src/data/wedding.ts
na parte chamada gallery e ajuste a lista.

4) COMO RODAR O SITE NO COMPUTADOR
Você precisa ter instalado:
- Node.js
- Visual Studio Code

Depois:
- abra a pasta do projeto no Visual Studio Code
- abra o terminal dentro do VS Code
- rode:
  npm install
- depois rode:
  npm run dev

5) COMO ABRIR NO NAVEGADOR
Depois do comando npm run dev, o terminal vai mostrar algo como:
- Local: http://localhost:3000

Segure CTRL e clique nesse link.

6) COMO PARAR O SITE
No terminal, aperte:
- Ctrl + C

7) ONDE MEXER EM CADA COISA
- nomes, data, local, história, presentes, Pix:
  src/data/wedding.ts
- visual geral do site:
  app/globals.css
- página principal:
  app/page.tsx
- topo do site:
  components/Header.tsx
- foto principal e abertura:
  components/HeroSection.tsx
- contador:
  components/CountdownSection.tsx
- história:
  components/StorySection.tsx
- galeria:
  components/GallerySection.tsx
- trilha sonora:
  components/MusicSection.tsx
- presentes:
  components/GiftRegistrySection.tsx
- chave Pix:
  components/PixSection.tsx
- rodapé:
  components/Footer.tsx
