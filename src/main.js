import "./style.css";

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

let x = canvas.width / 2;
let y = canvas.height - 30;

let dx = 1;
let dy = -3;

const ballRadius = 10;

function animate() {
  clearFrame();
  drawBall();
  x += dx;
  y += dy;
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

function clearFrame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
