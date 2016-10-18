# JS Project Proposal: Tetrominos

## Background
  Tetris is a tile-matching video game born in Soviet Russia in 1984. In the tradition of geometric puzzles, the tetris tile is a four-celled, one-sided polyomino (a geometric figure composed at squares connected at the edges), called *tetrimino* in the tetris world and *tetromino* in the CS world of tiling.

  A random sequence of tetriminos fall down a rectangular well, piling at the bottom. The user can move tiles sideways, and rotate them by 90 degree turns with the goal of clearing a line: an uninterrupted row of tiles  disappears and remaining tiles drop one row.
  Tiles fall faster as the game progresses, and the game ends when a stack of tiles reaches the top of the well. Double, triple, and quadruple clears bring more points. Points can also vary by the height a piece fell, as well as "hard drops" or "soft drops".

## Functionality & MVP

With this Tetrominos game, users will be able to:
- [] Start and reset the game
- [] Manipulate tiles: move left, down, right; rotate clockwise and counterclockwise
- [] Score based on height, drop, and acceleration

In addition, this project will include:
- [] A score board
- [] audio

## Architecture and Technologies

This project will be implemented with the following technologies:

* Vanilla JavaScript and jQuery for overall structure and game logic
* HTML5 Canvas for DOM manipulation and rendering
* Webpack to bundle and serve up the various scripts

In addition to the webpack entry file, there will be three scripts involved in the project:

board.js
  * class Board
  * constructs and holds tiles
  * valid tile positioning
game.js
  * render new game/ game over menu
  * randomizing the next tile
  * start/mute audio
tetris-view.js
  * class View
  * key handling
  * drawing and reseting the board
  * moves tiles
  * clearing rows
tetris.js:
  * class Tetris: constructor functions for the tiles
  * color and type of each tile
  * rotation possibilities for each tile
  * rotate function
  * move function

## Implementation Timeline

  **Day 1**: Setup Node modules, webpack.config.js, package.json. Write a basic entry file and the bare bonex of all scripts outlined above.

  **Day 2**: Build out the Tetris object and Board objects

  **Day 3**: Install user controls, styles, audio  
