"use strict"

//создаем объект игры
let game = {
    width: 509,
    height: 400,
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
