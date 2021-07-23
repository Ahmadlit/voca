var database = [
    {
        username: "Lanre", password: "password"
    }
];

var newsfeed = [
    {
        username: "Micheal", 
        timeline: " Opening Computers is fun!"
    },
    {
        username: "Nd", 
        timeline: "Beard Gang"
    }
];

var usernamepr = prompt("What Is Your Username");
var passwordpr = prompt("What IS Your Password");

function signIn(user, pass){
    if (user === database[0].username && pass === database[0].password){
        alert("Welcome to Gkl Webisite");
        console.log(newsfeed);
    } else {
        alert("Sorry Wrong Username or Password");
    }
}

signIn( usernamepr, passwordpr);
