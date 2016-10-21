import {
  SQUARE_SIDE,
  STARTING_VELOCITY,
  MOVES,
  COLORS
} from './constants';

class Tile {
  constructor(board) {
    this.board = board;
    this.topLeft = { row: 0, col: 4 };
    this.landed = false;
  }


  potentialTopLeft() {
    return {
      row: Math.floor(this.topLeft.row) + 1,
      col: Math.floor(this.topLeft.col) + 1};
  }

  move(direction, velocity) {
    switch (direction) {
      case MOVES.RIGHT:
        if (this.tileWillCollide()) {
          this.land();
        } else {
          this.topLeft.col += 1;
        }
      break;

      case MOVES.LEFT:
        if (this.tileWillCollide()) {
          this.land();
        } else {
          this.topLeft.col -= 1;
        }
      break;

      case MOVES.DOWN:
        if (this.tileWillCollide()) {
          this.land();
        } else {
          this.topLeft.row += 1;
        }
      break;
    }
  }

  land(){
    this.board.add(this);
    this.landed = true;
    debugger
  }

  tileWillCollide() {
    for (let row = 0; row < this.shape.length; row++) {
      for (let col = 0; col < this.shape[row].length; col++) {
        if (this.shape[row][col] !== 0) {
          let boardRow = row + this.potentialTopLeft().row;
          let boardCol = col + this.potentialTopLeft().col;
          if (this.board.blockWillCollide(boardRow, boardCol)) {
            return true;
          }
        }
      }
    }
    return false;
  }

  drop(velocity) {
    if (this.tileWillCollide()) {
      this.land();
    } else {
      this.topLeft.row += velocity/30;
    }
  }

  draw(ctx) {
    for (let row = 0; row < this.shape.length; row++) {
      for (let col = 0; col < this.shape[row].length; col++) {
        if (this.shape[row][col] !== 0) {
          //match landedBlocks[row][col]'s value to a shape with its color'
          let x = this.topLeft.col + col;
          let y = this.topLeft.row + row;
          ctx.beginPath();
          ctx.rect(x * 30, y * 30, SQUARE_SIDE, SQUARE_SIDE);
          ctx.fillStyle = this.color;
          ctx.fill();
          ctx.lineWidth = 1;
          ctx.strokeStyle = 'black';
          ctx.stroke();
        }
      }
    }
  }


}



export default Tile;
