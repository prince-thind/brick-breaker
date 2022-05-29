import { ctx } from "../main";

const brickRowCount = 3;
const brickColumnCount = 5;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;

const bricks = [];

for (let c = 0; c < brickColumnCount; c++) {
  bricks.push([]);
  for (let r = 0; r < brickRowCount; r++) {
    const brick = { x: 0, y: 0, visible: true };
    bricks[c].push(brick);
  }
}

function drawBricks() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      if (!bricks[c][r].visible) continue;

      let brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
      let brickY = r * (brickHeight + brickPadding) + brickOffsetTop;

      bricks[c][r].x = brickX;
      bricks[c][r].y = brickY;

      ctx.beginPath();
      ctx.rect(brickX, brickY, brickWidth, brickHeight);
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
    }
  }
}

export { bricks, drawBricks, brickColumnCount, brickRowCount, brickHeight, brickWidth };
