botao = document.querySelector('.botao');
botao.addEventListener('click', () => {
    if(botao.value == 'step2'){
        botao.value = "step3";

    }else if (botao.value == "step3"){
        botao.value = "step2";
    }
});