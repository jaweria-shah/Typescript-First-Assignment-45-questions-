type magician = string
const magicians: magician[] = ["David copperfield", "Harry Houdini", "Criss Angel"];

function showMagicians(magicians: magician[]): void {
    console.log(magicians.join("\n"));
}
function makeGreat(magicians: magician[]): magician[]{
    return magicians.map((magician) => `${magician} the great`)
}
const magiciansCopy = [... magicians];
const greatMagicians = makeGreat(magiciansCopy);
console.log("Original magicians:");
showMagicians(magicians);
console.log("\n Great magicians:");
showMagicians(greatMagicians);