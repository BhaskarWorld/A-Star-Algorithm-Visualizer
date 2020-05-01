function astar() {
    if (run) { //is anything in the openset??
        if (openSet.length !== 0) {
            //getting the minimum fscore cell from the openset 
            var minimum = 0;
            var current = openSet[0];
            for (var i in openSet) {
                if (openSet[i].fscore < current.fscore) {
                    current = openSet[i];
                    minimum = i;
                }
            }

            //poping that cell to current from openset
        [current, openSet] = pop(openSet, minimum);

            //Updating the grid :)
            grid = updatePathandCurrent(grid, StartCell, current);

            //Is it the Goal Cell??  3:)
            if (current === GoalCell) {
                grid = updatePathandCurrent(grid, StartCell, current);
                console.log(grid[StartNodeRow][StartNodeCol], grid[EndNodeRow][EndNodeCol])
                run = false;
            }
            //updating the visited cells
            grid[current.row][current.col].isVisited = true;

            //checking the neighbours and adding them to the open set if allowed
            for (var Neighbour of getNeighbours(current)) {
                var tentativeGScore = current.gscore + 1;
                if (Neighbour.gscore > tentativeGScore) {
                    grid[Neighbour.row][Neighbour.col].cameFrom = current; //** */
                    grid[Neighbour.row][Neighbour.col].gscore = tentativeGScore;
                    grid[Neighbour.row][Neighbour.col].fscore =
                        tentativeGScore + Neighbour.hscore; ////to edit
                    if (!isNeighbourPresent(Neighbour, openSet)) {
                        if (!grid[Neighbour.row][Neighbour.col].isWall) {
                            openSet.push(Neighbour);
                        }
                    }
                }
            }

        } else {
            if (!(current === GoalCell) && run) {
                run = false
                console.log("noPath");
                for (var row = 0; row < gridRows; row++) {
                    for (var col = 0; col < gridCols; col++) {
                        grid[row][col].isInPath = false;
                    }
                }
            }
        }
    }
}
