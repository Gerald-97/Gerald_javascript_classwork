var userNameIn = prompt("Who goes there?", "");
userNameIn = userNameIn.toLowerCase();

if (userNameIn == "admin"){
    let userPassword = prompt("Password? ", "");
    if (userPassword == "TheMaster"){
        alert("Welcome!!");
    }
    else if (userPassword == null){
        alert("Cancelled");
    }
    else alert("Wrong Password");
}
else if (userNameIn == null){
    alert("Cancelled");
}
else alert("I don't know you!");