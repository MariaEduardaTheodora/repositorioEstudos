class cliente{ // CLASSE e um copilado de elementos/objetos/dados
    nome;//objeto
    cpf;//objeto
}

 class ContaCorrente{// CLASSE e um copilado de elementos/objetos/dados
     agencia;//objeto
     saldo=0; //objeto
 sacar(valor){// FUNCTION/FUNÇAO e um copilado de açoes  que entre parenteses() vem o que ela vai receber/coletar no caso e VALOR  .   THIS/ISTO  e uma maneira de referencia algo/objeto sem epecificar de quem e.
     if(this.saldo>=valor){ //IF /SE const SALDO for MAIOR IGUAL (>=) a VALOR faça
         this.saldo-=valor;//Saldo MENOS IGUAL (-=) VALOR
         return valor;// return e usado para retornar um valor
     }
 }
depositar(valor){
    if(valor<=0)
        return;

        this.saldo+=valor
        
    }
}
 

 const cliente1 = new cliente();// const Cliente1 recebendo NEW(new e palavra reservada) cliente ou seja aqui esta sendo relaciondo os objetos  existentees na CLASSE CLIENTE
 cliente1.nome = "Ricardo";// const cliente1 sendo RELACIONADA a um objeto da classe CLIENTE no caso ao NOME e RECEBENDO Ricardo
 cliente1.cpf = 11122233309;// const cliente1 sendo RELACIONADA a um objeto da classe CLIENTE no caso CPF e RECEBENDO 11122233309

 
 const cliente2 = new cliente();// const Cliente2 recebendo NEW(new e palavra reservada) cliente ou seja aqui esta sendo relaciondo os objetos  existentees na CLASSE CLIENTE e o mesmo que acontece em cliente1 se repete aqui
 cliente2.nome = "Alice";
 cliente2.cpf = 88822233309;

 const contaCorrenteRicardo = new ContaCorrente();//
contaCorrenteRicardo.agencia=1001;

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.sacar(50);

console.log(contaCorrenteRicardo);
