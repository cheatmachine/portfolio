const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight-43);

ctx.fillStyle = "black";

ctx.beginPath();
ctx.fillRect(0, 0, width, height);

let circle = [];

// for (let i = 0; i < 20; i++) {
//   circle[i] = new Circle(canvas, ctx, {
//     x: 30,
//     y: 30
//   });
// }

function play() {
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);

  circle.forEach(circle => {
    circle.move();
    circle.draw();
  });

  circle = circle.filter(c => c.radius > 2);

  requestAnimationFrame(play);
}
play();

canvas.addEventListener("click", ev => {
  for (let i = 0; i < 5; i++)
    circle.push(
      new Circle(canvas, ctx, {
        x: ev.clientX,
        y: ev.clientY
      })
    );
});
