import Tile from "./tiles/tile";
import TileJ from "./tiles/j";
import Line from "./tiles/line";
import TileO from "./tiles/o";
import TileS from "./tiles/s";
import TileT from "./tiles/t";
import TileZ from "./tiles/z";
import TileL from "./tiles/l";
import { showModal } from "./modal";

import Board from "./board";
import {
  SQUARE_SIDE,
  STARTING_VELOCITY,
  MOVES
} from './tiles/constants';

class Game {
  constructor() {
    this.tiles = [];
    this.nextTile = null;
    this.board = new Board();
    this.velocity = STARTING_VELOCITY;
    this.points = 0;
    this.level = 0;
    this.state = "paused";
  }

  addTile() {
    let newTile = this.nextTile || this.randomTile();
    this.nextTile = this.randomTile();
    this.tiles.push(newTile);
    return newTile;
  }

  step() {
    if (this.state === "paused") {
      return;
    }
    if (this.tiles.length === 0 || this.tiles[this.tiles.length - 1].landed) {
      this.addTile();
    } else {
      this.clearRows();
      if (!this.gameOver()) {
        this.moveTile();
        // this.velocity = 0;
      } else {
        this.displayGameOver();
        this.resetGame();
        this.toggleState();
      }
    }
  }

  toggleState(){
    if (this.state === "paused") {
      this.state = "playing";
      let elOver = document.getElementById("game-over");
      elOver.style.display = '';
      let elPause = document.getElementById("game-pause");
      elPause.style.display = '';
    } else {
      this.state = "paused";
    }
  }

  resetGame() {
    this.tiles = [];
    this.velocity = STARTING_VELOCITY;
    this.points = 0;
    this.level = 0;
    this.updateScore();
    this.board.resetBoard();
  }

  displayGameOver() {
    let elOver = document.getElementById("game-over");
    elOver.style.display = 'block';
    let elScore = document.getElementById("final-score");
    elScore.textContent = "Your score is "+ this.points;
  }

  displayMenu() {
    let pauseEl = document.getElementById('game-pause');
    pauseEl.style.display = 'block';
    // return () => {
    //   pauseEl.style.display = 'block';
    // };
  }

  moveTile() {
    let currentTile = this.tiles[this.tiles.length - 1];
    currentTile.drop(this.velocity);
    if (currentTile.landed) {
      this.addTile();
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
      this.board.removeRows(rowsToClear);
      this.calculatePoints(rowsToClear.length);
      this.updateScore();
    }
  }


  draw(ctx, ctxPreview) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctxPreview.clearRect(0, 0, 140, 140);
    ctxPreview.fillStyle = Game.BG_COLOR;
    ctxPreview.fillRect(0, 0, 140, 140);

    if (this.state === "paused") {
      this.displayMenu(ctx);
    } else {
      this.board.draw(ctx);
      if (!this.tiles[this.tiles.length - 1].landed) {
        this.tiles[this.tiles.length - 1].draw(ctx);
      }
      if (this.nextTile) {
        this.nextTile.drawPreview(ctxPreview);
      }
    }

  }

  updateScore() {
    let scoreTag = document.getElementById('score');
    scoreTag.innerHTML = this.points;
  }

  randomTile(){

    const num = Math.floor(Math.random() * Game.NUM_PIECES + 1);
    switch (num) {
      case 1:
        return new TileO(this.board);
      case 2:
        return new Line(this.board);
      case 3:
        return new TileJ(this.board);
      case 4:
        return new TileS(this.board);
      case 5:
        return new TileT(this.board);
      case 6:
        return new TileZ(this.board);
      case 7:
        return new TileL(this.board);
    }
  }
}

Game.DIM_X = 300;
Game.DIM_Y = 600;
Game.BG_COLOR = '#cccccc';
Game.NUM_PIECES = 7;


export default Game;
