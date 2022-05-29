import { ctx } from "../main";
import { registerHit } from "./helpers";
import { paddle, paddleWidth } from "./paddle";

const ball = {
  x: canvas.width / 2,
  y: canvas.height - 30,
  speedX: 2,
  speedY: -2,
};

const ballRadius = 10;

function drawBall() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();

  updateBallCordinates();
}

function updateBallCordinates() {
  ball.x += ball.speedX;
  ball.y += ball.speedY;

  //left and right walls
  if (
    ball.x + ball.speedX > canvas.width - ballRadius ||
    ball.x + ball.speedX < ballRadius
  ) {
    ball.speedX = -ball.speedX;
  }

  //upper wall
  if (ball.y + ball.speedY < ballRadius) {
    ball.speedY = -ball.speedY;
  }

  //bottom wall
  if (ball.y + ball.speedY > canvas.height - ballRadius) {
    //if paddle and ball x coordinate same
    if (ball.x > paddle.x && ball.x < paddle.x + paddleWidth) {
      ball.speedY = -ball.speedY;
    } else {
      registerHit();
    }
  }
}

export { drawBall, ball };
