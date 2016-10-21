import Tile from "./tiles/tile";



class GameView {
  constructor(game, ctx){
    this.ctx = ctx;
    this.game = game;
    this.game.addTile();
  }

  start(){
    this.bindKeyHandlers();
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));
    // setTimeout(this.animate.bind(this), 1000/30);
  }

  bindKeyHandlers() {
    let tile = this.game.tiles[this.game.tiles.length - 1];
    Object.keys(GameView.MOVES).forEach( k => {
      let direction = GameView.MOVES[k];
      key(k, () => {tile.move(direction)});
    });
  }

  // pass argument time to animate to timestamp animations
  animate(time) {
    const timeDelta = time - this.lastTime;
    
    this.game.step(timeDelta, this.ctx);
    this.game.draw(this.ctx);
    this.lastTime = time;

    requestAnimationFrame(this.animate.bind(this));
    // setTimeout(this.animate.bind(this), 1000/30);
  }



}

GameView.MOVES = {
  "a": "left",
  "s": "down",
  "d": "right"
}

export default GameView;
