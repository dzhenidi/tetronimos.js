import {
  SQUARE_SIDE,
  STARTING_VELOCITY,
  MOVES,
  COLORS
} from './constants';

class Tile {
  constructor(board, shape, topLeft) {
    this.board = board;
    this.shape = shape;
    this.topLeft = topLeft;
    this.potentialTopLeft = {};
    this.landed = false;
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
          {}, this.topLeft, { row: Math.floor(this.topLeft.row) + 1 }
        );
        for (let row = 0; row < this.shape.length; row++) {
          for (let col = 0; col < this.shape[row].length; col++) {
            if (this.shape[row][col] !== 0) {
              let boardRow = row + this.potentialTopLeft.row;
              let boardCol = col + this.potentialTopLeft.col;
              if (this.board.willCollide(boardRow, boardCol)) {
                //add to landedBlocks
                this.board.add(this);
                this.landed = true;
                return;
              }
            }
          }
        }
        // this.topLeft = this.potentialTopLeft;
        this.topLeft.row += velocity/30;
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
          ctx.beginPath();
          ctx.rect(x * 30, y * 30, SQUARE_SIDE, SQUARE_SIDE);
          ctx.fillStyle = COLORS[1];
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
