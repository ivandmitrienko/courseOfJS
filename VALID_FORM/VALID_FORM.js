'use strict'

let form = document.querySelector('.form1');

let fields = form.querySelectorAll('.field')

form.addEventListener('submit',validateInfoForm,false);

function validateInfoForm(EO) {
    EO=EO||window.event;
    EO.preventDefault();
    for (let i = 0; i < fields.length; i++) {
        if (!fields[i].value) {
            console.log(fields[i]);
        //  let sp = document.createElement('span');
        //  sp.innerHTML = 'ddd';
        //  sp.style.color = 'red'
        //  form.appendChild(sp);
        }
        if (!fields[i].value == '') {
            console.log(fields[i]);
    }   }  



}