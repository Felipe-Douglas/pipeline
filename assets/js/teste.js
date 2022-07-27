$(document).ready(function(){
    
    lista = ['Filipe', 'Douglas'];

    button = document.querySelector('.add__button');
    button.addEventListener('click', () => {
        section = prompt('novo modulo');
        lista.push(section);
        mostra();
    });

    function mostra () {

        let fullLista = 
            lista.map(element => {
                return `
                    <p>${element}</p>
                `
            });
        ;
        document.querySelector('#main').innerHTML = fullLista.join('\n');
    }

    mostra();
    
});
