class Ground{
    constructor(x,y,w,h){
        var ground_options={
            isStatic:true,
        }
      this.body=Bodies.rectangle(x,y,w,h,ground_options);
      this.w=w;
      this.h=h;
      this.x=x
      this.y=y
      World.add(world,this.body);
    }
    display(){
        var position=this.body.position
        push()
            rectMode(CENTER);
            translate(position.x,position.y)
            fill(255);
            strokeWeight(4);
            rect(0,0,this.w,this.h);
		pop()
    }
 }