// Figures

// Square
function TakeSize(obj) {
	var width = parseInt(obj.textSquare.value);
	ShowSquare(width);

}

function ShowSquare(width) {
	var str = "";
	for (var i = 0; i < width; i++) {
		for (var j = 0; j < width; j++) {
			str += "* ";
		}
		str += "<br />";
	}
	document.getElementById("square").innerHTML = str;
}

//Rectangle
function TakeSizeR(obj) {
	var width = parseInt(obj.txtWidthRectangle.value);
	var height = parseInt(obj.txtHeightRectangle.value);
	ShowRectangle(width, height);
}

function ShowRectangle(width, height) {

	var str = "";
	for (var i = 0; i < height; i++) {
		for (var j = 0; j < width; j++) {
			str += "* ";
		}
		str += "<br />"
	}
	document.getElementById("rectangle").innerHTML = str;
}

// Triangle
function TakeSizeT(obj) {
	var height = parseInt(obj.txtHeightTriangle.value);
	ShowTriangle(height);
}

function ShowTriangle(height) {

	var str = "";
	for (var i = 0; i < height; i++) {
		for (var j = i; j < height; j++) {
			str += "* ";
		}
		str += "<br />"
	}
	document.getElementById("triangle").innerHTML = str;
}

// Hour Glass
function TakeSizeHG(obj) {

	var height = parseInt(obj.txtHeightHourGlass.value);
	ShowHourGlass(height);
}

function ShowHourGlass(height) {

	var str = "";
	for (var i = 0; i < height / 2; i++) {
		for (var j = i; j < height/2; j++) {
			str += "* ";
		}
		str += "<br />";
	}

	for (var i = (height % 2 == 1) ? 1 : 0; i < height/2; i++) {
		for (var j = height / 2 - i - 1; j < height/2; j++) {
			str += "* ";
		}
		str += "<br />"
	}

	document.getElementById("hourglass").innerHTML += str;
}

//Calculator

var firstNum = 0;
var secondNum = 0;
var resultNum = 0;
var operation;

function addViewerValue(number) {

	var curvalue = document.getElementById("viewer").innerHTML;

	if (curvalue == "0") //validation on first zero
	{
		curvalue = "";
	}
	if ((curvalue == "+") || (curvalue == "-") || (curvalue == "*") || (curvalue == "/")) //validation on operation
	{
		curvalue = "";
	}

	if ((number == '.') && (curvalue.indexOf('.') != -1)) //validation on second '.'
	{
		number = "";
	}

	if (curvalue.length < 8) //validation on common length
	{
		curvalue = curvalue + number;
	}

	document.getElementById("viewer").innerHTML = curvalue;

}

function ClearViewer()
{
	document.getElementById("viewer").innerHTML = "0";
}

function setOps(ops) {

	if (parseFloat(document.getElementById("viewer").innerHTML) != NaN) {
		firstNum = parseFloat(document.getElementById("viewer").innerHTML);
	} 

	operation = ops;
	document.getElementById("viewer").innerHTML = ops;
}

function Calculate() {
	if (parseFloat(document.getElementById("viewer").innerHTML) != NaN) {
		secondNum = parseFloat(document.getElementById("viewer").innerHTML);
	}
	switch (operation) {
		case '+':
			{
				resultNum = firstNum + secondNum;
				break;
			} 
		case '-':
			{
				resultNum = firstNum - secondNum;
				break;
			} 
		case '*':
			{
				resultNum = firstNum * secondNum;
				break;
			} 
		case '/':
			{
				resultNum = firstNum / secondNum;
				break;
			} 
		default:
	}

	document.getElementById("viewer").innerHTML = resultNum;
}


//Calc of calories

function CalculateCalories(obj) {
	var isMan = obj.sexMan.checked;
	var activity = obj.lstActivity.value;
	var isFormula1 = obj.formula1.checked;
	var isResCal = obj.resCal.checked;
	var isHeightS = obj.heightS.checked;
	var isWeightK = obj.weightK.checked;
	var age = parseInt(obj.txtAge.value);
	var weight = parseInt(obj.txtWeight.value);
	if (isWeightK == false) {
		weight *= 0.453592;
	}
	var height = parseInt(obj.txtHeight.value);
	if (isHeightS == false) {
		height *= 30.48;
	}

	var activityCoef = 0.0;
	switch (activity) {
		case 'veryHigh':
			activityCoef = 1.9;
			break;
		case 'high':
			activityCoef = 1.725;
			break;
		case 'average':
			activityCoef = 1.55;
			break;
		case 'low':
			activityCoef = 1.375;
			break;
		case 'veryLow':
			activityCoef = 1.2;
			break;
	}

	var res = 0;

	if (isFormula1 == true) {
		if (isMan == true) {
			res = (10 * weight + 6, 25 * height - 5 * age + 5) * (activityCoef);
		}
		else {
			res = (10 * weight + 6, 25 * height - 5 * age - 161) * (activityCoef);
		}
	}
	else {
		if (isMan == true) {
			res = (88, 36 + (13, 4 * weight) + 4, 8 * height - 5, 7 * age) * (activityCoef);
		}
		else {
			res = (44, 76 + (9, 2 * weight) + 3, 1 * height - 4, 3 * age) * (activityCoef);
		}
	}

	if (isResCal == false) {
		res *= 4, 1868;
	}
	alert("res = " + res)

}