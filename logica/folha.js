function setup() { // function que cria o canvas/tela e toca uma musica
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() { // function onde a "magica" acontece,function usada para cahmar outras functions fazendo assim todas as functions do jogo serem executadas
  background(imagemDaEstrada);//background e uma "tag" tem como intuito exibir uma imagem no fundo do canvas/tela
  mostraAtor();// as demais abaixo sao functions criadas por mim para funcionalidades no jogo
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();







**********************************************
// imagens e sons do jogo

let imagemDaEstrada;// e necessario criar uma variavel para cada imagem para logo a apos atribui-la a uma url que iria conter as imagens
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

//sons do jogo

let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){ // function que carrega/atribui as variaveis as imagens,ou seja cada varievel passa a vale/conter a url/caminho que esta a imagem sendo assim a varivavel passa a conter uma imagem,e toda vez que ultilizarmos uma varivel dessa ex:ator-1 estamos usando uma imagem,o link/caminho e pasta da imagem e seu nome.
  imagemDaEstrada = loadImage("imagens/estrada.png");//varivel declarada acima no LET recebe LOADIMAGE (que e uma "tag" que faz o carregamento/atribuiçao/referencia/ ao link/caminho de uma imagem) logo apos temos entre ("") o caminho da imagem
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemCarro = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");  
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3] // aqui temos um array lista,array tem funçao de contar/classifiar e etc.Porem aqui usamos ele para repetir os a imagem dos "carros" observe que dentro doa [] as imagens são referenciadas com repeticao.
// OBSERVAÇAO todos links/caminhos desssas imagens e sons como ex "imagens/carro-1.png" estão carregadas dentro de um pasta,o caminho/link delas vem dessa pasta.
  somDaTrilha = loadSound("sons/trilha.mp3");//varivel SOM DA TRILHA declarada acima no LET recebe LOADSOUND (que e uma "tag" que faz o carregamento/atribuiçao/referencia/ ao link/caminho de um som) logo apos temos entre ("") o caminho do som
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
}








******************************************************
//código do ator
let xAtor = 85; // posiçao inicial do X do altor
let yAtor = 366;// poisçao inicial Y do altor
let colisao = false; //colicao recebendo falso,ou seja nao acontece
let meusPontos = 0;// meus ontos recebendo =0,ou seja começa de 0.

function mostraAtor(){// function que tem como parametro na TAG tag IMAGE exibir uma imagem, no caso mostrar a imagem do altor,coloca-lo na posiçao x e y ou seja (xAtor = 85 yAtor = 366), e passa seu tamanho no caso 30x30
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){ // function que movimenta o ator.
  if (keyIsDown(UP_ARROW)){ // IF/SE KEYISDOWN (KEYISDOWN palavra reservada serve para refrificar se uma tecla esta sendo precionada) estiver precionando  UP ARROW (UP ARROW palavra reservada para especificar a tecla da seta de cima faça YATOR menos igual/-= a 3.
    yAtor -= 3;// ou seja YATOR vai dimunuir 3( diminuir na velocidade)
  }
  if (keyIsDown(DOWN_ARROW)){//mesmo acontece aqui porem muda a tecla ferificada agora temos DOWN ARROW que e a tecla da seta de baixo
    if(podeSeMover()){// IF/SE isso for  verdadeiro ou seja se essa tecla da seta de baixo estiver sendo precionada ,chama a function Pode se mover
      yAtor += 3;// ou seja YATOR vai aumentar 3( aumentar na velocidade)
    }
  }
}

