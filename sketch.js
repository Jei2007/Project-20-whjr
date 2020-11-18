var car,wall
var speed, weight

function setup() {
  createCanvas(1600,400);

  speed = random(55,90)
  weight = random(400, 1500)

  car = createSprite(50, 200, 50, 50);
  car.shapeColor = "blue"
  wall = createSprite(1500, 200, 60, height/2);
  wall.shapeColor = 60,60,60
}

function draw() {
  background(0);  

  car.depth = wall.depth+1
  
  car.velocityX = speed;

  if(isTouching(car, wall)){
    car.velocityX = 0
    deformation();
  }

  fill("green")
  textSize(20)
  text("Less than 100", 500,25)

  fill("yellow")
  textSize(20)
  text("Between 100 and 180", 500, 50)

  fill("red")
  textSize(20)
  text("Greater than 180", 500, 75)

  drawSprites();
}

function deformation() {
  var deformation = 0.5*weight*speed*speed/22500;
  if(deformation > 180) {
    car.shapeColor = color(255, 0, 0)
  }
  if(deformation < 180 && deformation > 100) {
    car.shapeColor = color(230,230,0)
  }
  if(deformation < 100) {
    car.shapeColor = color(0,255,0)
  }
}