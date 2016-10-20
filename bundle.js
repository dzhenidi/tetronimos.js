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
	
	var _game_view = __webpack_require__(4);
	
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

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _tile = __webpack_require__(2);
	
	var _tile2 = _interopRequireDefault(_tile);
	
	var _constants = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Game = function () {
	  function Game() {
	    _classCallCheck(this, Game);
	
	    this.fallingTile = [];
	    this.tiles = [];
	    this.landedBlocks = [];
	  }
	
	  _createClass(Game, [{
	    key: 'add',
	    value: function add(tile) {
	      this.fallingTile = tile;
	    }
	  }, {
	    key: 'moveTile',
	    value: function moveTile(tile) {}
	  }, {
	    key: 'removeLine',
	    value: function removeLine() {}
	  }, {
	    key: 'draw',
	    value: function draw(ctx) {
	      ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
	      ctx.fillStyle = Game.BG_COLOR;
	      ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
	
	      // this.drawLanded(ctx);
	      this.drawFalling(ctx);
	    }
	  }, {
	    key: 'drawLanded',
	    value: function drawLanded(ctx) {
	      for (var row = 0; row < this.landedBlocks.length; row++) {
	        for (var col = 0; col < this.landedBlocks[row].length; col++) {
	          if (this.landedBlocks[row][col] != 0) {
	            //match landedBlocks[row][col]'s value to a shape with its color'
	            ctx.fillStyle = 'red';
	            ctx.fillRect(col * 30, row * 30, _constants.SQUARE_SIDE, _constants.SQUARE_SIDE);
	          }
	        }
	      }
	    }
	  }, {
	    key: 'drawFalling',
	    value: function drawFalling(ctx) {
	
	      for (var row = 0; row < this.fallingTile.shape.length; row++) {
	        for (var col = 0; col < this.fallingTile.shape[row].length; col++) {
	          if (this.fallingTile.shape[row][col] != 0) {
	            //match landedBlocks[row][col]'s value to a shape with its color'
	            var x = this.fallingTile.topLeft.col + col;
	            var y = this.fallingTile.topLeft.row + row;
	            ctx.clearRect(x * 30, y * 30, _constants.SQUARE_SIDE, _constants.SQUARE_SIDE);
	            ctx.fillStyle = 'red';
	            ctx.fillRect(x * 30, y * 30, _constants.SQUARE_SIDE, _constants.SQUARE_SIDE);
	          }
	        }
	      }
	    }
	  }]);
	
	  return Game;
	}();
	
	Game.DIM_X = 300;
	Game.DIM_Y = 600;
	Game.BG_COLOR = 'green';
	module.exports = Game;

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
	
	    this.board = board.getBoard();
	    // this.location = location || [];
	    // this.velocity = velocity || STARTING_VELOCITY;
	    this.shape = shape;
	    this.topLeft = topLeft;
	  }
	
	  //instead of this.location:
	  // this.shape = [[1, 1],
	  // [1, 1]]
	
	  // = [[2, 2, 2, 2],
	  //   [0, 0, 0, 0]]
	  // this.topLeft = { row: 0, col: 4 }
	
	
	  _createClass(Tile, [{
	    key: 'move',
	    value: function move(direction) {
	      switch (direction) {
	        case _constants.MOVES.RIGHT:
	          //after checks for collisions
	          for (var i = 0; i < this.location.length; i++) {
	            this.location[i][0] += 30;
	          }
	          break;
	        case _constants.MOVES.LEFT:
	          //after checks for collisions
	          for (var _i = 0; _i < this.location.length; _i++) {
	            this.location[_i][0] -= 30;
	          }
	          break;
	        //after checks for collisions
	        case _constants.MOVES.DOWN:
	          for (var _i2 = 0; _i2 < this.location.length; _i2++) {
	            this.location[0][_i2] += 10;
	          }
	      }
	    }
	  }, {
	    key: 'draw',
	    value: function draw(ctx) {
	      var _this = this;
	
	      this.location.forEach(function (square) {
	        ctx.beginPath();
	        ctx.rect(square[0], square[1], _constants.SQUARE_SIDE, _constants.SQUARE_SIDE);
	        ctx.fillStyle = _this.color;
	        ctx.fill();
	        ctx.lineWidth = 1;
	        ctx.strokeStyle = 'black';
	        ctx.stroke();
	      });
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
	
	var STARTING_VELOCITY = exports.STARTING_VELOCITY = 20;
	
	var MOVES = exports.MOVES = {
	  LEFT: "left",
	  RIGHT: "right",
	  DOWN: "down"
	};
	
	var COLORS = exports.COLORS = {
	  'line': 'cyan',
	  'O': 'yellow',
	  'T': 'purple',
	  'S': 'green',
	  'Z': 'red',
	  'J': 'blue',
	  'L': 'orange'
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _tile = __webpack_require__(2);
	
	var _tile2 = _interopRequireDefault(_tile);
	
	var _board = __webpack_require__(5);
	
	var _board2 = _interopRequireDefault(_board);
	
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
	      var tile = this.randomTile();
	      this.game.add(tile);
	      this.game.draw(this.ctx);
	    }
	  }, {
	    key: "randomTile",
	    value: function randomTile() {
	      var board = new _board2.default();
	      var shape = [[1, 1], [1, 1]];
	      var topLeft = { row: 0, col: 4 };
	      var tile = new _tile2.default(board, shape, topLeft);
	      return tile;
	    }
	  }]);
	
	  return GameView;
	}();
	
	exports.default = GameView;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Board = function () {
	  function Board() {
	    _classCallCheck(this, Board);
	
	    this.grid = Board.EMPTY_GRID;
	  }
	
	  _createClass(Board, [{
	    key: "getBoard",
	    value: function getBoard() {
	      return Board.EMPTY_GRID;
	    }
	  }]);
	
	  return Board;
	}();
	
	Board.EMPTY_GRID = [
	// 0   1   2   3   4   5   6   7   8    9
	[[], [], [], [], [], [], [], [], [], []], // 0
	[[], [], [], [], [], [], [], [], [], []], // 1
	[[], [], [], [], [], [], [], [], [], []], // 2
	[[], [], [], [], [], [], [], [], [], []], // 3
	[[], [], [], [], [], [], [], [], [], []], // 4
	[[], [], [], [], [], [], [], [], [], []], // 5
	[[], [], [], [], [], [], [], [], [], []], // 6
	[[], [], [], [], [], [], [], [], [], []], // 7
	[[], [], [], [], [], [], [], [], [], []], // 8
	[[], [], [], [], [], [], [], [], [], []], // 9
	[[], [], [], [], [], [], [], [], [], []], // 10
	[[], [], [], [], [], [], [], [], [], []], // 11
	[[], [], [], [], [], [], [], [], [], []], // 12
	[[], [], [], [], [], [], [], [], [], []], // 13
	[[], [], [], [], [], [], [], [], [], []], // 14
	[[], [], [], [], [], [], [], [], [], []], // 15
	[[], [], [], [], [], [], [], [], [], []], // 16
	[[], [], [], [], [], [], [], [], [], []], // 17
	[[], [], [], [], [], [], [], [], [], []], // 18
	[[], [], [], [], [], [], [], [], [], []], // 19
	[[1], [1], [1], [1], [1], [1], [1], [1], [1], [1]]];
	
	exports.default = Board;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map