function verificaColisao(){ // function que verifca se houve coliçao,ou seja se o ator bateu no carrinho
  for (let i = 0; i < imagemCarros.length; i++){ //criando varivel I que recebe 0 inicialmente( varivel I esta sendo usada para contar).SE I for menor que imagemCarros.length (imagemCarros.length esse e o ARRAY LISTA e a estesao length e usada para saber a quantidade de objetos dentro do array,e uma tag usada para facilitar ela conta quantos objetos tem na lista usando o length.) conte MAIS UM ou seja I=0 passa a ser i=1,i=2 e etc
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)//
    if (colisao){// chamando function colisao
      voltaAtorParaPosicaoInicial();//chamando function volta ator para posiçao incial
      somDaColisao.play();// chama function que toca um som
      if (pontosMaiorQueZero()){ // chama function pontos maior que zero SE/IF meus pontos for menor ou igual a 1
        meusPontos -= 1;
      }
    }
  }
}

function voltaAtorParaPosicaoInicial(){ // function volta para posiçao inicial Y ator volta a receber 366
  yAtor = 366;
}

function incluiPontos(){ // function inclui pontos
  textAlign(CENTER);// tag que  centraliza o texto
  textSize(25);//tag que da tamanho do texto
  fill(color(255, 240, 60))//tag que preenche/colore o texto ( os numeros sao referente a cores,essa combinaçao aqui cria a cor laranja
  text(meusPontos, width / 5, 27);// tag para escrever na tela e passa o local onde queremos a escrever x e y, aqui vamos escrever o v alor que estiver dentro da varivel MEUSPONTOS. E a posicao x  foi feita assim width /5 ou seja width/largura da tela dividido po 5 ( a tela do canvas tem 500 de largura entao foi 500/5 que da 100 ,issto e 100 e a posiçao do nosso x
}

function marcaPonto(){ // function marca ponto
  if (yAtor < 15){// IF/SE ydoator for MENOR que 15 faça,OU SEJA SE FOR VERDADE FAÇA
    meusPontos += 1;// MEUSPONTOS( que vale 0)  MAIS OU IGUAL A 1,ou seja MEUSPONTOS passa a valer 1 (meuspontos=0 +=1 =1)
    somDoPonto.play();// Chamando sons de ponto usan do a tag PLAY que tem como funçao tocar algo.
    voltaAtorParaPosicaoInicial();// Caso for falso,ou sejs se YATOR nao for MAIOR que 15 volte para a posiçao inicial
  }
}

function pontosMaiorQueZero(){// function pontos maior q zero
  return meusPontos > 0;// retorne o valor da varivel  MEUS PONTOS MAIOR que 0
}

function podeSeMover(){ // function pode se mover
  return yAtor < 366;// retorne o valor da varivel YATOR  MENOR que 366
}









*************************************************************
//código do carro

let xCarros = [600, 600, 600, 600, 600, 600];// variavel XCARROS recebe um  ARRAY LISTA com posiçao X dos carrros ,(600 para todos porque todos fossem criados dessa posiçao ou seja final do canvas/canvas)
let yCarros = [40, 96, 150, 210, 270, 318];// varivel Ycarros recebe um ARRAY LISTA com posiçao Y dos carros,(posiçoes diferentes para que cada carro fosse criado em um abaixo do outro)
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];// varivel VELOCIDADEDECARROS recebe um ARRAY LISTA com a velocidade de cada carro,(velocidades diverentes para complicar o jogo)
let comprimentoCarro = 50;// varivel COMPRIMENTODOCARRO recebe 50 ou seja o comprimento/altura do carro
let alturaCarro = 40;//variavel ALTURACARRO recebe 40 ou seja a altura do carro

