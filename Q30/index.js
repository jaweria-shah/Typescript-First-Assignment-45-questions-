var username = ["Hamza", "Hussain", "Areeba", "Admin"];
// using forEach loop on array
username.forEach(function (oneuser) {
    if (oneuser === "Admin") {
        console.log("Hello ".concat(oneuser, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneuser, ", thank you for login in again."));
    }
});
