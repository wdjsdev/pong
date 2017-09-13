//create the canvas
function createCanvas(w,h)
{
	canvas = document.createElement("canvas");
	document.body.appendChild(canvas);
	ctx = canvas.getContext("2d");

	canvas.width = w;
	canvas.height = h;
	ctx.fillStyle = color;
	ctx.fillRect(0,0,w,h);
	canvas.style.margin = "auto";
	canvas.style.marginTop = "50";
	canvas.style.display = "block";
	return canvas;
}