import Tile from "./tile";
import { COLORS } from "./constants";


class TileO extends Tile {
  constructor(board) {
    super(board);
    this.color = COLORS.O;
    this.shape = [
      [1, 1],
      [1, 1]
    ];
  }

  rotate(){
    //override super
  }
}

export default TileO;
