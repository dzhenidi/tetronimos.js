class Game {
  constructor() {
    this.tiles = [];
  }

  add(tile) {
    this.tiles.push(tile);
  }

  moveTile(tile) {

  }

  removeLine(){

  }

  draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.tiles.forEach( tile => tile.draw(ctx));
  }
}

Game.DIM_X = 300;
Game.DIM_Y = 600;
Game.BG_COLOR = 'green';
module.exports = Game;
