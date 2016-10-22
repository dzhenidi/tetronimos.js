import Tile from "./tile";
import { COLORS } from "./constants";


class Line extends Tile {
  constructor(board) {
    super(board);
    this.color = COLORS.line;
    this.shape = [
      [2, 2, 2, 2],
      [0, 0, 0, 0]
    ];
  }
}

export default Line;
