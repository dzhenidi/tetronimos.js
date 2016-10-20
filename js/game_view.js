import Tile from "./tiles/tile";
import Board from "./board";


class GameView {
  constructor(game, ctx){
    this.ctx = ctx;
    this.game = game;
  }

  start(){
    let tile = this.randomTile();
    this.game.add(tile);
    this.game.draw(this.ctx);
  }

  randomTile(){
    let board = new Board();
    let shape = [
      [1, 1],
      [1, 1]
    ];
    let topLeft = { row: 0, col: 4 };
    let tile = new Tile(board, shape, topLeft);
    return tile;
  }

}

export default GameView;
