const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');
const promptMenu = document.getElementById('help');
const menu = document.getElementById('menu');
const start = document.getElementById('start');
const myGame =  document.getElementById('myGame');

toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    promptMenu.innerHTML = "Let's play !!!"
    if(nav.offsetWidth !== 120) {
        promptMenu.innerHTML = "Click on the hamburger icon"
        
    }
});

start.addEventListener('click', startGame);

function startGame(){
    menu.style.display = "none";
    myGame.style.display = "block";

}

