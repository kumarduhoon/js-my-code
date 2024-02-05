// Array Part two

// Array part 2
const arr_one = ["Akash", "garima", "Ajay"]
const arr_two = ["Dinesh", "Brijesh"]

//  Add to array into the single array 
const family_array = arr_one.concat(arr_two);

// console.log(family_array);

// this is the other way to add two array into th single array 

const family_array_two = [...arr_one, ...arr_two] // by using the spread operator we add two array into the singale array

// console.log(family_array_two)

const another_array = [1, 2, 3, [4, 5], [6, 7, [8, 9, [10, 11]]]]

// if we have a array inside into the another arry up to deep level we used the flat array method convert into the single array 

const simple_array = another_array.flat(Infinity)

// console.log(simple_array);

// for check it is array or not we used the a arrray method is isArray()

const my_name = "akash kumar"

// console.log(Array.isArray(my_name));

// while web scraping we used the url, variable and string need to convert into so we used the a new array method is from()

console.log(Array.from(my_name));

// we have a number of variable and we want to convert into the array so we used the array method is of()

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
