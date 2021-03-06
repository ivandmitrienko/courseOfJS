
// CANVAS
const cvs = document.getElementById("breakout");
const ctx = cvs.getContext("2d");
cvs.style.border = "1px solid #0ff";
ctx.lineWidth = 3;

// GAME VARIABLES AND CONSTANTS
const PADDLE_WIDTH = cvs.width/5;
const PADDLE_MARGIN_BOTTOM = cvs.width/10;
const PADDLE_HEIGHT = cvs.width/25;
let score_paddle = 20; // how many points you need to score for the next increase in the width of the platform
const BALL_RADIUS = cvs.width/62.5;
let LIFE = 3; // PLAYER HAS 3 LIVES
const SCORE_LIFE = 1;
let SCORE = 0;
const SCORE_UNIT = 10;
let LEVEL = 1;
const MAX_LEVEL = 3;
let GAME_OVER = false;
let leftArrow = false;
let rightArrow = false;
let controlGame = 0;
let request = "Click the play button in the lower right corner"; 

window.addEventListener("resize", InitApp); //При растягивании окна приложение будет инициализироваться заново

function InitApp() { //Растягиваем холст на весь экран 
    cvs.width = window.innerWidth*0.27;
    cvs.height = window.innerHeight*0.61;
}

InitApp();

// function resize() {
//     debugger
//     let canvasRatio = cvs.height / cvs.width;
//     let windowRatio = window.innerHeight / window.innerWidth;
//     let gameWidth;
//     let gameHeight;


    // if (windowRatio < canvasRatio) {
    //     gameHeight = window.innerHeight;
    //     gameWidth = gameHeight / canvasRatio;
    // } else {
    //     gameWidth = window.innerWidth;
    //     gameHeight = width * canvasRatio;
    // }

    // cvs.style.width = gameWidth + 'px';
    // cvs.style.height = gameHeight + 'px';
// };

// window.addEventListener('resize', resize, false);

// CREATE THE PADDLE
let paddle = {
    x : cvs.width/2 - PADDLE_WIDTH/2,
    y : cvs.height - PADDLE_MARGIN_BOTTOM - PADDLE_HEIGHT,
    width : PADDLE_WIDTH,
    height : PADDLE_HEIGHT,
    dx :5
}

// DRAW PADDLE
function drawPaddle(){
    ctx.fillStyle = "#2e3548";
    ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
    
    ctx.strokeStyle = "#ffcd05";
    ctx.strokeRect(paddle.x, paddle.y, paddle.width, paddle.height);
}

// CONTROL THE PADDLE AND PUSH BALL

document.addEventListener("keydown", function(EO){
   EO = EO || window.event;
   EO.preventDefault();
   if(EO.keyCode == 37){
       leftArrow = true;
   }else if(EO.keyCode == 39){
       rightArrow = true;
   }
});
document.addEventListener("keyup", function(EO){
   EO = EO || window.event;
   EO.preventDefault();
   if(EO.keyCode == 37){
       leftArrow = false;
   }else if(EO.keyCode == 39){
       rightArrow = false;
    }

});

window.addEventListener("resize", InitApp); //При растягивании окна приложение будет инициализироваться заново

function InitApp() { //Растягиваем холст на весь экран 
    cvs.width = window.innerWidth*0.27;
    cvs.height = window.innerHeight*0.61;
}

cvs.addEventListener("mousemove", function(EO){
    EO = EO || window.event;
    EO.preventDefault();
    if(controlGame) {
        let relativeX = EO.clientX - cvs.getBoundingClientRect().left;
        if(relativeX > paddle.width/2 && relativeX < cvs.width - paddle.width/2) {
            paddle.x = relativeX - paddle.width/2;
        }

    }
    
});


// MOVE PADDLE
function movePaddle(){
    if(controlGame) {
        if(rightArrow && paddle.x + paddle.width < cvs.width){
            paddle.x += paddle.dx;
        }else if(leftArrow && paddle.x > 0){
            paddle.x -= paddle.dx;
        }
    }   
}

// CREATE THE BALL
let ball = {
    x : cvs.width/2,
    y : paddle.y - BALL_RADIUS,
    radius : BALL_RADIUS,
    speed : 4,
    dx : 3 * (Math.random() * 2 - 1),
    dy : -3
}

