import Tile from "./tiles/tile";
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
  }

  add(tile) {
    this.fallingTile = tile;
  }

  moveTile(tile) {

  }

  removeLine(){

  }

  draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

    // this.drawLanded(ctx);
    this.drawFalling(ctx);
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

  drawFalling(ctx) {

    for (let row = 0; row < this.fallingTile.shape.length; row++) {
      for (let col = 0; col < this.fallingTile.shape[row].length; col++) {
        if (this.fallingTile.shape[row][col] != 0) {
          //match landedBlocks[row][col]'s value to a shape with its color'
          let x = this.fallingTile.topLeft.col + col;
          let y = this.fallingTile.topLeft.row + row;
          ctx.clearRect(
            x * 30,
            y * 30,
            SQUARE_SIDE, SQUARE_SIDE
          );
          ctx.fillStyle = 'red';
          ctx.fillRect(x * 30, y * 30, SQUARE_SIDE, SQUARE_SIDE);
        }
      }
    }
  }
}

Game.DIM_X = 300;
Game.DIM_Y = 600;
Game.BG_COLOR = 'green';
module.exports = Game;
