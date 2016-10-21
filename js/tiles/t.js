import Tile from "./tile";
import { COLORS } from "./constants";


class TileT extends Tile {
  constructor(board) {
    super(board);
    this.color = COLORS.T;
    this.shape = [
      [3, 3, 3],
      [0, 3, 0]
    ];
  }
}

export default TileT;
