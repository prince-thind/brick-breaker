import { ctx, windowWidth } from "../components/canvas";

const state = {
  lives: 3,
  score: 0,
};

function drawScore() {
  ctx.font = "2rem Arial";
  ctx.fillText("Score: " + state.score, 50, 35);
}

function drawLives() {
    ctx.font = "2rem Arial";
    ctx.fillText("Lives: " + state.lives, windowWidth-150, 35);
  }

export  {state, drawScore, drawLives};
