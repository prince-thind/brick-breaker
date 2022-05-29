import { ctx, keysPressed } from "../main";

const paddleHeight = 10;
const paddleWidth = 75;

const paddle = {
  x: (canvas.width - paddleWidth) / 2,
};

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddle.x, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();

  if (keysPressed.right) {
    paddle.x += 7;
    if (paddle.x + paddleWidth > canvas.width) {
      paddle.x = canvas.width - paddleWidth;
    }
  } else if (keysPressed.left) {
    paddle.x -= 7;
    if (paddle.x < 0) {
      paddle.x = 0;
    }
  }
}

export { paddle, drawPaddle, paddleWidth };
