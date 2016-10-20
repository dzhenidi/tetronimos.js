import {
  SQUARE_SIDE,
  STARTING_VELOCITY,
  MOVES
} from './constants';

class Tile {
  constructor(board, shape, topLeft) {
    this.board = board;
    this.shape = shape;
    this.topLeft = topLeft;
    this.potentialTopLeft = {};
  }

  // potentialTopLeft(){
  //   this.potentialTopLeft =  {
  //     row: Math.abs(Math.floor(this.topLeft.row / 30)) + 1,
  //     col: this.topLeft.col
  //   };
  //
  //   return this.potentialTopLeft;
  // }

  move(direction, velocity) {
    switch (direction) {
      case MOVES.RIGHT:

      break;
      case MOVES.LEFT:

      break;
      case MOVES.DOWN:
        this.potentialTopLeft = Object.assign(
          this.topLeft, { row: Math.floor(this.topLeft.row) + 1 }
        );
        for (let row = 0; row < this.shape.length; row++) {
          for (let col = 0; col < this.shape[row].length; col++) {
            if (this.shape[row][col] !== 0) {
              if (this.willCollide(row, col)) {
                //add to landedBlocks
                this.board.add(this);
                return;
              }
            }
          }
        }
        // this.topLeft = this.potentialTopLeft;
        this.topLeft.row += velocity;
      break;
    }
  }



  // draw(ctx) {
  //   this.location.forEach( square => {
  //     ctx.beginPath();
  //     ctx.rect(square[0], square[1], SQUARE_SIDE, SQUARE_SIDE);
  //     ctx.fillStyle = this.color;
  //     ctx.fill();
  //     ctx.lineWidth = 1;
  //     ctx.strokeStyle = 'black';
  //     ctx.stroke();
  //   });
  // }

  draw(ctx) {
    for (let row = 0; row < this.shape.length; row++) {
      for (let col = 0; col < this.shape[row].length; col++) {
        if (this.shape[row][col] !== 0) {
          //match landedBlocks[row][col]'s value to a shape with its color'
          let x = this.topLeft.col + col;
          let y = this.topLeft.row + row;
          ctx.clearRect(x * 30, y * 30, SQUARE_SIDE, SQUARE_SIDE);
          ctx.fillStyle = 'red';
          ctx.fillRect(x * 30, y * 30, SQUARE_SIDE, SQUARE_SIDE);
        }
      }
    }
  }

  willCollide(row, col) {
    row = row + this.potentialTopLeft.row;
    col = col + this.potentialTopLeft.col;

    if (row >= 19 || this.board.grid[row][col] !== 0) {
      return true;
    } else {
      return false;
    }
  }
}



export default Tile;
