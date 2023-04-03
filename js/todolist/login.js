const registerLogin = document.getElementById('registerLogin');
const registerPassword = document.getElementById('registerPassword');
const errorRegisterLogin = document.getElementById("errorRegisterLogin")
const errorRegisterPassword = document.getElementById("errorRegisterPassword")

const nameLogin = document.getElementById('name')
const password = document.getElementById('password')
const errorName = document.getElementById("errorName")
const errorPassword = document.getElementById("errorPassword")
const arr = local()
function myRegister() {
    if (!registerPassword.value && !registerLogin.value) {
        errorRegisterLogin.style.display = "block"
        errorRegisterPassword.style.display = "block"
        return
    } else if (!registerLogin.value) {
        errorRegisterLogin.style.display = "block"
        return
    } else if (!registerPassword.value) {
        errorRegisterPassword.style.display = "block"
        return
    }

    arr.push({
        login: registerLogin.value,
        password: registerPassword.value
    })
    const myArrayJson = JSON.stringify(arr);
    localStorage.setItem('login', myArrayJson);
}

function myLogin() {
    if (!nameLogin.value && !password.value) {
        console.log(nameLogin.value);
        errorName.style.display = "block"
        errorPassword.style.display = "block"
        return
    } else if (!nameLogin.value) {
        errorName.style.display = "block"
        return
    } else if (!password.value) {
        errorPassword.style.display = "block"
        return
    }

    const obj = {
        login: nameLogin.value,
        password: password.value
    }
    console.log(arr);
    const filteredArr = arr.filter(element => JSON.stringify(element) === JSON.stringify(obj));
    if (filteredArr.length > 0) {
        // location.replace("./index.html")
        window.location.href = "./index.html";
        return
    } else {
        alert("ban da nhap sai");
        return
    }

    // const index = arr.findIndex(element => JSON.stringify(element) === JSON.stringify(obj));

    // if (index > -1) {
    //    window.location.href('./index.html')
    //    return
    // } else {
    //     console.log("ban da nhap sai");
    //     return
    // }
}

function local() {
    const myArrayJson = localStorage.getItem('login');
    const myArray = JSON.parse(myArrayJson);
    return myArray ? myArray : []
}
