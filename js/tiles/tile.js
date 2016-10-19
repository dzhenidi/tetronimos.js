import {
  SQUARE_SIDE,
  STARTING_VELOCITY,
  MOVES
} from './constants';

class Tile {
  constructor(board, location, velocity) {
    this.board = board.getBoard();
    this.location = location || [];
    this.velocity = velocity || STARTING_VELOCITY;
  }

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
