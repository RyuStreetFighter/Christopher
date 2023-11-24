//colidiu
let colidiu= false

//variaveis da bolinha
let xBolinha = 250;
let yBolinha = 200
let dBolinha = 20
let raio = dBolinha / 2

//variaveis da bolinha
let speedxBall = 4
let speedyBall = 4

//variaveis da raquete
let xRaquete = 5
let yRaquete = 150
let alturaRaquete = 100
let comprimentoRaquete = 10

//variáveis da raquete do oponente
let xRaquete2 = 485
let yRaquete2 = 150
let larguraRaquete2 = 10
let alturaRaquete2 = 100
let velocidadeyoponente

//placar
let meuspontos = 0
let pontosoponente = 0


function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(0);
    mostraBolinha()
  movimentoBolinha()
  verificaçãoBolinha()
  raquete()
  raqutemovimento()
  verificaColisaoRaquete()
  raqueteoponente()
  //raquetemovimento2()
  verificaColisaoRaqueteOponente()
  placar()
 pontos()
  pontos2()
  oponentemovimento()
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, dBolinha);
}
function movimentoBolinha(){
  xBolinha += speedxBall
  yBolinha += speedyBall
}

function verificaçãoBolinha(){
   if (xBolinha + raio > width || xBolinha - raio < 0){
    speedxBall *= -1
  }
 
  if (yBolinha + raio > height || yBolinha - raio < 0){
   speedyBall *= -1
  }
}

function raquete(){
  rect(xRaquete, yRaquete, comprimentoRaquete, alturaRaquete)
}

function raqutemovimento(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10
  }
}

function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + comprimentoRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete){
    speedxBall *= -1
   
  }
}
function raqueteoponente(){
  rect(xRaquete2, yRaquete2, larguraRaquete2, alturaRaquete2)
}

function raquetemovimento2() {
    velocidadeyoponente = yBolinha - yRaquete2 - comprimentoRaquete / 2 - 30;
    yRaquete2 += velocidadeyoponente
}
function verificaColisaoRaqueteOponente() {
  if (
    xBolinha + raio > xRaquete2 &&
    yBolinha > yRaquete2 &&
    yBolinha < yRaquete2 + alturaRaquete2
  ) {
    speedxBall *= -1;
  }
}

function placar(){
  textSize(25)
  fill("white")
  text(meuspontos, 470, 20)
  text(pontosoponente, 20, 20)
}
function pontos(){
  if(xBolinha < 10){
    meuspontos += 1
  }
  }
 
  function pontos2(){
  if(xBolinha > 490){
    pontosoponente += 1
    }
   }
 
   
 function oponentemovimento() {
  if (keyIsDown(87)) {
    yRaquete2 -= 10
  }
  if (keyIsDown(83)) {
    yRaquete2 += 10
  }
}

