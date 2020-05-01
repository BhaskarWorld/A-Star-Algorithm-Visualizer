//Clear everythis as fresh
function reset() {


    //creating the grid
    for (var row = 0; row < gridRows; row++) {
        grid[row] = new Array(gridCols);
    }

    //adding cell info to the grid
    for (var row = 0; row < gridRows; row++) {
        for (var col = 0; col < gridCols; col++) {
            grid[row][col] = new cell(row, col);
        }
    }

    //to begin with
    StartCell = grid[StartNodeRow][StartNodeCol];
    GoalCell = grid[EndNodeRow][EndNodeCol];
    openSet = [StartCell];
    run = false;
    prevrow = Infinity;
    prevcol = Infinity;
}

//Clear Everything except the walls
function runReset() {
    var copyGrid = grid.slice();
    reset();
    for (var row = 0; row < gridRows; row++) {
        for (var col = 0; col < gridCols; col++) {
            grid[row][col].isWall = copyGrid[row][col].isWall;
        }
    }
}
