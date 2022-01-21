// (function() {

    "use strict";  

    let drinkInputInfo = document.getElementById('add-coctail');
   
    drinkInputInfo.onclick = function() {
    
        let drinkNameAdd = prompt("Напишите название напитка");

		let drinkDescribe = {};

		drinkDescribe.alcohol = confirm(drinkNameAdd + " - 'Это алкогольный напиток или нет?\nok - алкогольный\nотмена - без алкогольный");

		drinkDescribe.recipe = prompt("Напишите рецепт напитка - " + drinkNameAdd);

	    drinkStorage.addValue(drinkNameAdd, drinkDescribe);  
    }

    let drinkGetInfo = document.getElementById("get-coctail");

    drinkGetInfo.onclick = function(){
    	
        let drinkNameGet = prompt("Напишите название напитка");

        let drinkText = document.getElementById("drinkText");

        let drinkAnswer = drinkStorage.getValue(drinkNameGet);

        if (drinkStorage.getValue(drinkNameGet) !== undefined) {
			drinkText.innerHTML = "напиток: " + drinkNameGet + 
								   "<br>" + "алкогольный: " + (drinkAnswer.alcohol === true ? "да" : "нет") + 
								   "<br>" + "Рецепт: " + (drinkAnswer.recipe ? drinkAnswer.recipe : "к сожалению РЕЦЕПТА НЕТ");
		} else {
			drinkText.innerHTML = "Нет такого напитка(";
		}
    }

    let drinkDeleteInfo = document.getElementById("delete-coctail");

    drinkDeleteInfo.onclick = function(){

        let drinkNameDelete = prompt("Напишите название напитка");

        let drinkText = document.getElementById("drinkText");

        if((drinkStorage.deleteValue(drinkNameDelete)) === true) {
            drinkText.innerHTML = "напиток " + drinkNameDelete + " удален )";
        } else {
            drinkText.innerHTML = "Такой напиток не найден (";
        }

    }

    let drinkNamesCoctails = document.getElementById("names-coctails");

    drinkNamesCoctails.onclick = function(){
        drinkText.innerHTML = drinkStorage.getKeys().join(", ");
    }





    

// })();