var canvas;
var bloco1,bloco2,bloco3,bloco4;
var ball, edges;
var som;

function preload(){
    // load sound here
    som = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    bloco1 = createSprite(0,580,360,30);
    bloco1.shapeColor = "cyan";

    bloco2 = createSprite(295,580,200,30);
    bloco2.shapeColor = "orange";

    //create two more blocks i.e. block3 and block4 here
    bloco3 = createSprite(510,580, 200, 30);
    bloco3.shapeColor = "magenta";

    bloco4 = createSprite(805,580,360,30);
    bloco4.shapeColor = "purple";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    ball.velocityY = -7;
    ball.velocityX = 3;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(bloco1.isTouching(ball) && ball.bounceOff(bloco1)){
        ball.shapeColor = "cyan";
        som.play();
    }



    if(bloco2.isTouching(ball)){
        ball.shapeColor = "orange";
        //write code to set velocityX and velocityY of ball as 0
        ball.velocityX = 0;
        ball.velocityY = 0;
        //write code to stop music
        som.stop();
    }

    //write code to bounce off ball from the block3
    if(bloco3.isTouching(ball) && ball.bounceOff(bloco3)){
        ball.shapeColor = "magenta";
        som.stop();
    }

    //write code to bounce off ball from the block4
    if(bloco4.isTouching(ball) && ball.bounceOff(bloco4)){
        ball.shapeColor = "purple";
        som.stop();

    }

    drawSprites();
}
