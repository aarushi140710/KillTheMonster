class Throw{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            restitution : 0.1,
            friction : 0.04
        }
    
        this.pointB=pointB;
        this.throw = Constraint.create(options);
        World.add(world, this.throw);
    }

    fly(){
        this.throw.bodyA=null;
    }

    Launch(bodyA){
        this.throw.bodyA=bodyA;
    }

    display(){
       
    }
    
}