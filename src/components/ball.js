import { ctx, windowHeight, windowWidth } from "./canvas";

const ball = {
  x: windowWidth / 2,
  y: windowHeight / 2,
  radius:5,
  velocity: {
    x: 3,
    y: 3,
  },
};


function drawBall() {
  ctx.beginPath();
//   ctx.moveTo(ball.x, ball.y);
  ctx.arc(ball.x,ball.y,ball.radius,0, Math.PI*2);
  ctx.fill();
  ball.x+=2;
  ball.y+=2;
}

export  { ball, drawBall };
