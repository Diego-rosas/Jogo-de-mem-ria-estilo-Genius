let order = [];
let clickedOrder = [];
let score = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

//selecina as cores que fez no HTML
const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//cria ordem aleatória das cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = creatColorElemente(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }    
}

//acende a próxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    }); 
}

//checa se os botões clicados são os mesmos da ordem gerada no jogo
let chekOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            lose();
            break;
        }
    }
    if(clickedOrder.length) == order.length {
        alert('Pontuação: $(score)\n Você acertou! Iniciando próximo nível!');
        nextLevel();
    }
}

//funcão para o clique do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    creatColorElemente(color).classList.add('selected'); 

    setTimeout(() => {
        elementColor(color).classList.remove('selected');
    })

    checkOrder();
    
}