var wall;
var car;
var speed;
var weight;

function setup() {
  createCanvas(1600,400);
  
  
 speed=random(55,90);
 weight=random(400,1500);

  car = createSprite(100,200,50,50);
  car.velocityX = speed;
  
  wall = createSprite(1500, 200, 60, height/2);

  if(wall.x+car.x<(car.width+wall.widtyh)/2){
    car.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;
    if(deformation>180){
      car.shapeColor="red";
    }
    if(deformation<180 && deformation>100){
      car.shapeColor="yellow";
    }
    if(deformation<100){
      car.shapeColor="green";
    }
  }
}

function draw() {
  background(255,255,255);  
  drawSprites();

  if (car.x - wall.x < wall.width/2 + car.width/2
 && wall.x - car.x < wall.width/2 + car.width/2)
{car.shapeColor="red";
  }
  if (car.x - wall.x < wall.width/3+ car.width/3
  && wall.x - car.x < wall.width/3 + car.width/3)
  {car.shapeColor="yellow";
   }
   if (car.x - wall.x < wall.width/4 + car.width/4
    && wall.x - car.x < wall.width/4 + car.width/4)
   {car.shapeColor="green";
     }
}