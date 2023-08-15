const intro = document.querySelector('.intro')
const logoImg = document.querySelector('.logoImg')
const time01 = document.getElementById('counter');
const btn = document.getElementById('btnGerador');
const spaceDude = document.getElementById('spaceDude');
const newValue = document.getElementById('counter02');
const newSpace = document.getElementById('spaceCounter02');
const newMoon = document.getElementById('spaceMoon');


window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        logoImg.classList.add('active');

    }, 400);


    setTimeout(() => {
        logoImg.classList.remove('active');
        logoImg.classList.add('fade');
    }, 2000);

    setTimeout(() => {
        intro.style.top = '-100vh';

    }, 3000);
})

// gerar um numero aleatorio entre min e max
function getRandomDecimal(min, max) {
    return Math.random() * (max - min) + min;
}

// formatar um numero com duas casas decimais
function formatDecimal(number) {
    return number.toFixed(2);
}

// executar o contador
function runDecimalCounter() {
    const valorInicial = 1.00; // valor inicial
    const valorFinal = getRandomDecimal(1.50, 2.50); // valor final aleatório
    const passo = 0.01; // passa (0.01 para manter duas casas decimais)

    let valorAtual = valorInicial;

    const intervalo = setInterval(() => {
        time01.innerHTML = (formatDecimal(valorAtual) + "X");
        newValue.innerHTML = (formatDecimal(valorAtual) + "X");
        if (valorAtual >= valorFinal) {
            clearInterval(intervalo);
            setTimeout(() => {
                time01.classList.add('fade');
            }, intervalo + 1000);
        }

        valorAtual += passo;
    }, 30); // intervalo de 100ms entre cada incremento
}


btn.addEventListener('click', function() {
    runDecimalCounter();
});

let countdown = 20;

let countdownTimer = null;

const atualizarBotao = () => {
    --countdown;
    btn.innerText = "AGUARDE: " + countdown + "s...";
    btn.style.fontSize = '100%';
    if (countdown === 0) {
        finishCountdownTimer();
    }
}

const finishCountdownTimer = () => {
    clearInterval(countdownTimer);
    btn.innerText = 'CLIQUE AQUI';
    btn.style.fontSize = '100%';
    btn.disabled = false;
    countdown = 20;
}

function spaceDisappear() {

    setTimeout(() => {
        spaceDude.style.display = 'block';
        spaceDude.classList.add('active');
    }, 100);

    setTimeout(() => {
        spaceDude.classList.add('fade');
    }, 5000);

    setTimeout(() =>{
        spaceDude.style.display = 'none';
        spaceDude.classList.remove('fade');
    }, 6000);

    setTimeout(() =>{
        newSpace.classList.add('active');
        newSpace.style.display = 'block'
        newValue.style.display = 'block';
    }, 6000);

    setTimeout(() => {
        newSpace.style.display = 'none';
        newValue.style.display = 'none';
    }, 20000);
}

btn.addEventListener('click', function(e){
    e.preventDefault;
    btn.disabled = true;
    spaceDisappear();
    time01.classList.remove('fade');
    countdownTimer = setInterval(atualizarBotao, 1000)
})

