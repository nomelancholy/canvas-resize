const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
ctx.fillRect(100, 100, 100, 100);
ctx.fillRect(200, 200, 100, 100);
ctx.fillStyle = "rgba(0, 0, 255, 0.5)";

ctx.fillRect(300, 300, 100, 100);

console.log(canvas);

// Line

ctx.beginPath();
ctx.moveTo(50, 300);
ctx.lineTo(300, 100);
ctx.strokeStyle = "purple";
ctx.lineTo(400, 300);
ctx.strokeStyle = "gray";
ctx.lineTo(50, 300);

ctx.stroke();

// Arc / Circle

for (let i = 0; i < 5; i++) {
  let x = Math.random() * canvas.width;
  let y = Math.random() * canvas.height;
  let radius = Math.random() * 100;
  let color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
    Math.random() * 255
  }, ${Math.random()})`;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  ctx.strokeStyle = color;
  ctx.stroke();
}
