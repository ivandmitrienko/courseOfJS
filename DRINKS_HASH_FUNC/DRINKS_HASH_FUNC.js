// (function() {

    "use strict";

    function HashStorageFunc() {
 
     let self = this;
     let privateHash = {};
 
     self.addValue = function(key, value) {
         privateHash[key] = value;
     }
 
     self.getValue = function(key) {
         if(key in privateHash) {return privateHash[key];
         } else {
             return undefined;
         }
     }    
 
     self.deleteValue = function(key) {
         if(!(key in privateHash)) {delete privateHash[key];
         return true;
         } else { 
         return false;
         }
     }    
 
     self.getKeys() = function() {
         return Object.keys(privateHash);
     }

      
    

}

let drinkStorage = new HashStorageFunc();
     

function drinkInputInfo() {

    let alcohol;

    let drinkName = prompt("Какое название напитка?");

    let drinkAlcohol = confirm(drinkName + " - алкогольный напиток или нет?\nok - алкогольный\nотмена - без алкогольный");

    let drinkRecipe = prompt("Какой рецепт напитка?");

    drinkStorage(drinkName, drinkAlcohol);

}

// })();
 