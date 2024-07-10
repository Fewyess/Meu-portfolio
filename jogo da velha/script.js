const casas = document.getElementsByTagName('input'); //pega a lista de casas do tabuleiro
const b_reiniciar = document.getElementById('reiniciar');
const label_jogador = document.getElementById('jogador')

var jogador = '_';
var vencedor = '_';

function sortearJogador(){
    //gera um num de 0 a 1
    var numAleatorio = Math.floor(Math.random() * 2);

    if (numAleatorio === 0){
        jogador = 'X';
    } else{
        jogador = 'O';
    }

    document.getElementById('jogador').innerText = jogador; //atualiza pra saber de quem é a vez
}

sortearJogador();

for (var i=0; i < 9; i++) {
    casas[i].addEventListener('click', (event)=>{
        if ((event.target.value === '_') && (vencedor == "_")) {
            event.target.value = jogador; //preenche com X ou 0
            event.target.style.color = 'black'; // casa fica visivel

            trocarJogador()

            vencedor = vitoria();

            if (vencedor != '_'){
                label_jogador.innerText = `${vencedor} venceu!`;
            }
        }
    });
}

var trocarJogador = function(){
    if (jogador == 'X'){
        jogador = 'O';
        label_jogador.innerText = "O";
        label_jogador.style.color = '#F00';
    } else {
        jogador = 'X';
        label_jogador.innerText = 'X';
        label_jogador.style.color = '#00F';
    }
}

function colorirVitoria(indices) {
    indices.forEach(index =>{
        casas[index].style.backgroundColor = '#0F0';
    });
    return casas[indices[0]].value;
}

var vitoria = function(){
    const combinacoes = [
        [0, 1, 2], // linha 1
        [3, 4, 5], // linha 2
        [6, 7, 8], // linha 3
        [0, 3, 6], // coluna 1
        [1, 4, 7], // coluna 2
        [2, 5, 8], // coluna 3
        [0, 4, 8], // diagonal principal
        [2, 4, 6]  // diagonal secundária
    ];

    for (let i = 0; i < combinacoes.length; i++){
        const [a,b,c] = combinacoes[i];
        if (casas[a].value == casas[b].value && casas[b].value == casas[c].value && casas[a].value != '_'){
            colorirVitoria([a,b,c]);
            return casas[a].value;
        }
    }

    let empate = true;
    for (let i = 0; i < casas.length; i++){
        if (casas[i].value === '_'){
            empate = false;
            break;
        }
    }
    
    if (empate){
        return 'EMPATE';
    }
    return '_';

    return '_';
}

b_reiniciar.addEventListener('click', () =>{
    for (let i = 0; i < 9; i++) {
        casas[i].value = '_';
        casas[i].style.color = 'white';
        casas[i].style.backgroundColor = 'white';
    }
    vencedor = '_';
    sortearJogador();
        
});