class Launcher{
    constructor(body, anchor){
      var options={
        bodyA:body,
        pointB:anchor,
        stiffness:0.004,
        length:0.25
        
    }
    this.bodyA=body;
    this.pointB=anchor;
    this.launcher=Constraint.create(options);
    World.add(world,this.launcher);
        }
        attach(body){
            this.launcher.bodyA=body;
    
        }
        fly(){
            this.launcher.bodyA=null;
            }
            display(){
                if(this.launcher.bodyA){
                    var pointA=this.bodyA.position;  
                    var pointB=this.pointB;
                    strokeWeight(1);
                    line(75,300,90,255);
                    line(75,300,90,345);
                }
            }
    }
    
