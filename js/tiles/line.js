import Tile from "./tile";
import { COLORS } from "./constants";


class Line extends Tile {
  constructor(board, location, color, velocity) {
    super(board, location, velocity);
    this.color = COLORS.line;
    this.location = [
      [90, 0],
      [120, 0],
      [150, 0],
      [180, 0]
    ];
  }
}

export default Line;
