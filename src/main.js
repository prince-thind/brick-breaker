import "./style.css";
import { drawBall } from "./components/ball";
import { clearCanvas } from "./components/canvas";
import { drawBricks } from "./components/bricks";
import { detectCollisionWithBricks } from "./lib/collisionDetection";

function animate() {
  clearCanvas();
  drawBall();
  drawBricks();
  detectCollisionWithBricks()
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