// DRAW THE BALL
function drawBall(){
    ctx.beginPath();
    
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2);
    ctx.fillStyle = "#ffcd05";
    ctx.fill();
    
    ctx.strokeStyle = "#2e3548";
    ctx.stroke();
    
    ctx.closePath();
}

// MOVE THE BALL
function moveBall(){
    if(controlGame) {
        ball.x += ball.dx;
        ball.y += ball.dy;
    }    
}

// BALL AND WALL COLLISION DETECTION
function ballWallCollision(){
    if(ball.x + ball.radius > cvs.width || ball.x - ball.radius < 0){
        ball.dx = - ball.dx;
        WALL_HIT.play();
    }
    
    if(ball.y - ball.radius < 0){
        ball.dy = -ball.dy;
        WALL_HIT.play();
    }
    
    if(ball.y + ball.radius > cvs.height){
        LIFE--; // LOSE LIFE
        LIFE_LOST.play();
        resetBall();
    }
}

// RESET THE BALL AND PADDLE
function resetBall(){
    ball.x = cvs.width/2;
    ball.y = paddle.y - BALL_RADIUS;
    paddle.x = cvs.width/2 - PADDLE_WIDTH/2;
    paddle.y = cvs.height - PADDLE_MARGIN_BOTTOM - PADDLE_HEIGHT;
    ball.dx = 3 * (Math.random() * 2 - 1);
    ball.dy = -3;
}

// BALL AND PADDLE COLLISION
function ballPaddleCollision(){
    if(ball.x < paddle.x + paddle.width && ball.x > paddle.x && paddle.y < paddle.y + paddle.height && ball.y > paddle.y){
        
        // PLAY SOUND
        PADDLE_HIT.play();
        
        // CHECK WHERE THE BALL HIT THE PADDLE
        let collidePoint = ball.x - (paddle.x + paddle.width/2);
        
        // NORMALIZE THE VALUES
        collidePoint = collidePoint / (paddle.width/2);
        
        // CALCULATE THE ANGLE OF THE BALL
        let angle = collidePoint * Math.PI/3;
            
            
        ball.dx = ball.speed * Math.sin(angle);
        ball.dy = - ball.speed * Math.cos(angle);
    }
}

// CREATE THE BRICKS
const brick = {
    row : 1,
    column : 6,
    width : cvs.width/9.09,
    height : cvs.width/25,
    offSetLeft : cvs.width/20.83,
    offSetTop : cvs.width/25,
    marginTop : cvs.width/12.5,
    fillColor : "#2e3548",
    strokeColor : "#FFF"
}

let bricks = [];


function createBricks(){
    for(let r = 0; r < brick.row; r++){
        bricks[r] = [];
        for(let c = 0; c < brick.column; c++){
            bricks[r][c] = {
                x : c * ( brick.offSetLeft + brick.width ) + brick.offSetLeft,
                y : r * ( brick.offSetTop + brick.height ) + brick.offSetTop + brick.marginTop,
                status : true
            }
        }
    }
}

createBricks();

// draw the bricks
function drawBricks(){
    for(let r = 0; r < brick.row; r++){
        for(let c = 0; c < brick.column; c++){
            let b = bricks[r][c];
            // if the brick isn't broken
            if(b.status){
                ctx.fillStyle = brick.fillColor;
                ctx.fillRect(b.x, b.y, brick.width, brick.height);
                
                ctx.strokeStyle = brick.strokeColor;
                ctx.strokeRect(b.x, b.y, brick.width, brick.height);
            }
        }
    }
}

// ball brick collision
function ballBrickCollision(){
    for(let r = 0; r < brick.row; r++){
        for(let c = 0; c < brick.column; c++){
            let b = bricks[r][c];
            // if the brick isn't broken
            if(b.status){
                if(ball.x + ball.radius > b.x && ball.x - ball.radius < b.x + brick.width && ball.y + ball.radius > b.y && ball.y - ball.radius < b.y + brick.height){
                    BRICK_HIT.play();
                    ball.speed += 0.5; //move ball faster
                    ball.dy = - ball.dy;
                    b.status = false; // the brick is broken
                    SCORE += SCORE_UNIT;
                    if (SCORE > score_paddle) {
                        paddle.width += 10;
                        score_paddle += 30; // the next increase is after 30 points
                      }
                }
            }
        }
    }
}

