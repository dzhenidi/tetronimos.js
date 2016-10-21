import Tile from "./tile";
import { COLORS } from "./constants";


class TileJ extends Tile {
  constructor(board) {
    super(board);
    this.color = COLORS.J;
    this.shape = [
      [6, 6, 6],
      [0, 0, 6]
    ];
  }
}

export default TileJ;
