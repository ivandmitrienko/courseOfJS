const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');
const promptMenu = document.getElementById('help');
const menu = document.getElementById('menu');
const start = document.getElementById('start');
const myGame =  document.getElementById('myGame');
const about = document.getElementById('about');
const closeAbout = document.getElementById('closeAbout');
const closeRecords  = document.getElementById('closeRecords');
const records = document.getElementById('records');

toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    promptMenu.innerHTML = "Let's play !!!"
    if(nav.offsetWidth !== 120) {
        promptMenu.innerHTML = "Click on the hamburger icon"
        
    }
});

toggle.addEventListener('touchstart', () => {
    nav.classList.toggle('active');
    promptMenu.innerHTML = "Let's play !!!"
    if(nav.offsetWidth !== 120) {
        promptMenu.innerHTML = "Click on the hamburger icon"
        
    }
});


start.addEventListener('click', startGame);
start.addEventListener('touchstart', startGame);

function startGame(){
    menu.style.display = "none";
    myGame.style.display = 'block';
}

about.addEventListener('click',aboutGameOpen);
about.addEventListener('touchstart',aboutGameOpen);


function aboutGameOpen() {
  document.getElementById('aboutGame').classList.add('--show')
}

closeAbout.addEventListener('click', aboutGameClose);
closeAbout.addEventListener('touchstart', aboutGameClose);  
    
function aboutGameClose() {
    document.getElementById('aboutGame').classList.remove('--show')
}


    


