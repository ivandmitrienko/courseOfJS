// (function() {

    "use strict";  

    function drinkInputInfo() {
    
        var drinkName = prompt("Напишите название напитка");

		var drinkDescribe = {};

		drinkDescribe.alcohol = confirm(drinkName + " - 'это алкогольный напиток или нет?\nok - алкогольный\nотмена - без алкогольный");

		drinkDescribe.recipe = prompt("Напишите рецепт напитка - " + drinkName);

	    drinkStorage.addValue(drinkName, drinkDescribe);
	   
    
    }

// })();