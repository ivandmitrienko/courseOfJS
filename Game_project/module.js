"use strict"

//создаем объект игры
let game = {
    width: 509,
    height: 340,
    ctx: "",
    platform: "",
    ball: "",
    rows: 4,
    cols: 5,
    running: true,
    blocks: [],
    score: 0,
    lives: 3,
    //для передачи картинок по названию
    sprites: {
      background: "",
      platform: "",
      ball: "",
      blocks: ""
    },
    // canvas
    init: function() {
        let canvas = document.getElementById("mycanvas");
        //для отрисовки спрайтов, загружаем контекст
        this.ctx = canvas.getContext("2d");
        // движение платформы
        window.addEventListener("keydown", function(EO) {
            EO = EO || window.event;
            EO.preventDefault();
          if (EO.keyCode == 37) {
            game.platform.dx = -game.platform.velocity;
          } else if (EO.keyCode == 39) {
            game.platform.dx = game.platform.velocity;
          } else if (EO.keyCode == 32) {
            game.platform.releaseBall();
          }
        });
        window.addEventListener("keyup", function(EO) {
            EO = EO || window.event;
            EO.preventDefault();
            game.platform.stop(); //когда отпускаем кнопку платформа должна остановиться
        });
    },


    //загружаем картинки
    load: function() {
        this.sprites.background = new Image();
        this.sprites.background.src ="./img/background.png";
        this.sprites.platform = new Image();
        this.sprites.platform.src ="./img/platform.png";
        this.sprites.ball = new Image();
        this.sprites.ball.src ="./img/ball.png";
        this.sprites.blocks = new Image();
        this.sprites.blocks.src ="./img/blocks.png";
    },

    //выводим блоки
    create: function() {
      for (let row = 0; row < this.rows; row++) {
        for (let col = 0; col < this.cols; col++) {
          this.blocks.push({
            x: 84 * col + 50,
            y: 30 * row + 35,
            width: 80,
            height: 24,
            isAlive: true
          });
        }
      }
    },

    //вызываем поочередно что нам нужно
    start: function() {
      this.init();
      this.load();
      this.create();
      this.run();
    },
    //для отрисовки изображений
    render: function() {
      // очищает выбранную прямоугольную область
      this.ctx.clearRect(0, 0, this.width, this.height);
      // где отрисовываем изображение координаты х,y
      this.ctx.drawImage(this.sprites.background, 0, 0);
      // отрисовываем платформу
      this.ctx.drawImage(this.sprites.platform, this.platform.x, this.platform.y);
      // отрисовываем мяч
      this.ctx.drawImage(
        this.sprites.ball,
        this.ball.width * this.ball.frame,
        0,
        this.ball.width,
        this.ball.height,
        this.ball.x,
        this.ball.y,
        this.ball.width,
        this.ball.height
      );
      // отрисовываем блоки
      this.blocks.forEach(function(element) {
        if (element.isAlive) {
          this.ctx.drawImage(this.sprites.blocks, element.x, element.y);
        }
      }, this);

      let scores = document.getElementById("score");
    scores.innerHTML = "Ihre Punkte: " + this.score;
  },
  
  // до отрисовки, вся игровая логика
    update: function() {
    if (this.ball.collide(this.platform)) {
      this.ball.bumpPlatform(this.platform);
    }
    //движение платформы
    if (this.platform.dx) {
      this.platform.move();
    } //движение мяча
    if (this.ball.dx || this.ball.dy) {
      this.ball.move();
    }
    //для каждого блока проверяем, сталкивается ли мяч с блоком
    this.blocks.forEach(function(element) {
      if (element.isAlive) {
        if (this.ball.collide(element)) {
          this.ball.bumpBlock(element);
        }
      }
    }, this);
    this.ball.checkBounds();
  },
  //отвечается за перерисовку и каллбак функция
  run: function() {
    this.update();
    this.render();

    if (this.running) {
      // произвести анимацию перерисовывать канвас
      window.requestAnimationFrame(function() {
        game.run();
      });
    }
  },
  over: function(message) {
    alert(message);
    this.running = false;
    window.location.reload();
  }
};
//установить координаты мяча
game.ball = {
  width: 24,
  height: 24,
  frame: 0,
  x: 250,
  y: 276,
  dx: 0,
  dy: 0,
  velocity: 3,
  jump: function() {
    this.dy = -this.velocity;
    this.dx = -this.velocity;
    this.animate();
  },
  animate: function() {
    setInterval(function() {
      ++game.ball.frame;

      if (game.ball.frame > 3) {
        game.ball.frame = 0;
      }
    }, 200);
  },
  move: function() {
    this.x += this.dx;
    this.y += this.dy;
  },
  collide: function(element) {
    //проверяем координаты на следующем кадре
    let x = this.x + this.dx;
    let y = this.y + this.dx;

    if (
      x + this.width > element.x && //проверяем координаты, правая сторона мяча
      x < element.x + element.width && //левая сторона мяча
      y + this.height > element.y && //верхняя сторона мяча
      y < element.y + element.height //нижняя сторона мяча
    ) {
      return true; // столкновение есть
    }
    return false;
  },
  //
  bumpBlock: function(block) {
    this.dy *= -1; // поменять движение на противоположную
    block.isAlive = false; // уничтожает блок при касании
    ++game.score;

    if (game.score == game.blocks.length) {
      setTimeout(function() {
        game.over("Congratulation! You Win");
      }, 100);
    }
  },
  // проверяем на левой ли стороне мяч
  onTheleftSide: function(platform) {
    return this.x + this.width / 2 < platform.x + platform.width / 2;
  },
  bumpPlatform: function(platform) {
    this.dy = -this.velocity; // поменять движение на противоположную при столкновении с платформой
    // проверяем на какую сторону платформы мяч попал и меняем направление на лево или направо соответственно
    this.dx = this.onTheleftSide(platform) ? -this.velocity : this.velocity;
  },
  //где текущая координата мяча относительно канваса
  checkBounds: function() {
    let x = this.x + this.dx;
    let y = this.y + this.dy;
    //если левее левой стороны
    if (x < 0) {
      this.x = 0; //устанавливаем коорд. 0
      this.dx = this.velocity; //направим мяч в право
    } else if (x + this.width > game.width) {
      //если правее правой стороны
      this.x = game.width - this.width; //коорд. по х делаем равной правой стороне экрана
      this.dx = -this.velocity; //направим мяч в право
    } else if (y < 0) {
      //если выше верхней части экрана
      this.y = 0; //устанавливаем коорд. 0
      this.dy = this.velocity; //направим мяч в право
    } else if (y + this.height > game.height) {
      //если ниже нижней стороны, game over
      game.over("GAME OVER");
    }
  }
};
//установить координаты платформы
game.platform = {
  x: 210,
  y: 300,
  velocity: 6, //максимальная скорость
  dx: 0, //платформа неподвижна, текущая скорость
  ball: game.ball, //присваиваем объект мяча
  width: 100,
  height: 26,
  releaseBall: function() {
    if (this.ball) {
      this.ball.jump();
      this.ball = false; //не находиться на платформе
    }
  },
  move: function() {
    this.x += this.dx;
    // мяч двигается вместе с платформой
    if (this.ball) {
      this.ball.x += this.dx;
    }
  },
  // платформа останавливается
  stop: function() {
    this.dx = 0;
    // мяч останавливается, если он на платформе
    if (this.ball) {
      this.ball.dx = 0;
    }
  }
};

// страница полностью загрузиться со всеми 

game.start();

