import Tile from "./tiles/tile";
import TileJ from "./tiles/j";
import Line from "./tiles/line";
import TileO from "./tiles/o";
import TileS from "./tiles/s";
import TileT from "./tiles/t";
import TileZ from "./tiles/z";
import TileL from "./tiles/l";


import Board from "./board";
import {
  SQUARE_SIDE,
  STARTING_VELOCITY,
  MOVES
} from './tiles/constants';

class Game {
  constructor() {
    this.tiles = [];
    this.landedTiles = [];
    this.board = new Board();
    this.velocity = STARTING_VELOCITY;
    this.points = 0;
    this.level = 0;
  }

  addTile() {
    let newTile = this.randomTile();
    this.tiles.push(newTile);
    return newTile;
  }

  // landedTiles() {
  //   this.landedTiles = this.board.grid;
  // }

  step() {
    if (this.tiles.length === 0 || this.tiles[this.tiles.length - 1].landed) {
      this.addTile();
    } else {
      this.clearRows();
      if (this.gameOver()) {
        this.velocity = 0;
      } else {
        this.moveTile();
      }
    }
  }

  moveTile() {
    let currentTile = this.tiles[this.tiles.length - 1];
    currentTile.drop(this.velocity);
    if (currentTile.landed) {
      this.landedTiles.push(currentTile);
      this.addTile()
    }
  }

  gameOver() {
    return this.board.full();
  }

  calculatePoints(rowsCleared){
    const n = this.level;

    switch (rowsCleared) {
      case 1:
        this.points += 40 * (n + 1);
        break;
      case 2:
        this.points += 100 * (n + 1);
        break;
      case 3:
        this.points += 300 * (n + 1);
        break;
      case 4:
        this.points += 1200 * (n + 1);
        break;
    }
  }


  clearRows(){
    const rowsToClear = this.board.rowsToClear();
    if (rowsToClear.length > 0) {
      this.calculatePoints(rowsToClear);
      this.board.removeRows(rowsToClear);
    }
  }

  draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

    // this.landedTiles.forEach( tile => tile.draw(ctx));
    this.board.draw(ctx);
    if (!this.tiles[this.tiles.length - 1].landed) {
      this.tiles[this.tiles.length - 1].draw(ctx);
    }

  }

  // drawLanded(ctx) {
  //   for (let row = 0; row < this.landedBlocks.length; row++) {
  //     for (let col = 0; col < this.landedBlocks[row].length; col++) {
  //       if (this.landedBlocks[row][col] !== 0) {
  //         //match landedBlocks[row][col]'s value to a shape with its color'
  //         ctx.fillStyle = 'red';
  //         ctx.fillRect(col * 30, row * 30, SQUARE_SIDE, SQUARE_SIDE);
  //       }
  //     }
  //   }
  // }

  randomTile(){

    const num = Math.floor(Math.random() * Game.NUM_PIECES + 1);
    switch (num) {
      case 1:
        return new TileO(this.board);
        break;
      case 2:
        return new Line(this.board);
        break;
      case 3:
        return new TileJ(this.board);
        break;
      case 4:
        return new TileS(this.board);
        break;
      case 5:
        return new TileT(this.board);
        break;
      case 6:
        return new TileZ(this.board);
        break;
      case 7:
        return new TileL(this.board);
        break;
    }
  }
}

Game.DIM_X = 300;
Game.DIM_Y = 600;
Game.BG_COLOR = 'green';
Game.NUM_PIECES = 7;


export default Game;
