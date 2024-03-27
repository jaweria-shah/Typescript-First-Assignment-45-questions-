function make_shirt (size:string = "Large", printMessage:string = "I love  Typescript" ){
    console.log(`creating a ${size} shirt with the ${printMessage} prints on shirt`)

}
// calling a function with by default values
make_shirt ()

// calling a function now with medium size and default message
make_shirt ("medium")
// calling a function now with small size  and also print different message
make_shirt ("Small", "I love jawascript");