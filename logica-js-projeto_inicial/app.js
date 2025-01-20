alert('Boas vindas ao jogo do número secreto');

// Adicione um console.log para verificar o valor de "chute" após a entrada do usuário

let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute; 
let tentativas = 1;

// Adicione um console.log para verificar a comparação entre "chute" e "numeroSecreto"
console.log('Resultado da comparação:', chute == numeroSecreto);
// enquanto chute não for igual ao número secreto
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e ' + numeroMaximo);
    console.log('Valor do chute: ' + chute);
    if (chute == numeroSecreto) {
        break;
    } else {
        if(chute > numeroSecreto){
            alert('O número secreto é menor que  ' + chute);
        } else {
            alert('O número secreto é maior que ' + chute);
        }
        // tentativas = tentativa + 1
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert('Isso ai!, você descobriu o número secreto ' + numeroSecreto + ' com ' + tentativas  + ' ' + palavraTentativa);

// if (tentativas > 1){
//     alert('Isso ai!, você descobriu o número secreto ' + numeroSecreto + ' com ' + tentativas  + ' tentativas');
    
// }else{
//     alert('Isso ai!, você descobriu o número secreto ' + numeroSecreto + ' com ' + tentativas  + ' tentativa');

// }