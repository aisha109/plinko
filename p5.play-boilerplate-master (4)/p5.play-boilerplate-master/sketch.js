const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
 

var particles = []
var plinkos=[]
var divisions = []

var divisionHeight = 300;


function setup() {
  createCanvas(480,700);
 engine = Engine.create();
 world = engine.world;

  ground = new Ground (240,585,480,30);



  for (var k = 0; k <= width;k= k+80){

    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
    }
     
    }
    
    for(var j = 40;j <=width; j = j+50){
    plinkos.push(new plinko (j,75));
    
    }
    for(var j = 15;j   <=width-10; j = j+50){
      plinkos.push(new plinko (j,175));
      
      }
    
    


function draw() {

  background("black"); 
  Engine.update(engine);
  ground.display();

  for (var j = 0; j <particles.length;j++){

    particles[j].display
  }
  for (var k =0;k<divisions.length;k++){
    divisions[k].display();
  }
 
 
}
