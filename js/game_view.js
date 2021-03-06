import Tile from "./tiles/tile";



class GameView {
  constructor(game, ctx, ctxPreview){
    this.ctx = ctx;
    this.ctxPreview = ctxPreview;
    this.game = game;
  }

  start(){
    this.bindKeyHandlers();
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));
  }

  bindKeyHandlers() {
    key('return', () => { this.game.toggleState() });
    Object.keys(GameView.MOVES).forEach( k => {
      let direction = GameView.MOVES[k];
      key(k, () => {
        this.game.tiles[this.game.tiles.length - 1].move(direction);
        return false;
      });
    });
    key('q', () => { this.game.tiles[this.game.tiles.length -1].rotate('countercw')});
    key('up', () => { return false });
  }

  animate(time) {
    const timeDelta = time - this.lastTime;

    this.game.step(timeDelta);
    this.game.draw(this.ctx, this.ctxPreview);
    this.lastTime = time;

    requestAnimationFrame(this.animate.bind(this));
  }


}

GameView.MOVES = {
  "a, left": "left",
  "s, down, space": "down",
  "d, right": "right"
};

export default GameView;
