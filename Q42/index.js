"use strict";
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the great ${magicians[i]}`;
    }
}
function show_magicians(magicians) {
    console.log(magicians);
}
const magicians = [`Jaweria`, `Hamza`, `Areeba`, `Amal`, `Laiba`, `Hammad`];
make_great(magicians);
show_magicians(magicians);
