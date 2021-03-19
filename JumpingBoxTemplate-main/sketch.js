const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world, bodies;

var canvas;
var music;
var surface1, surface2, surface3, surface4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;
    //create 4 different surfaces
    var option = {
        isStatic: true
    }
    surface1 = Bodies.rectangle(100, 500, 100, 20, option);
    World.add(world, bodies);
    surface2 = Bodies.rectangle(300, 500, 100, 20, option);
    World.add(world, bodies);
    surface3 = Bodies.rectangle(500, 500, 100, 20, option);
    World.add(world, bodies);
    surface1 = Bodies.rectangle(700, 500, 100, 20, option);
    World.add(world, bodies);;
    
    var boxOption = {
        restitution: 1
    }


    //create box sprite and give velocity
    box = Bodies.rectangle(rand(20, 750), 100, 50, 50, boxOption);
    World.add(world, bodies);
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();
    background(0);  
    Engine.update(engine);
    rectMode(CENTER);
  
  drawSprites();
}


    //add condition to check if box touching surface and make it box
