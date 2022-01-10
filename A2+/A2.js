"use strict"

function user(str) {

  let sumFirstSpaces = 0;
  let sumLastSpaces = str.length;
 

  for(let i = 0; i < str.length; i++) {

     if(str.charAt(i) === " ") sumFirstSpaces++;
     else break; 
  }

   for(let j = 1; j < str.length; j++) {

    if(str[str.length - j] === " ") sumLastSpaces--;
     else break;
  }

  
  str = str.slice(sumFirstSpaces, sumLastSpaces);
  

  return str;
}

console.log("*" + user(prompt("Пожалуйста, введите строку")) + "*");

