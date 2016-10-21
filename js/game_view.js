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
    // setTimeout(this.animate.bind(this), 1000/30);
  }

  bindKeyHandlers() {

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

export default GameView;
