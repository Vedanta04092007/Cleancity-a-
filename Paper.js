class Paper{
constructor(x,y){
    var options = {
        isStatic:false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
    }
    ball = Bodies.circle(200,200,40,40,options);
    this.width = 40;
    this.height = 40;
   
    World.add(world, this.body);
}
display(){
    var pos =this.body.position;
    translate(pos.x, pos.y);
}
};