function mostraCarro(){// function mostra carro
  for (let i = 0; i < imagemCarros.length; i++){ //criando varivel I que recebe 0 inicialmente( varivel I esta sendo usada para contar/passar dentro do Array).SE I for menor que imagemCarros.length (imagemCarros.length esse e o ARRAY LISTA e a estesao length e usada para saber a quantidade de objetos dentro do array no caso sabemos que e 6,6 objetos/carros.
 image(imagemCarros[i], xCarros[i], yCarros[i],comprimentoCarro,alturaCarro);//palavra reservada IMAGE usada para mostrar uma imagem .No caso aqui estamos pedindo para desenhar imagemCarros[i] o I dentro dos [] quer dizer que ele esta passando dentro da ARRAY LIST ou seja ele esta contando os objetos dentro do array,no caso sao 6 entao ele vai passar e desenhar primeiro nessa seguinte ordem: OBSERVAÇAO SUBISTITUI O [I] PELA POSIÇAO MOSTRANDO SEU RESPECTIVO O NUMERO/POSIÇAO,E O ARRAY SEMPRE COMEÇA DA POSIÇAO 0.
//imagemCarros[0], xCarros[0], yCarros[0],comprimentoCarro(30),alturaCarro(30)
//imagemCarros[1], xCarros[1], yCarros[1],comprimentoCarro(30),alturaCarro(30)
//imagemCarros[2], xCarros[2], yCarros[2],comprimentoCarro(30),alturaCarro(30) E ETC..
 
  } 
}

function movimentaCarro(){//function que movimenta carro
  for (let i = 0; i < imagemCarros.length; i++){  //criando varivel I que recebe 0 inicialmente( varivel I esta sendo usada para contar/passar dentro do Array).SE I for menor que imagemCarros.length (imagemCarros.length esse e o ARRAY LISTA e a estesao length e usada para saber a quantidade de objetos dentro do array no caso sabemos que e 6,6 objetos/carros.
    xCarros[i] -= velocidadeCarros[i];// array XCARROS MENOR OU IGUAL ao array VELOCIDADECARROS
	
	
  }
}

function voltaPosicaoInicialDoCarro(){// function volta posiçao carro
  for (let i = 0; i < imagemCarros.length; i++){// //criando varivel I que recebe 0 inicialmente( varivel I esta sendo usada para contar/passar dentro do Array).SE I for menor que imagemCarros.length (imagemCarros.length esse e o ARRAY LISTA e a estesao length e usada para saber a quantidade de objetos dentro do array no caso sabemos que e 6,6 objetos/carros.
    if (passouTodaATela(xCarros[i])){ //
      xCarros[i] = 600;//
    }
  }
}

function passouTodaATela(xCarro){ //function passou toda tela que recebe como parametro xcarro ,ou seja posiçao x do carro
  return xCarro < - 50;// retorna XCARRO menor que -50
}





**************************************************************************
// AQUI TEMOS O INDEX PARTE INPORTANTE POIS E NELE QUE ESTA TODAS AS REFERENCIAS DOS NOSSO JOGO CLASES PASTAS ETC.
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/addons/p5.sound.min.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
    <meta charset="utf-8" />

  </head>
  <body>
    <script src="jogo.js"></script>// CLASSE/PASTA DO JOGO
    <script src="Imagens.js"></script>// CLASSE/PASTA QUE CHAMA AS IMAGENS
    <script src="ator.js"></script>// CLASSE/PASTA QUE MOSTRA O ATOR
    <script src="carro.js"></script>// CLASSE/PASTA QUE MOSTRA O CARRO
    <script src="p5.collide2d.js"></script>// CLASSE/PASTA QUE TRAS UM CODIGO DE OUTRA PESSOA QUE FAZ A VERIFICAÇAODA COLICAO
    
    
  </body>
