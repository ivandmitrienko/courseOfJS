// (function() {

    "use strict";  

    let drinkInputInfo = document.getElementById('add-coctail');
   
    drinkInputInfo.onclick = function() {
    
        var drinkName = prompt("Напишите название напитка");

		var drinkDescribe = {};

		drinkDescribe.alcohol = confirm(drinkName + " - 'Это алкогольный напиток или нет?\nok - алкогольный\nотмена - без алкогольный");

		drinkDescribe.recipe = prompt("Напишите рецепт напитка - " + drinkName);

	    drinkStorage.addValue(drinkName, drinkDescribe);
        
	    console.log(drinkStorage.getValue(drinkName));
	   
    
    }

// })();