class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.bodyA = bodyA;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        console.log(this.chain.bodyA)
        if (this.chain.bodyA) {

       
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }}
    fly() {
        this.chain.bodyA = null;

    }


    

}