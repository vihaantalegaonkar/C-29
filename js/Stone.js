class Block{
    constructor(x, y, width, height) {
        var options = {
            restitution :0.4,
            friction :0.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.visibility = 255;
      }
      
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        if(this.body.speed < 6){
          rectMode(CENTER);
          rect(0,0,this.width, this.height);
         }else{
           World.remove(world, this.body);
         }
        pop();
      }
}