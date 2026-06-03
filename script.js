// Função para rolar a tela suavemente até a seção desejada
function scrollParaSection(idSection) {
    const elemento = document.getElementById(idSection);
    if (elemento) {
        elemento.scrollIntoView({ behavior: 'smooth' });
    }
}

// Função simples para interagir com o botão Fale Conosco
function mostrarAlerta() {
    alert("Obrigado pelo interesse! Nossa equipe de sustentabilidade entrará em contato em breve.");
}

// Lista de fotos do Unsplash voltadas para agricultura sustentável
const fotosFundo = [
    'https://unsplash.com', // Plantação jovem
    'https://unsplash.com', // Tecnologia/Estufa
    'https://unsplash.com'  // Campo verde amplo
];

let indiceAtual = 0;

// Função para alternar a imagem de fundo do painel principal
function alterarFundo() {
    const hero = document.querySelector('.hero-section');
    if (hero) {
        indiceAtual = (indiceAtual + 1) % fotosFundo.length;
        hero.style.backgroundImage = `url('${fotosFundo[indiceAtual]}')`;
    }
}
