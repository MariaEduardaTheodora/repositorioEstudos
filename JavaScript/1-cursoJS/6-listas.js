console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array( // NEW ARRAY palavra reservada para criar um array ou seja uma lista que contem uma seguencia/lista de coisas
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`) //PUSH e usado para ADICIONAR um item na lista array caso voce nao add direto quando no array voce pode chamar o push e ele insere.
console.log("Destinos possíveis:");
//console.log(salvador, saoPaulo, rioDeJaneiro)
console.log(listaDeDestinos);//chamando array p exibir na tela

listaDeDestinos.splice(1,1);//SPLICE e usado para REMOVER um intem na lista array para isso e necessario passar entre parenteseses() a posição do item que eu quero remover e a quantidade exemplo posição 1 e quantidade 1.
console.log(listaDeDestinos);// chamando o array p exibir na tela
//OBS ARRAY começa sempre da posição 0,não 1.OU SEJA:
//0`Salvador`,
//1`São Paulo`,
 //2`Rio de Janeiro`
 //3`Curitiba`

console.log(listaDeDestinos[1], listaDeDestinos[0]);//para imprimir um item expecifico da lista,passamos o array lista onde esse item se encontra e entre cochetes [] passamos a posição que esse item se encontra, exemplo: [3],[5],[12]