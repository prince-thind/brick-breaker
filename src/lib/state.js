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
  displayText: { opacity: 0, text: "" },
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
    state.displayText.opacity = 1;
    state.displayText.text = "You Won! Click to reload";
    state.displayText.color = "green";
    document.addEventListener("click", () => {
      window.location.reload();
    });
    return true;
  }
  return false;
}

function detectLose() {
  if (state.lives == 0) {
    state.displayText.opacity = 1;
    state.displayText.text = "You Lost! Click to reload";
    state.displayText.color = "red";
    document.addEventListener("click", () => {
      window.location.reload();
    });

    return true;
  }
  return false;
}

function drawCentralText() {
  ctx.save();
  ctx.textAlign = "center";
  ctx.globalAlpha = state.displayText.opacity;
  ctx.fillStyle = state.displayText.color;
  ctx.fillText(state.displayText.text, windowWidth / 2, 35);
  state.displayText.opacity -= 0.005;
  state.displayText.opacity = Math.max(0, state.displayText.opacity);
  ctx.restore();
  // ctx.fillStyle = "black";
  // ctx.globalAlpha = 1;
}

export { state, drawScore, drawLives, detectWin, detectLose, drawCentralText };
