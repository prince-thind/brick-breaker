import "./style.css";
import { drawBall } from "./components/ball";
import { clearCanvas } from "./components/canvas";
import { drawBricks } from "./components/bricks";
import {
  detectCollisionWithBorders,
  detectCollisionWithBricks,
} from "./lib/collisionDetection";
import { detectLose, detectWin, drawLives, drawScore } from "./lib/state";

function animate() {
  clearCanvas();
  drawBall();
  detectCollisionWithBorders();
  drawBricks();
  detectCollisionWithBricks();
  drawLives();
  drawScore();
  const gameWon = detectWin();
  const gameLost = detectLose();

  if (gameWon || gameLost) return;

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
