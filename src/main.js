import { drawBall } from "./components/ball";
import { drawBricks } from "./components/bricks";
import {
  clearFrame,
  collisionDetection,
  drawLives,
  drawScore,
} from "./components/helpers";

import { drawPaddle, paddleWidth, paddle } from "./components/paddle";
import "./style.css";

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const keysPressed = {
  right: false,
  left: false,
};

const gameStatus = {
  gameOver: false,
  score: 0,
  lives: 3,
};

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

function animate() {
  clearFrame();
  drawBall();
  drawPaddle();
  drawBricks();
  collisionDetection();
  drawScore();
  drawLives();
  if (gameStatus.gameOver) return;
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

function keyDownHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    keysPressed.right = true;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    keysPressed.left = true;
  }
}

function keyUpHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    keysPressed.right = false;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    keysPressed.left = false;
  }
}

function mouseMoveHandler(e) {
  let relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddle.x = relativeX - paddleWidth / 2;
  }
}

export { ctx, gameStatus, keysPressed };
