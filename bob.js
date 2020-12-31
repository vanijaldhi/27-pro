class Bob {
    constructor(x,y){
        var options={
            isStatic: true,
            restitution:0.3,
            friction: 0.5,
            density:1.2
        }
       this.bob = Bodies.circle(x,y,50,options);
       World.add(world,this.bob);
       
    }
  
      display(){
          var pos =this.bob.position;
           push();
          translate(pos.x, pos.y);        
          ellipseMode(CENTER);
          fill(255,11,11);
          ellipse(0, 0,50,50);
          pop();
      }
  }