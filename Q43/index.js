"use strict";
const magicians = ["David copperfield", "Harry Houdini", "Criss Angel"];
function showMagicians(magicians) {
    console.log(magicians.join("\n"));
}
function makeGreat(magicians) {
    return magicians.map((magician) => `${magician} the great`);
}
const magiciansCopy = [...magicians];
const greatMagicians = makeGreat(magiciansCopy);
console.log("Original magicians:");
showMagicians(magicians);
console.log("\n Great magicians:");
showMagicians(greatMagicians);
