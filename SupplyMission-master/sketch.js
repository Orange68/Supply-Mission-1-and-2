const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
var helicopterIMG, helicopterSprite, engine, world, packageIMG, packageSprite, packageBody, ground, groundSprite, boxLeftSprite, boxRightSprite, boxBaseSprite, boxLeftBody, boxRightBody, boxPosition, boxY;
function preload(){
helicopterIMG = loadImage("helicopter.png");//folder=helicopterIMG, IMG = helicopter.png
packageIMG = loadImage("package.png");
}
function setup(){
createCanvas(800,700);
rectMode("CENTER");
packageSprite=createSprite(width/2,200,10,10);
packageSprite.scale=0.3;
packageSprite.addImage("packageSprite",packageIMG);
helicopterSprite=createSprite(width/2,200,10,10);
helicopterSprite.addImage("helicopterSprite",helicopterIMG);
groundSprite=createSprite(800,790,1600,5);
boxPosition=width/2 - 100;
boxY=610;
boxLeftSprite=createSprite(boxPosition,boxY,20,100);
boxLeftSprite.shapeColor=color(255,0,0);
boxLeftBody=Bodies.rectangle(boxPosition+20,boxY,20,100,{isStatic:true});
World.add(world,boxLeftBody)
boxRightSprite=createSprite(boxPosition+200,boxY,20,100);
boxRightSprite.shapeColor=color(255,0,0);
boxRightBody=Bodies.rectangle(boxPosition+180,boxY,20,100,{isStatic:true});
World.add(world,boxRightBody)
boxBaseSprite=createSprite(boxPosition+100,boxY+40,200,20);
boxBaseSprite.shapeColor=color(255,0,0);
//boxBaseBody=Bodies.rectangle(boxPosition+100,boxY+40{});
//World.add(world,boxBaseBody)
engine = Engine.create();
world = engine.world;
packageBody=Bodies.rectangle(width/2,200,10,10,{restitution:0.4,isStatic:true});
World.add(world,packageBody)
ground=Bodies.rectangle(800,760,1600,5,{isStatic:true})
World.add(world,ground)
Engine.run(engine);
}
function draw(){
background(0);
packageSprite.x=packageBody.position.x
packageSprite.y=packageBody.position.y	
drawSprites();
}
function keyPressed(){
if(keyCode==LEFT_ARROW){
helicopterSprite.x=helicopterSprite.x-20;
//translate=it adjusts the things according to the size of the canvas or the window 
translation={x:-20,y:0}
Matter.body.setStatic(packageBody,translation)
}
else if(keyCode==RIGHT_ARROW){
helicopterSprite.x=helicopterSprite.x+20
translation={x:20,y:0}
Matter.body.setStatic(packageBody.translation)
}
else if(keyCode==DOWN_ARROW){
Matter.Body.setStatic(packageBody,false)
}
}