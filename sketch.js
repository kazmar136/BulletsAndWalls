var wall; 
var bullet;
var speed ;
var weight;
var thickness;

function setup() {
  createCanvas(1600, 400);

  speed=random(50,90)
  weight=random(30,50)


  thickness=random(20,83)




  
    bullet=createSprite(50, 200, 50,5);  
    bullet.velocityX = speed;
    bullet.shapeColor= "white";

 
  	
    
    wall=createSprite(1200, 200, thickness, height/2);  

    wall.shapeColor="grey";
}


function draw() {
  background("black"); 
  if(hasCollided(bullet, wall))
  {
  	bullet.velocityX=0;
  	var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

  	
	if(damage>10)
	{
		wall.shapeColor="green";
		
	}

	

	if(damage<10)
	{
		wall.shapeColor="red";
	}
	
  }


  drawSprites();
 
}


function hasCollided(lbullet, lwall)
{
	bulletRightEdge=lbullet.x +lbullet.width;
	wallLeftEdge=lwall.x;
	if (bulletRightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;
}
