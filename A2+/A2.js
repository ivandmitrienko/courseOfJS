"use strict"

function user(str) {

  let sumFirstSpaces = 0;

  if(!str) {
    console.log("Ваша строка пуста!");
    return "";
   }
 
  for(let i = 0; i < str.length; i++) {

     if(str.charAt(i) === " ") sumFirstSpaces++;
     else break;
  }
  
  if(sumFirstSpaces === str.length ) { 
      console.log("Ваша строка состоит только из пробелов !!!");
      return "";
     }

   let sumLastSpaces = str.length;

   for(let j = 1; j < str.length; j++) {

    if(str[str.length - j] === " ") sumLastSpaces--;
     else break;   
  }

   if(sumFirstSpaces === 0 && sumLastSpaces === str.length) {
     console.log("В Вашей строке нет пробелов !!!");
     return str;
     } else {
       console.log("Пробелы в начале и (или) в конце Вашей строки удалены.")
       return str = str.slice(sumFirstSpaces, sumLastSpaces);
     }

}

console.log("*" + user(prompt("Пожалуйста, введите строку")) + "*");