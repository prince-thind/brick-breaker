import { ball } from "../components/ball";
import { bricks } from "../components/bricks";
import { state } from "./state";

function detectCollisionWithBricks() {
  for (const brick of bricks) {
    if (brick.hit) continue;
    detectCollisionWithBrick(brick);
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

export { detectCollisionWithBricks };
