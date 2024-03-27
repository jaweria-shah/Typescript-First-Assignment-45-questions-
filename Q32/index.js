// creating array of current user
var currentUsers = ["hamza", "Hussain", "Areeba", "Jaweria"];
// creating array of new users
var newUsers = ["Ayesha", "Ali", "Amal", "Jaweria", "Hamza"];
// loop through new user to check for username avalibility
newUsers.forEach(function (new_one_user) {
    var our_coundition = currentUsers.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_coundition) {
        console.log("sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is available"));
    }
});
