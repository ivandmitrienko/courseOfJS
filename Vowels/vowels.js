"use strict"

function vowelsTen(str) {

    let vowels = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];

    str = str.toLowerCase();

    let count = 0;

    for(let searchVowels in str) {

        if(vowels.includes(str[searchVowels])) count++;
    }

    return count;
}

console.log(vowelsTen(prompt("Пожалуйста, введите строку","")));