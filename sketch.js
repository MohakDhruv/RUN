var hypnoticBall, database;
var position;
var bg;
var form;
var game;
var player;
var gameState = 0; 
var playerCount; 
var allPlayers; 
var car1,car1IMG,car2, car2IMG, car3, car3IMG, car4, car4IMG, cars;

function preload(){
  car1IMG = loadImage("images/dooby.webp");
  car2IMG = loadImage("images/dooby.webp");
  car3IMG = loadImage("images/dooby.webp");
  car4IMG = loadImage("images/dooby.webp");

bg = loadImage("images/ground.png");
}


function setup(){
  database = firebase.database();

  createCanvas(1920,1080);
game = new Game();
game.getState();
game.start();

 
}

function draw(){
  background("white");
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    game.play();
  }
}
