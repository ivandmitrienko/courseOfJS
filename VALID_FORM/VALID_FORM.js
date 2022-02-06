'use strict'

let form = document.querySelector('.form1');

let fields = form.querySelectorAll('.field');

let comment = form.elements.comments;
let commentValue = comment.checked;

form.addEventListener('submit',validateInfoForm,false);

function validateInfoForm(EO) {
    EO=EO||window.event;
    EO.preventDefault();
    let errors = document.getElementsByTagName('span');
    for (let j = 0; j < errors.length; j++) {
        errors[j].innerHTML = '';
    }
    for (let i = 0; i < fields.length; i++) {
        if (!(fields[i].value) ||  !(commentValue)){
            console.log(fields[i]);
            let error = document.createElement('span');
            error.innerHTML = 'неверно указаны данные!';
            error.style.color = 'red'
            fields[i].after(error);    
        } else {
            // form.removeEventListener('submit',validateInfoForm,false);
        }
        

    }      



}