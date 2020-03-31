const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var bow,arrow;
var backgroundImg;

function preload(){
backgroundImg= loadImage("images/background1.jpg")
}

function setup() {
  createCanvas(1600,750);
  engine = Engine.create();
  world = engine.world;

  ground = new ground(600,height,2000,20);
  bow = new Bow(250,200,70,400);
  arrow=new Arrow(175,400,200,20);
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  ground.display();  
  bow.display();
  arrow.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}