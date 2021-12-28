function treeSum(arr) {

    let numbers = [];
   
    for(let item of arr) {
       
        if (typeof item === 'number'){
         numbers.push(item);
        } else {
         numbers.push(treeSum(item));
        } 
    }
    
    let sum = 0;

    for (let number of numbers) {
       sum += number;
    }

    return sum;
}
   
   
   
   
   
treeSum([ 5, 7, 
   [ 4, [2], 8, [1,3], 2 ], 
   [ 9, [] ], 
   1, 8
 ]);