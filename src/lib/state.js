import { bricks } from "../components/bricks";
import { ctx, windowWidth } from "../components/canvas";

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

const state = {
  lives: 3,
  score: 0,
  keysPressed: {
    left: false,
    right: false,
  },
};

function keyDownHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    state.keysPressed.right = true;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    state.keysPressed.left = true;
  }
}

function keyUpHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    state.keysPressed.right = false;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    state.keysPressed.left = false;
  }
}

function drawScore() {
  ctx.font = "2rem Arial";
  ctx.fillText("Score: " + state.score, 50, 35);
}

function drawLives() {
  ctx.font = "2rem Arial";
  ctx.fillText("Lives: " + state.lives, windowWidth - 150, 35);
}

function detectWin() {
  if (state.score == bricks.length) {
    alert("you Won The Game!");
    window.location.reload();
    return true;
  }
  return false;
}

function detectLose() {
  if (state.lives == 0) {
    alert("you Lost!");
    window.location.reload();

    return true;
  }
  return false;
}

export { state, drawScore, drawLives, detectWin, detectLose };
