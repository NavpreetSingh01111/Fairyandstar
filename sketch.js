var starImg,  bgImg;
var fairy,fairyAnimation;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	
	bgImg = loadImage("images/starNight.png");
	
	fairyAnimation = loadAnimation("images/fairyImage1.png","images/fairyImage2.png")

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();
  fairy = createSprite(200,400,50,50);
  fairy.addAnimation("fairy",fairyAnimation);
	fairy.scale = 0.2

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  drawSprites();

}

function keyPressed() {
	if(keyCode===RIGHT_ARROW){
		fairy.x = fairy.x + 20;
	}

	if(keyCode===LEFT_ARROW){
		fairy.x = fairy.x - 20;
	}

	if(keyCode===32){
			star.y = star.y + 20
		}
}
