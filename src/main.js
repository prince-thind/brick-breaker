import "./style.css";
import { drawBall } from "./components/ball";
import { clearCanvas } from "./components/canvas";

function animate() {
  clearCanvas();
  drawBall();
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
