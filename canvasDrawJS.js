/*
	Barak Stout
*/

// ---------------- //
// Config Variables //
// ---------------- //

// size of the grid
var size = 20;  

// the canvas ID from the HTML protion
var canvasID = "canvas"; 

// ---------------- //
// Global Variables //
// ---------------- // 

var canvas = document.getElementById(canvasID);
var context = canvas.getContext("2d");
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

// ---------- //
// drawGrid() //
// ---------- //
function drawGrid()
{
	for (var y = 0; y <= canvasWidth; y += size) 
	{
		context.moveTo(y, 0);
		context.lineTo(y, canvasHeight);
	}


	for (var x = 0; x <= canvasHeight; x += size) 
	{
		context.moveTo(0, x);
		context.lineTo(canvasWidth, x);
	}

	context.strokeStyle = "gray";
	context.stroke();
	
}

// --------------------- //
// consolePrintMouseXY() //
// --------------------- //
function consolePrintMouseXY(event)
{
	var coords = "(x,y): (" + event.clientX + "," + event.clientY + ")";
	console.log(coords);
}

