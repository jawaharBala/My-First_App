let submitButton = document.getElementById("submit");
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    let cache = localStorage.getItem("userList");
    let a = document.getElementById("username");
    let b = document.getElementById("newusername");
    let x = a.value
    let y = b.value
    let cache1 = JSON.parse(cache);
    for (let i = 0; i < cache1.length; i++) {
        if (cache1[i].username == x) {
            console.log("if condition")
            cache1[i].username = y
            localStorage.setItem("userList", JSON.stringify(cache1))
            window.location.replace("login.html")
        }
    }
})
