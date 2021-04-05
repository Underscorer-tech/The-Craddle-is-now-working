
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var b1, g1, b2, b3, b4, b5,r1,r2,r3,r4,r5;
function preload() {
                                          
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	b2 = new bob(340, 300, 30);
	g1 = new ground(400, 150, windowWidth / 2, 20);
	b3 = new bob(400, 300, 30)
    b4 = new bob(460,300,30);
    b5 = new bob(520,300,30);
    b1 = new bob(280,300,30);
	r1= new slingshot(b1.body,g1.body,-120)
   r2 = new slingshot(b2.body,g1.body,-60)
   r3 = new slingshot(b3.body,g1.body,0)
   r4 = new slingshot(b4.body,g1.body,+60)	
   r5 = new slingshot(b5.body,g1.body,+120)	

   Engine.run(engine);

}


function draw() {

//	console.log(mouseX + " " + mouseY)

	rectMode(CENTER);
	background(0);
//b5.body.position.x=mouseX;
//b5.body.position.y=mouseY;
	drawSprites();

	b1.display();
	g1.display();
	b2.display();
	b3.display();
    b4.display();
	b5.display();
    r1.display();
	r2.display();
    r3.display();
    r4.display();
    r5.display();

}

function keyPressed(){

	if (keyCode === UP_ARROW){
	
	  Matter.Body.applyForce(b1.body,b1.body.position,{x:-55,y:-105});
	
	
	}
	
	
	
	}
	
	