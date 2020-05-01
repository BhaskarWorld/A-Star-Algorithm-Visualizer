function mousePressed() {

    var mx = mouseX - .5 * paddinglr;
    var my = mouseY - paddingtb * .80;
    var startPosX = StartNodeCol * cellWidth;
    var startPosY = StartNodeRow * cellHeight;
    var endPosX = EndNodeCol * cellWidth;
    var endPosY = EndNodeRow * cellHeight;

    var isStartCell = (mx >= startPosX && mx <= startPosX + cellWidth && my >= startPosY && my <= startPosY + cellHeight)
    var isEndCell = (mx >= endPosX && mx <= endPosX + cellWidth && my >= endPosY && my <= endPosY + cellHeight)

    if (isStartCell || isEndCell) {

        if (isStartCell) {
            isTargetStart = true;
        } else if (isEndCell) {
            isTargetEnd = true;
        }

    } else {
        isMouseDown = true;

        universalMouseHandler(1)
    }
}

function mouseDragged() {
    if (isMouseDown)
        universalMouseHandler(1);
    else if (isTargetStart)
        universalMouseHandler(2);
    else if (isTargetEnd)
        universalMouseHandler(3);

}

function mouseReleased() {
    isMouseDown = false;
    isTargetStart = false;
    isTargetEnd = false;
}


function universalMouseHandler(p) {
    const x = (mouseX - .5 * paddinglr);
    const y = (mouseY - paddingtb * .80);

    if (x >= 0 && y >= 0) {
        const col = parseInt(x / cellWidth);
        const row = parseInt(y / cellHeight);

        if (row >= 0 && col >= 0 && row < gridRows && col < gridCols)
            switch (p) {
                case 1:
                    if (!(prevrow === row && prevcol === col))
                        grid[row][col].toggleWall();
                    break;
                case 2:
                    grid[row][col].makeCurrentLocStart();
                    break;
                case 3:
                    grid[row][col].makeCurrentLocEnd();
                    break;
                default:
                    break;
            }
        prevrow = row;
        prevcol = col;
    }
}
