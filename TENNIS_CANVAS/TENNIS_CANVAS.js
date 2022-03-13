"use strict";

let wrap = document.getElementById('wrapper'),
    context = wrap.getContext("2d"),
	// работаем с кнопкой старт-------------------------------------------------------------------------------
	buttonStart = document.createElement("input"), //создаём input для кнопки СТАРТ
	// работаем с табло(счет)---------------------------------------------------------------------------------
	scoreBoard = document.createElement("div"), //сoздаём div для табло
	score1 = 0, //очки первого игрока
	score2 = 0, //очки второго игрока
	// работаем с ракетками-----------------------------------------------------------------------------------
	racquet1, //левая ракетка
	racquet2, //правая ракетка
	racquetH, //создаём переменную racquetH для дальнейшей работы с ракетками
	racquetAreaH, //создаём переменную racquetAreaH для дальнейшей работы с ракетками
	// работаем с мячиком-------------------------------------------------------------------------------------
	ball, //создаем мячик)
	ballH, //создаём переменную ballH для дальнейшей работы с мячиком
	areaH, //создаём переменную areaH для дальнейшей работы с мячиком
	// работаем с таймером------------------------------------------------------------------------------------
	// settimeout, //создаём переменную settimeout для дальнейшей работы с таймером
	controlGame = 1, //для контроля состаяния игры

	// работаем с сообщением----------------------------------------------------------------------------------
	messageGoal = document.createElement("div"), //сoздаём div для текста которая будет отображаться когда будет гол
    messageGoalText = "Гол!";

// работаем с сообщением----------------------------------------------------------------------------------
// messageGoal.classList.add("messageGoal");
// messageGoal = wrap.appendChild(messageGoal);

// работаем с кнопкой старт-----------------------------------------------------------------------------------
buttonStart.type = "button"; //задаём тип(кнопка)
buttonStart.value = "старт!"; //задаем значение(то что будет отображаться на кнопке)
buttonStart.classList.add('buttonStart');//устанавливаем готовый CSS класс
buttonStart = document.body.insertBefore(buttonStart, document.body.children[0]); //созданную кнопку делаем дочерным элементом body
buttonStart.onclick = start; //на события onclick ставим функцию start(при клике на кнопку запусскаем функцию)

// работаем с табло(счет)-------------------------------------------------------------------------------------
scoreBoard.classList.add('scoreBoard');//устанавливаем готовый CSS класс
scoreBoardInnerHTML(); //вызываем функцию чтоб на табло вывести очки(score1 и score2) игроков
scoreBoard = document.body.insertBefore(scoreBoard, document.body.children[1]); //созданный табло делаем дочерным элементом body
// работаем с ракетками---------------------------------------------------------------------------------------
racquetH = {
	// первая(левая) ракетка
	racquet1PosX: 0.5,
	racquet1PosY: canvaS.getBoundingClientRect().height/2 - 60,
	racquet1Speed: 0,
	// вторая(правая) ракетка
	racquet2PosX: canvaS.getBoundingClientRect().width - 10,
	racquet2PosY: canvaS.getBoundingClientRect().height/2 - 60,
	racquet2Speed: 0,
	width: 10,
	height: 120,

	update: function() {
					context.fillStyle = "#09AA57";
					context.fillRect(this.racquet1PosX, this.racquet1PosY, this.width, this.height);
					
					context.fillStyle = "#191497";
					context.fillRect(this.racquet2PosX , this.racquet2PosY, this.width, this.height);
			}
};


racquetAreaH = {
	width: 10,
	height: wrap.getBoundingClientRect().height
};

racquetH.update();

// работаем с мячиком-----------------------------------------------------------------------------------------

ballH = {
	posX: canvaS.getBoundingClientRect().width/2,
	posY: canvaS.getBoundingClientRect().height/2 - 15,
	speedX: 0,
	speedY: 0,
	width: 30,
	height: 30,
	radius: 15,

	update: function() {
				context.beginPath();
				context.fillStyle = "#F02137";
				context.arc(this.posX, this.posY, this.radius, 0, Math.PI*2, false);
				context.fill();
			}
};

areaH = {
	width: wrap.getBoundingClientRect().width,
	height: wrap.getBoundingClientRect().height
};

ballH.update();

// Надо в обработчике keydown/keyup вызывать preventDefault.
window.addEventListener("keydown", function(EO) {
	EO = EO || window.event;
    EO.preventDefault();

	if(controlGame>0){
		return;
	}  

	if(EO.keyCode === 17) {
		racquetH.racquet1Speed = 0;
	}
	
	if(EO.keyCode === 40) {
		racquetH.racquet1Speed = 0;
	}  

    if (EO.keyCode === 17) {
   		racquetH.racquet1Speed = 5;
   	}

   	if (EO.keyCode === 16) {
   		racquetH.racquet1Speed = -5;
   	}

   	if (EO.keyCode === 40) {
   		racquetH.racquet2Speed = 5;
   	}

   	if (EO.keyCode === 38 ) {
   		racquetH.racquet2Speed = -5;
   	}
		
});

