$(document).ready(function() {

    /*
    *   # Mocks Area Start #
    */
    

    //Lista com os modulos iniciais
    lista = [ 'top', 'middle' ]; 

    //Pegando o botão que vai adicionar um novo modulo a lista
    addSection = document.querySelector('.pipeline--header__button--add');
    addSection.addEventListener('click', () => { //Adiciona evento ao clicar no botão
        
        //Mostra o campo para adicionar o nome do novo modulo
        section = prompt('novo modulo'); 
        
        //Adiciona o novo modulo a lista inicial
        lista.push(section); 
        
        //Chama a função para renderizar a lista novament
        renderLista(); 
    });

    //Função que vai renderizar a lista a partir do momento que a pagina carregar ou receber novos itens
    function renderLista() {
        let fullLista = 
            lista.map(function(element) { //Map para percorrer a lista 
                return `
                    <details class="pipeline--collapse">
                        <summary class="pipeline--summary">${element}</summary>
                        <div class="pipeline--description">
                            <button class="pipeline--button--delete">Remove section</button>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cumque optio doloremque molestias repellendus, reiciendis unde dolores numquam omnis sint?
                        </div>
                    </details>
                `
            });
        ;
        
        //Pega a tag html pelo id e mostra a lista renderizada
        document.querySelector('#main').innerHTML = fullLista.join('\n');
    }
    
    //Quando a página for carregada a lista inicial é renderizada
    renderLista();
   
    /*
    *   # Mocks Area End #
    */


    /* Icons */
    const buttons = document.querySelectorAll('.pipeline--summary');

    //Adicionando classe para rotação do icone
    for (let contador = 0; contador < buttons.length; contador++) {
        const botao = buttons[contador];
        
        botao.onclick = () => {
            botao.classList.toggle('pipeline--summary--active');
        }

    }


});
