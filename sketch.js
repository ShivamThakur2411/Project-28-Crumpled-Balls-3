const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var paper;
var ground;
var dustbin;
var rod1,rod2,rod3;
var launcher;

var engine, world;

function setup() {
	createCanvas(1600, 800);

	engine = Engine.create();
	world = engine.world;

	 paper = new Paper(100,200,70);
	
	 ground = new Ground(800,770,1600,20);

	 dustbin = new Dustbin(1237,595);

	 rod1 = new Ground(1375, 600, 20, 340);
	 rod2 = new Ground(1238, 755, 290, 20);
	 rod3 = new Ground(1100, 600, 20, 340);

	 launcher = new Launcher(paper.body,{x:110, y:300});

	Engine.run(engine);
}

function draw() {

Engine.update(engine);

 background(230);

    paper.display(); 
    
     rod2.display();
    rod1.display();
    rod3.display();
    ground.display();

    dustbin.display();

    launcher.display();
}

/*function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body , paper.position,{x:100 , y:-100});
	}
}*/

function mouseDragged(){
	Matter.Body.setPosition(paper.body,{x:mouseX, y:mouseY})
}

function mouseReleased(){
	launcher.fly();
}