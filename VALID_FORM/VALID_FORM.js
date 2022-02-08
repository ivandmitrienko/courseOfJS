'use strict'

let form = document.querySelector('.form1');
form.addEventListener('submit',validateInfoForm,false);
let fields = form.querySelectorAll('.field');

let authors = form.elements.author;

let titles = form.elements.title;
let urls = form.elements.url;
let dates = form.elements.startdate;
let numbers = form.elements.persons;
let mails = form.elements.mail;
let rubrics = form.elements.rubric;
let comment = form.elements.comments;
let deployments = form.elements.deployment;

function validateInfoForm(EO) {

    let arrEmptyField = []; // для поиска первого пустого поля или неправильно заполненного

    let commentValue = comment.checked;
    let deploymentsValue = deployments.value;

    EO=EO||window.event;

    let errors = document.getElementsByTagName('span');

    for (let j = 0; j < errors.length; j++) {

        if(errors[j].innerHTML === 'Just 30 letters!' || errors[j].innerHTML === 'Just 15 letters!'
        || errors[j].innerHTML === 'More 10 letters!') {
            arrEmptyField.push(fields[j]);
            EO.preventDefault();
            continue;
        } else {
        errors[j].innerHTML = '';
        }
    }
   
    for (let i = 0; i < fields.length; i++) {
        
        if (!fields[i].value){
            arrEmptyField.push(fields[i]);
            let error = document.createElement('span');
            error.innerHTML = 'empty field!';
            error.style.color = 'red';
            fields[i].after(error);
            EO.preventDefault();
        }    

    }
    
    if(deploymentsValue == '') {
        arrEmptyField.splice(-1,0,deployments);
        let divSp = form.querySelector(".errorDiv");
        let error = document.createElement('span');
        error.innerHTML = 'empty field!';
        error.style.color = 'red';
        divSp.appendChild(error)
        EO.preventDefault();       
    } 

    if(!(commentValue)) {
        arrEmptyField.splice(-1,0,comment);
        let error = document.createElement('span');
        error.innerHTML = 'empty field!';
        error.style.color = 'red';
        comment.after(error);
        EO.preventDefault();
           
    }

    
    if (arrEmptyField.length !== 0) {
        arrEmptyField[0].focus();
    }    

}

function fieldsOnblurForm(fieldsdBlur) {

fieldsdBlur.forEach((v) => {(v).onblur = function(EO){

        EO=EO||window.event;

        if(v.nextSibling) {
            v.nextSibling.innerHTML = '';
        }  
        
        if(v.name == authors.name) {   
            let authorsValue = authors.value;  
            if(authorsValue.length > 30){
                let error = document.createElement('span');
                error.innerHTML = 'Just 30 letters!';
                error.style.color = 'red';
                v.after(error);
                EO.preventDefault();

            }    
        }
        if(v.name == titles.name) {
        let titlesValue = titles.value;
            if(titlesValue.length > 15){
                let error = document.createElement('span');
                error.innerHTML = 'Just 15 letters!';
                error.style.color = 'red';
                v.after(error);
                EO.preventDefault();
            }
        }
        if(v.name == urls.name) {
            let urlsValue = urls.value;
            if(urlsValue.length < 10){
                let error = document.createElement('span');
                error.innerHTML = 'More 10 letters!';
                error.style.color = 'red';
                v.after(error);
                EO.preventDefault();
            }
        }
        if(v.name == dates.name) {
            if(urlsValue.length < 10){
                let error = document.createElement('span');
                error.innerHTML = 'More 10 letters!';
                error.style.color = 'red';
                v.after(error);
                EO.preventDefault();
            }
        }


        // if(v.name == numbers.name) {
        //     if(v.value < 100){
        //         let error = document.createElement('span');
        //         error.innerHTML = 'More than 100 visitors !';
        //         error.style.color = 'red';
        //         v.after(error);
        //         EO.preventDefault();
        //     }
        // }    
        
        

    }})
 
             
}

fieldsOnblurForm(fields);






     



//     // let datesValue = dates.value;
//     // 
//     // let mailsValue =  mails.value;
//     // let rubricsValue = rubrics.value;

//     