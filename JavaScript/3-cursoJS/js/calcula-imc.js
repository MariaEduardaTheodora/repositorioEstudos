//  . e usado para pegar e manipular conteudo de uma CLASSE/CLASS no html para o JS - EX (".TITULO")
//  #  e usado para pegar e manipular conteudo de um ID no html para o JS  - EX ("#TITULO")
//  document.querySelector e usado para pegar e manipular  UM CONTEUDO no html para o JS  - EX DOCUMENT.QUERYSELECTOR vai trazer <TD CLASS="INFO-NOME">PAULO</TD> 
//   document.querySelectorAll e usado para pegar e manipular MAIS DE UM CONTEUDO no html para o JS - EX  DOCUMENT.QUERYSELECTOR vai trazer <TD CLASS="INFO-NOME">PAULO</TD> <TD CLASS="INFO-NOME">JONAS</TD> <TD CLASS="INFO-NOME">ANA</TD> <TD CLASS="INFO-NOME">LUIZ</TD> 
//  textContent e usado para pegar e manipular o que tem DENTRO do CONTEUDO - EX TEXTCONTENT  vai trazer PAULO
//   || e usado para dizer OU
//   && e usado para dizer E
//  IF  e uma estrutura de validaçao SE
//   toFixed(2) usado para arredondar um valor e entre () e passado a quantidade de casas decimais
//  style.backgroundColor usado para colorir uma tela/tabela/objeto
//   FOR
//   .classList.add
//  .addEventListener
//  .preventDefault
//value

var tituloDaPagina=document.querySelector(".titulo"); //. e usado para pegar e manipular conteudo de uma CLASSE/CLASS no html para o JS
tituloDaPagina.textContent="Maria nutricionista ";


var pacientes =document.querySelectorAll(".paciente");

 for (var i=0;i<pacientes.length;i++){
 var paciente= pacientes[i];

 var tdPeso=paciente.querySelector(".info-peso"); 
 var peso=tdPeso.textContent;
 
 var tdAltura=paciente.querySelector(".info-altura");
 var altura=tdAltura.textContent;
 
 var tdImc =paciente.querySelector(".info-imc");
 
 var pesoValido=true;
 var alturaValido=true;
 
 if (peso<=0 || altura>=1000){
     console.log("Peso inválido!");
     pesoValido=false;
     tdImc.textContent="Peso inválido!"
     paciente.classList.add("paciente-invalido");

     

 }
 
 if (altura <0 || altura>=3.000){
 console.log("Altura invalido!");
 alturaValido=false;
 tdImc.textContent="Altura invalida!"
 paciente.classList.add("paciente-invalido");
 
 }
 
 if (alturaValido && pesoValido){
 var imc= calculaImc(peso,altura);
 tdImc.textContent= imc;
 }
 }

function calculaImc(peso,altura){
    var imc=0;
    imc= peso/(altura*altura);
    return imc.toFixed(2);
}