class bob {

    constructor(x, y, r) {
  
     var options = {
  
      // isStatic:true,
        restitution: 1,
        friction: 0.5,
        density: 1,
  
      }
      this.r = r;
      this.body = Bodies.circle(x, y, r, options);
      World.add(world, this.body)
  
    }
    display() {
  
      var pos = this.body.position;
      push()
      translate(pos.x, pos.y);
      fill("cyan");
      ellipseMode(CENTER)
      ellipse( 0, 0, this.r*2, this.r*2)
      pop()
  
    }
  
  }