// (function() {

    "use strict";

    class LocStorageClass {
         
     constructor(lsKeyName) {

        this.privateHash = {};

        localStorage.setItem(lsKeyName, JSON.stringify(this.privateHash));

        if (localStorage.getItem(lsKeyName)) {
            if (lsKeyName == "dish") {
                let myObject = JSON.parse(localStorage.lsDish);
                this.privateHash = myObject;
            }
            if (lsKeyName == "drink") {
                myObject = JSON.parse(localStorage.lsDrink);
                this.privateHash = myObject;
            }
        }    

     } 
     
 
     addValue(key, value) {
         this.privateHash[key] = value;
        }
 
     getValue(key) {
         if(key in this.privateHash) {return this.privateHash[key];
         } else {
             return undefined;
         }
        }    
 
     deleteValue(key) {
         if(key in this.privateHash) {delete this.privateHash[key];
         return true;
         } else { 
         return false;
         }
        }    
 
     getKeys() {
         return Object.keys(this.privateHash);
        }
    }

let drinkStorage = new LocStorageClass("drink");

let dishStorage = new LocStorageClass("dish");

// })();