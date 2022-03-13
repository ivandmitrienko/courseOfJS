// (function() {

    "use strict";

    class LocStorageClass {
         
     constructor(lsKeyName) {

        this.privateHash = {};
        
        this.object = lsKeyName;

        if (localStorage.getItem(this.object)) {
            this.privateHash = JSON.parse(localStorage.getItem(this.object));
        }   
     } 
     
 
     addValue(key, value) {
         this.privateHash[key] = value;
          localStorage.setItem(this.object, JSON.stringify(this.privateHash))
        }
 
     getValue(key) {
         if(key in this.privateHash) {return this.privateHash[key];
         } else {
             return undefined;
         }
        }    
 
     deleteValue(key) {
         if(key in this.privateHash) {delete this.privateHash[key];
            localStorage.setItem(this.object, JSON.stringify(this.privateHash));
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