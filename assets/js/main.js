const buttons = document.querySelectorAll('.pipeline--summary');

for (let contador = 0; contador < buttons.length; contador++) {
    const botao = buttons[contador];
    
    botao.onclick = () => {
        botao.classList.toggle('pipeline--summary--active');
    }

}
