
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var backgroundImage
function preload()
{
 backgroundImage = loadImage("illusion.jpg")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,600,800,10)
	stand = new Ground(500,500,200,10);
	block1 = new Box(420,480,20,20);
	block2 = new Box(440,480,20,20);
	block3 = new Box(460,480,20,20);
	block4 = new Box(480,480,20,20);
	block5 = new Box(500,480,20,20);
	block6 = new Box(520,480,20,20);
	block7 = new Box(540,480,20,20);
	block8 = new Box(560,480,20,20);
	block9 = new Box(580,480,20,20);
	block10 = new Box(440,460,20,20);
	block11 = new Box(460,460,20,20);
	block12 = new Box(480,460,20,20);
	block13 = new Box(500,460,20,20);
	block14 = new Box(520,460,20,20);
	block15 = new Box(540,460,20,20);
	block16 = new Box(560,460,20,20);
	block17 = new Box(460,440,20,20);
	block18 = new Box(480,440,20,20);
	block19 = new Box(500,440,20,20);
	block20 = new Box(520,440,20,20);
	block21 = new Box(540,440,20,20);
	block22 = new Box(480,420,20,20);
	block23 = new Box(500,420,20,20);
	block24 = new Box(520,420,20,20);
	block25 = new Box(500,400,20,20);
	polygon = new Polygon(200,200,50,50);
	string = new Chain(polygon.body,{x:100,y:500});
	stand2 = new Ground(600,200,200,10);
	box1 = new Box(520,180,20,20);
	box2 = new Box(540,180,20,20);
	box3 = new Box(560,180,20,20);
	box4 = new Box(580,180,20,20);
	box5 = new Box(600,180,20,20);
	box6 = new Box(620,180,20,20);
	box7 = new Box(640,180,20,20);
	box8 = new Box(660,180,20,20);
	box9 = new Box(680,180,20,20);
	box10 = new Box(540,160,20,20);
	box11 = new Box(560,160,20,20);
	box12 = new Box(580,160,20,20);
	box13 = new Box(600,160,20,20);
	box14 = new Box(620,160,20,20);
	box15 = new Box(640,160,20,20);
	box16 = new Box(660,160,20,20);
	box17 = new Box(560,140,20,20);
	box18 = new Box(580,140,20,20);
	box19 = new Box(600,140,20,20);
	box20 = new Box(620,140,20,20);
	box21 = new Box(640,140,20,20);
	box22 = new Box(580,120,20,20);
	box23 = new Box(600,120,20,20);
	box24 = new Box(620,120,20,20);
	box25 = new Box(600,100,20,20);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImage);
  
  stroke("black");
  fill("black");
  textSize(20);
  text("Knock all of the pins over",100,100);
  text("Press space to retry",100,120);

  ground.display();
  stand.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  polygon.display();
  string.display();
  stand2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();

  
  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	string.fly();
}
function keyPressed(){
	if(keyCode===32){
		string.attach(polygon.body);
	}
}


