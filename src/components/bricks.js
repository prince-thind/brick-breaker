import { ctx, windowHeight, windowWidth } from "./canvas";

const bricks = [];

const bricksPerRow = 10;
const numberOfColumns = 3;

const divisionsX = bricksPerRow + 1;
const divisionsY = numberOfColumns + 1;

const horizontalSlot = windowWidth / divisionsX;
const verticalSlot = windowHeight / 4 / divisionsY;

const verticalOffset = windowHeight / 20;

const brickWidth = horizontalSlot * 0.9;
const brickHeight = verticalSlot * 0.75;

for (let i = 0; i < numberOfColumns; i++) {
  for (let j = 0; j < bricksPerRow; j++) {
    const brick = {};
    const xCordinate = horizontalSlot * j + horizontalSlot / 2;
    const yCordinate = verticalSlot * i + verticalSlot / 2 + verticalOffset;
    brick.x = xCordinate;
    brick.y = yCordinate;
    brick.height = brickHeight;
    brick.width = brickWidth;
    brick.hit = false;
    bricks.push(brick);
  }
}

function drawBricks() {
  for (const brick of bricks) {
    if (brick.hit) continue;
    ctx.fillRect(brick.x, brick.y, brickWidth, brickHeight);
  }
}

export { drawBricks, bricks, brickHeight, brickWidth };
