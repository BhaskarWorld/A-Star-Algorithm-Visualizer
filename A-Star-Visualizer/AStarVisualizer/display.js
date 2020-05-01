function header() {
    const upperEmptyHeight = (paddingtb * .8);
    const iconHeight = upperEmptyHeight * .15;
    const headerHeight = upperEmptyHeight * .40;


    const iconposy = headerHeight + .2 * upperEmptyHeight;
    const textposy = iconposy + (iconHeight * 0.5) + 0.05 * upperEmptyHeight;

    var iconposx = canvasWidth * .035;
    const textpadding = canvasWidth * .015;

    function icon(f, s, name) {
        fill(f);
        stroke(s);
        rect(iconposx, iconposy, iconHeight, iconHeight);
        fill(0);
        noStroke();
        text(name, iconposx + textpadding, textposy);
    }


    //header background
    fill('#002540');
    rect(0, 0, canvasWidth, headerHeight);

    textSize(14);

    //start
    fill(255);
    noStroke();
    rect(iconposx, iconposy, iconHeight, iconHeight);
    image(source, iconposx, iconposy, iconHeight, iconHeight);
    fill(0);
    noStroke();
    text('Start', iconposx + textpadding, textposy);



    //dest
    iconposx += .05 * canvasWidth;
    fill(255);
    noStroke();
    rect(iconposx, iconposy, iconHeight, iconHeight);
    image(dest, iconposx, iconposy, iconHeight, iconHeight);
    fill(0);
    noStroke();
    text('Goal', iconposx + textpadding, textposy);

    //Current
    iconposx += .05 * canvasWidth;
    icon('#C572FF', '#C572FF', 'Current');

    //Wall
    iconposx += .06 * canvasWidth;
    icon('#0C3547', '#0C3547', 'Wall');

    //Path
    iconposx += .05 * canvasWidth;
    icon('#FFFE6A', '#FFFE6A', 'Visited');

    //Visited
    iconposx += .05 * canvasWidth;
    icon('#40CEE3', '#AFD8F8', 'Path');

    //Openset
    iconposx += .06 * canvasWidth;
    icon('#4b84d5', '#AFD8F8', 'Openset');

    //Non_visited
    iconposx += .07 * canvasWidth;
    icon('#fff', '#AFD8F8', 'Non-visited');

    //heading text
    textSize(20);
    fill('#FFFE6A');
    noStroke();
    text('A* Algorithm Visualizer !', canvasWidth * .02, upperEmptyHeight * .28);
}

function display() {
    background(255);
    header()
    for (var row = 0; row < gridRows; row++) {
        for (var col = 0; col < gridCols; col++) {
            grid[row][col].show();
        }
    }
}