</html>
   
  
   
   
   
   
*******************************************************************************
// CODIGO FEITO POR OUTRA PESSSOA, QUE FAZ A VERIFICAÇAO SE HOUVE COLIÇAO OU NAO.
//NESSE CODIGO TEM A VERIFICAÇAO DE VARIOS TIPOS DE COLIÇAO,INCLUINDO A NOSSA QUE SE ENCAIXA EM RETANGULO COM QUADRADO( CARRO E ATOR)
//ISTO E CERTO TIPOS DE AÇOES NAO PRECISAMOS NOS PREOCUPAR COMO FAZER POIS JA HA A SOLUÇAO DE VARIAS PELA INTERNET,BASTA INPLEMEN TAR O CODIGO COMO FIZEMOS AQUI.
//ALEM DISSO VOCE PODE ENCAIXAR A PARTE QUE DESEJA DESSE  CODIGO NO SEU CODIGO,CTRL C CTRL V.POREM E RECOMENDADO INPLEMENTAR O CODIGO INTEIRO DENTRO DE UMA PASTA/CLASSE PARA NAO CORRRER A CHANCE DE ERROR.
//AGORA BASTA CHAMAR NO SEU CODIGO  A FUNCTION CORRESPONDENTE A COLIÇAO QUE VOCE DESEJA.

/*
Repo: https://github.com/bmoren/p5.collide2D/
Created by http://benmoren.com
Some functions and code modified version from http://www.jeffreythompson.org/collision-detection
Version v0.7.3 | June 22, 2020
CC BY-NC-SA 4.0
*/


console.log("### p5.collide v0.7.3 ###")

p5.prototype._collideDebug = false;

p5.prototype.collideDebug = function(debugMode){
    _collideDebug = debugMode;
}

/*~++~+~+~++~+~++~++~+~+~ 2D ~+~+~++~+~++~+~+~+~+~+~+~+~+~+~+*/

p5.prototype.collideRectRect = function (x, y, w, h, x2, y2, w2, h2) {
  //2d
  //add in a thing to detect rectMode CENTER
  if (x + w >= x2 &&    // r1 right edge past r2 left
      x <= x2 + w2 &&    // r1 left edge past r2 right
      y + h >= y2 &&    // r1 top edge past r2 bottom
      y <= y2 + h2) {    // r1 bottom edge past r2 top
        return true;
  }
  return false;
};

// p5.vector version of collideRectRect
p5.prototype.collideRectRectVector = function(p1, sz, p2, sz2){
  return p5.prototype.collideRectRect(p1.x, p1.y, sz.x, sz.y, p2.x, p2.y, sz2.x,sz2.y)
}


p5.prototype.collideRectCircle = function (rx, ry, rw, rh, cx, cy, diameter) {
  //2d
  // temporary variables to set edges for testing
  var testX = cx;
  var testY = cy;

  // which edge is closest?
  if (cx < rx){         testX = rx       // left edge
  }else if (cx > rx+rw){ testX = rx+rw  }   // right edge

  if (cy < ry){         testY = ry       // top edge
  }else if (cy > ry+rh){ testY = ry+rh }   // bottom edge

  // // get distance from closest edges
  var distance = this.dist(cx,cy,testX,testY)

  // if the distance is less than the radius, collision!
  if (distance <= diameter/2) {
    return true;
  }
  return false;
};

// p5.vector version of collideRectCircle
p5.prototype.collideRectCircleVector = function(r, sz, c, diameter){
  return p5.prototype.collideRectCircle(r.x,r.y, sz.x,sz.y, c.x,c.y, diameter)
}

p5.prototype.collideCircleCircle = function (x, y,d, x2, y2, d2) {
//2d
  if( this.dist(x,y,x2,y2) <= (d/2)+(d2/2) ){
    return true;
  }
  return false;
};


// p5.vector version of collideCircleCircle
p5.prototype.collideCircleCircleVector = function(p1,d, p2, d2){
  return p5.prototype.collideCircleCircle(p1.x,p1.y,  d, p2.x,p2.y, d2)
}


p5.prototype.collidePointCircle = function (x, y, cx, cy, d) {
//2d
if( this.dist(x,y,cx,cy) <= d/2 ){
  return true;
}
return false;
};

// p5.vector version of collidePointCircle
p5.prototype.collidePointCircleVector = function(p, c, d){
  return p5.prototype.collidePointCircle(p.x,p.y,c.x,c.y,  d)
}