// show game stats
function showGameStats(text, textX, textY, img, imgX, imgY){
    // draw text
    ctx.fillStyle = "#FFF";
    ctx.font = "25px Germania One";
    ctx.fillText(text, textX, textY);
    
    // draw image
    ctx.drawImage(img, imgX, imgY, width = 25, height = 25);
}

// DRAW FUNCTION
function draw(){

    // InitApp(); //Инициализировать приложение
    
    // ctx.drawImage(BG_IMG, 0, 0);

    drawPaddle();
    
    drawBall();
    
    drawBricks();
    
    // SHOW SCORE
    showGameStats(SCORE, 35, 30, SCORE_IMG, 5, 10);
    // SHOW LIVES
    showGameStats(LIFE, cvs.width - 25, 30, LIFE_IMG, cvs.width-55, 10); 
    // SHOW LEVEL
    showGameStats(LEVEL, cvs.width/2, 30, LEVEL_IMG, cvs.width/2 - 30, 5);


    if(!controlGame){
        showRequestStats();
    } 
    
     
}

//  SHOW REQUEST
 function showRequestStats(){ 
        ctx.fillStyle = "#FFF";
        ctx.font = "20px Germania One";
        ctx.fillText(request, 70, cvs.height/2);
    }
    


// game over
function gameOver(){
    if(LIFE <= 0){
        showYouLose();
        GAME_OVER = true;
    }
}

// level up
function levelUp(){
    let isLevelDone = true;
    
    // check if all the bricks are broken
    for(let r = 0; r < brick.row; r++){
        for(let c = 0; c < brick.column; c++){
            isLevelDone = isLevelDone && ! bricks[r][c].status;
        }
    }
    
    if(isLevelDone){
        WIN.play();
        
        if(LEVEL >= MAX_LEVEL){
            showYouWin();
            GAME_OVER = true;
            return;
        }
        brick.row++;
        createBricks();
        ball.speed += 0.5;
        resetBall();
        LEVEL++;
        ball.speed = 4;
        paddle.width = 100;
    }
}

// UPDATE GAME FUNCTION
function update(){
    movePaddle();
    
    moveBall();
    
    ballWallCollision();
    
    ballPaddleCollision();
    
    ballBrickCollision();
    
    gameOver();
    
    levelUp();
}

// GAME LOOP
function loop(){
    // CLEAR THE CANVAS

    ctx.drawImage(BG_IMG, 0, 0);

    draw();
    
    update();
    
    if(! GAME_OVER){
        requestAnimationFrame(loop);
    }
}
loop();


// SELECT SOUND ELEMENT
const soundElement  = document.getElementById("sound");

soundElement.addEventListener("click", audioManager);

function audioManager(){
    // CHANGE IMAGE SOUND_ON/OFF
    let imgSrc = soundElement.getAttribute("src");
    let SOUND_IMG = imgSrc == "img/SOUND_ON.png" ? "img/SOUND_OFF.png" : "img/SOUND_ON.png";
    
    soundElement.setAttribute("src", SOUND_IMG);
    
    // MUTE AND UNMUTE SOUNDS
    WALL_HIT.muted = WALL_HIT.muted ? false : true;
    PADDLE_HIT.muted = PADDLE_HIT.muted ? false : true;
    BRICK_HIT.muted = BRICK_HIT.muted ? false : true;
    WIN.muted = WIN.muted ? false : true;
    LIFE_LOST.muted = LIFE_LOST.muted ? false : true;
}

// SELECT PAUSE ELEMENT

let pauseElement = document.getElementById('pause');

pauseElement.addEventListener("click", function(){
    let pauseSrc = pauseElement.getAttribute('src');
    if(pauseSrc == './img/play.png') {
        pauseElement.setAttribute("src", "./img/pause.png");
        controlGame = 1;
    } else {
        pauseElement.setAttribute("src", "./img/play.png");
        controlGame = 0;
    }
});



// SHOW GAME OVER MESSAGE
/* SELECT ELEMENTS */
const gameover = document.getElementById("gameover");
const youwin = document.getElementById("youwon");
const youlose = document.getElementById("youlose");
const restart = document.getElementById("restart");

// CLICK ON PLAY AGAIN BUTTON
restart.addEventListener("click", function(){
    location.reload(); // reload the page
})

// SHOW YOU WIN
function showYouWin(){
    gameover.style.display = "block";
    youwin.style.display = "block";
}

// SHOW YOU LOSE
function showYouLose(){
    gameover.style.display = "block";
    youlose.style.display = "block";
}



















