'use strict'

let form = document.querySelector('.form1');
form.addEventListener('submit',validateInfoForm,false);
let fields = form.querySelectorAll('.field');

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

    let arrEmptyField = []; // для поиска первого пустого поля или неправильно заполненного

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
        if(v.name == authors.name) {
            let authorsValue = authors.value;
            if(v.nextSibling) {
                v.nextSibling.innerHTML = '';
            }  
            if(authorsValue.length > 15){
                let error = document.createElement('span');
                error.innerHTML = 'Just 15 letters!';
                error.style.color = 'red';
                v.after(error);
                EO.preventDefault();


            }   
        }
    }})
 
             
}

fieldsOnblurForm(fields);


// let arrMistakeField =[];

// function blurInfo() {

//     for (let k = 0; k < fields.length; k++) {
//         fields[k].onblur = function(EO) {

//             EO=EO||window.event;

//             let errors = document.getElementsByTagName('span');
//             for (let j = 0; j < errors.length; j++) {
//                 errors[j].innerHTML = '';
//             }

//             let authorsValue = authors.value;
//             if(authorsValue.length > 15) { 
//              arrMistakeField.push(fields[k]);
//              let error = document.createElement('span');
//              error.innerHTML = 'Just 15 letters!';
//              error.style.color = 'red';
//              authors.after(error);
//              EO.preventDefault();
//             } 
//             let titlesValue = titles.value;
//             if(titlesValue.length > 10) {
//              arrMistakeField.push(fields[k]);
//              console.log(arrMistakeField);
//              let error = document.createElement('span');
//              error.innerHTML = 'Just 10 letters!';
//              error.style.color = 'red';
//              titles.after(error);
//              EO.preventDefault();
//             } 
     
//         }
//     }



// }

// blurInfo(fields);

// fields[0].onblur = function(EO) {
//     EO=EO||window.event;
//     let authorsValue = authors.value;
//     if(authorsValue.length > 15) {
//      let error = document.createElement('span');
//      error.innerHTML = 'Just 10 letters!';
//      error.style.color = 'red';
//      authors.after(error);
//     } 
  
// }

     

// function blurInfoForm(EO) {
//     EO=EO||window.event;
    

//     
//     // let titlesValue = titles.value;
//     // let urlsValue = urls.value;
//     // let datesValue = dates.value;
//     // let numbersValue = numbers.value;
//     // let mailsValue =  mails.value;
//     // let rubricsValue = rubrics.value;

//     if(authorsValue.length > 2) {
//         let error = document.createElement('span');
//         error.innerHTML = 'fuck!';
//         error.style.color = 'red';
//         authors.after(error);
//     }


// }

// fields[0].onblur = function(EO) {
//     EO=EO||window.event;
//     let error = document.createElement('span');
//     let authorsValue = authors.value;
//     if(authorsValue.length > 15) {
//      error.innerHTML = 'Just 15 letters!';
//      error.style.color = 'red';
//      authors.after(error);
//      arrMistakeField.push(fields[0]);
//     } 
  
// }