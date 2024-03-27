// define variable
let apple = "apple";
let upperCaseApple = "APPLE";
let ten = 10;
let  twenty = 20;
let fruits =["apple", "bannana", "orange"];

// test for equality and inequality with strings

console.log("is apple is equal to apple? ");
console.log(apple == "apple")

console.log("\n Is apple is not equal to apple?");
console.log(apple != "apple");

// test using lowercase function
console.log("\n Is APPLE is equal to apple after converting to lowercase?");
console.log(upperCaseApple.toLowerCase() == "apple");

console.log("\n Is APPLE is not equal to apple after converting to lowercase?");
console.log(upperCaseApple.toLowerCase() != "apple");

// test on numericals
console.log("is ten is equal to twenty?");
console.log(ten == 20);

console.log("\n is ten is not equal to twenty");
console.log(ten != 20);

console.log("\n Is ten is greator than 0");
console.log(ten > 0);

console.log("\n Is twenty is less than ten?");
console.log(twenty < ten);

// greator than equal to
console.log("\n is ten is greator than or equal to five?");
console.log(10 >= 5);

// less than equal to
console.log("\n twenty is less than or equal to ten");
console.log(twenty <= ten);

// tests using "and" & "or" operators
console.log("\n twenty is not equals to ten and twenty is greator than ten");
console.log(twenty != 10 && twenty > ten);

// using && and 

console.log("\n twenty is not equals to ten and twenty is greator than 30");
console.log(twenty != 10 && twenty > 30);

// using || or
console.log("\n twenty is greator than 50 or twenty is equal to twenty");
console.log(twenty > 50 || 20 == 20);

console.log("\n twenty is greator than 50 or twenty is not equal to twenty");
console.log(twenty > 50 || 20 != 20);

//test wheator an item is include in array
console.log("is orange include in my fruits array");
console.log(fruits.includes("orange"));

console.log("is orange include in my fruits array");
console.log(!fruits.includes("orange"));