p5.prototype.collidePointEllipse = function (x, y, cx, cy, dx, dy) {
  //2d
  var rx = dx/2, ry = dy/2;
  // Discarding the points outside the bounding box
  if (x > cx + rx || x < cx - rx ||y > cy + ry || y < cy - ry) {
		return false;
  }
  // Compare the point to its equivalent on the ellipse
  var xx = x - cx, yy = y - cy;
  var eyy = ry * this.sqrt(this.abs(rx * rx - xx * xx)) / rx;
  return yy <= eyy && yy >= -eyy;
};

// p5.vector version of collidePointEllipse
p5.prototype.collidePointEllipseVector = function(p, c, d){
  return p5.prototype.collidePointEllipse(p.x,p.y,c.x,c.y,d.x,d.y);
}

p5.prototype.collidePointRect = function (pointX, pointY, x, y, xW, yW) {
//2d
if (pointX >= x &&         // right of the left edge AND
    pointX <= x + xW &&    // left of the right edge AND
    pointY >= y &&         // below the top AND
    pointY <= y + yW) {    // above the bottom
        return true;
}
return false;
};

// p5.vector version of collidePointRect
p5.prototype.collidePointRectVector = function(point, p1, sz){
  return p5.prototype.collidePointRect(point.x, point.y, p1.x, p1.y, sz.x, sz.y);
}

p5.prototype.collidePointLine = function(px,py,x1,y1,x2,y2, buffer){
  // get distance from the point to the two ends of the line
var d1 = this.dist(px,py, x1,y1);
var d2 = this.dist(px,py, x2,y2);

// get the length of the line
var lineLen = this.dist(x1,y1, x2,y2);

// since floats are so minutely accurate, add a little buffer zone that will give collision
if (buffer === undefined){ buffer = 0.1; }   // higher # = less accurate

// if the two distances are equal to the line's length, the point is on the line!
// note we use the buffer here to give a range, rather than one #
if (d1+d2 >= lineLen-buffer && d1+d2 <= lineLen+buffer) {
  return true;
}
return false;
}

// p5.vector version of collidePointLine
p5.prototype.collidePointLineVector = function(point,p1,p2, buffer){
  return p5.prototype.collidePointLine(point.x,point.y, p1.x,p1.y, p2.x,p2.y, buffer);
}

p5.prototype.collideLineCircle = function( x1,  y1,  x2,  y2,  cx,  cy,  diameter) {
  // is either end INSIDE the circle?
  // if so, return true immediately
  var inside1 = this.collidePointCircle(x1,y1, cx,cy,diameter);
  var inside2 = this.collidePointCircle(x2,y2, cx,cy,diameter);
  if (inside1 || inside2) return true;

  // get length of the line
  var distX = x1 - x2;
  var distY = y1 - y2;
  var len = this.sqrt( (distX*distX) + (distY*distY) );

  // get dot product of the line and circle
  var dot = ( ((cx-x1)*(x2-x1)) + ((cy-y1)*(y2-y1)) ) / this.pow(len,2);

  // find the closest point on the line
  var closestX = x1 + (dot * (x2-x1));
  var closestY = y1 + (dot * (y2-y1));

  // is this point actually on the line segment?
  // if so keep going, but if not, return false
  var onSegment = this.collidePointLine(closestX,closestY,x1,y1,x2,y2);
  if (!onSegment) return false;

  // draw a debug circle at the closest point on the line
  if(this._collideDebug){
    this.ellipse(closestX, closestY,10,10);
  }

  // get distance to closest point
  distX = closestX - cx;
  distY = closestY - cy;
  var distance = this.sqrt( (distX*distX) + (distY*distY) );

  if (distance <= diameter/2) {
    return true;
  }
  return false;
}

