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

function validateInfoForm(EO) {

    let commentValue = comment.checked;
    let deploymentsValue = deployments.value;

    EO=EO||window.event;

    let errors = form.querySelectorAll('.error');
    debugger

    for (let k = 0; k < errors.length; k++) {
      errors[k].remove()
    }
   
    debugger
    for (let i = 0; i < fields.length; i++) {
        
        if (!fields[i].value){
            let error = document.createElement('span');
            error.innerHTML = 'empty field!';
            error.style.color = 'red';
            error.className = 'error'
            fields[i].after(error);
        }    

    }
    
    if(deploymentsValue == '') {
        let divSp = form.querySelector(".errorDiv");
        let error = document.createElement('span');
        error.innerHTML = 'empty field!';
        error.style.color = 'red';
        error.className = 'error'
        divSp.appendChild(error)     
    } 

    if(!(commentValue)) {
        let error = document.createElement('span');
        error.innerHTML = 'empty field!';
        error.style.color = 'red';
        error.className = 'error'
        comment.after(error);
           
    }

    debugger

    let errorsFocus = document.querySelectorAll('span');

    let firstFocusInput = Array.from(errorsFocus);
    
    console.log(firstFocusInput);

    if(firstFocusInput.length > 0) {
        for (let j = 0; j < firstFocusInput.length; j++) {
        
            firstFocusInput[0].previousSibling.focus();
            EO.preventDefault();
            
     
        }

    }
    
    
    
       

   
   

}

function fieldsOnblurForm(fieldsdBlur) {

    fieldsdBlur.forEach((v) => {(v).onblur = function(){

        if(v.name == authors.name) {   
            let authorsValue = authors.value;
            if(authorsValue) {
                if(authorsValue.length > 30 && !(document.getElementById("30letters"))){
                    let error = document.createElement('span');
                    error.innerHTML = 'Just 30 letters!';
                    error.style.color = 'red';
                    error.id = '30letters';
                    v.after(error);      
                } else if (authorsValue.length < 30){
                    document.getElementById("30letters").innerHTML = "";
                }
            }              
        }
        if(v.name == titles.name) {
        let titlesValue = titles.value;
            if(titlesValue){
                if(titlesValue.length > 15 && !(document.getElementById("15letters"))){
                    let error = document.createElement('span');
                    error.innerHTML = 'Just 15 letters!';
                    error.style.color = 'red';
                    error.id = '15letters';
                    v.after(error);
                } else if(titlesValue.length < 15) {
                    document.getElementById("15letters").innerHTML = "";
                }
            }   
        }
        if(v.name == urls.name) {
            let urlsValue = urls.value;
            if(urlsValue){
                urlsValue = urlsValue.toLowerCase();
                if(!(urlsValue.endsWith(".com")) && !(document.getElementById("endOfUrl"))){
                    let error = document.createElement('span');
                    error.innerHTML = 'Please, add ".com" at the end of url!';
                    error.style.color = 'red';
                    error.id = 'endOfUrl';
                    v.after(error);
                } else if(urlsValue.endsWith(".com")) {
                    document.getElementById("endOfUrl").innerHTML = "";
                }

            }
            
        }
        if(v.name == dates.name) {
            if(v.value){
                let arrDates =v.value.split('-');
                if(arrDates[1] < 5 && !(document.getElementById("May"))){
                    let error = document.createElement('span');
                    error.innerHTML = 'Just after "May"!';
                    error.style.color = 'red';
                    error.id = 'May';
                    v.after(error);
                } else if (arrDates[1] > 5)  {
                    document.getElementById("May").innerHTML = "";
                }
            }
            
        }    
        if(v.name == numbers.name) {
            if(v.value){
                if(v.value < 100 && !(document.getElementById("100visitors"))){
                    let error = document.createElement('span');
                    error.innerHTML = 'More than 100 visitors !';
                    error.style.color = 'red';
                    error.id = '100visitors';
                    v.after(error);
                } else if(v.value > 100) {
                    document.getElementById("100visitors").innerHTML = "";
                }

            }
            
        }
        if(v.name == mails.name) {
            if(v.value){
                let mailsValue =  mails.value;
                if(!(mailsValue.endsWith('@gmail.com')) && !(document.getElementById("gmail"))){
                    let error = document.createElement('span');
                    error.innerHTML = 'We use just gmail.com! Please, add: @gmail.com at the end of email !';
                    error.style.color = 'red';
                    error.id = 'gmail';
                    v.after(error);
                } else if(mailsValue.endsWith('@gmail.com')){
                    document.getElementById("gmail").innerHTML = "";
                }

            }
            
        }
        if(v.name == rubrics.name) {
            if(v.value){
                if(v.value == 3 && !(document.getElementById("available"))){
                    let error = document.createElement('span');
                    error.innerHTML = "Sorry) At the moment the section: бытовая техника is not available !";
                    error.style.color = 'red';
                    error.id = 'available';
                    v.after(error);
                } else if(v.value != 3) {
                    document.getElementById("available").innerHTML = "";
                }

            }
            
        }
        if(v.name == articles.name) {
            if(v.value){
                let articlesValue = v.value;
                if(articlesValue.length < 30 && !(document.getElementById("site"))){
                    let error = document.createElement('span');
                    error.innerHTML = "Please, enter a more complete description of the site!";
                    error.style.color = 'red';
                    error.id = 'site';
                    v.after(error);
                } else if(articlesValue.length > 30) {
                    document.getElementById("site").innerHTML = "";
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
        arr[ind].onchange = function () {
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

