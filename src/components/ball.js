import { ctx, windowHeight, windowWidth } from "./canvas";

const ball = {
  x: windowWidth / 2,
  y: windowHeight / 2,
  radius: windowHeight / 50,
  velocity: {
    x: windowWidth / 300,
    y: windowWidth / 300,
  },
};

function drawBall() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fill();
  clampVelocities();
  ball.x += ball.velocity.x;
  ball.y += ball.velocity.y;
}

function clampVelocities() {
  if (ball.velocity.x > windowWidth / 50) {
    ball.velocity.x = windowWidth / 50;
  }
  if (ball.velocity.y > windowWidth / 50) {
    ball.velocity.y = windowWidth / 50;
  }
}

export { ball, drawBall };
