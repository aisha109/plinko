class particle{

    constructor (x,y,r){

        var options = {
        
            isStatic : true
        }
        this.body = Bodies.circle(x,y,r,options)
        this.color = color(random(0,225),random(0,225),random(0,225))
        this.r = r
        World.add (world,this.body);
        }
        display(){
            var pos = this.body.position;
           
            fill("white");
           circle(pos.x,pos.y,this.r)
        }






}