import {
  SQUARE_SIDE,
  STARTING_VELOCITY,
  MOVES
} from './constants';

class Tile {
  constructor(board, shape, topLeft) {
    this.board = board.getBoard();
    // this.location = location || [];
    // this.velocity = velocity || STARTING_VELOCITY;
    this.shape = shape;
    this.topLeft = topLeft;
  }

//instead of this.location:
// this.shape = [[1, 1],
              // [1, 1]]

              // = [[2, 2, 2, 2],
              //   [0, 0, 0, 0]]
// this.topLeft = { row: 0, col: 4 }
  move(direction) {
    switch (direction) {
      case MOVES.RIGHT:
      //after checks for collisions
        for (let i = 0; i < this.location.length; i++){
          this.location[i][0] += 30;
        }
      break;
      case MOVES.LEFT:
      //after checks for collisions
        for (let i = 0; i < this.location.length; i++){
          this.location[i][0] -= 30;
        }
      break;
      //after checks for collisions
      case MOVES.DOWN:
        for (let i = 0; i < this.location.length; i++){
          this.location[0][i] += 10;
        }
    }
  }

  draw(ctx) {
    this.location.forEach( square => {
      ctx.beginPath();
      ctx.rect(square[0], square[1], SQUARE_SIDE, SQUARE_SIDE);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'black';
      ctx.stroke();
    })
  }
}



export default Tile;