// p5.vector version of collideLineCircle
p5.prototype.collideLineCircleVector = function( p1,  p2,  c,  diameter){
  return p5.prototype.collideLineCircle( p1.x,  p1.y,  p2.x,  p2.y,  c.x,  c.y,  diameter);
}
p5.prototype.collideLineLine = function(x1, y1, x2, y2, x3, y3, x4, y4,calcIntersection) {

  var intersection;

  // calculate the distance to intersection point
  var uA = ((x4-x3)*(y1-y3) - (y4-y3)*(x1-x3)) / ((y4-y3)*(x2-x1) - (x4-x3)*(y2-y1));
  var uB = ((x2-x1)*(y1-y3) - (y2-y1)*(x1-x3)) / ((y4-y3)*(x2-x1) - (x4-x3)*(y2-y1));

  // if uA and uB are between 0-1, lines are colliding
  if (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1) {

    if(this._collideDebug || calcIntersection){
      // calc the point where the lines meet
      var intersectionX = x1 + (uA * (x2-x1));
      var intersectionY = y1 + (uA * (y2-y1));
    }

    if(this._collideDebug){
      this.ellipse(intersectionX,intersectionY,10,10);
    }

    if(calcIntersection){
      intersection = {
        "x":intersectionX,
        "y":intersectionY
      }
      return intersection;
    }else{
      return true;
    }
  }
  if(calcIntersection){
    intersection = {
      "x":false,
      "y":false
    }
    return intersection;
  }
  return false;
}


// p5.vector version of collideLineLine
p5.prototype.collideLineLineVector = function(p1, p2, p3, p4, calcIntersection){
  return p5.prototype.collideLineLine(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y, calcIntersection);
}

p5.prototype.collideLineRect = function(x1, y1, x2, y2, rx, ry, rw, rh, calcIntersection) {

  // check if the line has hit any of the rectangle's sides. uses the collideLineLine function above
  var left, right, top, bottom, intersection;

  if(calcIntersection){
     left =   this.collideLineLine(x1,y1,x2,y2, rx,ry,rx, ry+rh,true);
     right =  this.collideLineLine(x1,y1,x2,y2, rx+rw,ry, rx+rw,ry+rh,true);
     top =    this.collideLineLine(x1,y1,x2,y2, rx,ry, rx+rw,ry,true);
     bottom = this.collideLineLine(x1,y1,x2,y2, rx,ry+rh, rx+rw,ry+rh,true);
     intersection = {
        "left" : left,
        "right" : right,
        "top" : top,
        "bottom" : bottom
    }
  }else{
    //return booleans
     left =   this.collideLineLine(x1,y1,x2,y2, rx,ry,rx, ry+rh);
     right =  this.collideLineLine(x1,y1,x2,y2, rx+rw,ry, rx+rw,ry+rh);
     top =    this.collideLineLine(x1,y1,x2,y2, rx,ry, rx+rw,ry);
     bottom = this.collideLineLine(x1,y1,x2,y2, rx,ry+rh, rx+rw,ry+rh);
  }

  // if ANY of the above are true, the line has hit the rectangle
  if (left || right || top || bottom) {
    if(calcIntersection){
      return intersection;
    }
    return true;
  }
  return false;
}

// p5.vector version of collideLineRect
p5.prototype.collideLineRectVector = function(p1, p2, r, rsz, calcIntersection){
  return p5.prototype.collideLineRect(p1.x, p1.y, p2.x, p2.y, r.x, r.y, rsz.x, rsz.y, calcIntersection);
}

p5.prototype.collidePointPoly = function(px, py, vertices) {
  var collision = false;

  // go through each of the vertices, plus the next vertex in the list
  var next = 0;
  for (var current=0; current<vertices.length; current++) {

    // get next vertex in list if we've hit the end, wrap around to 0
    next = current+1;
    if (next === vertices.length) next = 0;

    // get the PVectors at our current position this makes our if statement a little cleaner
    var vc = vertices[current];    // c for "current"
    var vn = vertices[next];       // n for "next"

    // compare position, flip 'collision' variable back and forth
    if (((vc.y >= py && vn.y < py) || (vc.y < py && vn.y >= py)) &&
         (px < (vn.x-vc.x)*(py-vc.y) / (vn.y-vc.y)+vc.x)) {
            collision = !collision;
    }
  }
  return collision;
}

