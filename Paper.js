class Paper {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          restitution: 1,
	        friction: 1,
          density: 1.2
      }
      this.image=loadImage("images/paper.PNG");
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(RADIUS);
      fill("brown");
      image(this.image,pos.x, pos.y, this.radius,this.radius);

    }
};