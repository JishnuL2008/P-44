const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var object,block,bgImg,bg;
var blockImg,objImg,boundary1,boundary2,boundary3,boundary4;
var object2,blockGroup,arrow,arrowImg,bow;
var score=0;
var bow,bowImage,launcherObj;

function preload(){
  bgImg=loadImage("images/img1.png");
blockImg=loadImage("images/img2.png");
//objImg=loadImage("images/img6.png");
//arrowImg=loadImage("images/img5.png")
bowImage = loadImage("images/img7.png")
}

function setup(){
    
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  
  
  //bg=createSprite(300,300);
  //bg.scale=1;
  //bg.addImage(bgImg);
  //bg.velocityY=2;
  
  
 //object=createSprite(100,200,30,50);
  //object.addImage(objImg);
  //object.scale=0.25;

  

  
  
  //boundary1=createSprite(300,360,600,10)
  //fill("yellow");
  
  
  //boundary2=createSprite(300,0,600,10);
  
  //boundary3=createSprite(0,180,10,360);;
  
  //boundary4=createSprite(600,180,10,360);


  
  arrow=new Arrow(100,300);
  

  bow = createSprite(100,300,20,20)
  bow.addImage(bowImage);
  bow.scale=0.15
  launcherObj=new Launcher(arrow.body,{x:75,y:175});
  blockGroup=new Group();
  
}
function draw() {


  
  
  background(bgImg);
  text("Blocks Left: "+score,100,100);
Engine.update(engine);

  //if(blockGroup.isTouching(boundary1)){
    //score=score+1;
    //}

  

//if(object.y>=300){
 //object.y=200;
//}
//if(object.y<=70){
  //object.y=200;
//}





 if(keyDown("UP_ARROW")){
   object.y=object.y-6;
 }
  if(keyDown("DOWN_ARROW")){
   object.y=object.y+6;
 }

 

 objects();
  drawSprites();


  launcherObj.display();
  arrow.display();
  
 
}

function objects(){
if(frameCount%80===0){
  block=createSprite(800,20,25,25);
  block.addImage(blockImg);
  block.scale=0.15
  block.velocityY=2;
  blockGroup.add(block);
}
}