'use strict'

let form = document.querySelector('.form1');

let fields = 

form.addEventListener('submit',validateInfoForm,false);

function validateInfoForm(EO) {
    EO=EO||window.event;
    EO.preventDefault();


}