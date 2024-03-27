// print a array of countries and pirint its orignal order
let countriesTovisit: string[] = ["China", "Dubai","Brazil", "America"];
console.log("Original order",countriesTovisit);

// print the array in alphabatical order without modifying the actual array list
console.log("Alphabatical order", [...countriesTovisit].sort());

// show that the array is still in the orginal order
console.log("still in orginal order",countriesTovisit);

// print the array in reversed orderwithout modifying the actual list
console.log("reverse order",[...countriesTovisit].reverse());

// show that array is still in original order
console.log("still in original order",countriesTovisit)

// we have change the original array order now
console.log("original array reversed",countriesTovisit.reverse());

//print the array to show that its back to its orignal order
console.log("Back to orignal order",countriesTovisit.reverse());

// print the array to show its order has been changed in alphabatical order now
console.log("sorted in alphabatical order",countriesTovisit.sort());

// we have again changed the original array order now
console.log("original array reversed",countriesTovisit.reverse());