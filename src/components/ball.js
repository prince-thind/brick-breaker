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
  checkCollisionsWithBorders();
  boundVelocities();
  ball.x += ball.velocity.x;
  ball.y += ball.velocity.y;
}

function checkCollisionsWithBorders() {
  const randomNoise = Math.random() * (1.2 - 0.9) + 0.9;

  const ballRight = ball.x + ball.radius;
  const ballLeft = ball.x - ball.radius;
  const ballTop = ball.y - ball.radius;
  const ballBottom = ball.y + ball.radius;

  if (ballLeft <= 0) {
    ball.x = ball.radius;
    ball.velocity.x = -ball.velocity.x * randomNoise;
  }
  if (ballRight >= windowWidth) {
    ball.x = windowWidth - ball.radius;
    ball.velocity.x = -ball.velocity.x * randomNoise;
  }

  if (ballTop <= 0) {
    ball.y = ball.radius;
    ball.velocity.y = -ball.velocity.y * randomNoise;
  }
  if (ballBottom >= windowHeight) {
    ball.y = windowHeight - ball.radius;
    ball.velocity.y = -ball.velocity.y * randomNoise;
  }
}

function boundVelocities() {
  if (ball.velocity.x > windowWidth / 50) {
    ball.velocity.x = windowWidth / 50;
  }
  if (ball.velocity.y > windowWidth / 50) {
    ball.velocity.y = windowWidth / 50;
  }
}

export { ball, drawBall };
