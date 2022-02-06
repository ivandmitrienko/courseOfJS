'use strict'

let form = document.querySelector('.form1');

let fields = form.querySelectorAll('.field');

let comment = form.elements.comments;
let commentValue = comment.checked;

form.addEventListener('submit',validateInfoForm,false);

function validateInfoForm(EO) {
    EO=EO||window.event;
    EO.preventDefault();
    for (let i = 0; i < fields.length; i++) {
        if (!(fields[i].value) ||  !(commentValue)){
            console.log(fields[i]);
            let sp = document.createElement('span');
            sp.innerHTML = 'неверно указаны данные!';
            sp.style.color = 'red'
            fields[i].after(sp);    
        } else {
            // form.removeEventListener('submit',validateInfoForm,false);
        }
        

    }      



}