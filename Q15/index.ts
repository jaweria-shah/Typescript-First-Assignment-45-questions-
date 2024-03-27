let guestList = ["Amal", "jaweria", "Ayesha", "umair"];

let dontCome = guestList[0];

console.log(dontCome,"she is not coming");

guestList.splice(0, 1, "zimal");

guestList.forEach(guest => console.log(`salam ${guest}, would you like to dinner with me`));