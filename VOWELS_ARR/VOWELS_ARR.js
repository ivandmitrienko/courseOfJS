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

function vowelsTenReduce(str) {

    let vowels = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];

    str = str.toLowerCase().split("");


//     let arrFilter = str.reduce((count, v) => vowels.includes(v) ? count + 1 : count, 0);

    let arrReduce = str.reduce((count, v) => {if(vowels.includes(v)) {return count + 1}
    else { return count}}, 0);
     
    return arrReduce;
}




console.log(vowelsTenForEach(prompt("Пожалуйста, введите строку","")));
console.log(vowelsTenFilter(prompt("Пожалуйста, введите строку","")));
console.log(vowelsTenReduce(prompt("Пожалуйста, введите строку","")));