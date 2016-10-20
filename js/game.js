import Tile from "./tiles/tile";
import Board from "./board";
import {
  SQUARE_SIDE,
  STARTING_VELOCITY,
  MOVES,
  COLORS
} from './tiles/constants';

class Game {
  constructor() {
    this.fallingTile = [];
    this.tiles = [];
    this.landedBlocks = [];
    this.board = new Board();
  }

  addTile() {
    this.fallingTile = this.randomTile();
    this.tiles.push(this.fallingTile);
  }

  step(delta, ctx) {
    if (this.tiles.length === 0) {
      this.addTile();
    } else {
      this.fallingTile.move('down', STARTING_VELOCITY);
    }
  }

  // moveTile(delta) {
  //   this.fallingTile.topLeft.row += STARTING_VELOCITY;
  // }

  removeLine(){

  }

  draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

    // this.landedBlocks.forEach( block => block.draw(ctx)); OR
    // this.board.draw(ctx) ???
    this.fallingTile.draw(ctx);
  }

  drawLanded(ctx) {
    for (let row = 0; row < this.landedBlocks.length; row++) {
      for (let col = 0; col < this.landedBlocks[row].length; col++) {
        if (this.landedBlocks[row][col] != 0) {
          //match landedBlocks[row][col]'s value to a shape with its color'
          ctx.fillStyle = 'red';
          ctx.fillRect(col * 30, row * 30, SQUARE_SIDE, SQUARE_SIDE);
        }
      }
    }
  }

  randomTile(){
    let shape = [
      [1, 1],
      [1, 1]
    ];
    let topLeft = { row: 0, col: 4 };
    let tile = new Tile(this.board, shape, topLeft);
    return tile;
  }

}

Game.DIM_X = 300;
Game.DIM_Y = 600;
Game.BG_COLOR = 'green';


export default Game;
