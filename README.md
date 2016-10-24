# Tetronimos

[Play Tetronimos] (https://dzhenidi.github.io/tetronimos.js/)

## Description
  Tetronimos is a tile-matching browser game written in JavaScript and animated using the Canvas API.
  In the tradition of geometric puzzles, the tetronimo tile is a four-celled, one-sided polyomino (known as a *tetromino* in the CS world of tiling).

  A random sequence of tetrominos fall down a rectangular well, piling at the bottom. The user can move tiles sideways, and rotate them by 90 degree turns with the goal of clearing a line: an uninterrupted row of tiles  disappears and the remaining tiles drop one row.
  Tiles fall faster as the game progresses, and the game ends when a stack of tiles reaches the top of the well. Double, triple, and quadruple clears bring more points. Points can also vary by the height a piece fell, as well as "hard drops" or "soft drops".

  ![tetronimos design] (./css/images/full_page.png?raw=true "tetronimos")

## Functionality & MVP

Users can:
- Start and pause the game;
- Manipulate tiles: move left, down, right; rotate clockwise and counterclockwise;
- Score based on height, drop, and acceleration;



## Architecture and Technologies

Tetronimos is implemented with the following technologies:

* Vanilla JavaScript for overall structure and game logic
* ES6 language specification and babel to transpile code into ES5
* HTML5 Canvas for DOM manipulation and rendering
* Webpack to bundle and serve up the various scripts

The JS scripts follow on Object-Oriented Design, with separate classes for the board, the tiles, the game, and the game view. The 7 tetromino shapes inherit move, rotate, and render properties from the parent *tile* class.
Tiles are represented by 3X3 two-dimensional arrays, and, with the exception of the *line* and *O*, rotate around their *[1][1]* index through a custom transpose function:

```javascript
potentialShape() {
  const newShape = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];

  for (let row = 0; row < this.shape.length; row++) {
    for (let col = 0; col < this.shape[row].length; col++) {
      if (this.shape[row][col] !== 0) {
        let colD = (1 - col) || 0;
        let rowD = (1 - row) || 0;
        let rowNew = 1 + colD;
        let colNew = 1 + (rowD * -1);
        newShape[rowNew][colNew] = this.shape[row][col];
      }
    }
  }
  return newShape;
}
```
### Class Hierarchy

board.js
  * holds tiles
  * checks valid tile positioning
  * clears rows

game.js
  * carries out menu commands
  * randomizes and spawns the next tile
  * start/mute audio

game-view.js
  * key handling

tetronimos.js:
  * sets up canvas and context
  * initializes game and GameView

tile.js
  * moves, drops, rotates tiles
  * parent class to individual tetromino classes

## Todo
  * A score board with top 5 scorers;
  * audio;
  * Add levels and acceleration;
  * Add scoring based on height, drop, and acceleration;
