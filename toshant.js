var canvas = document.getElementById('graph');
var ctx = canvas.getContext('2d');



ctx.beginPath();
ctx.moveTo(0, 20);
ctx.lineWidth = 2;
ctx.strokeStyle = '#4df1a1';
ctx.bezierCurveTo(4, 2, 20, 1, 40, 20);
ctx.bezierCurveTo(80, 28, 50, 12, 78, 20);
ctx.bezierCurveTo(110, 60, 140, 19, 140, 20);

ctx.bezierCurveTo(200, 6, 200, 50, 240, 20);
ctx.bezierCurveTo(250, 8, 260, 50, 300, 10);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = '#ffffff';
ctx.arc(160, 18, 5, 0, Math.PI * 2, true);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = '#77869e';
ctx.lineWidth = 1;
ctx.setLineDash([2, 6]);
ctx.moveTo(0, 22);
ctx.lineTo(375, 22);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(0, 55);
ctx.lineTo(375, 55);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(0, 70);
ctx.lineWidth = 2;
ctx.setLineDash([0, 0]);
ctx.strokeStyle = '#f46069';
ctx.bezierCurveTo(70, 110, 30, 40, 60, 80);
ctx.bezierCurveTo(100, 130, 70, 60, 100, 80);
ctx.bezierCurveTo(130, 120, 120, 80, 140, 80);
ctx.bezierCurveTo(230, 60, 150, 120, 232, 89);
ctx.bezierCurveTo(236, 127, 240, 10, 300, 100);

ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = '#ffffff';
ctx.arc(160, 78, 5, 0, Math.PI * 2, true);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = '#77869e';
ctx.lineWidth = 1;
ctx.moveTo(160, 0);
ctx.lineTo(160, 275);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = '#77869e';
ctx.lineWidth = 1;
ctx.setLineDash([2, 6]);
ctx.moveTo(0, 90);
ctx.lineTo(375, 90);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = '#77869e';
ctx.lineWidth = 1;
ctx.setLineDash([2, 6]);
ctx.moveTo(0, 140);
ctx.lineTo(375, 140);
ctx.stroke();
ctx.closePath();


ctx.fillStyle = "white";
ctx.fillRect(7, 10, 60, 23);
ctx.fillStyle ="#1d3041";
ctx.font =" noraml 13px Avenir";
ctx.fillText("3,000", 20, 24);

ctx.fillStyle = "white";
ctx.fillRect(7, 43, 60, 23);
ctx.fillStyle = "#1d3041";
ctx.font = " noraml 13px Avenir";
ctx.fillText("2,000", 20, 58);


ctx.fillStyle = "white";
ctx.fillRect(7, 79, 60, 23);
ctx.fillStyle = "#1d3041";
ctx.font = " noraml 13px Avenir";
ctx.fillText("1,000", 20, 93);


ctx.fillStyle = "white";
ctx.fillRect(7, 130, 60, 23);
ctx.fillStyle = "#1d3041";
ctx.font = " noraml 13px Avenir";
ctx.fillText("0", 25, 143);

