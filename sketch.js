const Engine = Matter.Engine; 
const Bodies = Matter.Bodies;
const World = Matter.World;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world; 
var polygonObj; 
var platform; 
var polyImg

function preload(){ 
    polyImg = loadImage("polygon.png")
}

function setup(){
    createCanvas(1000,500); 

    //initialize the engine and the world; 
    engine = Engine.create(); 
    world = engine.world; 

    //ground object 

    ground = new Ground(); 

    block1 = new Block(300, 275, 30, 40); 
    block2 = new Block(330, 275, 30, 40); 
    block3 = new Block(360, 275, 30, 40); 
    block4 = new Block(390, 275, 30, 40); 
    block5 = new Block(420, 275, 30, 40); 
    block6 = new Block(450, 275, 30, 40); 
    block7 = new Block(480,275,30,40);
    block8 = new Block(330,235,30,40);
    block9 = new Block(360,235,30,40);
    block10 = new Block(390,235,30,40);
    block11 = new Block(420,235,30,40);
    block12 = new Block(450,235,30,40);
    block13 = new Block(360,195,30,40);
    block14 = new Block(390,195,30,40);
    block15 = new Block(420,195,30,40);
    block16 = new Block(390,155,30,40);

    polygonObj = Bodies.polygon(50, 100, 6, 80); 
    World.add(world, polygonObj); 

    slingShot = new Slingshot(this.polygonObj, {x: 50, y:100})
    
    
    

    
}


function draw(){ 
    
    background("cyan"); 

    textSize(20); 
    fill("Orange")
    text("Drag the Hexagon and Launch it towards the Blocks", 200, 50)
  
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block16.display();
    block15.display();
    ground.display();

    slingShot.display();

    imageMode (CENTER); 
    image (polyImg, polygonObj.position.x, polygonObj.position.y, 40, 40)

}


function mouseDragged(){ 

    Matter.Body.setPosition(this.polygonObj, {x:mouseX, y:mouseY})

}

function mouseReleased(){ 

    slingShot.fly(); 


}