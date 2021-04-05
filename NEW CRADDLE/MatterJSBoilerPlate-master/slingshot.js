class slingshot{

constructor(body1,body2,offsetX)
{

this.offsetX=offsetX


var options = {

bodyA:body1,
bodyB:body2,
//stiffness:0.5,
pointB:{x:offsetX,y:0}

}

this.slingshot=Constraint.create(options)
World.add(world,this.slingshot)

}
display(){
var pointA=this.slingshot.bodyA.position;
var pointB=this.slingshot.bodyB.position;



strokeWeight(2);

var Anchor1X=pointA.x
var Anchor1Y=pointA.y

var Anchor2X=pointB.x+this.offsetX
var Anchor2Y=pointB.y

stroke("yellow")  
line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y)

}

}