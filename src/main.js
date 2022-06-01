import "./style.css";
import { drawBall } from "./components/ball";
import { clearCanvas } from "./components/canvas";
import { drawBricks } from "./components/bricks";

function animate() {
  clearCanvas();
  drawBall();
  drawBricks()
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
