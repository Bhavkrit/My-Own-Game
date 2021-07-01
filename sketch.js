var pitch,batsman,ball,bowler,f1,f2,f3,w1,w2;
var batsmanImg,ballImg,bowlerImg,fielderImg,wicketImg1,wicketImg2


function preload(){
   batsmanImg = loadImage("batsmanImg.png")
   ballImg = loadImage("ball.png")
   bowlerImg = loadImage("bowler.png")
   fielderImg = loadImage("fielder.png")
   wicketImg1 = loadImage("1wickets.png")
   wicketImg2 = loadImage("wickets.png")
}



function setup() {
  createCanvas(1500,500);

  // fielder1
   f1 = createSprite(1200,200,30,30);
   f1.addImage(fielderImg);
   f1.scale = 0.17;

  //  fielder2
   f2 = createSprite(800,450,30,30);
   f2.addImage(fielderImg);
   f2.scale = 0.17;

 // fielder3
   f3 = createSprite(100,450,30,30)
   f3.addImage(fielderImg);
   f3.scale = 0.17;

 //  batsman
  batsman = createSprite(910,170,30,30);
  console.log("batsman just after create----", batsman, batsman.y)
  batsman.addImage(batsmanImg)
  console.log("batsman just after adding image----",batsman.y)
  batsman.scale = 0.2;
  console.log("batsman just after scaling----",batsman.y)

// bowler
  bowler = createSprite(150,200,30,30);
  bowler.addImage(bowlerImg)
  bowler.scale = 0.15;
  bowler.velocityX = 5
// wickets
  w1 = createSprite(1050,240,5,30);
  w1.addImage(wicketImg1)
  w1.scale = 0.15;

  
  w2 = createSprite(10,240,5,30);
  w2.addImage(wicketImg2)
  w2.scale = 0.15;

  ball = createSprite(105,130,5,5)
  ball.addImage(ballImg)
  ball.scale = 0.08

  
}

function draw() {
  background(220);
  
  fill("#b5651d")
  rect(80,90,900,300)
  strokeWeight(6)
  stroke(220)
  line(200,90,200,390)
  line(850,90,850,390)
  line(60,160,200,160)
  line(60,320,200,320)
  line(850,320,1000,320) 
  line(850,160,1000,160) 
  
  console.log("batsman y ----",batsman.position.y)


  if(keyDown("down")){
    console.log("key is pressed -- y", batsman.position.y)
    batsman.position.y = batsman.position.y + 2;
  }
  if(keyDown("up")){
    batsman.position.y = batsman.position.y - 2;
 
  }

  if(keyDown("space")){
    ball.position.x = ball.position.x +190
  }
  if(keyDown("r")){
    ball.position.x = bowler.position.x
    ball.position.y = 170
  }
  
  

  if(keyDown("h")){
    ball.position.x = f2.position.x
    ball.position.y = f2.position.y
    
    
  }

  
 
  
  
  
  drawSprites()

fill("Red")

text("You have to press space to launch the ball",300,10)
text("You have infinite balls",300,25)
text("You can move batsman with arrow keys",300,40)
text("Press r to get back the ball",300,55)
text("Press h to hit the ball",300,70)


}






