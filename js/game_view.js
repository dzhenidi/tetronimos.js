class GameView {
  constructor(game, ctx){
    this.ctx = ctx;
    this.game = game;
  }

  start(){
    this.game.draw(this.ctx);
  }

}

export default GameView;
