const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

canvas.height = windowHeight;
canvas.width = windowWidth;

function clearCanvas(){
    ctx.clearRect(0,0,windowWidth,windowHeight);
}

export { ctx, windowHeight, windowWidth, clearCanvas };
