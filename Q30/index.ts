let username = ["Hamza", "Hussain","Areeba","Admin"];

// using forEach loop on array
username.forEach(oneuser => {
    if (oneuser === "Admin"){
        console.log(`Hello ${oneuser}, would you like to see a status report?`)

    }else{
        console.log(`Hello ${oneuser}, thank you for login in again.`)
    }
})