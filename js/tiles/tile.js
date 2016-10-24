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

  move(direction, velocity) {
    switch (direction) {
      case MOVES.RIGHT:
        let potentialTopLeft = {
            row: Math.floor(this.topLeft.row),
            col: this.topLeft.col + 1
          };
        if (this.tileWillCollide(potentialTopLeft, this.shape)) {
          // this.land();
        } else {
          this.topLeft.col += 1;
        }
        break;

      case MOVES.LEFT:
        potentialTopLeft = {
          row: Math.floor(this.topLeft.row),
          col: this.topLeft.col - 1
        };
        if (this.tileWillCollide(potentialTopLeft, this.shape)) {
          // this.land();
        } else {
          this.topLeft.col -= 1;
        }
        break;

      case MOVES.DOWN:
        potentialTopLeft = Object.assign(
          {}, this.topLeft, { row: Math.floor(this.topLeft.row) + 1 }
        );
        if (this.tileWillCollide(potentialTopLeft, this.shape)) {
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
  }

  tileWillCollide(potentialTopLeft, potentialShape) {
    for (let row = 0; row < potentialShape.length; row++) {
      for (let col = 0; col < potentialShape[row].length; col++) {
        if (potentialShape[row][col] !== 0) {
          let boardRow = row + potentialTopLeft.row;
          let boardCol = col + potentialTopLeft.col;
          if (this.board.occupied(boardRow, boardCol)) {
            return true;
          }
        }
      }
    }
    return false;
  }

  drop(velocity) {
    let potentialTopLeft = Object.assign(
      {}, this.topLeft, { row: Math.floor(this.topLeft.row) + 1 }
    );
    if (this.tileWillCollide(potentialTopLeft, this.shape)) {
      this.land();
    } else {
      this.topLeft.row += velocity/30;
    }
  }

  draw(ctx) {
    for (let row = 0; row < this.shape.length; row++) {
      for (let col = 0; col < this.shape[row].length; col++) {
        if (this.shape[row][col] !== 0) {
          let x = this.topLeft.col + col;
          let y = this.topLeft.row + row;
          ctx.beginPath();
          ctx.rect(x * 30, y * 30, SQUARE_SIDE, SQUARE_SIDE);
          ctx.fillStyle = this.color;
          ctx.fill();
          ctx.lineWidth = 4;
          ctx.strokeStyle = 'black';
          ctx.stroke();
        }
      }
    }
  }

  rotate(direction) {
    switch (direction) {
      case 'countercw':
        let potentialTopLeft = Object.assign(
          {}, this.topLeft, { row: Math.floor(this.topLeft.row) }
        );
        let potentialShape = this.potentialShape(direction);
        if (!this.tileWillCollide(potentialTopLeft, potentialShape)) {
          this.shape = this.potentialShape(direction);
        }
      break;
    }
  }

  potentialShape(direction) {
    const newShape = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];

    for (let row = 0; row < this.shape.length; row++) {
      for (let col = 0; col < this.shape[row].length; col++) {
        if (this.shape[row][col] !== 0) {
          let x = col;
          let y = row;
          let xD = (1 - x) || 0;
          let yD = (1 - y) || 0;
          let yNew = 1 + xD;
          let xNew = 1 + (yD * -1);
          // debugger
          newShape[yNew][xNew] = this.shape[y][x];
        }
      }
    }

    return newShape;
  }


}



export default Tile;
