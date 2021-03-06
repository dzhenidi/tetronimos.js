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

  drawPreview(ctxPreview) {
    for (let row = 0; row < this.shape.length; row++) {
      for (let col = 0; col < this.shape[row].length; col++) {
        if (this.shape[row][col] !== 0) {
          ctxPreview.beginPath();
          ctxPreview.rect((col * 30) + 10, (row * 30) + 10, SQUARE_SIDE, SQUARE_SIDE);
          ctxPreview.fillStyle = this.color;
          ctxPreview.fill();
          ctxPreview.lineWidth = 4;
          ctxPreview.strokeStyle = 'black';
          ctxPreview.stroke();
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
          let colD = (1 - col) || 0;
          let rowD = (1 - row) || 0;
          let rowNew = 1 + colD;
          let colNew = 1 + (rowD * -1);
          newShape[rowNew][colNew] = this.shape[row][col];
        }
      }
    }
    return newShape;
  }


}



export default Tile;
