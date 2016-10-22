import Tile from "./tile";
import { COLORS } from "./constants";


class TileS extends Tile {
  constructor(board) {
    super(board);
    this.color = COLORS.S;
    this.shape = [
      [0, 0, 0],
      [0, 4, 4],
      [4, 4, 0]
    ];
  }
}

export default TileS;
