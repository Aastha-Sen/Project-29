class Block {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.x=x;
      this.y=y;
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x,y,width,height,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      pop();
      strokeWeight(1);
      stroke("black");
      fill(rgb(173,216,230));
      rect(pos.x,pos.y,this.width,this.height);
    }
  };
