console.log(`\nTrabalhando com condicionais`);
const listaDeDestinos = new Array(// declarando um array lista
    `Salvador`,//0 posição
    `São Paulo`,//1 posição
    `Rio de Janeiro`//2 posição
);

const idadeComprador = 18;//const nao varia,valor imutavel
const estaAcompanhada = false;// ccost recebedo false
let temPassagemComprada = false; //let varia,valor mutavel
const destino = "Curitiba";

console.log("\n Destinos possíveis:");// /n e uma quebra de linha
console.log(listaDeDestinos);// chamando o array list para imprimir seu conteudo n a tela/console

const podeComprar  = idadeComprador >= 18 || estaAcompanhada == true; // declarando cosnt podeomprar igual a const  idadecomprador(=18) MAIOR OU IGUAL a 18(>=18) E  const estáacompanhada(=false) passndo a receber TRUE estaacompanhada(==true)
let contador = 0;// const contador recebendo 0 essa const vai servir para passar/contar as posiçoes do nosso array,no caso nosso array tem 3 itens
let destinoExiste = false;//desclaro como falso

//WHILLE estrutura de repetição
while(contador<3){ //while/ENQUANTO variavel contador for <MENOR que 3 faça,isso pq nossa lista tem 3 itens entao esta contando ate o item 3
    if(listaDeDestinos[contador] == destino){ //if/SE no arrray listaDeDestinos(=salvador,sp,rj),se o array listadedestinos tiver em alguma posição da sua lista o destino(=curitiba) 
        destinoExiste = true;// const que era false passa a ser  verdadeiro,assim que for verdadeiro saia ou seja de um break
        break;//parar sair
    }
    contador += 1;// variavel contador mais um,ou seja contador=0 +1,contador=1, ate 3
}
console.log("Destino exite: ", destinoExiste);// 

if(podeComprar && destinoExiste){ //if/SE variavel podecomprar && E destinoExistente for verdadeiro true faça
    console.log("Boa Viagem");//escreva isso no console
}else{ //else/SE NAO faça
    console.log("Desculpe tivemos um erro!");//escreva isso no console
}



// FOR outra estrutura de repetição,outra forma de fazer a mesma coisa
for(let i  = 0 ; i < 3 ; i++){// for/PARA ,variavel i vale 0,se i for MENOR< que 3 conte i mais uma vez ou seja i=0,i=1,i=2 e etc
    if(listaDeDestinos[i] == destino){ //if/SE o array listadededestinos for
        destinoExiste = true;
    }
   
}
