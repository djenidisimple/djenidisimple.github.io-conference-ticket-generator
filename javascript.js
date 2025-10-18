const generate = () => {
    const form = document.querySelector(".form")
    const ticket = document.querySelector(".generated-tickets")
    const fullname = document.querySelector("#fullname")
    const fullnameWrite = document.querySelectorAll("span#fullname-write")
    const email = document.querySelector("#email")
    const emailWrite = document.querySelector(".email")
    const username = document.querySelector("#username")
    const usernameWrite = document.querySelector(".username")
    form.style.display = "none"
    ticket.style.display = "block"
    for (let i = 0; i < fullnameWrite.length; i++) {
        fullnameWrite[i].innerHTML = fullname.value
    }
    emailWrite.innerHTML = email.value
    usernameWrite.innerHTML = username.value
    console.table(fullname.value)
}