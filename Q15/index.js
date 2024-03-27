var guestList = ["Amal", "jaweria", "Ayesha", "umair"];
var dontCome = guestList[0];
console.log(dontCome, "she is not coming");
guestList.splice(0, 1, "zimal");
guestList.forEach(function (guest) { return console.log("salam ".concat(guest, ", would you like to dinner with me")); });
