const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;

var ground, wallLeft, wallRight;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,795,480,10);
  wallLeft = new Ground(0,400,10,800);
  wallRight = new Ground(480,400,10,800);

  for(var k = 0; k<= width; k = k+80) {
    divisions.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight));
  }

  for(var j = 40; j<= width; j = j+50)  {
    plinkos.push(new Plinko(j,75));
  }
  for(var j = 15; j<= width-10; j = j+50)  {
    plinkos.push(new Plinko(j,175));
  }
  for(var j = 40; j<= width; j = j+50)  {
    plinkos.push(new Plinko(j,275));
  }
  for(var j = 15; j<= width-10; j = j+50)  {
    plinkos.push(new Plinko(j,375));
  }

  if(frameCount%60===0) {
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }

}

function draw() {
  background("black");  

  ground.display();
  wallLeft.display();
  wallRight.display();

  for(var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();
  }
  for(var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  for(var f = 0; f < particles.length; f++) {
    particles[f].display();
  }

  drawSprites();
}