let userList = [
    {
        username: 1,
        password: "123",
    },
    {
        username: 2,
        password: "abc"
    },
    {
        username: 3,
        password: "cde"
    },
]
let attemptsLeft = localStorage.getItem("noOfAttemptsLeft");
if (!attemptsLeft || attemptsLeft == 0) {
    localStorage.setItem("noOfAttemptsLeft", 3) //Setting the memory in local storage
    attemptsLeft = 3;
}
let cache = localStorage.getItem("userList");
if (!cache) {
    localStorage.setItem("userList", JSON.stringify(userList));
    cache = localStorage.getItem("userList");
}
let left = document.getElementById("left");
let cache1 = JSON.parse(cache);
let loginButton = document.getElementById("login-form-submit");
loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Function called")
    let userInput = document.getElementById("login-form");
    let userName = userInput.username.value
    let passWord = userInput.password.value
    if (userName == "" || passWord == "") {
        left.textContent = "Please enter all fields!"
    } else {
        if (attemptsLeft > 0) {
            console.log(attemptsLeft);
            console.log(cache1)
            for (let i = 0; i < cache1.length; i++) {
                if (cache1[i].username == userName && cache1[i].password == passWord) {
                    let a = cache1[i];
                    console.log("Logging a ", a);
                    alert(`Welcome  ${userName}`)
                    attemptsLeft = 3;
                    localStorage.setItem("noOfAttemptsLeft", 3)
                    window.location.replace("ticket.html");
                    return;
                }
            } // end of loop
            localStorage.setItem("noOfAttemptsLeft", attemptsLeft--);
            // attemptsLeft--;
            localStorage.setItem("noOfAttemptsLeft", attemptsLeft);
            alert("You have entered the wrong credentials!")
            if (attemptsLeft < 3) {
                left.style.color = "black";
                left.textContent = `"You have ${attemptsLeft} attempt(s) left"`;
                if (attemptsLeft < 1) {
                    redirect.innerHTML = "<a href=changepassword.html>Click here to reset password!</a>";
                    left.textContent = "You are out of login attempts!"
                }
            }
        } else {
            let redirect = document.getElementById("redirect");
            redirect.innerHTML = "<a href=changepassword.html>Click here to reset password!</a>";
            left.textContent = "You are out of login attempts!"
        }
    }
})
$(document).ready(function () {
    $("#username-field").focus(function () {
        $("#username-field").css(
            "color:red")
    })

})
let j = navigator.geolocation.getCurrentPosition
console.log(j)