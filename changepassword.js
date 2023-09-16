let submitButton = document.getElementById("submit");
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    let cache = localStorage.getItem("userList");
    let a = document.getElementById("password");
    let b = document.getElementById("newpassword");
    let c = document.getElementById("username");
    let d = document.getElementById("re-enter");
    let x = a.value
    let y = b.value
    let z = c.value
    let b1 = d.value
    let cache1 = JSON.parse(cache);
    for (let i = 0; i < cache1.length; i++) {
        if (cache1[i].username == z && cache1[i].password == x && y==b1) {
            console.log("if condition")
            cache1[i].password = y
            localStorage.setItem("userList", JSON.stringify(cache1))
            window.location.replace("login.html")
        }
    }
})
