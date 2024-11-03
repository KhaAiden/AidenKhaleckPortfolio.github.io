var img;
var initials ='as'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('https://dma-git.github.io/images/74.png');
}

function setup() {
createCanvas(600, 600);  // canvas size
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

if (toolChoice == '1') { 
    fill(255, 0, 0); 
    textSize(32);
    noStroke();
    text('ERROR', mouseX, mouseY); 
}
 else if (toolChoice == '2') {
    fill(255, 255, 0);
    stroke(0);
    strokeWeight(1);

    
    let size = 30;
    triangle(
        mouseX, mouseY - size,
        mouseX - size, mouseY + size,
        mouseX + size, mouseY + size
    );
 }
else if (toolChoice == '3') { 
    stroke(0); 
    strokeWeight(2);

    line(mouseX, mouseY - 15, mouseX, mouseY + 15);

    fill(0);
    noStroke(); 
    ellipse(mouseX, mouseY + 25, 10, 10);
}
else if (toolChoice == '4') {
    fill(0, 0, 255);
    noStroke();

    let width = 80;
    let height = 70;
    rect(mouseX - width / 2, mouseY - height / 2, width, height);
}

else if (toolChoice == '5') {
    stroke(50, 255, 50);
    strokeWeight(2);

    let length = 80;
    let y = mouseY;

    line(mouseX - length / 2, y, mouseX + length / 2, y);
} 

else if (toolChoice == '6') {
    fill(255, 165, 0);
    noStroke()

    let diameter = 200;
    ellipse(mouseX, mouseY, diameter, diameter);
}

else if (toolChoice == '7') {
    fill(0);
    noStroke();

    let x = mouseX;
    let y = mouseY;
    let diameter = 100;
    let startAngle = PI;
    let endAngle = TWO_PI;

    arc(x, y, diameter, diameter, startAngle, endAngle);
}

else if (toolChoice == '8') {
    fill(0);
    noStroke();

    let x = mouseX;
    let y = mouseY;
    let width = 20;
    let height = 40;

    
    ellipse(x, y, width, height);
}

else if (toolChoice == '9') {
    fill(300, 100, 0);
    noStroke();

    let x = mouseX;
    let y = mouseY;

    let x1 = x;
    let y1 = y - 20;
    let x2 = x + 40;
    let y2 = y;
    let x3 = x;
    let y3 = y + 20;

    triangle(x1, y1, x2, y2, x3, y3);
}

else if (toolChoice == '0') {
    stroke(0, 0);
    fill(random(255), random(255), random(255), random(255));
    rect(mouseX, mouseY, 200, 150);
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(img, mouseX, mouseY, 50, 50);
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="t";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
