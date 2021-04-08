var bgIm,catImg,mouseImg,cat,mouse;
function preload() {
    bgIm = loadAnimation("garden.png");
    catImg = loadAnimation("cat1.png","cat2.png","cat3.png","cat4.png");
    mouseImg = loadAnimation("mouse1.png","mouse2.png","mouse3.png","mouse4.png");
}

function setup(){
    createCanvas(1200,800);
    cat = createSprite(200,200,50,50);
    cat.addAnimation(catImg,"Cat");

    mouse = createSprite(250,250,50,50);
    mouse.addAnimation(mouseImg,"rat");
}

function draw() {

    background("black");
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
