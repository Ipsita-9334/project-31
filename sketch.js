function setup() {
  createCanvas(480,480);

  
  
  ground = new Ground(600,height,1200,20);
}



function draw() {
  background(255,255,255);  

  var particles = [];
  var plinkos = [];
  var divisions = [];

  var divisionHeight = 300;

  for(var k = 0; k <= width; k= k+80){
    divisions.push(new Divison(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 49; j <= width; j = j+50){
    plinkos.push(new Plinko(j, 75));
  }

  for(var j = 15; j <= width - 10; j = j+50){
    plinkos.push(new Plinko(j, 175));
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2 +10), 10, 10));

  }

  for(var z = 0; z < particles.lenght; j++){
    particles[z].display();
  }

  for(var y = 0; y<  divisions.length; y++){
    divisions[y].display();
  }

  ground.display();

  drawSprites();

}