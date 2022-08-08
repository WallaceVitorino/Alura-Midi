function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if(elemento && elemento.localName === 'audio'){
        elemento.play();
    }else{
        alert('Elemento nao encontrado ou seletor invalido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//Laço de repetiçao ----------------------------

for(let i = 0; i < listaDeTeclas.length; i++) {

    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    
    const idAudio = `#som_${instrumento}`//template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (event) {

        if (event.code === 'Space' || event.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }
}
