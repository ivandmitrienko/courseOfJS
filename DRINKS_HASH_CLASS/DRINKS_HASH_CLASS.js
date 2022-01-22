// (function() {

    "use strict";

    class HashStorageFunc() {
         
     constructor() {
        this.privateHash = {};
     } 
     
 
     addValue(key, value) {
         privateHash[key] = value;
        }
 
     getValue(key) {
         if(key in privateHash) {return privateHash[key];
         } else {
             return undefined;
         }
        }    
 
     deleteValue(key) {
         if(key in privateHash) {delete privateHash[key];
         return true;
         } else { 
         return false;
         }
        }    
 
     getKeys() {
         return Object.keys(privateHash);
        }
    }

let drinkStorage = new HashStorageFunc();

// })();