var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.rect(50, 150, 250, 200);
ctx.strokeStyle = "#A7D5E6";
ctx.stroke();
ctx.fillStyle = "#A7D5E6";
ctx.fill();

// Le Toit
var t = document.getElementById("myCanvas");
var ttx = t.getContext("2d");
ttx.beginPath();
ttx.moveTo(50, 150);
ttx.lineTo(170, 0);
ttx.lineTo(300, 150);
ttx.strokeStyle = "#D08C37";
ttx.stroke();
ttx.fillStyle = "#D08C37";
ttx.fill();

// La fenêtre droite
var f = document.getElementById("myCanvas");
var ftx = f.getContext("2d");
ftx.beginPath();
ftx.rect(200, 200, 40, 40)
ftx.strokeStyle = "#C9C9C9";
ftx.stroke();
ftx.fillStyle = "#C9C9C9";
ftx.fill();

//La fenêtre gauche
var g = document.getElementById("myCanvas");
var gtx = g.getContext("2d");
gtx.beginPath();
gtx.rect(100, 200, 40, 40)
gtx.strokeStyle = "#C9C9C9";
gtx.stroke();
gtx.fillStyle = "#C9C9C9";
gtx.fill();


// La Porte
var p = document.getElementById("myCanvas");
var ptx = p.getContext("2d");
ptx.beginPath();
ptx.rect(130, 280, 70, 70);
ptx.strokeStyle = "#C9C9C9";
ptx.stroke();
ptx.fillStyle = "#C9C9C9";
ptx.fill();
