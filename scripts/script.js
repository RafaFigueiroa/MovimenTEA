// COMUNICACAO POPUP
function goComunicacao(){
    var circle = document.querySelector('.comunicacao #circleProgress');
    var number = document.querySelector('.comunicacao #numberProgress').value;
    document.querySelector('.comunicacao .number').innerHTML = number + '%';
    circle.style.strokeDashoffset = 283 - (283 * number) / 100;
}

function abrirComunicacao(){
    document.querySelector('.comunicacao .popup').style.display = 'block';
    //document.getElementById('popup').style.display = 'block';
    //document.getElementsByClassName('popup').style.display = 'block';
}
function fecharComunicacao(){
    document.querySelector('.comunicacao .popup').style.display = 'none';
    //document.getElementById('popup').style.display =  'none';
    //document.getElementsByClassName('popup').style.display = 'none';
}


// PSICOMOTOR POPUP
function goPsicomotor(){
    var circle = document.querySelector('.psicomotor #circleProgress');
    var number = document.querySelector('.psicomotor #numberProgress').value;
    document.querySelector('.psicomotor .number').innerHTML = number + '%';
    circle.style.strokeDashoffset = 283 - (283 * number) / 100;
}

function abrirPsicomotor(){
    document.querySelector('.psicomotor .popup').style.display = 'block';
}
function fecharPsicomotor(){
    document.querySelector('.psicomotor .popup').style.display = 'none';
}


// MOBILIDADE POPUP
function goMobilidade(){
    var circle = document.querySelector('.mobilidade #circleProgress');
    var number = document.querySelector('.mobilidade #numberProgress').value;
    document.querySelector('.mobilidade .number').innerHTML = number + '%';
    circle.style.strokeDashoffset = 283 - (283 * number) / 100;
}

function abrirMobilidade(){
    document.querySelector('.mobilidade .popup').style.display = 'block';
}
function fecharMobilidade(){
    document.querySelector('.mobilidade .popup').style.display = 'none';
}


// INDEPENDENCIA POPUP
function goIndependencia(){
    var circle = document.querySelector('.independencia #circleProgress');
    var number = document.querySelector('.independencia #numberProgress').value;
    document.querySelector('.independencia .number').innerHTML = number + '%';
    circle.style.strokeDashoffset = 283 - (283 * number) / 100;
}

function abrirIndependencia(){
    document.querySelector('.independencia .popup').style.display = 'block';
}
function fecharIndependencia(){
    document.querySelector('.independencia .popup').style.display = 'none';
}


// CONCENTRACAO POPUP
function goConcentracao(){
    var circle = document.querySelector('.concentracao #circleProgress');
    var number = document.querySelector('.concentracao #numberProgress').value;
    document.querySelector('.concentracao .number').innerHTML = number + '%';
    circle.style.strokeDashoffset = 283 - (283 * number) / 100;
}

function abrirConcentracao(){
    document.querySelector('.concentracao .popup').style.display = 'block';
}
function fecharConcentracao(){
    document.querySelector('.concentracao .popup').style.display = 'none';
}


// ESTRESSE POPUP
function goEstresse(){
    var circle = document.querySelector('.estresse #circleProgress');
    var number = document.querySelector('.estresse #numberProgress').value;
    document.querySelector('.estresse .number').innerHTML = number + '%';
    circle.style.strokeDashoffset = 283 - (283 * number) / 100;
}

function abrirEstresse(){
    document.querySelector('.estresse .popup').style.display = 'block';
}
function fecharEstresse(){
    document.querySelector('.estresse .popup').style.display = 'none';
}