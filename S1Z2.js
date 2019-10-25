// ARRAY: [1,6,23,8,4,8,3,7]
// 1. Create a function that returns the sum of all elements passed in array as parameter. Function (array)=>number
// 2. Create a function that returns sum of first and last elements of given array.
// 3. Create a function that takes a number and return factorial of that number.
// 4. Create a function that returns given array in reverse order. // no build in functions  
// 5. Create a function that based on given array returns new array in pattern [a,b,c,d,e,f] -> [a+b, c+d, e+f]    [1,3,4,1,0,3] => [4,5,3] function(array)=>array
// 6. For time of this example remove last element from the given array. Create a function that based on given array return new array in pattern [a,b,c,d,e] -> [a+b, c+d, e+e]
// 7. Create a function the return one random element from given array. // use random function 

// 8. Create a function that takes two parameters: array and number off attempts. Based on number of attempts choose a random number from table that many times and return lowest one.
// 9. Create a function that takes given array. Then takes a random element, removes it from the array and pushes it to result arrays. This takes place as long as there are elements in source array. 
// 10. Create a function that on given array will perform operation of adding or subtracting elements. Operation is to be chosen at random. And return a result.[a,b,c,d] =>(((a+-b)+-c)+-d)
// 11. Create a function that will return the current day name in Polish. 
// ----------------------------------------------------------------------
function myFunction() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Niedziela";
    weekday[1] = "Poniedziałek";
    weekday[2] = "Wtorek";
    weekday[3] = "Środa";
    weekday[4] = "Czwartek";
    weekday[5] = "Piątek";
    weekday[6] = "Sobota";
  
    var n = weekday[d.getDay()];
// 12. Create a function that tells us how many days till Friday
// ---------------------------------------------------------------------- 
// poniedziałek to start day, dni tygodnia włożyć do tablicy i odliczać względem nich ile elementów z tabliy brakuje do ponownego spotkania w tablicy piątku?
let newDay
// 13. Create a function that take two numbers and return the object with 4 fields. Result on 4 basic arithmetic operations. 
// ----------------------------------------------------------------------
// Funkcja pobiera dwie wartości i zwraca objekt z 4 polami. Wynik to 4 podstawowe działania arytmetyczne, czyli +,-,* i /
let x = 2;
let y = 3;

function aryt {
    let result = (sum = x+y, sub = x-y, multi = x*y, div = x/y);
    return = result;
}

console.log(return)

