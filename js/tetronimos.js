import Game from "./game";
import GameView from "./game_view";

document.addEventListener("DOMContentLoaded", function(){
  const canvasBoard = document.getElementById("canvas-board");
  canvasBoard.width = Game.DIM_X;
  canvasBoard.height = Game.DIM_Y;
  const canvasPreview = document.getElementById("canvas-preview");
  const ctx = canvasBoard.getContext("2d");
  const ctxPreview = canvasPreview.getContext("2d");
  const game = new Game();
  new GameView(game, ctx, ctxPreview).start();
});
