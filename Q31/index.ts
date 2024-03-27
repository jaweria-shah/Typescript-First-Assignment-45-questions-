let username = ["Hamza", "Hussain","Areeba","Admin"];
username = []

if (username.length === 0){
    console.log("your array in empty we need to find some user")

}else{

username.forEach(oneuser => {
    if (oneuser === "Admin"){
        console.log(`Hello ${oneuser}, would you like to see a status report?`)

    }else{
        console.log(`Hello ${oneuser}, thank you for login in again.`)
    }
})
}