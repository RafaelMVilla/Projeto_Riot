// Selecionando o botão "League Of Legends" e sua imagem pelo ID
const botao1 = document.getElementById('botao1');
const botao1Img = document.getElementById('botao1-img');
const botao2 = document.getElementById('botao2');
const botao2Img = document.getElementById('botao2-img');

// Função para tornar o botão invisível por alguns segundos
function desaparecerTemporariamente(event) {
    // Evita o comportamento padrão do link ao ser clicado
    event.preventDefault();
    
    // Torna o botão invisível
    botao1.style.display = 'none';
    botao1Img.style.display = 'none';
    botao2.style.display = 'none';
    botao2Img.style.display = 'none';
    
    // Torna o botão visível novamente após 3 segundos (3000ms)
    setTimeout(() => {
        botao1.style.display = 'block';
        botao1Img.style.display = 'block';
    }, 3000);
    setTimeout(() => {
        botao2.style.display = 'block';
        botao2Img.style.display = 'block';
    }, 3000);
}

// Adiciona o evento de clique para o botão "League Of Legends"
botao1.addEventListener('click', desaparecerTemporariamente);
botao2.addEventListener('click', desaparecerTemporariamente);
