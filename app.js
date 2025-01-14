let listNumerosSorteados = [];
let numeroLimite = 10;
let secretNumber = gerarNumeroAleatorio();
let attempt = 1;


function exibirTextoNaTela(tag, texto){
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'US English Male', {rate: 1.2});
}

function exibirMensagemInicial(){
  exibirTextoNaTela('h1', 'Secret Number Game');
  exibirTextoNaTela('p', 'Choose a number from 1 to 10');
}

exibirMensagemInicial();
  
function verificarChute(){
  let chute = document.querySelector('input').value;
   
  if(chute == secretNumber){
    exibirTextoNaTela('h1', 'You won!'); 
    let palavraAttempt = attempt > 1 ? 'attempts' : 'attempt'; 
    let mensagemAttempts = `You discovered the secret number with ${attempt} ${palavraAttempt}!`;
    exibirTextoNaTela('p', mensagemAttempts);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else{
    if(chute > secretNumber){
        exibirTextoNaTela('p', `The secret number is less than ${chute}`);
    } else{
      exibirTextoNaTela('p', `The secret number is greater than ${chute}`);
    }
    attempt++;
    limparCampo();

  }
}

function gerarNumeroAleatorio(){
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1 );
  let quantidadeDeElementosNaLista  = listNumerosSorteados.length;

  if(quantidadeDeElementosNaLista == numeroLimite){
    listNumerosSorteados = [];
  }
  if(listNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
  } else{
    listNumerosSorteados.push(numeroEscolhido);
    console.log(listNumerosSorteados)
    return numeroEscolhido;
  }
  
}

function limparCampo(){
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {
  secretNumber = gerarNumeroAleatorio();
  limparCampo();
  attempt = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
}