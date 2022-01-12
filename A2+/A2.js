"use strict"

function user(str) {

  let sumFirstSpaces = 0;
  let sumLastSpaces = str.length;
 

  for(let i = 0; i < str.length; i++) {

     if(str.charAt(i) === " ") sumFirstSpaces++;
     else break;

     if(sumFirstSpaces === str.length ) { 
       console.log("Строка состоит только из пробелов !!!");
       return str = str.slice(sumFirstSpaces, str.length);
       } else {
       continue;
     }
  }

   for(let j = 1; j < str.length; j++) {

    if(str[str.length - j] === " ") sumLastSpaces--;
     else break;   
  }

   if(sumFirstSpaces === 0 && sumLastSpaces === str.length) {
     console.log("В строке нет пробелов !!!");
     return str = str.slice(0);
     } else {
       console.log("Пробелы в начале и (или) в конце строки удалены.")
       str = str.slice(sumFirstSpaces, sumLastSpaces);
     }

  return str;

}

console.log("*" + user(prompt("Пожалуйста, введите строку")) + "*");

