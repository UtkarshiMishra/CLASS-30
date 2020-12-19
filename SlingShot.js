
class SlingShot {
    constructor (bodyA,pointB) {
   
    var options = {
        bodyA : bodyA,
        pointB: pointB,
        length: 10,
        stiffness: 0.04
    }
    this.sling1 = loadImage ("sprites/sling1.png");
    this.sling2 = loadImage ("sprites/sling2.png");
    this.sling3 = loadImage ("sprites/sling3.png");
    this.sling = Constraint.create(options);
    this.pointB = pointB;
    World.add(world,this.sling);
}

fly() {
this.sling.bodyA = null;
}
attach(body) {
this.sling.bodyA = body;
}
display() {
    image(this.sling1,185,20);
    image(this.sling2,160,20);

    if (this.sling.bodyA) {
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        stroke(48,22,8)
        if(pointA.x > 190){
            strokeWeight (3.0);
            image(this.sling3,pointA.x+25,pointA.y-10,10,25)
            line (pointA.x+30,pointA.y,pointB.x+30,pointB.y-10);
            line (pointA.x+30,pointA.y,pointB.x-20,pointB.y-10);
        }
        else{  
            strokeWeight (4.0);
            image(this.sling3,pointA.x-35,pointA.y-10,10,25)
            line (pointA.x-30,pointA.y,pointB.x+30,pointB.y-10);
            line (pointA.x-30,pointA.y,pointB.x-20,pointB.y-10);
        }
    }
}
}