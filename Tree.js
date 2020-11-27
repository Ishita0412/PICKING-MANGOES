class Tree{
    constructor(x,y,w,h){
        var options={
            isStatic:true
        }
   
this.x=x;
this.y=y;
this.w=w;
this.h=h;
this.image=loadImage("tree.png")

this.body=Bodies.rectangle(x,y,w,h,options);
World.add(world,this.body);

 }
 display(){
     var Gpos=this.body.position;
     
      image(this.image,this.body.position.x,this.body.position.y,400,600);
 }
}