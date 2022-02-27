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
    let clock = document.getElementById('wrapper');
    clock.style.display = 'block',
    clock.style.width = diameter + 'px',
    clock.style.height = clock.style.width,
    clock.style.backgroundColor = 'yellow',
    clock.style.borderRadius = '100%';
    let clockX = clock.offsetLeft + clock.offsetWidth / 2, // узнаем центр по X
    clockY = clock.offsetTop + clock.offsetHeight / 2, // узнаем центр по Y
    radiusForDigitalWatch = diameter / 4, // растояние до электронных часов от центра основных часов 
    radius = diameter / 2.5;// расстояние от цетра часов до центра цифр
    
    let digitalWatch = document.createElement("div"); // создаем DIV (для электронных часов и далее стили)
    
    let angleValue = 0, // начальный угол стрелок часов
    distanceOfDigits = 30, // расстояние(в градусах) между цифрами на часах
    time = new Date(), //текущее время
    elemForArrowHours = document.createElement("div"), // создаем DIV(для стрелки часов)
    elemForArrowMinutes = document.createElement("div"), // создаем DIV(для стрелки минут)
    elemForArrowSeconds = document.createElement("div"), // создаем DIV(для стрелки секунд)
    hoursDeg = 30 * (time.getHours() + (1 / 60) * time.getMinutes()), //определяем по времени где должна быть стрелка часов
    minutesDeg = 6 * (time.getMinutes() + (1 / 60) * time.getSeconds()), //определяем по времени где должна быть стрелка минут
    secondsDeg = 6 * time.getSeconds() - 6, //определяем по времени где должна быть стрелка секунд
    hourDigits = 12; //цифры часов (например 1,2,3,4,5,6,7,8,9,10,11,12)


    

    for (let i = 1; i <= hourDigits; i++) {
        let clockChildElem = document.createElement("div"),// создаем DIV(для номеров часов)
            angle,
            clockChildElemCenterX,
            clockChildElemCenterY;
    
        angleValue += distanceOfDigits;
        angle = angleValue / 180 * Math.PI;

        // debugger
    
        clockChildElem = clock.appendChild(clockChildElem);//созданный DIV(для номеров часов) делаем дочерным элементом и стилизуем
        if(document.getElementById('diameter').value < 350){
            clockChildElem.classList.add('childElem1');//устанавливаем готовый CSS класс для дочерных элементов 
        } else if (document.getElementById('diameter').value < 550) {
            clockChildElem.classList.add('childElem2');
        } else if (document.getElementById('diameter').value <= 800) {
            clockChildElem.classList.add('childElem3');
        }
        clockChildElem.innerHTML = i;//значением каждого дочерного элемента будет равен i
        
    
        clockChildElemCenterX = clockX + radius * Math.sin(angle); // узнаем центр дочерного элемента по X
        clockChildElemCenterY = clockY - radius * Math.cos(angle); // узнаем центр дочерного элемента по Y
    
        clockChildElem.style.left = Math.round(clockChildElemCenterX - clockChildElem.offsetWidth/2) + "px";
        clockChildElem.style.top = Math.round(clockChildElemCenterY - clockChildElem.offsetHeight/2) + "px";
    }

    // вставляем созданные элементы в конец дочерных элементов clock(обвёртки)
    digitalWatch = clock.appendChild(digitalWatch); //созданный DIV(для электронных часов) делаем дочерным элементом clock(обвёртка)
    elemForArrowHours = clock.appendChild(elemForArrowHours);//созданный DIV(для стрелки часов) делаем дочерным элементом clock(обвёртка)
    elemForArrowMinutes = clock.appendChild(elemForArrowMinutes);//созданный DIV(для стрелки минут) делаем дочерным элементом clock(обвёртка)
    elemForArrowSeconds = clock.appendChild(elemForArrowSeconds);//созданный DIV(для стрелки секунд) делаем дочерным элементом clock(обвёртка)

    // устанавливаем класс для электронных часов и к каждой стрелке
    if(document.getElementById('diameter').value < 350){
        digitalWatch.classList.add("childElemForDigitalWatch1");//устанавливаем готовый CSS класс для дочерных элементов 
    } else if (document.getElementById('diameter').value < 550) {
        digitalWatch.classList.add("childElemForDigitalWatch2");
    } else if (document.getElementById('diameter').value <= 800) {
        digitalWatch.classList.add("childElemForDigitalWatch3");
    }

    if(document.getElementById('diameter').value < 350){
        elemForArrowHours.classList.add("elemForArrowHours1");//устанавливаем готовый CSS класс для дочерных элементов 
    } else if (document.getElementById('diameter').value < 550) {
        elemForArrowHours.classList.add("elemForArrowHours2");
    } else if (document.getElementById('diameter').value <= 800) {
        elemForArrowHours.classList.add("elemForArrowHours3");
    }

    if(document.getElementById('diameter').value < 350){
        elemForArrowMinutes.classList.add("elemForArrowMinutes1");//устанавливаем готовый CSS класс для DIV(для стрелки минут) 
    } else if (document.getElementById('diameter').value < 550) {
        elemForArrowMinutes.classList.add("elemForArrowMinutes2");
    } else if (document.getElementById('diameter').value <= 800) {
        elemForArrowMinutes.classList.add("elemForArrowMinutes3");
    }

    if(document.getElementById('diameter').value < 350){
        elemForArrowSeconds.classList.add("elemForArrowSeconds1");//устанавливаем готовый CSS класс для DIV(для стрелки секунд)
    } else if (document.getElementById('diameter').value < 550) {
        elemForArrowSeconds.classList.add("elemForArrowSeconds2");
    } else if (document.getElementById('diameter').value <= 800) {
        elemForArrowSeconds.classList.add("elemForArrowSeconds3");
    }

    // определяем где будет стоять электронные часы
    digitalWatch.style.left = clockX - digitalWatch.offsetWidth/2 + "px";
    digitalWatch.style.top = clockY - radiusForDigitalWatch + "px";
    // определяем где будет стоять стрелка часа
    elemForArrowHours.style.top = clockY - elemForArrowHours.offsetHeight + "px";
    elemForArrowHours.style.left = clockX - elemForArrowHours.offsetWidth/2 + "px";
    // определяем где будет стоять стрелка минут
    elemForArrowMinutes.style.top = clockY - elemForArrowMinutes.offsetHeight + "px";
    elemForArrowMinutes.style.left = clockX - elemForArrowMinutes.offsetWidth/2 + "px";
    // определяем где будет стоять стрелка секунд
    elemForArrowSeconds.style.top = clockY - elemForArrowSeconds.offsetHeight + "px";
    elemForArrowSeconds.style.left = clockX - elemForArrowSeconds.offsetWidth/2 + "px";
    
    // определяем точку трансформации стрелок часов, минут, секунд по оси X и Y
    elemForArrowHours.style.transformOrigin = "50% 100%";
    elemForArrowMinutes.style.transformOrigin = "50% 100%";
    elemForArrowSeconds.style.transformOrigin = "50% 100%";

    digitalWatch.innerHTML = time.toLocaleTimeString();

 //    функция для определения положение электронных часов и стрелок для часов, минут, секунд
    function arrows() {
        // электронные часы
        let time = new Date(); //текущее время
        digitalWatch.innerHTML = time.toLocaleTimeString();
        // секундные стрелки
        secondsDeg += 6; //каждую секунду стрелка секунда будет двигать на 6 градусов
        elemForArrowSeconds.style.transform = "rotate(" + secondsDeg + "deg)";
        // минутныеные стрелки
        minutesDeg += 6 * (1/60); //каждую секунду стрелка минута будет двигать на 6*(1/60) градусов
        elemForArrowMinutes.style.transform = "rotate(" + minutesDeg + "deg)";
        // часовые стрелки
        hoursDeg += 6 * (1/360); //каждую секунду стрелка часа будет двигать на 6*(1/360) градусов
        elemForArrowHours.style.transform = "rotate(" + hoursDeg + "deg)"; 
        setTimeout(arrows,1000-time.getMilliseconds());
    }
    
   
    arrows();
    // window.onload = arrows; // вызываем функцию arrows на момент загрузки страницы
    // window.setInterval (arrows, 1000); // устанавливаем setInterval на 1 секунду и выполняем код каждую секунду чтоб стрелки часов, минут и секунд обновляли положени каждую секунду
    
}    



    
	





    
 
    

   
    

    
    
	






    




