import Tile from "./tiles/tile";



class GameView {
  constructor(game, ctx){
    this.ctx = ctx;
    this.game = game;

  }

  start(){
    this.bindKeyHandlers();
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));
  }

  bindKeyHandlers() {

  }

  animate(time) {
    const timeDelta = time - this.lastTime;

    this.game.step(timeDelta, this.ctx);
    this.game.draw(this.ctx);
    this.lastTime = time;

    requestAnimationFrame(this.animate.bind(this));
  }



}

export default GameView;
