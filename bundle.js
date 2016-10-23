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
	
	var _game_view = __webpack_require__(12);
	
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
	
	var _j = __webpack_require__(4);
	
	var _j2 = _interopRequireDefault(_j);
	
	var _line = __webpack_require__(5);
	
	var _line2 = _interopRequireDefault(_line);
	
	var _o = __webpack_require__(6);
	
	var _o2 = _interopRequireDefault(_o);
	
	var _s = __webpack_require__(7);
	
	var _s2 = _interopRequireDefault(_s);
	
	var _t = __webpack_require__(8);
	
	var _t2 = _interopRequireDefault(_t);
	
	var _z = __webpack_require__(9);
	
	var _z2 = _interopRequireDefault(_z);
	
	var _l = __webpack_require__(10);
	
	var _l2 = _interopRequireDefault(_l);
	
	var _board = __webpack_require__(11);
	
	var _board2 = _interopRequireDefault(_board);
	
	var _constants = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Game = function () {
	  function Game() {
	    _classCallCheck(this, Game);
	
	    this.tiles = [];
	    this.landedTiles = [];
	    this.board = new _board2.default();
	    this.velocity = _constants.STARTING_VELOCITY;
	    this.points = 0;
	    this.level = 0;
	    this.state = "paused";
	  }
	
	  _createClass(Game, [{
	    key: "addTile",
	    value: function addTile() {
	      var newTile = this.randomTile();
	      this.tiles.push(newTile);
	      return newTile;
	    }
	
	    // landedTiles() {
	    //   this.landedTiles = this.board.grid;
	    // }
	
	  }, {
	    key: "step",
	    value: function step() {
	      if (this.state === "paused") {
	        return;
	      }
	      if (this.tiles.length === 0 || this.tiles[this.tiles.length - 1].landed) {
	        this.addTile();
	      } else {
	        this.clearRows();
	        if (!this.gameOver()) {
	          this.moveTile();
	          // this.velocity = 0;
	        } else {
	          this.toggleState();
	          this.displayGameOver();
	          this.resetGame();
	        }
	      }
	    }
	  }, {
	    key: "toggleState",
	    value: function toggleState() {
	      this.state = this.state === "paused" ? "playing" : "paused";
	    }
	  }, {
	    key: "resetGame",
	    value: function resetGame() {
	      this.board.resetBoard();
	      this.tiles = [];
	      this.velocity = _constants.STARTING_VELOCITY;
	      this.points = 0;
	      this.level = 0;
	    }
	  }, {
	    key: "displayGameOver",
	    value: function displayGameOver() {
	      var el = document.getElementById("game-over");
	      el.style.display = 'block';
	    }
	  }, {
	    key: "moveTile",
	    value: function moveTile() {
	      var currentTile = this.tiles[this.tiles.length - 1];
	      currentTile.drop(this.velocity);
	      if (currentTile.landed) {
	        this.landedTiles.push(currentTile);
	        this.addTile();
	      }
	    }
	  }, {
	    key: "gameOver",
	    value: function gameOver() {
	      return this.board.full();
	    }
	  }, {
	    key: "calculatePoints",
	    value: function calculatePoints(rowsCleared) {
	      var n = this.level;
	      switch (rowsCleared) {
	        case 1:
	          debugger;
	          this.points += 40 * (n + 1);
	          break;
	        case 2:
	          this.points += 100 * (n + 1);
	          break;
	        case 3:
	          this.points += 300 * (n + 1);
	          break;
	        case 4:
	          this.points += 1200 * (n + 1);
	          break;
	      }
	    }
	  }, {
	    key: "clearRows",
	    value: function clearRows() {
	      var rowsToClear = this.board.rowsToClear();
	      if (rowsToClear.length > 0) {
	        this.board.removeRows(rowsToClear);
	        this.calculatePoints(rowsToClear.length);
	        this.updateScore();
	      }
	    }
	  }, {
	    key: "displayMenu",
	    value: function displayMenu(ctx) {
	      ctx.fillStyle = "black";
	      ctx.font = "italic " + 26 + "pt sans-serif ";
	      ctx.fillText("Press RETURN", 10, 150);
	      ctx.fillStyle = "black";
	      ctx.font = "italic " + 26 + "pt sans-serif ";
	      ctx.fillText("to start/continue", 10, 200);
	    }
	  }, {
	    key: "draw",
	    value: function draw(ctx) {
	      ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
	      ctx.fillStyle = Game.BG_COLOR;
	      ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
	
	      if (this.state === "paused") {
	        this.displayMenu(ctx);
	      } else {
	        this.board.draw(ctx);
	        if (!this.tiles[this.tiles.length - 1].landed) {
	          this.tiles[this.tiles.length - 1].draw(ctx);
	        }
	      }
	    }
	  }, {
	    key: "updateScore",
	    value: function updateScore() {
	      var scoreTag = document.getElementById('score');
	      scoreTag.innerHTML = this.points;
	    }
	  }, {
	    key: "randomTile",
	    value: function randomTile() {
	
	      var num = Math.floor(Math.random() * Game.NUM_PIECES + 1);
	      switch (num) {
	        case 1:
	          return new _o2.default(this.board);
	        case 2:
	          return new _line2.default(this.board);
	        case 3:
	          return new _j2.default(this.board);
	        case 4:
	          return new _s2.default(this.board);
	        case 5:
	          return new _t2.default(this.board);
	        case 6:
	          return new _z2.default(this.board);
	        case 7:
	          return new _l2.default(this.board);
	      }
	    }
	  }]);
	
	  return Game;
	}();
	
	Game.DIM_X = 300;
	Game.DIM_Y = 600;
	Game.BG_COLOR = 'green';
	Game.NUM_PIECES = 7;
	
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
	  function Tile(board) {
	    _classCallCheck(this, Tile);
	
	    this.board = board;
	    this.topLeft = { row: 0, col: 4 };
	    this.landed = false;
	  }
	
	  // potentialTopLeft() {
	  //   return {
	  //     row: Math.floor(this.topLeft.row) + 1,
	  //     col: Math.floor(this.topLeft.col)};
	  // }
	
	
	  _createClass(Tile, [{
	    key: 'move',
	    value: function move(direction, velocity) {
	      switch (direction) {
	        case _constants.MOVES.RIGHT:
	          var potentialTopLeft = {
	            row: Math.floor(this.topLeft.row),
	            col: this.topLeft.col + 1
	          };
	          if (this.tileWillCollide(potentialTopLeft, this.shape)) {
	            // this.land();
	          } else {
	            this.topLeft.col += 1;
	          }
	          break;
	
	        case _constants.MOVES.LEFT:
	          potentialTopLeft = {
	            row: Math.floor(this.topLeft.row),
	            col: this.topLeft.col - 1
	          };
	          if (this.tileWillCollide(potentialTopLeft, this.shape)) {
	            // this.land();
	          } else {
	            this.topLeft.col -= 1;
	          }
	          break;
	
	        case _constants.MOVES.DOWN:
	          potentialTopLeft = Object.assign({}, this.topLeft, { row: Math.floor(this.topLeft.row) + 1 });
	          if (this.tileWillCollide(potentialTopLeft, this.shape)) {
	            this.land();
	          } else {
	            this.topLeft.row += 1;
	          }
	          break;
	      }
	    }
	  }, {
	    key: 'land',
	    value: function land() {
	      this.board.add(this);
	      this.landed = true;
	    }
	  }, {
	    key: 'tileWillCollide',
	    value: function tileWillCollide(potentialTopLeft, potentialShape) {
	      for (var row = 0; row < potentialShape.length; row++) {
	        for (var col = 0; col < potentialShape[row].length; col++) {
	          if (potentialShape[row][col] !== 0) {
	            var boardRow = row + potentialTopLeft.row;
	            var boardCol = col + potentialTopLeft.col;
	            if (this.board.occupied(boardRow, boardCol)) {
	              return true;
	            }
	          }
	        }
	      }
	      return false;
	    }
	  }, {
	    key: 'drop',
	    value: function drop(velocity) {
	      var potentialTopLeft = Object.assign({}, this.topLeft, { row: Math.floor(this.topLeft.row) + 1 });
	      if (this.tileWillCollide(potentialTopLeft, this.shape)) {
	        this.land();
	      } else {
	        this.topLeft.row += velocity / 30;
	      }
	    }
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
	            ctx.fillStyle = this.color;
	            ctx.fill();
	            ctx.lineWidth = 1;
	            ctx.strokeStyle = 'black';
	            ctx.stroke();
	          }
	        }
	      }
	    }
	  }, {
	    key: 'rotate',
	    value: function rotate(direction) {
	      switch (direction) {
	        case 'countercw':
	          var potentialTopLeft = Object.assign({}, this.topLeft, { row: Math.floor(this.topLeft.row) });
	          var potentialShape = this.potentialShape(direction);
	          if (!this.tileWillCollide(potentialTopLeft, potentialShape)) {
	            this.shape = this.potentialShape(direction);
	          }
	          break;
	      }
	    }
	  }, {
	    key: 'potentialShape',
	    value: function potentialShape(direction) {
	      var newShape = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
	
	      for (var row = 0; row < this.shape.length; row++) {
	        for (var col = 0; col < this.shape[row].length; col++) {
	          if (this.shape[row][col] !== 0) {
	            var x = col;
	            var y = row;
	            var xD = 1 - x || 0;
	            var yD = 1 - y || 0;
	            var yNew = 1 + xD;
	            var xNew = 1 + yD * -1;
	            // debugger
	            newShape[yNew][xNew] = this.shape[y][x];
	          }
	        }
	      }
	
	      return newShape;
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
	
	var STARTING_VELOCITY = exports.STARTING_VELOCITY = 2;
	
	var MOVES = exports.MOVES = {
	  LEFT: "left",
	  RIGHT: "right",
	  DOWN: "down"
	};
	
	var COLORS = exports.COLORS = {
	  0: 'white', //empty
	  'line': 'cyan', //line
	  'O': 'yellow', //O
	  'T': 'purple', //T
	  'S': 'green', //S
	  'Z': 'red', //Z
	  'J': 'blue', //J
	  'L': 'orange' //L
	};
	
	var COLORS_NUM = exports.COLORS_NUM = {
	  0: 'white', //empty
	  2: 'cyan', //line
	  1: 'yellow', //O
	  3: 'purple', //T
	  4: 'green', //S
	  5: 'red', //Z
	  6: 'blue', //J
	  7: 'orange' //L
	};
	
	// n = level
	// n	40 * (n + 1)	100 * (n + 1)	300 * (n + 1)	1200 * (n + 1)

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _tile = __webpack_require__(2);
	
	var _tile2 = _interopRequireDefault(_tile);
	
	var _constants = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TileJ = function (_Tile) {
	  _inherits(TileJ, _Tile);
	
	  function TileJ(board) {
	    _classCallCheck(this, TileJ);
	
	    var _this = _possibleConstructorReturn(this, (TileJ.__proto__ || Object.getPrototypeOf(TileJ)).call(this, board));
	
	    _this.color = _constants.COLORS.J;
	    _this.shape = [[0, 0, 0], [6, 6, 6], [0, 0, 6]];
	    return _this;
	  }
	
	  return TileJ;
	}(_tile2.default);
	
	exports.default = TileJ;

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
	
	var _constants = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Line = function (_Tile) {
	  _inherits(Line, _Tile);
	
	  function Line(board) {
	    _classCallCheck(this, Line);
	
	    var _this = _possibleConstructorReturn(this, (Line.__proto__ || Object.getPrototypeOf(Line)).call(this, board));
	
	    _this.color = _constants.COLORS.line;
	    _this.shape = [[2, 2, 2, 2]];
	    return _this;
	  }
	
	  _createClass(Line, [{
	    key: "rotate",
	    value: function rotate(direction) {
	      switch (direction) {
	        case 'countercw':
	          if (this.shape.length === 1) {
	            var potentialTopLeft = {
	              row: Math.floor(this.topLeft.row) - 1,
	              col: this.topLeft.col + 2
	            };
	            var potentialShape = [[2], [2], [2], [2]];
	            if (!this.tileWillCollide(potentialTopLeft, potentialShape)) {
	              this.shape = potentialShape;
	              this.topLeft = potentialTopLeft;
	            }
	          } else {
	            var _potentialTopLeft = {
	              row: Math.floor(this.topLeft.row) + 1,
	              col: this.topLeft.col - 2
	            };
	            var _potentialShape = [[2, 2, 2, 2]];
	            if (!this.tileWillCollide(_potentialTopLeft, _potentialShape)) {
	              this.shape = _potentialShape;
	              this.topLeft = _potentialTopLeft;
	            }
	          }
	          break;
	      }
	    }
	  }]);
	
	  return Line;
	}(_tile2.default);
	
	exports.default = Line;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _tile = __webpack_require__(2);
	
	var _tile2 = _interopRequireDefault(_tile);
	
	var _constants = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TileO = function (_Tile) {
	  _inherits(TileO, _Tile);
	
	  function TileO(board) {
	    _classCallCheck(this, TileO);
	
	    var _this = _possibleConstructorReturn(this, (TileO.__proto__ || Object.getPrototypeOf(TileO)).call(this, board));
	
	    _this.color = _constants.COLORS.O;
	    _this.shape = [[1, 1], [1, 1]];
	    return _this;
	  }
	
	  _createClass(TileO, [{
	    key: "rotate",
	    value: function rotate() {
	      //override super
	    }
	  }]);
	
	  return TileO;
	}(_tile2.default);
	
	exports.default = TileO;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _tile = __webpack_require__(2);
	
	var _tile2 = _interopRequireDefault(_tile);
	
	var _constants = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TileS = function (_Tile) {
	  _inherits(TileS, _Tile);
	
	  function TileS(board) {
	    _classCallCheck(this, TileS);
	
	    var _this = _possibleConstructorReturn(this, (TileS.__proto__ || Object.getPrototypeOf(TileS)).call(this, board));
	
	    _this.color = _constants.COLORS.S;
	    _this.shape = [[0, 0, 0], [0, 4, 4], [4, 4, 0]];
	    return _this;
	  }
	
	  return TileS;
	}(_tile2.default);
	
	exports.default = TileS;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _tile = __webpack_require__(2);
	
	var _tile2 = _interopRequireDefault(_tile);
	
	var _constants = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TileT = function (_Tile) {
	  _inherits(TileT, _Tile);
	
	  function TileT(board) {
	    _classCallCheck(this, TileT);
	
	    var _this = _possibleConstructorReturn(this, (TileT.__proto__ || Object.getPrototypeOf(TileT)).call(this, board));
	
	    _this.color = _constants.COLORS.T;
	    _this.shape = [[0, 0, 0], [3, 3, 3], [0, 3, 0]];
	    return _this;
	  }
	
	  return TileT;
	}(_tile2.default);
	
	exports.default = TileT;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _tile = __webpack_require__(2);
	
	var _tile2 = _interopRequireDefault(_tile);
	
	var _constants = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TileZ = function (_Tile) {
	  _inherits(TileZ, _Tile);
	
	  function TileZ(board) {
	    _classCallCheck(this, TileZ);
	
	    var _this = _possibleConstructorReturn(this, (TileZ.__proto__ || Object.getPrototypeOf(TileZ)).call(this, board));
	
	    _this.color = _constants.COLORS.Z;
	    _this.shape = [[0, 0, 0], [5, 5, 0], [0, 5, 5]];
	    return _this;
	  }
	
	  return TileZ;
	}(_tile2.default);
	
	exports.default = TileZ;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _tile = __webpack_require__(2);
	
	var _tile2 = _interopRequireDefault(_tile);
	
	var _constants = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TileL = function (_Tile) {
	  _inherits(TileL, _Tile);
	
	  function TileL(board) {
	    _classCallCheck(this, TileL);
	
	    var _this = _possibleConstructorReturn(this, (TileL.__proto__ || Object.getPrototypeOf(TileL)).call(this, board));
	
	    _this.color = _constants.COLORS.L;
	    _this.shape = [[0, 0, 0], [7, 7, 7], [7, 0, 0]];
	    return _this;
	  }
	
	  return TileL;
	}(_tile2.default);
	
	exports.default = TileL;

/***/ },
/* 11 */
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
	    key: 'add',
	    value: function add(tile) {
	
	      for (var row = 0; row < tile.shape.length; row++) {
	        for (var col = 0; col < tile.shape[row].length; col++) {
	          var gridCol = tile.topLeft.col + col;
	          var gridRow = Math.floor(tile.topLeft.row) + row;
	          if (tile.shape[row][col] !== 0) {
	            this.grid[gridRow][gridCol] = tile.shape[row][col];
	          }
	        }
	      }
	    }
	  }, {
	    key: 'occupied',
	    value: function occupied(row, col) {
	      if (row > 19 || this.grid[row][col] !== 0) {
	        return true;
	      } else {
	        return false;
	      }
	    }
	  }, {
	    key: 'rowsToClear',
	    value: function rowsToClear() {
	      var idxToClear = [];
	      for (var row = 0; row < this.grid.length; row++) {
	        if (this.complete(row)) {
	          idxToClear.push(row);
	        }
	      }
	      return idxToClear;
	    }
	  }, {
	    key: 'complete',
	    value: function complete(rowIdx) {
	      return this.grid[rowIdx].every(function (col) {
	        return col !== 0;
	      });
	    }
	  }, {
	    key: 'full',
	    value: function full() {
	      return this.grid[0][4] !== 0 || this.grid[0][5] !== 0;
	    }
	  }, {
	    key: 'removeRows',
	    value: function removeRows(rowsToRemove) {
	      var _this = this;
	
	      rowsToRemove.forEach(function (row) {
	        _this.grid.splice(row, 1);
	        _this.grid.unshift([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
	      });
	    }
	  }, {
	    key: 'resetBoard',
	    value: function resetBoard() {
	      this.grid = Board.EMPTY_GRID;
	    }
	  }, {
	    key: 'draw',
	    value: function draw(ctx) {
	      for (var row = 0; row < this.grid.length; row++) {
	        for (var col = 0; col < this.grid[row].length; col++) {
	          ctx.beginPath();
	          ctx.rect(col * 30, row * 30, _constants.SQUARE_SIDE, _constants.SQUARE_SIDE);
	          ctx.fillStyle = _constants.COLORS_NUM[this.grid[row][col]];
	          ctx.fill();
	          ctx.lineWidth = 1;
	          ctx.strokeStyle = 'black';
	          ctx.stroke();
	        }
	      }
	    }
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
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
	    // this.state = "paused";
	  }
	
	  _createClass(GameView, [{
	    key: 'start',
	    value: function start() {
	      this.bindKeyHandlers();
	      this.lastTime = 0;
	      requestAnimationFrame(this.animate.bind(this));
	      // setTimeout(this.animate.bind(this), 1000/30);
	    }
	  }, {
	    key: 'bindKeyHandlers',
	    value: function bindKeyHandlers() {
	      var _this = this;
	
	      key('return', function () {
	        _this.game.toggleState();
	      });
	      Object.keys(GameView.MOVES).forEach(function (k) {
	        var direction = GameView.MOVES[k];
	        key(k, function () {
	          _this.game.tiles[_this.game.tiles.length - 1].move(direction);
	        });
	      });
	      key('q', function () {
	        _this.game.tiles[_this.game.tiles.length - 1].rotate('countercw');
	      });
	    }
	
	    // pass argument time to animate to timestamp animations
	
	  }, {
	    key: 'animate',
	    value: function animate(time) {
	      var timeDelta = time - this.lastTime;
	
	      this.game.step(timeDelta, this.ctx);
	      this.game.draw(this.ctx);
	      this.lastTime = time;
	
	      requestAnimationFrame(this.animate.bind(this));
	      // setTimeout(this.animate.bind(this), 1000/30);
	    }
	
	    // toggleState(){
	    //   this.state = this.state === "paused" ? "playing" : "paused";
	    // }
	
	
	  }]);
	
	  return GameView;
	}();
	
	GameView.MOVES = {
	  "a, left": "left",
	  "s, down, space": "down",
	  "d, right": "right"
	};
	
	exports.default = GameView;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map