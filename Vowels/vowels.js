function vowelsTen () {

    let vowels = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];
        
    let str = prompt("Пожалуйста, введите строку","");

    str = str.toLowerCase();

    let count = 0;

    for(let searchVowels in str) {

        if(vowels.includes(str[searchVowels])) count++;
    }

    return count;
}

console.log(vowelsTen());