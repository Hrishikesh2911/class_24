const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var ground; 
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,40);
    
    //1st Group
    box1 = new Box(800,320,70,70);
    box2 = new Box(1000,320,70,70);
    pig1 = new Pig(900,320);
    log1 = new Log(900,285,300,PI/2)

    //2nd Group
    box3 = new Box(800,240,70,70);
    box4 = new Box(1000,240,70,70);
    pig2 = new Pig(900,210);
    log2 = new Log(900,180,300,PI/2)

    box5 = new Box(900,160,70,70);
    log3 = new Log(835,120,150,PI/7);
    log4 = new Log(960,120,150,-PI/7);

    // creating The Bird 
    bird = new Bird(200,200);
}

function draw(){
    background("lime");
    Engine.update(engine);

    ground.display();

    // Displaying Group1
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    
    // Displaying Group2
    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();

    // Displaying Bird 
    bird.display();
}