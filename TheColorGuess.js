var squares = document.querySelectorAll(".square");
var newColor = document.querySelector("#newColor");
var message = document.querySelector("#Message");
var colorDisplay = document.querySelector("#colorDisplay");
var mainHeader = document.querySelector("#mainHeader");
fillRandomColor();
var pickedColor = squares[pickRandomColor(Number(6))].style.backgroundColor;
colorDisplay.textContent = pickedColor.toUpperCase();
mainHeader.style.backgroundColor = "blue";
message.textContent = "";
initializeEventListenenrs();


newColor.addEventListener("click", function(){
	fillRandomColor();
	pickedColor = squares[pickRandomColor(Number(6))].style.backgroundColor;
	mainHeader.style.backgroundColor = "blue";
	colorDisplay.textContent = pickedColor.toUpperCase();
	message.textContent = "";
	initializeEventListenenrs();
});



function pickRandomColor()
{
	return Math.floor(Math.random()*(6));
}
function fillSameColor(fillingColor)
{
	for(var i = 0; i < 6; i++)
		squares[i].style.backgroundColor = fillingColor;
}
function randomColor()
{
	var r = Math.floor(Math.random() * 255);
	var b = Math.floor(Math.random() * 255);
	var g = Math.floor(Math.random() * 255);

	return"rgb(" + r + ", " + g + ", " + b + ")";
}
function fillRandomColor()
{
	var i = 0;
	for(i = 0; i < 6; i++)
	{
		squares[i].style.backgroundColor = randomColor();
	}

}
function initializeEventListenenrs()
{
	for(var i = 0; i < 6; i++)
	{
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor; 
			if(clickedColor === pickedColor)
			{
				fillSameColor(clickedColor);
				message.textContent = "Correct!";
				mainHeader.style.backgroundColor = pickedColor;

			}
			else
			{
				message.textContent = "Try Again";
				this.style.backgroundColor = "#232323";
			}
		});
	}
}