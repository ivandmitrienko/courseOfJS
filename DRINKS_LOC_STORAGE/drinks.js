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

        if (drinkAnswer) {
			drinkText.innerHTML = "напиток: " + drinkNameGet + 
								   "<br>" + "алкогольный: " + (drinkAnswer.alcohol ? "да" : "нет") + 
								   "<br>" + "Рецепт: " + (drinkAnswer.recipe ? drinkAnswer.recipe : "к сожалению РЕЦЕПТА НЕТ");
		} else {
			drinkText.innerHTML = "Нет такого напитка(";
		}
    }

    let drinkDeleteInfo = document.getElementById("delete-coctail");

    drinkDeleteInfo.onclick = function(){

        let drinkNameDelete = prompt("Напишите название напитка");

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

    // for dish


    let dishInputInfo = document.getElementById('add-dish');
   
    dishInputInfo.onclick = function() {
    
        let dishNameAdd = prompt("Напишите название блюда");

		let dishDescribe = {};

		dishDescribe.vegetarian = confirm(dishNameAdd + " - 'Это вегетарианское блюдо или нет?\nok - вегетарианское\nотмена - мясное");

		dishDescribe.recipe = prompt("Напишите рецепт блюда - " + dishNameAdd);

	    dishStorage.addValue(dishNameAdd, dishDescribe);  
    }

    let dishSGetInfo = document.getElementById("get-dish");

    drinkGetInfo.onclick = function(){
    	
        let dishNameGet = prompt("Напишите название блюда");

        let dishText = document.getElementById("dishText");

        let dishAnswer = dishStorage.getValue(dishNameGet);

        if (dishAnswer) {
			dishText.innerHTML = "блюдо: " + dishNameGet + 
								   "<br>" + "вегетарианское: " + (dishAnswer.vegetarian ? "да" : "нет") + 
								   "<br>" + "Рецепт: " + (dishAnswer.recipe ? dishAnswer.recipe : "к сожалению РЕЦЕПТА НЕТ");
		} else {
			dishText.innerHTML = "Нет такого блюда(";
		}
    }

    let dishDeleteInfo = document.getElementById("delete-dish");

    dishDeleteInfo.onclick = function(){

        let dishNameDelete = prompt("Напишите название блюда");

        if((dishStorage.deleteValue(dishNameDelete)) === true) {
            dishText.innerHTML = "блюдо " + dishNameDelete + " удалено )";
        } else {
            dishText.innerHTML = "Такое блюдо не найдено (";
        }

    }

    let dishNamesCoctails = document.getElementById("names-dishes");

    ddishNamesCoctails.onclick = function(){
        dishText.innerHTML = dishStorage.getKeys().join(", ");
    }





    

// })();