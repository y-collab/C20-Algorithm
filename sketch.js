var movingrect, fixedrect;

function setup() {
  createCanvas(800,400);
  movingrect = createSprite(100,80,40,40);
  fixedrect = createSprite(100,80,40,40);
  movingrect.shapeColor = "red";
  fixedrect.shapeColor = "red";
}

function draw() {

  background(255,255,255);  
  
  movingrect.x = mouseX;
  movingrect.y = mouseY;

  if (movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2 && 
    fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2 &&
    movingrect.y-fixedrect.y<movingrect.width/2+fixedrect.width/2 &&
    fixedrect.y-movingrect.y<movingrect.width/2+fixedrect.width/2) {
      movingrect.shapeColor = "green";
      fixedrect.shapeColor = "green";
    }
  else {movingrect.shapeColor = "red";
        fixedrect.shapeColor = "red";
    }




  drawSprites();
}