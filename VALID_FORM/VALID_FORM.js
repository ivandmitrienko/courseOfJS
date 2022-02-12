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
let articles = form.elements.article;

let arrEmptyField = []; // для поиска первого пустого поля или неправильно заполненного

function validateInfoForm(EO) {

    
    

    arrEmptyField.splice(0, arrEmptyField.length);
    // console.log(arrEmptyField.length);
    
    let commentValue = comment.checked;
    let deploymentsValue = deployments.value;

    EO=EO||window.event;

    // debugger

    // let errors = document.getElementsByTagName('span');

    let errors = document.querySelectorAll('span');

    for(let k = 0; k < errors.length; k++) {
        if(errors[k].innerHTML === 'empty field!') {
            errors[k].remove(); 
        }
    }
    
    debugger

    for (let j = 0; j < fields.length; j++) {
       
        if(errors[j].innerHTML === 'Just 30 letters!' || errors[j].innerHTML === 'Just 15 letters!'
         || errors[j].innerHTML === 'Please, add ".com" at the end of url!' || errors[j].innerHTML === 'Just after "May"!'
         || errors[j].innerHTML === "More than 100 visitors !"
         || errors[j].innerHTML === "We use just gmail.com! Please, add: @gmail.com at the end of email !"
         || errors[j].innerHTML === "Sorry) At the moment the section: бытовая техника is not available !"
         || errors[j].innerHTML === "Please, enter a more complete description of the site!") {
            arrEmptyField.push(fields[j]);
            console.log( arrEmptyField);
            EO.preventDefault();
        } 
    }

    debugger
   
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

    


    console.log(arrEmptyField);


    
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
            if(authorsValue) {
                if(authorsValue.length > 30){
                    let error = document.createElement('span');
                    error.innerHTML = 'Just 30 letters!';
                    error.style.color = 'red';
                    v.after(error);
                }    
            }              
        }
        if(v.name == titles.name) {
        let titlesValue = titles.value;
            if(titlesValue){
                if(titlesValue.length > 15){
                    let error = document.createElement('span');
                    error.innerHTML = 'Just 15 letters!';
                    error.style.color = 'red';
                    v.after(error);
                }
            }   
        }
        if(v.name == urls.name) {
            let urlsValue = urls.value;
            if(urlsValue){
                urlsValue = urlsValue.toLowerCase();
                if(!(urlsValue.endsWith(".com"))){
                    let error = document.createElement('span');
                    error.innerHTML = 'Please, add ".com" at the end of url!';
                    error.style.color = 'red';
                    v.after(error);
                }

            }
            
        }
        if(v.name == dates.name) {
            if(v.value){
                let arrDates =v.value.split('-');
                if(arrDates[1] < 5){
                    let error = document.createElement('span');
                    error.innerHTML = 'Just after "May"!';
                    error.style.color = 'red';
                    v.after(error);
                }
            }
            
        }    
        if(v.name == numbers.name) {
            if(v.value){
                if(v.value < 100){
                    let error = document.createElement('span');
                    error.innerHTML = 'More than 100 visitors !';
                    error.style.color = 'red';
                    v.after(error);
                }

            }
            
        }
        if(v.name == mails.name) {
            if(v.value){
                let mailsValue =  mails.value;
                if(!(mailsValue.endsWith('@gmail.com'))){
                    let error = document.createElement('span');
                    error.innerHTML = 'We use just gmail.com! Please, add: @gmail.com at the end of email !';
                    error.style.color = 'red';
                    v.after(error);
                }

            }
            
        }
        if(v.name == rubrics.name) {
            if(v.value){
                if(v.value == 3){
                    let error = document.createElement('span');
                    error.innerHTML = "Sorry) At the moment the section: бытовая техника is not available !";
                    error.style.color = 'red';
                    v.after(error);
                }

            }
            
        }
        if(v.name == articles.name) {
            if(v.value){
                let articlesValue = v.value;
                if(articlesValue.length < 30){
                    let error = document.createElement('span');
                    error.innerHTML = "Please, enter a more complete description of the site!";
                    error.style.color = 'red';
                    v.after(error);
                }

            }
            
        }                         

    }})

    comment.onchange = function () {
        if (comment.checked) {
            let agree = document.createElement('span');
            agree.innerHTML = "We will always check reviews and sort :)";
            agree.style.color = '#32CD32';
            agree.id = "2sec";
            agree.style.fontSize = "20px"
            comment.after(agree);
            setTimeout(function(){
                document.getElementById('2sec').remove(); //style.display = 'none'
            }, 2500);
        }    
             
    }

    deployments.forEach(function (val, ind, arr) {
        arr[ind].onchange = function (EO) {
            EO=EO||window.event;
            let divSp = form.querySelector(".errorDiv");
            if (document.getElementById("only")) {
                let deploymentsSpan = document.getElementById('only');
                deploymentsSpan.remove();
            } 
            let error = document.createElement('span');
            error.style.color = 'red';
            error.id = "only";
            divSp.appendChild(error);
            if (arr[ind].value == 11) {
             error.innerHTML = 'Only for a fee or VIP!';
            }
            

    
        }
    });
 
             
}

fieldsOnblurForm(fields);

