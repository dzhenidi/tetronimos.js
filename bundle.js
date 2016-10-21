/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _game = __webpack_require__(1);
	
	var _game2 = _interopRequireDefault(_game);
	
	var _game_view = __webpack_require__(5);
	
	var _game_view2 = _interopRequireDefault(_game_view);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	document.addEventListener("DOMContentLoaded", function () {
	  var canvasEl = document.getElementsByTagName("canvas")[0];
	  canvasEl.width = _game2.default.DIM_X;
	  canvasEl.height = _game2.default.DIM_Y;
	
	  var ctx = canvasEl.getContext("2d");
	  var game = new _game2.default();
	  new _game_view2.default(game, ctx).start();
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _tile = __webpack_require__(2);
	
	var _tile2 = _interopRequireDefault(_tile);
	
	var _board = __webpack_require__(4);
	
	var _board2 = _interopRequireDefault(_board);
	
	var _constants = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Game = function () {
	  function Game() {
	    _classCallCheck(this, Game);
	
	    this.fallingTile = null;
	    this.tiles = [];
	    this.landedTiles = [];
	    this.board = new _board2.default();
	  }
	
	  _createClass(Game, [{
	    key: "addTile",
	    value: function addTile() {
	      this.fallingTile = this.randomTile();
	      this.tiles.push(this.fallingTile);
	    }
	  }, {
	    key: "landedTiles",
	    value: function landedTiles() {
	      this.landedTiles = this.board.grid;
	    }
	  }, {
	    key: "step",
	    value: function step() {
	      if (!this.fallingTile) {
	        this.addTile();
	      } else {
	        if (this.gameOver()) {
	          cancelAnimationFrame();
	        } else {
	          this.moveTile();
	        }
	      }
	    }
	  }, {
	    key: "moveTile",
	    value: function moveTile() {
	      this.fallingTile.move('down', _constants.STARTING_VELOCITY);
	      if (this.fallingTile.landed) {
	        this.landedTiles.push(this.fallingTile);
	        this.fallingTile = null;
	      }
	    }
	  }, {
	    key: "gameOver",
	    value: function gameOver() {
	      return this.board.full();
	    }
	  }, {
	    key: "removeLine",
	    value: function removeLine() {}
	  }, {
	    key: "draw",
	    value: function draw(ctx) {
	      ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
	      ctx.fillStyle = Game.BG_COLOR;
	      ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
	
	      this.landedTiles.forEach(function (tile) {
	        return tile.draw(ctx);
	      });
	
	      if (this.fallingTile) {
	        this.fallingTile.draw(ctx);
	      }
	    }
	
	    // drawLanded(ctx) {
	    //   for (let row = 0; row < this.landedBlocks.length; row++) {
	    //     for (let col = 0; col < this.landedBlocks[row].length; col++) {
	    //       if (this.landedBlocks[row][col] !== 0) {
	    //         //match landedBlocks[row][col]'s value to a shape with its color'
	    //         ctx.fillStyle = 'red';
	    //         ctx.fillRect(col * 30, row * 30, SQUARE_SIDE, SQUARE_SIDE);
	    //       }
	    //     }
	    //   }
	    // }
	
	  }, {
	    key: "randomTile",
	    value: function randomTile() {
	      var shape = [[1, 1], [1, 1]];
	      var topLeft = { row: 0, col: 4 };
	      var tile = new _tile2.default(this.board, shape, topLeft);
	      return tile;
	    }
	  }]);
	
	  return Game;
	}();
	
	Game.DIM_X = 300;
	Game.DIM_Y = 600;
	Game.BG_COLOR = 'green';
	
	exports.default = Game;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _constants = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Tile = function () {
	  function Tile(board, shape, topLeft) {
	    _classCallCheck(this, Tile);
	
	    this.board = board;
	    this.shape = shape;
	    this.topLeft = topLeft;
	    this.potentialTopLeft = {};
	    this.landed = false;
	  }
	
	  // potentialTopLeft(){
	  //   this.potentialTopLeft =  {
	  //     row: Math.abs(Math.floor(this.topLeft.row / 30)) + 1,
	  //     col: this.topLeft.col
	  //   };
	  //
	  //   return this.potentialTopLeft;
	  // }
	
	  _createClass(Tile, [{
	    key: 'move',
	    value: function move(direction, velocity) {
	      switch (direction) {
	        case _constants.MOVES.RIGHT:
	
	          break;
	        case _constants.MOVES.LEFT:
	
	          break;
	        case _constants.MOVES.DOWN:
	          this.potentialTopLeft = Object.assign({}, this.topLeft, { row: Math.floor(this.topLeft.row) + 1 });
	          for (var row = 0; row < this.shape.length; row++) {
	            for (var col = 0; col < this.shape[row].length; col++) {
	              if (this.shape[row][col] !== 0) {
	                var boardRow = row + this.potentialTopLeft.row;
	                var boardCol = col + this.potentialTopLeft.col;
	                if (this.board.willCollide(boardRow, boardCol)) {
	                  this.board.add(this);
	                  this.landed = true;
	                  return;
	                }
	              }
	            }
	          }
	          // this.topLeft = this.potentialTopLeft;
	          this.topLeft.row += velocity / 30;
	          break;
	      }
	    }
	
	    // draw(ctx) {
	    //   this.location.forEach( square => {
	    //     ctx.beginPath();
	    //     ctx.rect(square[0], square[1], SQUARE_SIDE, SQUARE_SIDE);
	    //     ctx.fillStyle = this.color;
	    //     ctx.fill();
	    //     ctx.lineWidth = 1;
	    //     ctx.strokeStyle = 'black';
	    //     ctx.stroke();
	    //   });
	    // }
	
	  }, {
	    key: 'draw',
	    value: function draw(ctx) {
	      for (var row = 0; row < this.shape.length; row++) {
	        for (var col = 0; col < this.shape[row].length; col++) {
	          if (this.shape[row][col] !== 0) {
	            //match landedBlocks[row][col]'s value to a shape with its color'
	            var x = this.topLeft.col + col;
	            var y = this.topLeft.row + row;
	            ctx.beginPath();
	            ctx.rect(x * 30, y * 30, _constants.SQUARE_SIDE, _constants.SQUARE_SIDE);
	            ctx.fillStyle = _constants.COLORS[1];
	            ctx.fill();
	            ctx.lineWidth = 1;
	            ctx.strokeStyle = 'black';
	            ctx.stroke();
	          }
	        }
	      }
	    }
	  }]);
	
	  return Tile;
	}();
	
	exports.default = Tile;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var SQUARE_SIDE = exports.SQUARE_SIDE = 30;
	
	var STARTING_VELOCITY = exports.STARTING_VELOCITY = 5;
	
	var MOVES = exports.MOVES = {
	  LEFT: "left",
	  RIGHT: "right",
	  DOWN: "down"
	};
	
	var COLORS = exports.COLORS = {
	  0: 'white', //empty
	  2: 'cyan', //line
	  1: 'yellow', //O
	  3: 'purple', //T
	  4: 'green', //S
	  5: 'red', //Z
	  6: 'blue', //J
	  7: 'orange' //L
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _constants = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Board = function () {
	  function Board() {
	    _classCallCheck(this, Board);
	
	    this.grid = Board.EMPTY_GRID;
	  }
	
	  _createClass(Board, [{
	    key: 'getBoard',
	    value: function getBoard() {
	      return Board.EMPTY_GRID;
	    }
	  }, {
	    key: 'add',
	    value: function add(tile) {
	
	      for (var row = 0; row < tile.shape.length; row++) {
	        for (var col = 0; col < tile.shape[row].length; col++) {
	          var gridCol = tile.topLeft.col + col;
	          var gridRow = Math.floor(tile.topLeft.row) + row;
	          this.grid[gridRow][gridCol] = tile.shape[row][col];
	        }
	      }
	    }
	  }, {
	    key: 'willCollide',
	    value: function willCollide(row, col) {
	      if (row > 19 || this.grid[row][col] !== 0) {
	        return true;
	      } else {
	        return false;
	      }
	    }
	  }, {
	    key: 'full',
	    value: function full() {
	
	      return this.grid[0][4] !== 0 || this.grid[0][5];
	    }
	
	    // draw(ctx) {
	    //   for (let row = 0; row < this.grid.length; row++) {
	    //     for (let col = 0; col < this.grid[row].length; col++) {
	    //       ctx.clearRect(col * 30, row * 30, SQUARE_SIDE, SQUARE_SIDE);
	    //       ctx.fillStyle = COLORS[this.grid[row][col]];
	    //       ctx.fillRect(col, row, SQUARE_SIDE, SQUARE_SIDE);
	    //
	    //     }
	    //   }
	    // }
	
	  }]);
	
	  return Board;
	}();
	
	Board.EMPTY_GRID = [
	// 0  1  2  3  4  5  6  7  8  9
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 0
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 1
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 2
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 3
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 4
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 5
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 6
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 7
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 8
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 9
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 10
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 11
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 12
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 13
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 14
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 15
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 16
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 17
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 18
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
	
	exports.default = Board;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _tile = __webpack_require__(2);
	
	var _tile2 = _interopRequireDefault(_tile);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var GameView = function () {
	  function GameView(game, ctx) {
	    _classCallCheck(this, GameView);
	
	    this.ctx = ctx;
	    this.game = game;
	  }
	
	  _createClass(GameView, [{
	    key: "start",
	    value: function start() {
	      this.bindKeyHandlers();
	      this.lastTime = 0;
	      requestAnimationFrame(this.animate.bind(this));
	      // setTimeout(this.animate.bind(this), 1000/30);
	    }
	  }, {
	    key: "bindKeyHandlers",
	    value: function bindKeyHandlers() {
	      var tile = this.game.fallingTile;
	      Object.keys(GameView.MOVES).forEach(function (k) {
	        var direction = GameView.MOVES[k];
	        key(k, function () {
	          tile.move(direction);
	        });
	      });
	    }
	
	    // pass argument time to animate to timestamp animations
	
	  }, {
	    key: "animate",
	    value: function animate(time) {
	      var timeDelta = time - this.lastTime;
	      this.game.step(timeDelta, this.ctx);
	      this.game.draw(this.ctx);
	      this.lastTime = time;
	
	      requestAnimationFrame(this.animate.bind(this));
	      // setTimeout(this.animate.bind(this), 1000/30);
	    }
	  }]);
	
	  return GameView;
	}();
	
	GameView.MOVES = {
	  "a": "left",
	  "s": "down",
	  "d": "right"
	};
	
	exports.default = GameView;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map