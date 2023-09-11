
  
  
const escolhaJogador = process.argv[2]
const numeroJogador = parseInt(process.argv[3])


    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      }
      const numeroAleatorioEntreZeroEDez = getRndInteger(0, 10)  
     



const parImpar = (par) => {
    
    return par % 2 === 0 

}
const escolhaComputador = parImpar(numeroAleatorioEntreZeroEDez) ? 'par' : 'impar';

const resultado = numeroAleatorioEntreZeroEDez + numeroJogador;

console.log(`Você escolheu o numero ${numeroJogador} e o computador escolheu ${numeroAleatorioEntreZeroEDez}`);

if(escolhaJogador === 'par' && parImpar(resultado) || escolhaJogador === 'impar' && !parImpar(resultado)) {
    console.log(`Parabéns você ganhou!`)
}else{
    console.log('Você perdeu!')
}