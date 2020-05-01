//Definition of a cell
function cell(row, col) {
    var isStartCell = row === StartNodeRow && col === StartNodeCol;
    var isEndCell = row === EndNodeRow && col === EndNodeCol
    this.row = row;
    this.col = col;
    this.isStart = isStartCell;
    this.isFinish = isEndCell;
    this.isVisited = false;
    this.isWall = false;
    this.isInPath = false;
    this.isCurrent = false;
    this.isInOpenSet = isStartCell ? true : false;
    this.hscore = abs(EndNodeRow - row) + abs(EndNodeCol - col);
    this.fscore = isStartCell ? ab(EndNodeRow - row) + ab(EndNodeCol - col) : Infinity;
    this.gscore = isStartCell ? 0 : Infinity;
    this.cameFrom = undefined;

    this.show = () => {
        var xloc = paddinglr * 0.5 + this.col * cellWidth;
        var yloc = paddingtb * .80 + this.row * cellHeight;

        if (this.isStart) {
            fill(255);
            if (this.isInPath) fill('#FFFE6A');
            else stroke("#AFD8F8");
            rect(xloc, yloc, cellWidth, cellHeight);
            image(source, xloc, yloc, cellWidth, cellHeight);

        } else if (this.isFinish) {
            fill(255);
            if (this.isInPath) fill('#FFFE6A');
            else stroke("#AFD8F8");
            rect(xloc, yloc, cellWidth, cellHeight);
            image(dest, xloc, yloc, cellWidth, cellHeight);

        } else if (this.isCurrent) {
            fill('#C572FF');
            stroke("#C572FF");
            rect(xloc, yloc, cellWidth, cellHeight);
        } else if (this.isWall) {
            fill('#0C3547');
            stroke("#0C3547");
            rect(xloc, yloc, cellWidth, cellHeight);
        } else if (this.isInPath) {
            fill('#FFFE6A');
            stroke("#FFFE6A");
            rect(xloc, yloc, cellWidth, cellHeight);
        } else if (this.isVisited) {
            fill('#40CEE3');
            stroke("#AFD8F8");
            rect(xloc, yloc, cellWidth, cellHeight);
        } else if (this.isInOpenSet) {
            fill('#4b84d5');
            stroke('#AFD8F8');
            rect(xloc, yloc, cellWidth, cellHeight);
        } else {
            fill(255);
            stroke("#AFD8F8");
            rect(xloc, yloc, cellWidth, cellHeight);
        }

    }

    this.toggleWall = () => {
        if (!this.isVisited)
            if (!this.isInOpenSet)
                if (!this.isFinish)
                    if (!this.isStart) {
                        if (this.isWall === false)
                            this.isWall = true;
                        else
                            this.isWall = false;
                    }

    }

    this.makeCurrentLocStart = () => {
        if (!this.isFinish) {
            grid[StartNodeRow][StartNodeCol].isStart = false;
            this.isStart = true;
            this.isWall = false;
            StartNodeCol = this.col;
            StartNodeRow = this.row;
            runReset();
        }

    }

    this.makeCurrentLocEnd = () => {
        if (!this.isStart) {
            grid[EndNodeRow][EndNodeCol].isFinish = false;
            this.isFinish = true;
            this.isWall = false;
            EndNodeCol = this.col;
            EndNodeRow = this.row;
            runReset();
        }

    }

}
