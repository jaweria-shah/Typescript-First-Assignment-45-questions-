function make_great(magicians: string[]){
    for(let i = 0; i < magicians.length; i++){
        magicians[i] =`the great ${magicians[i]}`;
    }
}

function show_magicians(magicians: string[]){
    console.log(magicians);
}
const magicians: string[] = [`Jaweria`,`Hamza`,`Areeba`,`Amal`,`Laiba`,`Hammad`];
make_great(magicians);
show_magicians(magicians);