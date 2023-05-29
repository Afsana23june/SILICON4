var backgroundImage;
var canvas;
var player, form;
var database, gameState;
var spaceship1Image, spaceship2Image;
var fuels, allPlayers;
var spaceship1, spaceship2, obstacles;
var fuelImage, spaceship1, spaceship2;
var obstacle1Image;
var playerCount;
var spaceShips = [];

function preload(){
  backgroundImage = loadImage("bgg.jpg");
  spaceship1Image = loadImage("spaceship1.png");
  spaceship2Image = loadImage("spaceship2.png");
  fuelImage = loadImage("fuel.png");
  obstacle1Image = loadImage("meteor.png");
  lifeImage = loadImage("life.png");
  blastImage = loadImage("blast.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState ();
  game.start();
}

function draw() {
  background(backgroundImage);  
  //drawSprites();
  if (playerCount === 2) {
    game.update(1);
  }
  

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    //game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}