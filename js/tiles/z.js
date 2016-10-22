import Tile from "./tile";
import { COLORS } from "./constants";


class TileZ extends Tile {
  constructor(board) {
    super(board);
    this.color = COLORS.Z;
    this.shape = [
      [0, 0, 0],
      [5, 5, 0],
      [0, 5, 5]
    ];
  }
}

export default TileZ;
