import "./style.css";
import { drawBall } from "./components/ball";
import { clearCanvas } from "./components/canvas";
import { drawBricks } from "./components/bricks";
import { detectCollisionWithBricks } from "./lib/collisionDetection";
import { drawLives, drawScore } from "./lib/state";

function animate() {
  clearCanvas();
  drawBall();
  drawBricks();
  detectCollisionWithBricks();
  drawLives();
  drawScore();
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
