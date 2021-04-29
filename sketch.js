const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground;


function setup(){
    createCanvas(1000,500);

    engine = Engine.create();
    world = engine.world;
    ground1 = new Ground(460,350,150,10);
    ground2 = new Ground(800,250,150,10);
    mainGround = new Ground(500,495,1000,10);

    stone = new Stone();
    //create boxes
    //ground 1 layer 1
    box111 = new Box(400,325);
    box112 = new Box(420,325);
    box113 = new Box(440,325);
    box114 = new Box(460,325);
    box115 = new Box(480,325);
    box116 = new Box(500,325);
    box117 = new Box(520,325);

    //ground1 layer2
    box121 = new Box(410,280);
    box122 = new Box(430,280);
    box123 = new Box(450,280);
    box124 = new Box(470,280);
    box125 = new Box(490,280);
    box126 = new Box(510,280);

    //ground1 layer 3
    box131 = new Box(420,240);
    box132 = new Box(440,240);
    box133 = new Box(460,240);
    box134 = new Box(480,240);
    box135 = new Box(500,240);

    //ground2 layer1
    box211 = new Box(740,225);
    box212 = new Box(760,225);
    box213 = new Box(780,225);
    box214 = new Box(800,225);
    box215 = new Box(820,225);
    box216 = new Box(840,225);
    box217 = new Box(860,225);

    //ground2 layer2
    box221 = new Box(750,180);
    box222 = new Box(770,180);
    box223 = new Box(790,180);
    box224 = new Box(810,180);
    box225 = new Box(830,180);
    box226 = new Box(850,180);

    //ground2 layer3
    box231 = new Box(760,140);
    box232 = new Box(780,140);
    box233 = new Box(800,140);
    box234 = new Box(820,140);
    box235 = new Box(840,140);



    slingShot = new SlingShot(stone.body, {x:90,y:200});

}

function draw(){
    background("grey");
    textSize(20);
    fill("lightyellow");
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks.. Press space for another chance",50,30);
    Engine.update(engine);
    ground1.display();
    ground2.display();
    mainGround.display();
    
    stone.display();
    strokeWeight(4);
    fill("pink");
    box111.display();
    box112.display();
    box113.display();
    box114.display();
    box115.display();
    box116.display();
    box117.display();

    fill("lightgreen");
    box121.display();
    box122.display();
    box123.display();
    box124.display();
    box125.display();
    box126.display();

    fill("orange");
    box131.display();
    box132.display();
    box133.display();
    box134.display();
    box135.display();

    fill("pink");
    box211.display();
    box212.display();
    box213.display();
    box214.display();
    box215.display();
    box216.display();
    box217.display();

    fill("lightgreen");
    box221.display();
    box222.display();
    box223.display();
    box224.display();
    box225.display();
    box226.display();

    fill("orange");
    box231.display();
    box232.display();
    box233.display();
    box234.display();
    box235.display();


    slingShot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x: mouseX, y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if (keyCode === 32){
        slingShot.attach(stone.body);

    }
    
}