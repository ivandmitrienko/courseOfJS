'use strict'

document.getElementById('start').onclick = function (EO) {


    let wrap = document.getElementById('clock'), 
	wrapCenterX = wrap.offsetLeft + wrap.offsetWidth / 2, // узнаем центр DIV(обвёртки) по X
	wrapCenterY = wrap.offsetTop + wrap.offsetHeight / 2, // узнаем центр DIV(обвёртки) по Y
	wrapChildElemForDigitalWatch = document.createElement("div"), // создаем DIV(для электронных часов)
	radius = 120, // радиус (растояние)
	radiusForDigitalWatch = 70, // радиус (растояние) для электронных часов
	angleValue = 0, // угол
	distanceOfDigits = 30, // расстояние(в градусах) между цифрами на часах
	time = new Date(), //текущее время
	elemForArrowHours = document.createElement("div"), // создаем DIV(для стрелки часов)
	elemForArrowMinutes = document.createElement("div"), // создаем DIV(для стрелки минут)
	elemForArrowSeconds = document.createElement("div"), // создаем DIV(для стрелки секунд)
	hoursDeg = 30 * (time.getHours() + (1 / 60) * time.getMinutes()), //определяем по времени где должна быть стрелка часов
	minutesDeg = 6 * (time.getMinutes() + (1 / 60) * time.getSeconds()), //определяем по времени где должна быть стрелка минут
	secondsDeg = 6 * time.getSeconds() - 6, //определяем по времени где должна быть стрелка секунд
	hourDigits = 12; //цифры часов (например 1,2,3,4,5,6,7,8,9,10,11,12)


}



    




