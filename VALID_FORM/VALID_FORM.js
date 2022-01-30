"use strict"

function creatNewForm(structureForm, numberForm) {

  let d = document.getElementsByTagName('div');
  d[0].style.maxWidth = '660px';

  structureForm.forEach((v) => {
    let lab = document.createElement('label');
    lab.innerHTML = v.label;
    numberForm.appendChild(lab);
    if(v.kind === 'longtext') {
      let inp = document.createElement('input');
      inp.type = 'text';
      inp.style.cssText = 'width: 453px; margin-left: 5px';
      if(v.name === 'sitename') {
        inp.name = 'sitename';
      }
      if(v.name === 'siteurl') {
        inp.name = 'siteurl';
      }
      if(v.name === 'lastname') {
        inp.name = 'lastname';
      }
      if(v.name === 'firstname') {
        inp.name = 'firstname';
      }
      if(v.name === 'secondname') {
        inp.name = 'secondname';
      }
      numberForm.appendChild(inp);
      let br = document.createElement('br');
      numberForm.appendChild(br);
    }
    if(v.kind === 'number') {
      let inp = document.createElement('input');
      inp.type = 'number';
      inp.style.cssText = 'width: 80px; margin-left: 5px';
      if(v.name === 'visitors') {
        inp.name = 'visitors';
      }
      if(v.name === 'age') {
        inp.name = 'age';
      }
      numberForm.appendChild(inp);
      let br = document.createElement('br');
      numberForm.appendChild(br);
    }
    if(v.kind === 'shorttext') {
      let inp = document.createElement('input');
      inp.type = 'email';
      inp.name = 'email';
      inp.style.css = 'width: 200px; margin-left: 5px';
      numberForm.appendChild(inp);
      let br = document.createElement('br');
      numberForm.appendChild(br);
    }
    if(v.kind === 'combo') {
      let sel = document.createElement('select');
      sel.name = 'division';
      numberForm.appendChild(sel);
      let br = document.createElement('br');
      numberForm.appendChild(br);
      v.variants.forEach((vDown) => {
        let opt = document.createElement('option');
        opt.value = vDown.value;
        opt.text = vDown.text;
        if(vDown.text === 'бытовая техника') {
          opt.selected = 'бытовая техника';
        }
        sel.appendChild(opt);
      })
    }
    if(v.kind === 'radio') {
      v.variants.forEach((vDown) => {
        let inp = document.createElement('input');
        inp.type = 'radio';
        inp.name = 'payment';
        inp.value = vDown.value;
        numberForm.appendChild(inp);  
        let sp = document.createElement('span');
        sp.innerHTML = vDown.text;
        numberForm.appendChild(sp);
      })
      let br = document.createElement('br');
        numberForm.appendChild(br);
    }
    if (v.kind === 'check') {
      let inp = document.createElement('input');
      inp.type = 'checkbox';
      inp.name = 'votes';
      inp.checked = 'true';
      numberForm.appendChild(inp);
      let br = document.createElement('br');
      numberForm.appendChild(br);
    }
    if(v.kind === 'memo') {
      let textar = document.createElement('textarea');
      textar.name = 'description';
      textar.style.cssText = 'height: 50px; width: 608px';
      numberForm.appendChild(textar);
      let br = document.createElement('br');
      numberForm.appendChild(br);
    }
    if(v.kind === 'submit') {
      lab.remove();
      let inp = document.createElement('input');
      inp.type = 'button';
      inp.value = v.caption;
      numberForm.appendChild(inp);
      let br = document.createElement('br');
      numberForm.appendChild(br);
    }   
  })
   
  let form1 = document.forms.formOne;
  form1.style.marginBottom = '40px';
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
  ], document.forms.formOne);

  creatNewForm([
    {label:'Фамилия:',kind:'longtext',name:'lastname'},
    {label:'Имя:',kind:'longtext',name:'firstname'},
    {label:'Отчество:',kind:'longtext',name:'secondname'},
    {label:'Возраст:',kind:'number',name:'age'},
    {caption:'Зарегистрироваться',kind:'submit'},
  ], document.forms.formTwo);

  