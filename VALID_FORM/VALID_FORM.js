'use strict'

let form = document.querySelector('.form1');

let fields = form.querySelectorAll('.field');

let comment = form.elements.comments;
let commentValue = comment.checked;

let deployment = form.elements.deployment;
let deploymentValue = deployment.value; 

form.addEventListener('submit',validateInfoForm,false);

function validateInfoForm(EO) {
    EO=EO||window.event;
    let errors = document.getElementsByTagName('span');
    for (let j = 0; j < errors.length; j++) {
        errors[j].innerHTML = '';
    }

    for (let i = 0; i < fields.length; i++) {
        if (!fields[i].value){
             let error = document.createElement('span');
             error.innerHTML = 'неверно указаны данные!';
             error.style.color = 'red'
             fields[i].after(error);
             EO.preventDefault();
            } else {
                continue;
            }
         


        // } else if (!(commentValue)) || !(deploymentValue){
        //     comment.after(error);

        // }
        

    }      



}