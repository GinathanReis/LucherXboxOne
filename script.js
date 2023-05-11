const meuVideo = document.getElementById('meuVideo');

meuVideo.addEventListener('ended', function() {
meuVideo.style.display = 'none';
});


var caixaPrincipal = document.getElementById('caixaPrincipal')

var corpo = document.getElementById('corpo')

var caixa1 = document.getElementById('caixa1')
var caixa2 = document.getElementById('caixa2')
var caixa3 = document.getElementById('caixa3')
var caixa4 = document.getElementById('caixa4')
var caixa5 = document.getElementById('caixa5')
var caixa6 = document.getElementById('caixa6')
  

function wpgears(){
    corpo.style.backgroundImage='url(imagens/wpgears5.jpg)'
}

function wpc1(){   
    corpo.style.backgroundImage='url(https://wallpapercave.com/wp/wp1833957.jpg)'
}

function wpc2(){   
    corpo.style.backgroundImage='url(imagens/wpdead.jpg)'
}

function wpc3(){   
    corpo.style.backgroundImage='url(imagens/wpplantavszombie.jpg)'
}

function wpc4(){   
    corpo.style.backgroundImage='url(imagens/wpstar.jpg)'
}

function wpc5(){   
    corpo.style.backgroundImage='url(https://wallpapercave.com/wp/wp1833957.jpg)'
}

function wpc6(){   
    corpo.style.backgroundImage='url(https://wallpapercave.com/wp/wp1833957.jpg)'
}



// RELOGIO

function atualizarRelogio() {
var data = new Date();
var horas = data.getHours();
var minutos = data.getMinutes();
var segundos = data.getSeconds();


horas = horas < 10 ? "0" + horas : horas;
minutos = minutos < 10 ? "0" + minutos : minutos;
segundos = segundos < 10 ? "0" + segundos : segundos;

var horaAtual = horas + ":" + minutos + ":" + segundos;


document.getElementById("relogio").innerHTML = horaAtual;
}
setInterval(atualizarRelogio, 1000);

 setTimeout(function() {
var telapreta = document.getElementById('telapreta');
telapreta.style.display = 'none';
}, 6000);
