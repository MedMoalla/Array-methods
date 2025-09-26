///////// slice /////// 
///// khdhit copie ; d'ont change the  original  array .... 
////// mate7ssebech el end number ..

// let arr = ["a","b","c","d","e","f"]

// console.log(arr)

// console.log(arr.slice(2,4))
// console.log(arr)


/////// splice ////// 
///// tfasakh partie ; change the original array

// let arr = ["a","b","c","d","e","f"]

// console.log("before" , arr)

// arr.splice(3,3)

// console.log("after" , arr)



////// spread operator (...)::: 

// let arr = ["a","b","c","d","e","f"]


// const x = [
//     {name : "flen" , country : "tunisia"} , 
//         {name : "paul" , country : "denmark"} , 
// ]


// console.log(...x)


///// reverse //// 


// let arr = ["a","b","c","d","e","f"]

// console.log(arr)

// arr.reverse()

// console.log(arr)

////// concat ::: 

// let arr = ["a","b","c","d","e","f"]
// let x = ["j" , "k" , "l" , "m"]

// console.log(arr)
// console.log(x)

// let z = arr.concat(x.reverse())
// console.log(z)

/////// at :: 


// let arr = ["a","b","c","d","e","f"]

// console.log(arr[2])

// console.log(arr.at(2))



///////// for //////////////// 

// let numbers = [1,2,3,4,5,6,7,8,9,10] ; 

// for (let i = 0 ; i < numbers.length ; i++){
//    console.log(numbers[i])
// }



// for (let i = numbers.length-1 ; i >= 0 ; i-- ){
//     console.log(numbers[i])
// }

////// automatic for :: 
// let numbers = [1,2,3,4,5,6,7,8,9,10] ; 
// for (const ele of numbers) {
//     console.log(ele)
// }


const movements = [200,450,-400,1000,-800,100] ; 

for (const mov of movements) {
    if (mov > 0) {
        console.log(`you deposit : ${mov}`)
    } 
    else {
        console.log(`you withdraw : ${Math.abs(mov)}`)  
    }
}












////// challange :: 
////////////////////////////////////////////////// problem solving /////////////////////////////////// 



// Easy Problems::////////////////////////////////////////////
// Append an Element:
//   const arr = [1,2,3,4,5]
// Given an array of numbers, add a new number to the end of the array .
////////////////////

////// put your answer here ...........

//  arr.push(6);
//  console.log(arr);


// Remove the Last Element:
// Remove the last element from an array .


////// put your answer here ...........


// arr.pop();
// console.log(arr);

//////////////

// Insert at the Beginning:
// Add an element at the start of an array .
////////////////////
//  const arr = [1,2,3,4,5]

////// put your answer here ...........

//  arr.unshift(0);
//  console.log(arr);



// Remove the First Element:
// Remove the first element from an array .
/////////////////
// 
////// put your answer here ...........

// arr.shift();
// console.log(arr);





// Check if Element Exists:
// Write a function that checks if a given element exists .
//  const arr = [1,2,3,4,5]

  //// boolean ==> true or false


////// put your answer here ...........
// console.log(arr.includes(1)); // true 
// console.log(arr.includes(500)); // false 









// Combine two arrays into one .

///////////////////

// const arr = [1,2,3,4,5]
// const arr2 = [6,7,8,9,10]

////// put your answer here ...........

//  let arr3 = arr.concat(arr2);
//  console.log(arr3)






// Reverse an Array:
// Reverse the elements in an array .
// const arr2 = [6,7,8,9,10]

////// put your answer here ...........


// arr2.reverse();
// console.log(arr2);









//////////////////

// Slice a Subarray:
// Extract a subarray from a given array. Return elements between index 2 and 5.
// const arr2 = [6,7,8,9,10,20,30,50,60]

////// put your answer here ..........
////////////////////

// console.log(arr2.slice(2,5)); //[8,9,10];




// Splice :
//  remove 3 elements from an array starting from index 2.
//  const arr2 = [6,7,8,9,10,20,30,50,60]

////// put your answer here ...........
///////////////////////////

// console.log(arr2.splice(2,3));
// console.log(arr2);




// Intermediate Problems:::://///////////////////////////////////////////////

// Sum of Array Elements:
// Write a function that uses forEach to calculate the sum of all elements in an array.

////// put your answer here ...........
///////////////////////
//  const arrOfNumbers= [1,2,3,4,5,6] ; 

//  const sumNumOfArray = function (arr){
//     let sum = 0;
//     arrOfNumbers.forEach(function (num){
//         sum += num;

//     });
//     return sum ; 
        
//     };
//     console.log(sumNumOfArray(arrOfNumbers));
  




 





// Remove Element by Index:
// Given an array, remove the element at a specific index using splice.
////// put your answer here ...........

