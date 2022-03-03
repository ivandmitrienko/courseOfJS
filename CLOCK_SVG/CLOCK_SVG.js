'use strict'



document.getElementById('start').onclick = function () {
   

    let diameter = document.getElementById('diameter').value;

    if(diameter < 200 || diameter > 800) {
        return;
    }


    setTimeout(function(){
        document.querySelector(".inputsClock").style.visibility = 'hidden';
    }, 50);

    //строим часы
    let svgClock = document.getElementById('wrapper');
    svgClock.style.display = 'block';
    svgClock.style.width = diameter;
    svgClock.style.height = diameter;
    let bigCircle = document.createElementNS("http://www.w3.org/2000/svg",'circle');
    bigCircle.setAttribute("cx", diameter/2);
    bigCircle.setAttribute("cy", diameter/2);
    bigCircle.setAttribute("r", diameter/2);
    bigCircle.setAttribute("fill", "yellow"); 
    bigCircle = svgClock.appendChild(bigCircle);
    let bigCircleX = bigCircle.getBoundingClientRect().left + bigCircle.getBoundingClientRect().width / 2, //узнаем центр  по X
    bigCircleY = bigCircle.getBoundingClientRect().top + bigCircle.getBoundingClientRect().height / 2; //узнаем центр по Y

    
    // для электронных часов
    let radiusForDigitalWatch = diameter / 4, // растояние до электронных часов от центра основных часов
    DigitalWatch, //создали переменную для электронных часов
	DigitalWatchText,
    radius = diameter / 2.5;// расстояние от цетра часов до центра цифр 
    
    let angleValue = 0, // начальный угол стрелок часов
    distanceOfDigits = 30, // расстояние(в градусах) между цифрами на часах
    time = new Date(), //текущее время
    elemForArrowHours, // стрелка часов
    elemForArrowHoursHeight = diameter/6,
	elemForArrowHoursWidth = diameter/30,
    elemForArrowMinutes, // стрелка минут
    elemForArrowMinutesHeight = diameter/4,
	elemForArrowMinutesWidth = diameter/35,
    elemForArrowSeconds , // стрелка секунд
    elemForArrowSecondsHeight = diameter/3,
	elemForArrowSecondsWidth = diameter/60,
    // hoursDeg = 30 * (time.getHours() + (1 / 60) * time.getMinutes()), //определяем по времени где должна быть стрелка часов
    hoursDeg = (time.getHours()%12)/12 * 360 + (360/12 * (time.getMinutes()/60)), //определяем по времени где должна быть стрелка часов
    minutesDeg = 6 * (time.getMinutes() + (1 / 60) * time.getSeconds()), //определяем по времени где должна быть стрелка минут
    secondsDeg = 6 * time.getSeconds() - 6, //определяем по времени где должна быть стрелка секунд
    hourDigits = 12; //цифры часов (например 1,2,3,4,5,6,7,8,9,10,11,12)


    

    for (let i = 1; i <= hourDigits; i++) {
        let clockChildElem = document.createElementNS("http://www.w3.org/2000/svg",'circle'),// создаем circle (для номеров часов)
            clockChildElemText = document.createElementNS("http://www.w3.org/2000/svg", "text"),// создаем текст(т.е. цифры) для кружочков
            angle,
            clockChildElemCenterX,
            clockChildElemCenterY;
    
        angleValue += distanceOfDigits;
        angle = angleValue / 180 * Math.PI;

        clockChildElemCenterX = Math.round(bigCircleX + radius * Math.sin(angle) - bigCircle.getBoundingClientRect().left); // узнаем центр дочерного элемента по X
        clockChildElemCenterY = Math.round(bigCircleY - radius * Math.cos(angle) - bigCircle.getBoundingClientRect().top); // узнаем центр дочерного элемента по Y

        // работа над кружочками
	    clockChildElem.setAttribute("cx", clockChildElemCenterX);
	    clockChildElem.setAttribute("cy", clockChildElemCenterY);
	    clockChildElem.setAttribute("r", diameter/15);
	    clockChildElem.setAttribute("fill", "#48B382");
	    clockChildElem = svgClock.appendChild(clockChildElem);
    
	    // работа над тексток(т.е цифры)
	    clockChildElemText.innerHTML = i;
	    clockChildElemText.setAttribute("x", clockChildElemCenterX);
	    clockChildElemText.setAttribute("y", clockChildElemCenterY);
	    clockChildElemText.setAttribute("text-anchor", "middle");
	    clockChildElemText.setAttribute("dominant-baseline", "central");
	    clockChildElemText.style.fontSize = diameter/15;
	    clockChildElemText = svgClock.appendChild(clockChildElemText);
       
    }
    
    // для электронных часов
    DigitalWatch = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    svgClock.appendChild(DigitalWatch);
    DigitalWatch.setAttribute("x", (bigCircleX - DigitalWatch.getBoundingClientRect().width / 2) - svgClock.getBoundingClientRect().left);
    DigitalWatch.setAttribute("y", (bigCircleY - radiusForDigitalWatch) - svgClock.getBoundingClientRect().left);
    DigitalWatch.setAttribute("fill", "none");
    DigitalWatchText = document.createElementNS("http://www.w3.org/2000/svg", "text");
    DigitalWatchText.setAttribute("x", (bigCircleX - DigitalWatch.getBoundingClientRect().width / 2) - svgClock.getBoundingClientRect().left);
    DigitalWatchText.setAttribute("y", (bigCircleY - radiusForDigitalWatch) - svgClock.getBoundingClientRect().top);
    DigitalWatchText.setAttribute("text-anchor", "middle");
    DigitalWatchText.setAttribute("dominant-baseline", "central");
    DigitalWatchText.style.fontSize = 25;
    svgClock.appendChild(DigitalWatchText);
    
    // для стрелок часов
    elemForArrowHours = document.createElementNS("http://www.w3.org/2000/svg", "line");
    elemForArrowHours.setAttribute("x1", bigCircleX - svgClock.getBoundingClientRect().left );
    elemForArrowHours.setAttribute("y1", bigCircleY -  elemForArrowHoursHeight - svgClock.getBoundingClientRect().top);
    elemForArrowHours.setAttribute("x2", bigCircleX - svgClock.getBoundingClientRect().left);
    elemForArrowHours.setAttribute("y2", diameter/2);
    elemForArrowHours.setAttribute("stroke", "black");
    elemForArrowHours.setAttribute("stroke-width", elemForArrowHoursWidth);
    elemForArrowHours.setAttribute("stroke-linecap", "round");
    svgClock.appendChild(elemForArrowHours);
    
    // для стрелок минут
    elemForArrowMinutes = document.createElementNS("http://www.w3.org/2000/svg", "line");
    elemForArrowMinutes.setAttribute("x1", bigCircleX - svgClock.getBoundingClientRect().left);
    elemForArrowMinutes.setAttribute("y1", bigCircleY - elemForArrowMinutesHeight - svgClock.getBoundingClientRect().top);
    elemForArrowMinutes.setAttribute("x2", bigCircleX - svgClock.getBoundingClientRect().left);
    elemForArrowMinutes.setAttribute("y2", diameter/2);
    elemForArrowMinutes.setAttribute("stroke", "black");
    elemForArrowMinutes.setAttribute("stroke-width", elemForArrowMinutesWidth);
    elemForArrowMinutes.setAttribute("stroke-linecap", "round");
    svgClock.appendChild(elemForArrowMinutes);
    
    // для стрелок секунд
    elemForArrowSeconds = document.createElementNS("http://www.w3.org/2000/svg", "line");
    elemForArrowSeconds.setAttribute("x1", bigCircleX - svgClock.getBoundingClientRect().left);
    elemForArrowSeconds.setAttribute("y1", bigCircleY - elemForArrowSecondsHeight - svgClock.getBoundingClientRect().top);
    elemForArrowSeconds.setAttribute("x2", bigCircleX - svgClock.getBoundingClientRect().left);
    elemForArrowSeconds.setAttribute("y2", diameter/2);
    elemForArrowSeconds.setAttribute("stroke", "red");
    elemForArrowSeconds.setAttribute("stroke-width", elemForArrowSecondsWidth);
    elemForArrowSeconds.setAttribute("stroke-linecap", "round");
    svgClock.appendChild(elemForArrowSeconds);
    
    // определяем точку трансформации стрелок часов, минут, секунд по оси X и Y
    elemForArrowHours.style.transformOrigin = "50% 50%";
    elemForArrowMinutes.style.transformOrigin = "50% 50%";
    elemForArrowSeconds.style.transformOrigin = "50% 50%";


 //    функция для определения положение электронных часов и стрелок для часов, минут, секунд
    function arrows() {
        // электронные часы
        let time = new Date(); //текущее время
        DigitalWatchText.innerHTML = time.toLocaleTimeString();
        // секундные стрелки
        secondsDeg += 6; //каждую секунду стрелка секунда будет двигать на 6 градусов
        elemForArrowSeconds.style.transform = "rotate(" + secondsDeg + "deg)";
        // минутные стрелки
        minutesDeg += 6 * (1/60); //каждую секунду стрелка минута будет двигать на 6*(1/60) градусов
        elemForArrowMinutes.style.transform = "rotate(" + minutesDeg + "deg)";
        // часовые стрелки
        hoursDeg += 6 * (1/360); //каждую секунду стрелка часа будет двигать на 6*(1/360) градусов
        elemForArrowHours.style.transform = "rotate(" + hoursDeg + "deg)"; 
        setTimeout(arrows,1020-time.getMilliseconds());
    }
    
   
    arrows();
//     // window.onload = arrows; // вызываем функцию arrows на момент загрузки страницы
//     // window.setInterval (arrows, 1000); // устанавливаем setInterval на 1 секунду и выполняем код каждую секунду чтоб стрелки часов, минут и секунд обновляли положени каждую секунду
    
   
}  


    
	





    
 
    

   
    

    
    
	






    




