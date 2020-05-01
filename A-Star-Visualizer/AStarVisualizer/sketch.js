//variables
var gridCols = 80;
var gridRows = 35;
var canvasWidth = screen.width;
var canvasHeight = screen.height * .84;

var paddingtb = .2 * canvasHeight;
var paddinglr = .05 * canvasWidth;
var gridWidth = canvasWidth - paddinglr;
var gridHeight = canvasHeight - .8 * paddingtb;
var cellWidth = gridWidth / gridCols;
var cellHeight = gridHeight / gridRows;
var grid = new Array(gridRows);

var StartNodeRow = parseInt(gridRows / 2);
var StartNodeCol = parseInt(gridCols / 4);
var EndNodeRow = parseInt(gridRows / 2);;
var EndNodeCol = parseInt(3 * gridCols / 4);;


var openSet;

//visualizer 
var run;

//Mouse event tracker
var isTargetStart = false;
var isTargetEnd = false;
var isMouseDown = false;


var prevrow
var prevcol


//start and end image loader
var source;
var dest;

function preload() {
    source = loadImage('source.png');
    dest = loadImage('drop.png');
}

var fs = false;








function setup() {
    createCanvas(canvasWidth, canvasHeight);
    reset();
    runbtn = createButton('Run');
    runbtn.position(canvasWidth - 100, 12);
    runbtn.mousePressed(() => {
        runReset();
        run = true;
    });
    resetbtn = createButton('Reset');
    resetbtn.position(canvasWidth - 200, 12);
    resetbtn.mousePressed(reset);

    clearExceptBorderBtn = createButton('Clear Except Walls');
    clearExceptBorderBtn.position(canvasWidth - 400, 12);
    clearExceptBorderBtn.mousePressed(runReset);
    fullscreenbtn = createButton('Full Screen');

    fullscreenbtn.position(canvasWidth - 700, 12);
    fullscreenbtn.mousePressed(runReset);
    fullscreenbtn.mousePressed(() => {

        fullscreen(fs = !fs);

    });



}

function draw() {

    display();
    astar();
    const x = mouseX - .5 * paddinglr;
    const y = mouseY - paddingtb * .8;
    console.log(x, y, parseInt(x / cellWidth), parseInt(y / cellHeight))
}
