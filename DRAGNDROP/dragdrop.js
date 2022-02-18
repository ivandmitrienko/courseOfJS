"use strict"

window.addEventListener('load', posElem, false);

function posElem(EO) {

    EO=EO||window.event;

    let imgs = document.getElementsByTagName('img');

    for(let i = 0; i < imgs.length; i++) {

        let elem = imgs[i];

        elem.style.left = elem.offsetLeft + 'px';

        elem.style.top = elem.offsetTop + 'px';

        elem.style.position = 'absolute';

    }
   


}