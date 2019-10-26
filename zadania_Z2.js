// ARRAY: [1,6,23,8,4,8,3,7]
// 1. Create a function that returns the sum of all elements passed in array as parameter. Function (array)=>number
// ===================================================================================
// let ARRAY = [1,6,23,8,4,8,3,7];
// function sumAll(parameter) {
//     let sum = 0;
//     parameter.forEach(element => {
//         sum += element;
//     });
//     console.log('Sum elements is :  '+sum);
// }
// sumAll(ARRAY);
// ===================================================================================
// 2. Create a function that returns sum of first and last elements of given array.
// ===================================================================================
// let ARRAY = [1,6,23,8,4,8,3,7];
// function getSum(list) {
//         let x = list[0]
//         let y = list[list.length-1]
//         return x+y
//     }
//     console.log(getSum(ARRAY))
// ==================================================================================
// 3. Create a function that takes a number and return factorial of that number.
// ==================================================================================
// function factorial(n){
//     let i=1;
//     let result =1;
//     while(i<=n){
//         result = result * i;
//         i++;
//     }
//     console.log(result);
    
// }
// console.log(factorial(7))

// ===================================================================================
// 4. Create a function that returns given array in reverse order. // no build in functions  
// ===================================================================================
// let ARRAY = [1,6,23,8,4,8,3,7];
// let arrayReverse = []
// function reverseArray(list) {
//     for (let i = list.length-1; i >= 0; i--) {
//         arrayReverse.push(list[i])
        
//     }
//     return arrayReverse
    
// }
// console.log(reverseArray(ARRAY))

// =====================================================================================
// 5. Create a function that based on given array returns new array in pattern [a,b,c,d,e,f] -> [a+b, c+d, e+f]    [1,3,4,1,0,3] => [4,5,3] function(array)=>array
// =====================================================================================
// let ARRAY = [1,6,23,8,4,8,3,7];
// function samValues(list) {
//         newArray = [];
//         let valueHolder = 0;
//         for (let i = 0; i < list.length; i+=2) {
//             valueHolder = list[i] + list[i+1];
//             newArray.push(valueHolder);
//             valueHolder = 0;
            
//         }
//         return newArray;
//     };
    
//     console.log(sumValues(ARRAY));
// =======================================================================
// 6. For time of this example remove last element from the given array. Create a function that based on given array return new array in pattern [a,b,c,d,e] -> [a+b, c+d, e+e]
// =======================================================================
// let ARRAY = [1,6,23,8,4,8,3,7];
// function reLast(params1) {
//     let params=params1.slice();//ciekawe [...params1],Array.from(params1)
//     params.pop();
//     let ost=params[params.length-1]
//     params.push(ost);
//     let arr5=[];
//     for (let Rem = 0; Rem < params.length; Rem+=2) {
//         arr5.push(params[Rem]+params[Rem+1])
        
//     }
//    console.log('6) '+arr5) 
// }
// reLast(ARRAY)
// =======================================================================
// 7. Create a function the return one random element from given array. // use random function 
// =======================================================================
// let ARRAY = [1,6,23,8,4,8,3,7];
// function randomElement(list) {
//         return list[Math.floor(Math.random()*list.length)]
//     }
    
//     console.log(randomElement(ARRAY));
// =======================================================================
// 8. Create a function that takes two parameters: array and number off attempts. Based on number of attempts choose a random number from table that many times and return lowest one.
// =======================================================================

// 9. Create a function that takes given array. Then takes a random element, removes it from the array and pushes it to result arrays. This takes place as long as there are elements in source array. 
// ========================================================================
// let ARRAY = [1,6,23,8,4,8,3,7];
// let resultArray = []
// function randomElement(list) {
//     for (let i = 0; i < list.length; i++) {
//         let random = Math.floor(Math.random()*list.length)
//         resultArray.push(list[random])
        
//     }
//     return resultArray
// }
// console.log(randomElement(ARRAY))

// =========================================================================================
//10)Create a function that on given array will perform operation of adding or subtracting elements. 
//Operation is to be chosen at random.  And return a result. [a,b,c,d] => (((a+-b)+-c)+-d)
// =========================================================================================

// let ARRAY = [1,6,23,8,4,8,3,7];
// function randomAddOrSubstract(list) {
//     let valueOfAnArray = 0;
//    for (let i = 0; i < list.length; i++) {
//        let randomer = Math.floor(Math.random()*2);
//        if (randomer === 0) {
//            valueOfAnArray = valueOfAnArray - list[i];
//        } else {
//            valueOfAnArray = valueOfAnArray + list[i];
//        };
//    };
//    return valueOfAnArray;
// };

// console.log(randomAddOrSubstract(ARRAY));

// =========================================================================
// 11. Create a function that will return the current day name in Polish. 
// =========================================================================

// let today = new Date();

// function showDay() {
    
// switch (today.getDay()) {
//     case 0:
//        day = "Niedziela"
//         break;
//     case 1:
//         day = "Poniedziałek"
//         break;
//     case 2:
//         day = "Wtorek"
//         break;
//     case 3:
//         day = "Środa"
//         break;
//     case 4:
//         day = "Czwartek"
//         break;
//     case 5:
//         day = "Piątek"
//         break;
//     default:
//         day = "Sobota"
//         break;
//     }
//     return day
// }
// console.log(showDay())

// ===================================================================
// 12. Create a function that tells us how many days till Friday
// ===================================================================
// function tillFriday() {
//         const today = new Date().getDay()
//         if (today<5) {
//             console.log((5 - today) + ' days till Friday')
//         } else if (today === 5) {
//             console.log('Today is Friday')
//         } else {
//             console.log(((5 - today)+7) + ' days till Friday')
//         }    
//     }
//     tillFriday()
    
// ===================================================================
// 13. Create a function that take two numbers and return the object with 4 fields. Result on 4 basic arithmetic operations. 
// ===================================================================
// function Arithmetic(n1, n2) {
//     let arithmeticObject = {
//         add: n1+n2,
//         substract: n1-n2,
//         multiply: n1*n2,
//         divide: n1/n2
//     }
//     return arithmeticObject;
// };

// let object = Arithmetic(7,2);

// console.log(object);
// =============================================
function aryt(x, y){
    let arytObject = {sum: x+y, sub: x-y, multi: x*y, div: x/y};
    return arytObject;
}
let result = aryt(2,3);
console.log(result);
