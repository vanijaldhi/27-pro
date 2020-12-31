class Rope{
    constructor(body1, body2,offsetX,offsetY){
   this.offsetX = offsetX;
   this.offsetY=offsetY;
   var options={
       bodyA:body1,
       bodyB:body2,
       pointB:{x:this.offsetX,y:this.offsetY}
   }
   this.pointB = pointB;
   this.rope = Constraint.create(options);
   World.add(world,this.rope);
    }
   display(){
       var pointA = this.bodyA.position;
       var pointB = this.pointB;
       push ();
       line (this.pointA.position.x,this.pointA.position.y,this.pointB.position.x,this.pointB.position.y);
       pop ();
   }
    }
       
    