// p5.vector version of collidePointPoly
p5.prototype.collidePointPolyVector = function(p1, vertices){
  return p5.prototype.collidePointPoly(p1.x, p1.y, vertices);
}

// POLYGON/CIRCLE
p5.prototype.collideCirclePoly = function(cx, cy, diameter, vertices, interior) {

  if (interior === undefined){
    interior = false;
  }

  // go through each of the vertices, plus the next vertex in the list
  var next = 0;
  for (var current=0; current<vertices.length; current++) {

    // get next vertex in list if we've hit the end, wrap around to 0
    next = current+1;
    if (next === vertices.length) next = 0;

    // get the PVectors at our current position this makes our if statement a little cleaner
    var vc = vertices[current];    // c for "current"
    var vn = vertices[next];       // n for "next"

    // check for collision between the circle and a line formed between the two vertices
    var collision = this.collideLineCircle(vc.x,vc.y, vn.x,vn.y, cx,cy,diameter);
    if (collision) return true;
  }

  // test if the center of the circle is inside the polygon
  if(interior === true){
    var centerInside = this.collidePointPoly(cx,cy, vertices);
    if (centerInside) return true;
  }

  // otherwise, after all that, return false
  return false;
}

// p5.vector version of collideCirclePoly
p5.prototype.collideCirclePolyVector = function(c, diameter, vertices, interior){
  return p5.prototype.collideCirclePoly(c.x, c.y, diameter, vertices, interior);
}

p5.prototype.collideRectPoly = function( rx, ry, rw, rh, vertices, interior) {
  if (interior == undefined){
    interior = false;
  }

  // go through each of the vertices, plus the next vertex in the list
  var next = 0;
  for (var current=0; current<vertices.length; current++) {

    // get next vertex in list if we've hit the end, wrap around to 0
    next = current+1;
    if (next === vertices.length) next = 0;

    // get the PVectors at our current position this makes our if statement a little cleaner
    var vc = vertices[current];    // c for "current"
    var vn = vertices[next];       // n for "next"

    // check against all four sides of the rectangle
    var collision = this.collideLineRect(vc.x,vc.y,vn.x,vn.y, rx,ry,rw,rh);
    if (collision) return true;

    // optional: test if the rectangle is INSIDE the polygon note that this iterates all sides of the polygon again, so only use this if you need to
    if(interior === true){
      var inside = this.collidePointPoly(rx,ry, vertices);
      if (inside) return true;
    }
  }

  return false;
}

// p5.vector version of collideRectPoly
p5.prototype.collideRectPolyVector = function(r, rsz, vertices, interior){
  return p5.prototype.collideRectPoly(r.x, r.y, rsz.x, rsz.y, vertices, interior);
}

p5.prototype.collideLinePoly = function(x1, y1, x2, y2, vertices) {

  // go through each of the vertices, plus the next vertex in the list
  var next = 0;
  for (var current=0; current<vertices.length; current++) {

    // get next vertex in list if we've hit the end, wrap around to 0
    next = current+1;
    if (next === vertices.length) next = 0;

    // get the PVectors at our current position extract X/Y coordinates from each
    var x3 = vertices[current].x;
    var y3 = vertices[current].y;
    var x4 = vertices[next].x;
    var y4 = vertices[next].y;

    // do a Line/Line comparison if true, return 'true' immediately and stop testing (faster)
    var hit = this.collideLineLine(x1, y1, x2, y2, x3, y3, x4, y4);
    if (hit) {
      return true;
    }
  }
  // never got a hit
  return false;
}