// const arr2 = [6,7,8,9,10,20,30,50,60]
// const remove = function(arr2 , index){
//     if(index >=0 && index <arr2.length){
//         arr2.splice(index , 1);
//     }
//     return arr2;
// }
// console.log(remove(arr2 , 2) );





///////////////////////

// Replace Elements :
// Replace the second and third elements of an array with two new values using splice.
////// put your answer here ...........
/////////////////////
// const arr2 = [6,7,8,9,10,20,30,50,60]
// const replace = function(arr2 , val1 , val2){
//     arr2.splice(1 , 2 , val1 , val2);

// return arr2;
// };
// console.log(replace(arr2 , 1500 , 1800))







// Extract Last 3 Elements:
// Use slice to get the last 3 elements from an array.
////// put your answer here ...........


////////////////////
// const arr2 = [6,7,8,9,10,20,30,50,60]
// const extract = function(arr2){
//     return arr2.slice(-3);
// };
// console.log(extract(arr2));






// Concatenate and Sort:
// Concatenate two arrays, then sort the result in ascending order.
////// put your answer here ...........
////////////////////
// const arr1 = [5,3,2,1,4] 
// const arr2 = [9,8,6,10,7]

// let arr3 = arr1.concat(arr2).sort(function (arr1,arr2){
//     return arr1-arr2;
// });
// console.log(arr3)









// Find Maximum Number:
// Use forEach to find the largest number in an array.
////// put your answer here ...........

////////////////

// const arr2 = [6,7,8,9,10,20,30,50,60]
// const findMax = function(arr2){
//     let max = arr2[0];
//     arr2.forEach(function (num) {
//         if(num > max){
//             max = num;
//         }
//     });
//     return max;
// }
// console.log(findMax(arr2));













// Count Occurrences of a Value:
// Write a function that counts how many times a specific value appears in an array using forEach.


////// put your answer here ...........

// const numbers = [1,10,2,10,5,6,10,100,6]
// const occurence = function(numbers , value){
//     let count = 0;
//     numbers.forEach(function (num){
//         if(num == value){
//             count++;
//         }
//     });
//     return count;
// }
// console.log(occurence(numbers , 10)); /// 3






// Filter Negative Numbers:
// Use forEach  to remove all negative numbers from an array.

////// put your answer here ...........
//  const numbers = [-1,-2,-3,10,-100,6,9,70]  ;


// ////////////////////

// const remove = function(numbers){
//     let result = [];
//     numbers.forEach(function (num){
//         if(num >= 0){
//             result.push(num);
//         }
//     });
//     return result;
// }
// console.log(remove(numbers));




// Flatten an Array of Arrays:
// Use concat and forEach to flatten an array of arrays (e.g., [[1, 2], [3, 4]] into [1, 2, 3, 4]).
////////////////////////////////
// const arr = [[1,2,3],[10,20,30],[50,60,100]]
// console.log(arr) /////====> [1,2,3,10,20,30,50,60,100]

// //// put your answer here ...........
// const flaten = function(arr){
//     let flat = [];
//     arr.forEach(function (arr){
//         flat=flat.concat(arr);
//     });
//     return flat;
// };
// console.log(flaten(arr));




// Advanced Problems:://////////////////////////////////////////////////////////////////////////////

// Remove Duplicates from an Array:
// Use forEach and includes to remove duplicates from an array.
////// put your answer here ...........
// const numbers = [2,10,5,7,10,8,50,10,50,8,200] ;

// const removeDuplicate = function(numbers){
//     let unique = [];
//     numbers.forEach(function (num){
//         if(!unique.includes(num)){
//             unique.push(num)
//         }
//     });
//     return unique;
// };
// console.log(removeDuplicate(numbers));




//////////////////////////////////

// Create a New Array Without Specific Elements:
// Write a function that removes all occurrences of a specific value from an array using forEach and splice.
////// put your answer here ...........

// const numbers = [2,10,5,7,10,8,50,10,50,8,200] ;

// const removeOccurences = function(numbers , value){
    
    
//         for(let i = numbers.length-1 ; i>=0 ; i--){
//             if(numbers[i] === value){
//                 numbers.splice(i,1);
//             }
//     };
//     return numbers;
// };
// console.log(removeOccurences(numbers , 10));




// Sort an Array in Descending Order:
// Create a function that sorts an array in descending order using reverse and the sort method.
////// put your answer here ...........

// const arr1 = [5,3,2,1,4] 
// const arr2 = [9,15,6,7,10] 
// const arr = arr1.concat(arr2)

// const sortDecending = function(arr){
//     return arr.sort(function(arr1 , arr2){
//         return arr1-arr2;
//     }).reverse();

// }

// console.log(sortDecending(arr))


//////////////////////////////////////

