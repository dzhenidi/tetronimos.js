import Tile from "./tile";
import { COLORS } from "./constants";


class Line extends Tile {
  constructor(board) {
    super(board);
    this.color = COLORS.line;
    this.shape = [
      [2, 2, 2, 2]
    ];
  }

  rotate(direction) {
    switch (direction) {
      case 'countercw':
        if (this.shape.length === 1) {
          let potentialTopLeft = {
            row: Math.floor(this.topLeft.row) - 1,
            col: this.topLeft.col + 2
          };
          let potentialShape = [
              [2],
              [2],
              [2],
              [2]
            ];
          if (!this.tileWillCollide(potentialTopLeft, potentialShape)) {
            this.shape = potentialShape;
            this.topLeft = potentialTopLeft;
          }
        } else {
          let potentialTopLeft = {
            row: Math.floor(this.topLeft.row) + 1,
            col: this.topLeft.col - 2
          };
          let potentialShape = [[2, 2, 2, 2]];
          if (!this.tileWillCollide(potentialTopLeft, potentialShape)) {
            this.shape = potentialShape;
            this.topLeft = potentialTopLeft;
          }
        }
      break;
    }
  }
}

export default Line;
