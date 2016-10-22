import Tile from "./tile";
import { COLORS } from "./constants";


class TileL extends Tile {
  constructor(board) {
    super(board);
    this.color = COLORS.L;
    this.shape = [
      [0, 0, 0],
      [7, 7, 7],
      [7, 0, 0]
    ];
  }
}

export default TileL;
