
const jogador = process.argv[2];


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  
  const numeroAleatorioEntreZeroEDez = getRndInteger(1, 3)
//   console.log(numeroAleatorioEntreZeroEDez)

const escolhendo = (numeroAleatorioEntreZeroEDez) => {
    let escolha;

    switch (numeroAleatorioEntreZeroEDez){
        case 1:
            escolha =  "Pedra";
            break;
        case 2:
            escolha =  "Papel";
            break;
        case 3:
            escolha =  "Tesoura" ;
            break;    
    }
    return escolha;
}

console.log("Escolha do computador",escolhendo(numeroAleatorioEntreZeroEDez));
const resultadoComputador = (escolhendo(numeroAleatorioEntreZeroEDez));
console.log("escolha do jogador",jogador);


if (jogador === resultadoComputador){
    console.log("Empate");
}else if(
    (jogador === "Pedra" && resultadoComputador === "Tesoura") || 
    (jogador ==="Papel"&&resultadoComputador==="Pedra")||
    (jogador=== "Tesoura" && resultadoComputador==="Papel")){
        console.log(`Jogador ganhou`);
    }else{
        console.log(`O computador Ganhou`);
    }




























  
  
// const jogadorEscolha = process.argv[2];

// if (!jogadorEscolha || (jogadorEscolha !== "pedra" && jogadorEscolha !== "papel" && jogadorEscolha !== "tesoura")) {
//   console.log("Escolha inválida. Use 'pedra', 'papel' ou 'tesoura' como argumento.");
// } else {
//   const opcoes = ["pedra", "papel", "tesoura"];
//   const indiceAleatorio = Math.floor(Math.random() * opcoes.length);
//   const escolhaComputador = opcoes[indiceAleatorio];

//   console.log(`Você escolheu ${jogadorEscolha} e o computador escolheu ${escolhaComputador}.`);

//   if (jogadorEscolha === escolhaComputador) {
//     console.log("Empate!");
//   } else if (
//     (jogadorEscolha === "pedra" && escolhaComputador === "tesoura") ||
//     (jogadorEscolha === "papel" && escolhaComputador === "pedra") ||
//     (jogadorEscolha === "tesoura" && escolhaComputador === "papel")
//   ) {
//     console.log("Você ganhou!");
//   } else {
//     console.log("Você perdeu!");
//   }
// }
