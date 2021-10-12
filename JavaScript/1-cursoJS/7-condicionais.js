console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade, posso vender");
//     listaDeDestinos.splice(1, 1); //removendo item comprado
// } else if (estaAcompanhada == true) {
//     console.log("Comprador está acompanhado por um maior de idade,posso vender");
//     listaDeDestinos.splice(1, 1); //removendo item comprado
// } else {
//     console.log("Não é maior de Idade e não posso vender");
// }

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log(" Posso vender,boa Viagem!!");
    listaDeDestinos.splice(2, 1); //removendo item
} else {
    console.log("Você não pode embarcar! Não é maior de Idade e não está acompanhado, não posso vender");
}

console.log("Embarque: \n\n")// /n pula linha
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Posso vender,boa viagem");
}else{
    console.log("Você não pode embarcar! Não é maior de  e não tem passagem comprada");
}


console.log(listaDeDestinos);
// operadores
// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);