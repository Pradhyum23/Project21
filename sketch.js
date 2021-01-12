var Canvas;
var Block1,Block2,Block3,Block4;
var Ball, Edges;
var Music;

function preload(){
    Music = loadSound("Music.mp3");
}


function setup(){
    Canvas = createCanvas(800,600);

    Block1 = createSprite(0,580,360,30);
    Block1.shapeColor = rgb(0,0,255);

    Block2 = createSprite(295,580,200,30);
    Block2.shapeColor = rgb(255,128,0);

    Block3 = createSprite(515,580,200,30);
    Block3.shapeColor = rgb(153,0,76);

    Block4 = createSprite(740,580,220,30);
    Block4.shapeColor = rgb(0,100,0);

    Ball = createSprite(random(20,750),100, 40,40);
    Ball.shapeColor = rgb(255,255,255);
    Ball.velocityX = 4;
    Ball.velocityY = 9;

}

function draw() {
    background(rgb(169,169,169));
    Edges=createEdgeSprites();
    Ball.bounceOff(Edges);

    if(Block1.isTouching(Ball) && Ball.bounceOff(Block1)){
        Ball.shapeColor = rgb(0,0,255);
        Music.play();
    }

    if(Block2.isTouching(Ball)){
        Ball.shapeColor = rgb(255,128,0);
        Ball.velocityX = 0;
        Ball.velocityY = 0;
        Music.stop();
    }

    if(Block3.isTouching(Ball) && Ball.bounceOff(Block3)){
        Ball.shapeColor = rgb(153,0,76);
    }

    if(Block4.isTouching(Ball) && Ball.bounceOff(Block4)){
        Ball.shapeColor = rgb(0,100,0);
    }

    drawSprites();
}