window.addEventListener("keyup", function(EO) {
	EO = EO || window.event;
    EO.preventDefault();

    if (EO.keyCode === 17) {
   		racquetH.racquet1Speed = 0;
   	}

   	if (EO.keyCode === 16) {
   		racquetH.racquet1Speed = 0;
   	}

   	if (EO.keyCode === 40) {
   		racquetH.racquet2Speed = 0;
   	}

   	if (EO.keyCode === 38) {
   		racquetH.racquet2Speed = 0;
   	}
});


//ф-ция для того чтоб на табло выводили очки(score1 и score2) игроков
function scoreBoardInnerHTML() {
	scoreBoard.innerHTML = score1 + ":" + score2;
}

//ф-ция для того чтоб запустить игру
function start() {
	if(controlGame) {
		controlGame = 0;
		messageGoal.innerHTML = "";
	    ballH.speedX = 8;//4
	    ballH.speedY = 3;//2
	    ballH.posX = wrap.getBoundingClientRect().left + wrap.getBoundingClientRect().width/2 - ball.getBoundingClientRect().width/2;
	    ballH.posY = wrap.getBoundingClientRect().top + wrap.getBoundingClientRect().height/2 - ball.getBoundingClientRect().height/2;
	}
	
  
}
 // работаем с таймером----------------------------------------------------------------------------------------
 requestAnimationFrame(tick);
// ф-ция для того чтоб мяч двигался, не выходило из рамки и т.д.
function tick() {
	// работаем с ракетками-----------------------------------------------------------------------------------
	racquetH.update();
	racquetH.racquet1PosY += racquetH.racquet1Speed;
	// вылетела ли ракетка ниже пола?
	if (racquetH.racquet1PosY + racquetH.height > (wrap.getBoundingClientRect().top + racquetAreaH.height)) {
		racquetH.racquet1PosY = wrap.getBoundingClientRect().top + racquetAreaH.height - racquetH.height;
	}

   	// вылетела ли ракетка выше потолка?
	if (racquetH.racquet1PosY < wrap.getBoundingClientRect().top) {
		racquetH.racquet1PosY = wrap.getBoundingClientRect().top;
	}

   	racquetH.racquet2PosY += racquetH.racquet2Speed;
   	// вылетела ли ракетка ниже пола?
	if (racquetH.racquet2PosY + racquetH.height > (wrap.getBoundingClientRect().top + racquetAreaH.height)) {
		racquetH.racquet2PosY = wrap.getBoundingClientRect().top + racquetAreaH.height - racquetH.height;
	}

   	// вылетела ли ракетка выше потолка?
	if (racquetH.racquet2PosY < wrap.getBoundingClientRect().top) {
		racquetH.racquet2PosY = wrap.getBoundingClientRect().top;
	}

	// работаем с мячиком-------------------------------------------------------------------------------------
	ballH.posX -= ballH.speedX;
	// вылетел ли мяч правее стены?
	if ((ballH.posY + ballH.height < racquetH.racquet2PosY || ballH.posY > (racquetH.racquet2PosY + racquetH.height)) && ballH.posX+ballH.width >= (wrap.getBoundingClientRect().left + wrap.getBoundingClientRect().width)) {
		
		score1 += 1;
		scoreBoardInnerHTML();
		ballH.speedX = 0;
		ballH.speedY = 0;
		messageGoal.innerHTML = messageGoalText;

		ballH.posX = wrap.getBoundingClientRect().left + wrap.getBoundingClientRect().width - ballH.width - 1;

		controlGame = 1;	

	} else if (!(ballH.posY + ballH.height < racquetH.racquet2PosY || ballH.posY > (racquetH.racquet2PosY + racquetH.height)) && ballH.posX+ballH.width > (racquetH.racquet2PosX)) {
		ballH.speedX =- ballH.speedX;
        ballH.posX = wrap.getBoundingClientRect().left + wrap.getBoundingClientRect().width - racquetH.width - ballH.width;
	}

    // вылетел ли мяч левее стены
	if ((ballH.posY + ballH.height < racquetH.racquet1PosY || ballH.posY > (racquetH.racquet1PosY + racquetH.height)) && ballH.posX <= (wrap.getBoundingClientRect().left)) {
		
		score2 += 1;
		scoreBoardInnerHTML();
		ballH.speedX = 0;
		ballH.speedY = 0;

		messageGoal.innerHTML = messageGoalText;

		ballH.posX = wrap.getBoundingClientRect().left + 1;

		controlGame = 1;
	
	} else if (!(ballH.posY + ballH.height < racquetH.racquet1PosY || ballH.posY > (racquetH.racquet1PosY + racquetH.height)) && ballH.posX < (racquetH.width + racquetH.racquet1PosX)) {
		ballH.speedX =- ballH.speedX;
        ballH.posX = wrap.getBoundingClientRect().left + racquetH.width;
	}
	
    ballH.posY -= ballH.speedY;
    // вылетел ли мяч ниже пола?
    if (ballH.posY + ballH.height > (wrap.getBoundingClientRect().top + areaH.height)) {
        ballH.speedY =- ballH.speedY;
        ballH.posY = wrap.getBoundingClientRect().top + areaH.height - ballH.height;
    }

    // вылетел ли мяч выше потолка?
    if (ballH.posY < wrap.getBoundingClientRect().top) {
        ballH.speedY =- ballH.speedY;
        ballH.posY = wrap.getBoundingClientRect().top;
    }

    ballH.update();

    requestAnimationFrame(tick);

}    