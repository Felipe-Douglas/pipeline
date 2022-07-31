$(document).ready(function() {

    /*
    *   # Mocks Area Start #
    */
    

    //Lista com os modulos iniciais
    let lista = [
        { id: 1000, beneficios: 'Cupons de desconto 10%'},
        { id: 2000, beneficios: 'Cupons de desconto 20%, Cartão da loja'},
        { id: 3000, beneficios: 'Cupons de desconto 30%'},
        { id: 4000, beneficios: 'Cupons de desconto 40%'},
        { id: 5000, beneficios: 'Cupons de desconto 50%, Frete Grátis'},
    ];

    //Pegando o botão que vai adicionar um novo modulo a lista
    let addSection = document.querySelector('.modal__form--submit');
    addSection.addEventListener('click', () => { //Adiciona evento ao clicar no botão
        
        let nameSection = document.querySelector('#nameSection');
        let benefitsSection = document.querySelector('#benefitsSection');

        console.log(nameSection);

        // Verifica se todos os campos foram preenchidos
        if(nameSection.value == "" || benefitsSection.value == "") {
            alert("preencha todos os dados da nova seção");
        } else {
            //Adiciona os valores na lista
            lista.push({ id: nameSection.value, beneficios: benefitsSection.value});
        }

        //Chama a função para renderizar a lista novamente
        renderLista(); 
    });

    
    //Função que vai renderizar a lista a partir do momento que a pagina carregar ou receber novos itens
    function renderLista() {
        let fullLista = 
        lista.map(element => { //Map para percorrer a lista 
            return `
                <details class="pipeline--collapse" id="${element.id}">
                    <summary class="pipeline--summary">${element.id} pontos</summary>
                    <div class="pipeline--description">
                        <button class="pipeline--button--delete" value="${element.id}">Remove section</button>
                        <p class="pipeline--beneficios">${element.beneficios.replace(/,/g, '<br>')}</p>
                    </div>
                </details>
            `
        });
        ;
        
        //Pega a tag html pelo id e mostra a lista renderizada
        document.querySelector('#pipeline--content').innerHTML = fullLista.join('\n');
    }
    
    //Quando a página for carregada a lista inicial é renderizada
    renderLista();
    
    //Pegando o botão que vai remover um modulo a lista
    let removeSection = document.querySelectorAll('.pipeline--button--delete');
        removeSection.forEach((item, indice) => {
        item.addEventListener('click', () => {
            for(let i = 0; i < lista.length; i++) {
                if(parseInt(item.value) === lista[i]['id']){
                    lista.splice(indice, 1);
                }
            }

            //Chama a função para renderizar a lista novamente
            renderLista();
        });
    });
    
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
