var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d"); //super object contains methods and functions used for drawing...
// c.fillStyle = "blue";
// c.fillRect(100, 100, 100, 100); //draw simple box
// c.fillStyle = "yellow";
// c.fillRect(400, 100, 100, 100); //take the fill style above it
// c.fillStyle = "orange";
// c.fillRect(300, 300, 100, 100);

// //line
// c.beginPath();
// c.moveTo(50, 300); //start at
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "red";
// c.stroke();

// //Arc /circle
// c.beginPath(); //draw from a new shape
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = "gray";
// c.stroke();

// //circles at random positions

// for (var i = 0; i < 4; i++) {
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;
//   var randomColor = Math.floor(Math.random() * 16777215).toString(16); //generate random colour
//   randomColor = "#" + randomColor;

//   c.beginPath(); //draw from a new shape
//   c.arc(x, y, 30, 0, Math.PI * 2, false);
//   c.strokeStyle = randomColor;
//   c.stroke();
// }

var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;

var dx = 4;
var dy = 4;
var radius = 30;
function animate() {
  requestAnimationFrame(animate); //create a loop with animate function
  c.clearRect(0, 0, window.innerWidth, window.innerHeight); //clear entire canvas

  c.beginPath(); //draw from a new shape
  c.arc(x, y, radius, 0, Math.PI * 2, false);
  c.strokeStyle = "black";
  c.stroke();

  if (x + radius > window.innerWidth || x - radius < 0) dx *= -1;
  if (y + radius > innerHeight || y - radius < 0) dy *= -1;
  x += dx;
  y += dy;
}

animate();
