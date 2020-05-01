// pop function as like python's pop(index)
const pop = (array, index) => {
    const firstHalf = array.slice(0, index);
    const secondHalf = array.slice(index, array.length);
    const pop = secondHalf.shift();
    const arr = firstHalf.concat(secondHalf);
    return [pop, arr];
};

// function to get the valid neighbours of a node
var getNeighbours = (current) => {
    var directions = [[0, -1],
                        [-1, 0],
                        [1, 0],
                        [0, 1]];
    var Neighbours = [];
    var r = current.row;
    var c = current.col;
    for (var i of directions)
        if (r + i[0] >= 0 && r + i[0] < gridRows && c + i[1] >= 0 && c + i[1] < gridCols)
            Neighbours.push(grid[r + i[0]][c + i[1]]);

    return Neighbours;
};

// function to check whether the neighbouring node is present in the openset
var isNeighbourPresent = (Neighbour, openSet) => {
    for (var x of openSet) {
        if (Neighbour === x) {
            return true;
        }
        return false;
    }
};

// function to reset the node isinpath to false and alter the isinpath value
// of the specific nodes who are in the path
function updatePathandCurrent(grid, StartCell, current) {
    const copyGrid = grid.slice();
    for (var row of grid) {
        for (var cell of row) {
            copyGrid[cell.row][cell.col].isInPath = false;
            copyGrid[cell.row][cell.col].isCurrent = false;
            copyGrid[cell.row][cell.col].isInOpenSet = false;
        }
    }
    copyGrid[current.row][current.col].isCurrent = true;
    var copyCurrent = {
        ...current
    };
    while (copyCurrent) {
        copyGrid[copyCurrent.row][copyCurrent.col].isInPath = true;
        copyCurrent = copyCurrent.cameFrom;
    }
    for (cell of openSet) {
        copyGrid[cell.row][cell.col].isInOpenSet = true;
    }
    return copyGrid;
}

var ab = (a) => {
    return a < 0 ? -1 * a : a;
};
