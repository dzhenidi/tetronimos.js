import Tile from "./tile";
import { COLORS } from "./constants";


class TileJ extends Tile {
  constructor(board, location, color, velocity) {
    super(board, location, velocity);
    this.color = COLORS.J;
    this.location = [
      [90, 0],
      [120, 0],
      [150, 0],
      [150, 30]
    ];
  }
}

export default TileJ;
