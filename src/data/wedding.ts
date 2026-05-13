export type StoryMilestone = {
  title: string
  text: string
}

export type GalleryImage = {
  src: string
  alt: string
}

export type PhysicalGift = {
  id: string
  name: string
  category: string
  status: 'Disponível' | 'Reservado' | 'Presenteado'
  description: string
}

export type PixGift = {
  id: string
  name: string
  amount: number
  description: string
}

export type AudioTrack = {
  title: string
  artist: string
  src: string
}

export const weddingData = {
  coupleNames: 'ELIZÂNGELA & MOACIR',
  tagline: 'Uma história escrita com carinho, parceria e a beleza de escolher todos os dias caminhar lado a lado.',
  weddingDate: '2026-11-21T16:30:00-03:00',
  weddingDateLabel: '21 de novembro de 2026, às 16h30',
  weddingLocation: 'Sítio Santana',
  weddingLocationUrl: 'https://www.facebook.com/sitosantana3?locale=pt_BR',
  soundtrack: {
    title: 'A trilha sonora da nossa história',
    tracks: [
      { title: 'Nossa História', artist: 'Elizângela & Moacir', src: '/audio/azul-do-vinil.mp3' },
      { title: 'Capítulos de Amor e Presença', artist: 'Elizângela & Moacir', src: '/audio/azul-do-vinil-1.mp3' },
      { title: 'Dois Corações, Um Só Caminho', artist: 'Elizângela & Moacir', src: '/audio/capitulo-doce-presenca.mp3' },
      { title: 'Presença, Leveza e Verdade', artist: 'Elizângela & Moacir', src: '/audio/capitulo-doce-presenca-1.mp3' }
    ] satisfies AudioTrack[]
  },
  pixKey: 'fe9fc015-1f56-49fd-aacf-5b8709ff4d3a',
  heroImage: '/galeria/foto7.jpg',
  storyIntro:
    'Entre encontros, conversas e momentos que foram ganhando cada vez mais sentido, ELIZÂNGELA e MOACIR construíram uma relação marcada por presença, leveza e carinho. Este site é uma forma de dividir um pouco dessa caminhada e celebrar com quem faz parte dela.',
  storyBody:
    'O casamento de ELIZÂNGELA e MOACIR representa mais do que uma cerimônia: representa uma escolha diária de cuidado, respeito, companheirismo e sonho em comum. Cada detalhe deste espaço foi pensado para refletir a beleza dessa nova fase e a alegria de compartilhar esse capítulo com pessoas queridas.',
  milestones: [
    {
      title: 'Como tudo começou',
      text: 'A história de ELIZÂNGELA e MOACIR começou de forma natural, com conversas que foram ficando mais longas, presença que foi se tornando importante e uma conexão que cresceu com leveza.'
    },
    {
      title: 'Quando o amor ganhou força',
      text: 'Com o tempo, os encontros se transformaram em rotina desejada, os sorrisos ficaram mais fáceis e a certeza de que havia algo especial entre os dois passou a fazer parte da vida.'
    },
    {
      title: 'O sim do coração',
      text: 'Entre planos, afeto e muitos sonhos compartilhados, chegou o momento de dar um passo ainda maior: dizer sim a uma vida construída a dois, com verdade e companheirismo.'
    },
    {
      title: 'O que vem pela frente',
      text: 'O sonho agora é continuar escrevendo essa história com amor, paz, respeito e alegria, transformando cada detalhe da vida em memória, acolhimento e presença.'
    }
  ] satisfies StoryMilestone[],
  gallery: [
    { src: '/galeria/foto1.jpg', alt: 'ELIZÂNGELA e MOACIR sorrindo juntos em um dia especial.' },
    { src: '/galeria/foto2.jpg', alt: 'Retrato leve e romântico de ELIZÂNGELA e MOACIR ao ar livre.' },
    { src: '/galeria/foto3.jpg', alt: 'Momento descontraído do casal em clima de felicidade.' },
    { src: '/galeria/foto4.jpg', alt: 'ELIZÂNGELA e MOACIR em um registro íntimo e elegante.' },
    { src: '/galeria/foto5.jpg', alt: 'Casal aproveitando um instante de sol, piscina e carinho.' },
    { src: '/galeria/foto6.jpg', alt: 'Foto do casal em cenário natural, com expressão de afeto.' },
    { src: '/galeria/foto7.jpg', alt: 'Retrato noturno de ELIZÂNGELA e MOACIR com atmosfera sofisticada.' },
    { src: '/galeria/foto8.jpg', alt: 'Casal celebrando a companhia um do outro em clima leve e especial.' }
  ] satisfies GalleryImage[],
  physicalGifts: [
    { id: 'fisico-1', name: 'Guarda-roupa casal', category: 'Quarto', status: 'Disponível', description: 'Um presente para começar o nosso lar com organização e conforto.' },
    { id: 'fisico-2', name: 'Cama box Queen Size', category: 'Quarto', status: 'Disponível', description: 'Conforto para os primeiros capítulos da nossa nova rotina.' },
    { id: 'fisico-3', name: 'Robô Aspirador Xiaomi', category: 'Casa', status: 'Disponível', description: 'Praticidade para cuidar do dia a dia com mais leveza.' },
    { id: 'fisico-4', name: 'Cafeteira Dulce Gusto', category: 'Cozinha', status: 'Disponível', description: 'Para muitos cafés compartilhados em casa.' },
    { id: 'fisico-5', name: 'Panela de Pressão elétrica 6L', category: 'Cozinha', status: 'Disponível', description: 'Uma ajuda moderna para a rotina da cozinha.' },
    { id: 'fisico-6', name: 'Air Fryer 12L', category: 'Cozinha', status: 'Disponível', description: 'Um presente útil para refeições práticas e gostosas.' },
    { id: 'fisico-7', name: 'Batedeira Planetária 4L', category: 'Cozinha', status: 'Disponível', description: 'Para receitas, celebrações e muitos momentos especiais.' },
    { id: 'fisico-8', name: 'Tanquinho 15kg', category: 'Lavanderia', status: 'Disponível', description: 'Um item importante para a rotina da casa.' },
    { id: 'fisico-9', name: 'Lava e Seca Samsung 14kg', category: 'Lavanderia', status: 'Disponível', description: 'Mais praticidade e cuidado no nosso novo começo.' },
    { id: 'fisico-10', name: 'Kit furadeira e parafusadeira', category: 'Casa', status: 'Disponível', description: 'Para montar, ajustar e construir nosso espaço do nosso jeito.' },
    { id: 'fisico-11', name: 'Sofá reclinável de 3 lugares', category: 'Sala', status: 'Disponível', description: 'Conforto para descansar, ver filmes e receber quem amamos.' },
    { id: 'fisico-12', name: 'Kit de lençóis para cama Queen Size', category: 'Quarto', status: 'Disponível', description: 'Um detalhe de aconchego para o nosso quarto.' },
    { id: 'fisico-13', name: 'Mesa de jantar com 4 cadeiras', category: 'Sala de jantar', status: 'Disponível', description: 'Para refeições, conversas e memórias em volta da mesa.' },
    { id: 'fisico-14', name: 'Jogo de toalhas de banho', category: 'Banheiro', status: 'Disponível', description: 'Cuidado e conforto para o nosso lar.' },
    { id: 'fisico-15', name: 'Multiprocessador de alimentos', category: 'Cozinha', status: 'Disponível', description: 'Mais agilidade para as receitas do dia a dia.' },
    { id: 'fisico-16', name: 'Freezer 200L', category: 'Cozinha', status: 'Disponível', description: 'Um presente funcional para a nova casa.' },
    { id: 'fisico-17', name: 'Purificador de água', category: 'Cozinha', status: 'Disponível', description: 'Saúde, cuidado e praticidade para todos os dias.' },
    { id: 'fisico-18', name: 'TV Smart 75 polegadas', category: 'Sala', status: 'Disponível', description: 'Para muitos filmes, séries e momentos juntos.' },
    { id: 'fisico-19', name: 'Cortina 2,80 x 1,70', category: 'Casa', status: 'Disponível', description: 'Um toque final de aconchego e acabamento para a casa.' }
  ] satisfies PhysicalGift[],
  pixGifts: [
    { id: 'pix-1', name: 'Lua de mel em Jericoacoara (sonho do casal)', amount: 7000, description: 'Um presente para transformar nosso sonho de lua de mel em uma lembrança inesquecível.' },
    { id: 'pix-2', name: 'Jantar romântico em casa', amount: 400, description: 'Um pequeno gesto para uma noite especial preparada com carinho.' },
    { id: 'pix-3', name: 'Estadia em Pousada Parador da Figueira (Lagoa da Prata)', amount: 1400, description: 'Um momento de descanso e conexão em um lugar especial.' },
    { id: 'pix-4', name: 'Gramado', amount: 2000, description: 'Uma viagem cheia de charme, clima agradável e novas memórias.' },
    { id: 'pix-5', name: 'Foz do Iguaçu', amount: 1500, description: 'Um presente para viver um passeio marcante a dois.' },
    { id: 'pix-6', name: 'Noite na pizzaria', amount: 500, description: 'Uma saída simples, gostosa e cheia de afeto.' },
    { id: 'pix-7', name: 'Churrasquinho no fim de semana', amount: 400, description: 'Um momento descontraído para curtir a vida juntos.' },
    { id: 'pix-8', name: 'Caldas Novas', amount: 800, description: 'Descanso, leveza e uma viagem gostosa para aproveitar a dois.' },
    { id: 'pix-9', name: 'Noite na Toro Steak House', amount: 600, description: 'Uma experiência saborosa para comemorar a nova fase.' },
    { id: 'pix-10', name: 'Terapia da noiva', amount: 300, description: 'Um carinho especial para aliviar a correria e cuidar de si.' },
    { id: 'pix-11', name: 'Porto Seguro', amount: 3000, description: 'Um presente para viver dias leves em um destino inesquecível.' },
    { id: 'pix-12', name: 'Mensalidade da academia', amount: 400, description: 'Um incentivo para saúde, rotina e bem-estar.' },
    { id: 'pix-13', name: 'Mensalidade do personal', amount: 560, description: 'Um presente para ajudar na disciplina e no cuidado com a saúde.' },
    { id: 'pix-14', name: 'Lençóis Maranhenses', amount: 5000, description: 'Uma viagem dos sonhos, daquelas que ficam para sempre na memória.' },
    { id: 'pix-15', name: 'Passeio no zoológico (porque a noiva gosta)', amount: 1000, description: 'Um passeio leve, divertido e cheio de afeto.' },
    { id: 'pix-16', name: 'Noite do vinho', amount: 350, description: 'Uma noite tranquila para brindar a vida a dois.' },
    { id: 'pix-17', name: 'Jantar romântico em restaurante', amount: 700, description: 'Uma experiência especial para celebrar o amor.' },
    { id: 'pix-18', name: 'Croissant com expresso em Paris', amount: 4800, description: 'Um presente simbólico e encantador para um sonho a dois.' },
    { id: 'pix-19', name: 'Viagem de trem', amount: 500, description: 'Um passeio diferente, bonito e cheio de clima romântico.' },
    { id: 'pix-20', name: 'Cineminha em Divinópolis', amount: 400, description: 'Uma lembrança simples e gostosa da rotina que queremos viver juntos.' },
    { id: 'pix-21', name: 'Ida na loja “Com Carinho” para a noiva renovar as maquiagens', amount: 400, description: 'Um mimo especial para a noiva se sentir ainda mais linda.' },
    { id: 'pix-22', name: 'Cash no jogo para o noivo não estressar', amount: 500, description: 'Um presente divertido para garantir um pouco de paz competitiva.' }
  ] satisfies PixGift[]
}
