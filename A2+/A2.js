"use strict"

function user(str) {

  while(str.indexOf(" ") === 0) {
    
    str = str.substring(1);       
  }

  while(str[str.length - 1] === " ") {
    
    str = str.slice(0, -1);
       
  }

   return str = "*" + str + "*";
}

console.log(user(prompt("Пожалуйста, введите строку")));

