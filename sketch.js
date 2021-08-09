
var Ali
var Aliimg;


 
function preload(){

    Aliimg = loadImage("images/Ali1.gif");
   
}



function setup() {
  createCanvas(800, 800);
   
     Ali = createSprite(200,200, 20, 20);
     Ali.addImage(Aliimg);

     
  
}

function draw() {
  background(35,98,94);  
  drawSprites();
 






}


