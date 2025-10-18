const fileInput = document.getElementById('img-file');
const imgSelected = document.querySelector(".img-selected")
const empty = document.querySelector(".empty")
const previewContainer = document.querySelector("#preview-container")
const avatar = document.querySelector(".avatar")
fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0]
    if (file) {
        const reader = new FileReader()
        reader.addEventListener('load', function() {
            imgSelected.src = reader.result;
            empty.style.display = "none"
            previewContainer.style.display = "block"
        })
        reader.readAsDataURL(file)
    }
})

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
    avatar.src = imgSelected.src
}