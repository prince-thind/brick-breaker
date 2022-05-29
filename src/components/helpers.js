import { ctx, gameStatus } from "../main";
import { ball } from "./ball";
import {
  bricks,
  brickColumnCount,
  brickRowCount,
  brickHeight,
  brickWidth,
} from "./bricks";
import { paddle, paddleWidth } from "./paddle";

function registerHit() {
  gameStatus.lives--;

  if (!gameStatus.lives) {
    gameStatus.gameOver = true;
    alert("GAME OVER");
    document.location.reload();
  } else {
    ball.x = canvas.width / 2;
    ball.y = canvas.height - 30;
    paddle.x = (canvas.width - paddleWidth) / 2;
  }
}

function clearFrame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Score: " + gameStatus.score, 8, 20);
}

function drawLives() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Lives: " + gameStatus.lives, canvas.width - 65, 20);
}

function collisionDetection() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      let b = bricks[c][r];
      if (b.visible == 0) continue;
      if (
        ball.x > b.x &&
        ball.x < b.x + brickWidth &&
        ball.y > b.y &&
        ball.y < b.y + brickHeight
      ) {
        ball.speedY = -ball.speedY;
        b.visible = false;
        gameStatus.score++;

        if (gameStatus.score == brickRowCount * brickColumnCount) {
          alert("YOU WIN, CONGRATULATIONS!");
          document.location.reload();
        }
      }
    }
  }
}

export { registerHit, clearFrame, drawScore, drawLives, collisionDetection };