// p5.vector version of collideLinePoly
p5.prototype.collideLinePolyVector = function(p1, p2, vertice){
  return p5.prototype.collideLinePoly(p1.x, p1.y, p2.x, p2.y, vertice);
}

p5.prototype.collidePolyPoly = function(p1, p2, interior) {
  if (interior === undefined){
    interior = false;
  }

  // go through each of the vertices, plus the next vertex in the list
  var next = 0;
  for (var current=0; current<p1.length; current++) {

    // get next vertex in list, if we've hit the end, wrap around to 0
    next = current+1;
    if (next === p1.length) next = 0;

    // get the PVectors at our current position this makes our if statement a little cleaner
    var vc = p1[current];    // c for "current"
    var vn = p1[next];       // n for "next"

    //use these two points (a line) to compare to the other polygon's vertices using polyLine()
    var collision = this.collideLinePoly(vc.x,vc.y,vn.x,vn.y,p2);
    if (collision) return true;

    //check if the either polygon is INSIDE the other
    if(interior === true){
      collision = this.collidePointPoly(p2[0].x, p2[0].y, p1);
      if (collision) return true;
      collision = this.collidePointPoly(p1[0].x, p1[0].y, p2);
      if (collision) return true;
    }
  }

  return false;
}

p5.prototype.collidePolyPolyVector = function(p1, p2, interior) {
  return p5.prototype.collidePolyPoly(p1, p2, interior);
}

p5.prototype.collidePointTriangle = function(px, py, x1, y1, x2, y2, x3, y3) {

  // get the area of the triangle
  var areaOrig = this.abs( (x2-x1)*(y3-y1) - (x3-x1)*(y2-y1) );

  // get the area of 3 triangles made between the point and the corners of the triangle
  var area1 =    this.abs( (x1-px)*(y2-py) - (x2-px)*(y1-py) );
  var area2 =    this.abs( (x2-px)*(y3-py) - (x3-px)*(y2-py) );
  var area3 =    this.abs( (x3-px)*(y1-py) - (x1-px)*(y3-py) );

  // if the sum of the three areas equals the original, we're inside the triangle!
  if (area1 + area2 + area3 === areaOrig) {
    return true;
  }
  return false;
}

// p5.vector version of collidePointTriangle
p5.prototype.collidePointTriangleVector = function(p, p1, p2, p3){
  return p5.prototype.collidePointTriangle(p.x, p.y, p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
}

p5.prototype.collidePointPoint = function (x,y,x2,y2, buffer) {
    if(buffer === undefined){
      buffer = 0;
    }

    if(this.dist(x,y,x2,y2) <= buffer){
      return true;
    }

  return false;
};

// p5.vector version of collidePointPoint
p5.prototype.collidePointPointVector = function(p1, p2, buffer){
  return p5.prototype.collidePointPoint(p1.x,p1.y,p2.x,p2.y, buffer);
}

p5.prototype.collidePointArc = function(px, py, ax, ay, arcRadius, arcHeading, arcAngle, buffer) {

  if (buffer === undefined) {
    buffer = 0;
  }
  // point
  var point = this.createVector(px, py);
  // arc center point
  var arcPos = this.createVector(ax, ay);
  // arc radius vector
  var radius = this.createVector(arcRadius, 0).rotate(arcHeading);

  var pointToArc = point.copy().sub(arcPos);

  if (point.dist(arcPos) <= (arcRadius + buffer)) {
    var dot = radius.dot(pointToArc);
    var angle = radius.angleBetween(pointToArc);
    if (dot > 0 && angle <= arcAngle / 2 && angle >= -arcAngle / 2) {
      return true;
    }
  }
  return false;
}

// p5.vector version of collidePointArc
p5.prototype.collidePointArcVector = function(p1, a, arcRadius, arcHeading, arcAngle, buffer){
  return p5.prototype.collidePointArc(p1.x, p1.y, a.x, a.y, arcRadius, arcHeading, arcAngle, buffer);
}

