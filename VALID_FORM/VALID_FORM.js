"use strict"

// function creatNewForm(structureForm, numberForm) {
//     structureForm.forEach(v => {
//         let lab = createElements('label');
//         lab.innerHTML = v.label;
//         numberForm.appendChild(lab);

        

//     })
    
// }
function creatNewForm(fD, fE) {
    fD.forEach(elem => {
      var fL=document.createElement('label');
      fL.innerHTML=elem.label;
      fE.appendChild(fL);
      if (elem.kind == 'longtext') {
        var tag = document.createElement('input');
        tag.type = 'text';      
        fE.appendChild(tag);
        var carry=document.createElement('br');
        fE.appendChild(carry);      
      };
      if (elem.kind == 'number') {
        var tag = document.createElement('input');
        tag.type = 'number';      
        fE.appendChild(tag);
        var carry=document.createElement('br');
        fE.appendChild(carry);
      };
      if (elem.kind == 'shorttext') {
        var tag = document.createElement('input');
        tag.type = 'text'; 
        fE.appendChild(tag);
        var carry=document.createElement('br');
        fE.appendChild(carry);
      };
      if (elem.kind == 'combo') {
        var tag = document.createElement('select');
        fE.appendChild(tag);
        var carry=document.createElement('br');
        fE.appendChild(carry);
        elem.variants.forEach(elemLevel2 => {
          var tagOption = document.createElement('option');
          tagOption.setAttribute('value', elemLevel2.value);
          tagOption.textContent = elemLevel2.text;
          tag.appendChild(tagOption);
        });
      };
      if (elem.kind == 'radio') {
        elem.variants.forEach(elemLevel2 => {
          var tag = document.createElement('input');
          tag.type = 'radio';
          tag.name="payment";
          tag.setAttribute('value', elemLevel2.value);          
          var newSpanRadio=document.createElement('span');//Подписи добавить уже получилось!
          newSpanRadio.textContent=elemLevel2.text; 
          fE.appendChild(tag);
          fE.appendChild(newSpanRadio);
          var carry=document.createElement('br');
          fE.appendChild(carry);
        });
      };  
      if (elem.kind == 'check') {
        var tag = document.createElement('input');
        tag.type = 'checkbox'; 
        fE.appendChild(tag);
        var carry=document.createElement('br');
        fE.appendChild(carry);
      };
      if (elem.kind == 'memo') {
        var tag = document.createElement('textarea');
        tag.style.cssText = 'width: 400px; height: 50px';
        fE.appendChild(tag);
        var carry=document.createElement('br');
        fE.appendChild(carry);
      };
      if (elem.kind == 'submit') {
        var tag = document.createElement('input');
        tag.type = 'submit';
        tag.value =elem.label;;
        fE.appendChild(tag);
        var carry=document.createElement('br');
        fE.appendChild(carry);
        fE.removeChild(fL);
      };
   
      if (elem.name == 'sitename') {
        tag.name='sitename';
      };
      if (elem.name == 'siteurl') {
        tag.name='siteurl';
      };
      if (elem.name == 'visitors') {
        tag.name='visitors';
      };
      if (elem.name == 'email') {
        tag.name='email';
      };
      if (elem.name == 'division') {
        tag.name='division';
      };
      // для name:'payment' атрибут указан в if для созданиия input type=radio
   
      if (elem.name == 'votes') {
        tag.name='votes';
      };
      if (elem.name == 'description') {
        tag.name='description';
      };    
      if (elem.name == 'lastname') {
        tag.name='lastname';
      };
      if (elem.name == 'firstname') {
        tag.name='firstname';
      };
      if (elem.name == 'secondname') {
        tag.name='secondname';
      };
      if (elem.name == 'age') {
        tag.name='age';
      };   
   
   
    });
  }
  

creatNewForm([
    {label:'Название сайта:',kind:'longtext',name:'sitename'},
    {label:'URL сайта:',kind:'longtext',name:'siteurl'},
    {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
    {label:'E-mail для связи:',kind:'shorttext',name:'email'},
    {label:'Рубрика каталога:',kind:'combo',name:'division',
      variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
    {label:'Размещение:',kind:'radio',name:'payment',
      variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
    {label:'Разрешить отзывы:',kind:'check',name:'votes'},
    {label:'Описание сайта:',kind:'memo',name:'description'},
    {caption:'Опубликовать',kind:'submit'},
  ], document.forms.form1);

  creatNewForm([
    {label:'Фамилия:',kind:'longtext',name:'lastname'},
    {label:'Имя:',kind:'longtext',name:'firstname'},
    {label:'Отчество:',kind:'longtext',name:'secondname'},
    {label:'Возраст:',kind:'number',name:'age'},
    {caption:'Зарегистрироваться',kind:'submit'},
  ], document.forms.form2);