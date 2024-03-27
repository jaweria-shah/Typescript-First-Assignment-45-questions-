// creating array of current user
let currentUsers = ["hamza","Hussain","Areeba","Jaweria"];
// creating array of new users
let newUsers =["Ayesha","Ali","Amal","Jaweria","Hamza"];

// loop through new user to check for username avalibility
newUsers.forEach(new_one_user => {

let our_coundition = currentUsers.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
if (our_coundition){
    console.log(`sorry ${new_one_user} is already taken!`)

}else{
    console.log(`This username ${new_one_user} is available`)
}

})


