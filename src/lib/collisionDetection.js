import { ball } from "../components/ball";
import {  bricks } from "../components/bricks";

function detectCollisionWithBricks() {
  for (const brick of bricks) {
    if (brick.hit) continue;
    detectCollisionWithRect(brick);
    // brick.hit = hit;
  }
}

function detectCollisionWithRect(rect) {
  if (
    rect.x < ball.x &&
    rect.x + rect.width > ball.x &&
    rect.y < ball.y &&
    rect.y + rect.height > ball.y
  ) {
    ball.velocity.y = -ball.velocity.y;
    rect.hit = true;
  }
}

export { detectCollisionWithBricks };
