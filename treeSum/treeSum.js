function treeSum(arr) {

    let sum = 0;
   
    for(let item of arr) {
       
        if (typeof item == 'object'){
         sum += treeSum(item);
        } else {
            sum += item;
        } 
    }
    
   

    return sum;
}
   
   
   
   
   
treeSum([ 5, 7, 
   [ 4, [2], 8, [1,3], 2 ], 
   [ 9, [] ], 
   1, 8
 ]);