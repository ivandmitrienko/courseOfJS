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

    for (let k = 0; k < errors.length; k++) {
      errors[k].remove()
    }
   
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

    // debugger

    let errorsFocus = document.querySelectorAll('span');

    let firstFocusInput = Array.from(errorsFocus); 



    for (let j = 0; j < firstFocusInput.length; j++) {

        if(firstFocusInput[j].innerHTML === '') {  
            continue;       
        }
        
        firstFocusInput[j].previousSibling.focus();
        EO.preventDefault();
        return;
       

    }
   
}

function fieldsOnblurForm(fieldsdBlur) {

    fieldsdBlur.forEach((v) => {(v).onblur = function(){

        // let empties = document.querySelectorAll('span');

        // for (let j = 0; j < empties.length; j++) {
        //     if(empties[j].innerHTML) {
        //         empties[j].remove()
        //     }
            
        // }
        if(v.name == authors.name) { 
            let authorsValue = authors.value;
            let error = document.createElement('span');
            error.style.color = 'red';
            error.id = '30letters';   
            if(!(authorsValue) && !(document.getElementById("30letters"))){
                error.innerHTML = 'empty field!';
                v.after(error);  
            } else if(authorsValue.length > 30){
                document.getElementById("30letters").innerHTML = 'Just 30 letters!';  
            } else {
                document.getElementById("30letters").innerHTML = "";
            }
        }
        

        if(v.name == titles.name) {
            let titlesValue = titles.value;
            let error = document.createElement('span');
            error.id = '15letters';
            error.style.color = 'red';
            if(!(titlesValue) && !(document.getElementById("15letters"))){
                error.innerHTML = 'empty field!';
                v.after(error);    
            } else if(titlesValue.length > 15){
                document.getElementById("15letters").innerHTML = 'Just 15 letters!'; 
            } else {
                document.getElementById("15letters").innerHTML = "";
            }  
            
        }
        if(v.name == urls.name) {
            let urlsValue = urls.value;
            let error = document.createElement('span');
            error.style.color = 'red';
            error.id = 'endOfUrl';
            if(!(urlsValue) && !(document.getElementById("endOfUrl"))) {
                error.innerHTML = 'empty field!';
                v.after(error);
            } else if (urlsValue && !(urlsValue.endsWith(".com"))) {
                document.getElementById("endOfUrl").innerHTML = 'Please, add: .com at the end of url!';
            } else {
                document.getElementById("endOfUrl").innerHTML = "";
            }    
        }
        if(v.name == dates.name) {
            let error = document.createElement('span');
            error.style.color = 'red';
            error.id = 'May';
            let arrDates =v.value.split('-');
            if(!(v.value)){
                error.innerHTML = 'empty field!';
                v.after(error);
            } else if(arrDates[1] < 5) {
                document.getElementById("May").innerHTML = "Just after May";
            } else {
                document.getElementById("May").innerHTML = "";
            }          
        }    
        if(v.name == numbers.name) {
            let error = document.createElement('span');
            error.style.color = 'red';
            error.id = '100visitors';
            if(!(v.value)){
                error.innerHTML = 'empty field!';
                v.after(error);
            } else if(v.value < 100) {
                document.getElementById("100visitors").innerHTML = "More than 100 visitors!";
            } else {
                document.getElementById("100visitors").innerHTML = "";
            }
        }
        if(v.name == mails.name) {
            let mailsValue =  mails.value;
            let error = document.createElement('span');
            error.style.color = 'red';
            error.id = 'gmail';
            if(!(v.value)){
                error.innerHTML = 'empty field!';
                v.after(error);
            } else if(!(mailsValue.endsWith('@gmail.com'))) {
                document.getElementById("gmail").innerHTML = "We use just gmail.com! Please, add: @gmail.com at the end of email!";
            } else {
                document.getElementById("gmail").innerHTML = "";
            }     
        }
        if(v.name == rubrics.name) {
            let error = document.createElement('span');
            error.style.color = 'red';
            error.id = 'available';
            if(!(v.value)) {
                error.innerHTML = 'empty field!';
                v.after(error);
            } else if(v.value == 3) {
                document.getElementById("available").innerHTML = "Sorry) At the moment the section: бытовая техника is not available !";
            } else{
                document.getElementById("available").innerHTML = ""; 
            }      
        }
        if(v.name == articles.name) {
            let articlesValue = v.value;
            let error = document.createElement('span');
            error.style.color = 'red';
            error.id = 'site';
            if(!(v.value)){
                error.innerHTML = 'empty field!';
                v.after(error);
            } else if(articlesValue.length < 30) {
                document.getElementById("site").innerHTML = "Enter a more complete description";
            } else {
                document.getElementById("site").innerHTML = "";
            }
            
        }                         

    }})

    comment.onblur = function () {
        let agree = document.createElement('span');
        agree.style.color = 'red';
        agree.id = "agreee";
        if (!(comment.checked)) {    
            agree.innerHTML = 'empty field!';   
            comment.after(agree);
        } 

    }
    comment.onchange = function () {
        if (comment.checked) {
            document.getElementById('agreee').remove();
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

    let deploy = document.getElementById('deployment11');

    deploy.onblur = function () {
        let deploymentsValue = deployments.value;
        if(deploymentsValue == '') {
            let divSp = form.querySelector(".errorDiv");
            let error = document.createElement('span');
            error.innerHTML = 'empty field!';
            error.style.color = 'red';
            error.id = 'error';
            divSp.appendChild(error)     
        } 
    }     


    

    deployments.forEach(function (val, ind, arr) {
        arr[ind].onchange = function () {
            document.getElementById('error').remove();
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

