class Rope {
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
     var options = {
         bodyA:body1,
         bodyB:body2,
         pointB:{x:this.offsetX,y:this.offsetY}
     }
     this.Rope = Constraint.create(options);
     World.add(world,this.Rope);
    
    };
    display(){
        var pointA = this.Rope.body1.position;
        var pointB = this.Rope.body2.position;
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
}