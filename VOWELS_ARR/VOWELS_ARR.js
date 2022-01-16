"use strict"

function vowelsTenForEach(str) {

    let vowels = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];

    str = str.toLowerCase().split("");

    let count = 0;

    str.forEach((v) => {let value = v;
    if(vowels.includes(value)){count++}});

   
  
    return count; 
}

console.log(vowelsTenForEach(prompt("Пожалуйста, введите строку","")));


