class Block4{
    constructor(x,y,width,height){
        var options = {

            restituition: 0.4,
            friction:0.0
        }
        this.visibility = 225;
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world, this.body);

    }

    display(){
        if(this.body.speed<3){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(128,128,128);
        strokeWeight(1.5);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
    }else{
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility - 5;
        pop();
    }
    }
    score(){
        if (this.visibility < 0 && this.visibility >-105){
          score++;
        }
      }
}