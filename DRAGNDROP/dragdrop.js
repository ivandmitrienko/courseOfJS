"use strict"

window.addEventListener('load', posElem, false);

function posElem(EO) {

    EO=EO||window.event;

    let imgs = document.getElementsByTagName('img');

    for(let i = 0; i < imgs.length; i++) {
   
        let elem = imgs[i];

        elem.style.left = elem.offsetLeft + 'px';

        elem.style.top = elem.offsetTop + 'px';

        elem.onmousedown = imgDown;

        elem.onmouseup = imgUp;
    }

    for(let k = 0; k < imgs.length; k++) {

        let elem = imgs[k];

        elem.style.position = 'absolute';
    }

}  

// debugger 

function imgDown(EO){

    EO=EO||window.event;

    EO.preventDefault();

    let currentImgDown = EO.target; 

    // запоминаем разницу между положением объекта и нажатием мыши

    let currentImgDownX = EO.pageX - currentImgDown.offsetLeft;

    let currentImgDownY = EO.pageY - currentImgDown.offsetTop;

    document.body.appendChild(currentImgDown);

    window.onmousemove = imgMove;

    function imgMove(EO) {
    
        EO=EO||window.event;
    
        EO.preventDefault();
    
        // let currentImgMove = EO.target; // тогда будет распрастроннение на style всех элементов :)

        currentImgDown.style.left = (EO.pageX - currentImgDownX) + 'px';
    
        currentImgDown.style.top = (EO.pageY - currentImgDownY) + 'px';
    
    
    }

}

function imgUp(EO){

    EO=EO||window.event;

    EO.preventDefault();

    window.onmousedown = null;

    window.onmousemove = null;


}
