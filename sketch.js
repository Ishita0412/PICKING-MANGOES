
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree1, mango1;
var mango2, mango3;
var mango4;
var boy,boyI;

function preload(){
boyI=loadImage("boy.png");
}


function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	tree1=new Tree(300,300,40,80);
	mango1=new Mangoes(600,400,30);
	mango2=new Mangoes(450,400,40,70);
	mango3=new Mangoes(500,350,40,90);
	mango4=new Mangoes(500,550,40,90);
	boy=addImage(boyI);
	boy=createSprite(100,700,40,40);
	

	Engine.run(engine);

  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);
  
  
  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
 boy.display();
  drawSprites();
 
}



