import { ball } from "../components/ball";
import { bricks } from "../components/bricks";
import { windowHeight, windowWidth } from "../components/canvas";
import { state } from "./state";

function detectCollisionWithBricks() {
  for (const brick of bricks) {
    if (brick.hit) continue;
    detectCollisionWithBrick(brick);
  }
}

function detectCollisionWithBorders() {
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

function detectCollisionWithBrick(brick) {
  const hit = detectCollisionWithRect(brick);
  brick.hit = hit;
}

function detectCollisionWithRect(rect) {
  if (
    rect.x < ball.x &&
    rect.x + rect.width > ball.x &&
    rect.y < ball.y &&
    rect.y + rect.height > ball.y
  ) {
    ball.velocity.y = -ball.velocity.y;
    state.score++;
    return true;
  }
  return false;
}

export { detectCollisionWithBricks, detectCollisionWithBorders };
