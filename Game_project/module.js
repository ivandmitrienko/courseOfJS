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
        this.sprites.platform.src ="https://i.postimg.cc/6pMXbzCw/platform.png";
        this.sprites.ball = new Image();
        this.sprites.ball.src ="https://i.postimg.cc/3JC7m3Rk/ball.png";
        this.sprites.blocks = new Image();
        this.sprites.blocks.src ="https://i.postimg.cc/0ykvChMc/blocks.png";
    },
