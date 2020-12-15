// var userPasswords = ["azhar", "123"]
// var userEmail = ["azharkhan@gmail.com", "naveedbhai@gmail.com"];
// var usersArr = ["azhar", "naveedbhai"];
// var currentUsername = "";
// var currIndex;

userData = [
    {
        userEmail: "azhar@gmail.com",
        userPassword: "12345",
        userName: "Azhar",
        userGender: "male",
        active: true,
    },
]

const signup = () => {

    var user = document.getElementById("name").value;
    var email = document.getElementById("email").value.toLowerCase();
    var password = document.getElementById("password").value;

    isFound = false;
    if (document.getElementById("male").checked) {
        gender = "male";
    }
    else {
        gender = "female";
    }

    for (let i = 0; i < userData.length; i++) {

        if (userData[i].userEmail === email) {
            isFound = true;
            break;
        }

    }

    if (isFound) {
        alert("email alreay exists");
    }
    else {
        userData.push(
            {
                userEmail: email,
                userName: user,
                userPassword: password,
                userGender: gender,
                active: true,
            }
        )

        localStorage.setItem("userData", JSON.stringify(userData));
        alert("signedup succesfully")
        window.location.href = "login.html";
        console.log(userData);


    }
    return false;
}
const check = () => {

    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var index = false;

    for (let i = 0; i < userData.length; i++) {
        if (email === userData[i].userEmail) {
            index = i
            localStorage.setItem("currIndex", JSON.stringify(index));
            break;
        }
    }
    if (index === false) {
        alert("password or email not found");
    }
    else if (password === userData[index].userPassword) {
        alert("logged in successfully", index);
        window.location.href = "dashboard.html";

    }

    else {
        alert("password or email not found");
    }
    return false;
}


userData = JSON.parse(localStorage.getItem("userData"));


console.log(userData);
// userEmail = JSON.parse(localStorage.getItem("userEmail"));
// userPasswords = JSON.parse(localStorage.getItem("userPasswords"));
// usersArr = JSON.parse(localStorage.getItem("usersArr"));
var index = JSON.parse(localStorage.getItem("currIndex"));

const loginSuccess = () => {
    index = parseInt(index);
    console.log(index);
    document.getElementById("loginemail").innerHTML = userData[index].userEmail;
    document.getElementById("name").innerHTML = userData[index].userName;
}

const logout = () => {
    window.location.href = "login.html";
}
// DONE WITH IT