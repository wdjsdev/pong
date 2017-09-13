var canvas,ctx,w,h,color;

window.onload = function()
{
	init();
}

function init()
{
	color = "black";
	w = window.innerWidth * .8;
	h = w * .5;
	canvas = createCanvas(w,h);
}
