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
	digitalWatchText,
	digitalWatchWidth = diameter/3,
	digitalWatchHeight = diameter/12,
	radiusForDigitalWatch = diameter/4, // радиус (растояние) для электронных часов;
	// (для стрелки часов)
	elemForArrowHoursHeight = diameter/6,
	elemForArrowHoursWidth = diameter/30,
	// для стрелки минут
	elemForArrowMinutesHeight = diameter/4,
	elemForArrowMinutesWidth = diameter/35,
	// для стрелки секунд
	elemForArrowSecondsHeight = diameter/3,
	elemForArrowSecondsWidth = diameter/60,
	hoursDeg, //переменная для дальнейшего определение по времени где должна быть стрелка часов
	minutesDeg, //переменная для дальнейшего определение по времени где должна быть стрелка минут
	secondsDeg, //переменная для дальнейшего определение по времени где должна быть стрелка секунд
	hourDigits = 12; //цифры часов (например 1,2,3,4,5,6,7,8,9,10,11,12)

	function arrows() {

		// for big clock

		let context = canvas.getContext('2d');
        context.fillStyle='#FCCA66';
	    context.beginPath();
	    context.arc(canvasX,canvasY, diameter/2, 0, Math.PI*2, false);
	    context.fill();

	    for (let i = 1; i <= hourDigits; i++) {
	    	let smallCircleCX,
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
	    	context.font ="normal bold 20px 'Times New Roman'";
	    	context.textAlign='center';
	    	context.textBaseline='middle';
	    	context.fillText(i,smallCircleCX, smallCircleCY);
	    }

		let time = new Date();
		console.log(time.toLocaleTimeString());

		// for digitalclock

	    context.globalCompositeOperation = "source-over";
	    context.fillStyle = "#FCCA66";
	    context.beginPath();
	    context.fillRect(canvasX - digitalWatchWidth/2, canvasY - radiusForDigitalWatch - digitalWatchHeight/2, diameter/3, diameter/12);
	    context.fill();
    
	    context.fillStyle = "black";
	    digitalWatchText = time.toLocaleTimeString();
	    context.font ="normal bold 20px 'Times New Roman'";
	    context.textAlign='center';
	    context.textBaseline='middle';
	    context.fillText(digitalWatchText, canvasX, canvasY - radiusForDigitalWatch);	
	    context.fill();

		//for hours 

		hoursDeg = 30 * (time.getHours() + (1 / 60) * time.getMinutes());
	    context.strokeStyle = "black";
	    context.lineWidth = elemForArrowHoursWidth;
	    context.lineCap = "round";
	    context.beginPath();
	    context.moveTo(canvasX, canvasY);
	    context.lineTo(canvasX + elemForArrowHoursHeight * Math.sin(hoursDeg/180*Math.PI), canvasY - elemForArrowHoursHeight * Math.cos(hoursDeg/180*Math.PI));
	    context.stroke();
		//for minutes
		minutesDeg = 6 * (time.getMinutes() + (1 / 60) * time.getSeconds());
	    context.strokeStyle = "black";
	    context.lineWidth = elemForArrowMinutesWidth;
	    context.lineCap = "round";
	    context.beginPath();
	    context.moveTo(canvasX, canvasY);
	    context.lineTo(canvasX + elemForArrowMinutesHeight * Math.sin(minutesDeg/180*Math.PI), canvasY - elemForArrowMinutesHeight * Math.cos(minutesDeg/180*Math.PI));
	    context.stroke();
		//for seconds
		secondsDeg = 6 * time.getSeconds();
	    context.strokeStyle = "red";
	    context.lineWidth = elemForArrowSecondsWidth;
	    context.lineCap = "round";
	    context.beginPath();
	    context.moveTo(canvasX, canvasY);
	    context.lineTo(canvasX + elemForArrowSecondsHeight * Math.sin(secondsDeg/180*Math.PI), canvasY - elemForArrowSecondsHeight * Math.cos(secondsDeg/180*Math.PI));
	    context.stroke();
		
		setTimeout(arrows,1020-time.getMilliseconds());

	}

	
    arrows();

}