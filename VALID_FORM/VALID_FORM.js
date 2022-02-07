'use strict'

let form = document.querySelector('.form1');
form.addEventListener('submit',validateInfoForm,false);

let comment = form.elements.comments;
let deployments = form.elements.deployment;

function validateInfoForm(EO) {

    let fields = form.querySelectorAll('.field');
    
    let commentValue = comment.checked;
    let deploymentsValue = deployments.value;

    EO=EO||window.event;
    let errors = document.getElementsByTagName('span');
    for (let j = 0; j < errors.length; j++) {
        errors[j].innerHTML = '';
    }

    if(deploymentsValue == '') {
        let divSp = form.querySelector(".errorDiv");
        let error = document.createElement('span');
        error.innerHTML = 'empty field!';
        error.style.color = 'red';
        divSp.appendChild(error)
        EO.preventDefault();
           
    }

    if(!(commentValue)) {
        let error = document.createElement('span');
        error.innerHTML = 'empty field!';
        error.style.color = 'red';
        comment.after(error);
        EO.preventDefault();
           
    }

    for (let i = 0; i < fields.length; i++) {
        if (!fields[i].value){
             let error = document.createElement('span');
             error.innerHTML = 'empty field!';
             error.style.color = 'red';
             fields[i].after(error);
             fields[i].focus()
             EO.preventDefault();
            } else {
                continue;
            }
         


            // || deploymentsValue == '' || !(commentValue)
        

    }      



}