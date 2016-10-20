class Board {
  constructor(){
    this.grid = Board.EMPTY_GRID;
  }

  getBoard() {
    return Board.EMPTY_GRID;
  }

  add(tile) {

    for (let row = 0; row < tile.shape.length; row++) {
      for (let col = 0; col < tile.shape[row].length; col++) {
        let gridCol = tile.topLeft.col + col;
        let gridRow = tile.topLeft.row + row;
        debugger
        this.grid[gridRow][gridCol] = tile.shape[row][col];
      }
    }
  }
}

Board.EMPTY_GRID =  [
// 0  1  2  3  4  5  6  7  8  9
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 0
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 1
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 2
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 3
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 4
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 5
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 6
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 7
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 8
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 9
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 10
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 11
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 12
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 13
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 14
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 15
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 16
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 17
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 18
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 19
];

export default Board;
