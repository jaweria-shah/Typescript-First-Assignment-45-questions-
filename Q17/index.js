// Creating a guest list array
var guestList = ["Amal", "jaweria", "Ayesha", "umair"];
// making variable for those who cant come
var dontCome = guestList[0];
// printing the name of guest who cant come
console.log(dontCome, "she is not coming");
// add or remove values from guest list array
guestList.splice(0, 1, "zimal");
// message print for bigger table
console.log("Good news! we have find a bigger table for a dinner");
// adding a new value at starting index of array
guestList.unshift("Hamza");
// adding a new value at ending index of array
guestList.push("hussain");
// get a middle index of  our guest list array
var middleIndex = Math.floor(guestList.length / 2);
// adding a new guest to middle index of array 
guestList.splice(middleIndex, 0, "Hassan");
// print message of updated list
console.log("updated list of our guest");
// sending a invitation message to our guest one by one with their names
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to dinner with me.")); });
// inform that only two guest can be invited for dinner
console.log("unfortunately, the new dinner table wont arrive on time so i can invite only two guest to dinner with me");
// using while loop to remove guest from the array until only two names remain
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("sorry, ".concat(removeGuest, " I cant invite you to dinner"));
}
// sending invitation to the last two guest in the list
console.log("invitations to the last two guest");
guestList.forEach(function (lastTwo) { return console.log("Luckly ".concat(lastTwo, ", you are still invited to dinner")); });
// remove the last two guest from the list
guestList.pop();
guestList.pop();
console.log("empty list", guestList);
