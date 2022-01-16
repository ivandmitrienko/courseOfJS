"use strict"

function vowelsTenForEach(str) {

    let vowels = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];

    str = str.toLowerCase().split("");

    let count = 0;

    str.forEach((v) => {if(vowels.includes(v)){count++}});

   
  
    return count; 
}

function vowelsTenFilter(str) {

    let vowels = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];

    str = str.toLowerCase().split("");

    let count = 0;

    let arrFilter = str.filter((v) => vowels.includes(v));
     
    return arrFilter.length;
}




console.log(vowelsTenForEach(prompt("Пожалуйста, введите строку","")));
console.log(vowelsTenFilter(prompt("Пожалуйста, введите строку","")));