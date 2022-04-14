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
const showRecords = document.getElementById('showRecords');

window.onhashchange=switchToStateFromURLHash;

// текущее состояние приложения
// это Model из MVC
let SPAState={};

function switchToStateFromURLHash() {

    let URLHash=window.location.hash;

    let stateStr=URLHash.substr(1);
    
    if ( stateStr!="" ) { // если закладка непустая, читаем из неё состояние и отображаем
        let parts=stateStr.split("_")
        SPAState={ pagename: parts[0] }; // первая часть закладки - номер страницы
    }
     else
        SPAState={pagename:'Main'}; // иначе показываем главную страницу

    switch ( SPAState.pagename ) {
        case 'Main':
          menu.style.display = "block";
          myGame.style.display = 'none';
          aboutGameClose();
          closeRecordsGame();
          break;
        case 'Start':
            menu.style.display = "none";
            myGame.style.display = 'block';
           break;  
        case 'Records':
            showRecords.style.display = "block";
            refreshMessages();
          break;
        case 'About':
          document.getElementById('aboutGame').classList.add('--show');
          break;
    }    
}

function switchToState(newState) {
   
    let stateStr=newState.pagename;

    location.hash=stateStr;

}

function switchToMainPage() {
    switchToState( { pagename:'Main' } );
  }


function switchToStartPage() {
    switchToState( { pagename:'Start' } );
  }

  function switchToRecordsPage() {
    switchToState( { pagename:'Records' } );
  }

  function switchToAboutPage() {
    switchToState( { pagename:'About' } );
  }

  // переключаемся в состояние, которое сейчас прописано в закладке УРЛ
  switchToStateFromURLHash();

toggle.addEventListener('click', mainMenu);
toggle.addEventListener('touchstart',mainMenu);

function mainMenu() {

    nav.classList.toggle('active');
    promptMenu.innerHTML = "Let's play !!!"
    if(nav.offsetWidth !== 120) {
        promptMenu.innerHTML = "Click on the hamburger icon"
        
    }

}


start.addEventListener('click', switchToStartPage);
start.addEventListener('touchstart', switchToStartPage);

about.addEventListener('click',switchToAboutPage);
about.addEventListener('touchstart',switchToAboutPage);

closeAbout.addEventListener('click', aboutGameClose);
closeAbout.addEventListener('touchstart', aboutGameClose);  
    
function aboutGameClose() {
    document.getElementById('aboutGame').classList.remove('--show');
    switchToMainPage();
}

records.addEventListener('click', switchToRecordsPage);
records.addEventListener('touchstart', switchToRecordsPage); 

closeRecords.addEventListener('click', closeRecordsGame);
closeRecords.addEventListener('touchstart', closeRecordsGame);

function closeRecordsGame(){

    showRecords.animate([
        { // from
          opacity: 1,
        },
        { // to
          opacity: 0,
        }
      ], 2500);

    setTimeout(()=>showRecords.style.display = "none", 2500); 
    
}




