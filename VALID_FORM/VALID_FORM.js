'use strict'

let form = document.querySelector('.form1');
form.addEventListener('submit',validateInfoForm,false);
let authors = form.elements.author;
let titles = form.elements.title;
let urls = form.elements.url;
let dates = form.elements.date;
let numbers = form.elements.number;
let mails = form.elements.mail;
let rubrics = form.elements.rubric;
let comment = form.elements.comments;
let deployments = form.elements.deployment; 

function validateInfoForm(EO) {

    let fields = form.querySelectorAll('.field');

    let arrEmptyField = []; // для поиска первого пустого поля

    // let authorsValue = authors.value;
    // let titlesValue = titles.value;
    // let urlsValue = urls.value;
    // let datesValue = dates.value;
    // let numbersValue = numbers.value;
    // let mailsValue =  mails.value;
    // let rubricsValue = rubrics.value;
    let commentValue = comment.checked;
    let deploymentsValue = deployments.value;

    EO=EO||window.event;
    let errors = document.getElementsByTagName('span');
    for (let j = 0; j < errors.length; j++) {
        errors[j].innerHTML = '';
    }

    for (let i = 0; i < fields.length; i++) {
        if (!fields[i].value){
            arrEmptyField.push(fields[i]);
            arrEmptyField[0].focus();
            let error = document.createElement('span');
            error.innerHTML = 'empty field!';
            error.style.color = 'red';
            fields[i].after(error);
            EO.preventDefault();
        } else {
            continue;
        }

    }
    
    if(deploymentsValue == '') {
        arrEmptyField.push(deployments[0]);
        arrEmptyField[0].focus();
        let divSp = form.querySelector(".errorDiv");
        let error = document.createElement('span');
        error.innerHTML = 'empty field!';
        error.style.color = 'red';
        divSp.appendChild(error)
        EO.preventDefault();       
    } 

    if(!(commentValue)) {
        arrEmptyField.push(comment);
        arrEmptyField[0].focus();
        let error = document.createElement('span');
        error.innerHTML = 'empty field!';
        error.style.color = 'red';
        comment.after(error);
        EO.preventDefault();
           
    }



}