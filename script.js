
let esquerda = 0
let direita = 0
let seg = 0
let timerRodando = false


setInterval(() => {
    if(timerRodando == true){
        seg++
    }
    console.log(seg);
    document.getElementById('cronometro').innerHTML = seg
    
},1000)

function acionarCronometro(){
    timerRodando = !timerRodando
    if(timerRodando == true){
        document.getElementById('bt-play').innerText = 'Pause'
    }else{
        document.getElementById('bt-play').innerText = 'Play'
    }
}


function incrementarEsquerda(){
    esquerda++
    document.getElementById('valor-esq').innerHTML = esquerda
}

function decrementarEsquerda(){
    esquerda--
    document.getElementById('valor-esq').innerHTML = esquerda
}

function incrementarDireita(){
    direita++
    document.getElementById('valor-dir').innerHTML = direita
}

function decrementarDireita(){
    direita--
    document.getElementById('valor-dir').innerHTML = direita
}

function resetar(){
    esquerda = 0
    direita = 0
    seg = 0
    document.getElementById('valor-dir').innerHTML = direita
    document.getElementById('valor-esq').innerHTML = esquerda
    document.getElementById('cronometro').innerHTML = seg
}