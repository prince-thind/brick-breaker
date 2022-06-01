import { state } from "../lib/state";
import { ctx, windowHeight, windowWidth } from "./canvas";

const paddleHeight = windowHeight / 20;
const paddleWidth = windowWidth / 5;

const paddleSpeed = windowWidth / 100;

const paddle = {
  x: (windowWidth - paddleWidth) / 2,
  y: windowHeight - paddleHeight,
  height: paddleHeight,
  width: paddleWidth,
};

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddle.x, paddle.y, paddleWidth, paddleHeight);
  ctx.fill();
  ctx.closePath();

  if (state.keysPressed.right) {
    paddle.x += paddleSpeed;
  }
  if (state.keysPressed.left) {
    paddle.x -= paddleSpeed;
  }
  clampVelocity();
}

function clampVelocity() {
  if (paddle.x + paddleWidth > windowWidth) {
    paddle.x = windowWidth - paddleWidth;
  }

  if (paddle.x < 0) {
    paddle.x = 0;
  }
}

export { paddle, drawPaddle };
