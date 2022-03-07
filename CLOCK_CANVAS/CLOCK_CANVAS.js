"use strict"


document.getElementById('start').onclick = function () {
   

    let diameter = document.getElementById('diameter').value;

    if(diameter < 200 || diameter > 800) {
        return;
    }


    setTimeout(function(){
        document.querySelector(".inputsClock").style.visibility = 'hidden';
    }, 50);

    let canvas = document.getElementById('wrapper');
    canvas.setAttribute('width', diameter);
    canvas.setAttribute('height', diameter);
    let canvasX = canvas.offsetWidth/2,
    canvasY= canvas.offsetHeight/2,
    radius = diameter/2.5, // радиус (растояние до центра цифр)
	angleValue = 0, // угол
	distanceOfDigits = 30, // расстояние(в градусах) между цифрами на часах
	// для электронных часов
	digitalWatch,
	digitalWatchText,
	digitalWatchWidth = diameter/3,
	digitalWatchHeight = diameter/12,
	radiusForDigitalWatch = diameter/4, // радиус (растояние) для электронных часов;
	// (для стрелки часов)
	elemForArrowHours,
	elemForArrowHoursHeight = diameter/6,
	elemForArrowHoursWidth = diameter/30,
	// для стрелки минут
	elemForArrowMinutes,
	elemForArrowMinutesHeight = diameter/4,
	elemForArrowMinutesWidth = diameter/35,
	// для стрелки секунд
	elemForArrowSeconds,
	elemForArrowSecondsHeight = diameter/3,
	elemForArrowSecondsWidth = diameter/60,
	hoursDeg, //переменная для дальнейшего определение по времени где должна быть стрелка часов
	minutesDeg, //переменная для дальнейшего определение по времени где должна быть стрелка минут
	secondsDeg, //переменная для дальнейшего определение по времени где должна быть стрелка секунд
	hourDigits = 12; //цифры часов (например 1,2,3,4,5,6,7,8,9,10,11,12)

    let context = canvas.getContext('2d');
    context.fillStyle='#FCCA66';
	context.beginPath();
	context.arc(canvasX,canvasY, diameter/2, 0, Math.PI*2, false);
	context.fill();

	for (var i = 1; i <= hourDigits; i++) {
		var smallCircleCX,
			smallCircleCY,
			smallCircleRadius = radius/6.5,
			smallCircleColor = "#48B382",
			angle;

		angleValue += distanceOfDigits;
		angle = angleValue / 180 * Math.PI;

		smallCircleCX = Math.round(canvasX + radius * Math.sin(angle) );
		smallCircleCY = Math.round(canvasY - radius * Math.cos(angle) );

		context.beginPath();
		context.fillStyle = smallCircleColor;
		context.arc(smallCircleCX,smallCircleCY,smallCircleRadius,0,Math.PI*2, false);
		context.fill();

		context.fillStyle ='black';
		context.font ="normal normal 20px 'Times New Roman'";
		context.textAlign='center';
		context.textBaseline='middle';
		context.fillText(i,smallCircleCX, smallCircleCY);
	}


}