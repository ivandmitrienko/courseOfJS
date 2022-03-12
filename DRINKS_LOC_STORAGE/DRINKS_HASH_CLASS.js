// (function() {

    "use strict";

    class HashStorageFunc {
         
     constructor() {

        this.privateHash = {};
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

let drinkStorage = new HashStorageFunc();

// })();