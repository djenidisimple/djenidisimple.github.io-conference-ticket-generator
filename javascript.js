const fileInput = document.getElementById('img-file');
const fileChange = document.getElementById('file-change');
const imgSelected = document.querySelector(".img-selected")
const empty = document.querySelector(".empty")
const previewContainer = document.querySelector("#preview-container")
const avatar = document.querySelector(".avatar")
const labelInputFile = document.querySelector("#label-input-file")
fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0]
    if (file) {
        const reader = new FileReader()
        reader.addEventListener('load', function() {
            imgSelected.src = reader.result;
            empty.style.display = "none"
            labelInputFile.style.display = "none"
            previewContainer.style.display = "flex"
        })
        reader.readAsDataURL(file)
    }
})

fileChange.addEventListener('change', function(event) {
    fileInput.value = ""
    const file = event.target.files[0]
    if (file) {
        const reader = new FileReader()
        reader.addEventListener('load', function() {
            imgSelected.src = reader.result;
            empty.style.display = "none"
            labelInputFile.style.display = "none"
            previewContainer.style.display = "flex"
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
    const messageError = document.querySelector(".upload-description")
    const messageError_1 = document.querySelector(".message-error-1")
    const messageError_2 = document.querySelector(".message-error-2")
    const messageError_3 = document.querySelector(".message-error-3")
    if (fileInput.value.length == 0 || fileChange.value.length == 0) {
        messageError.style.color = 'hsl(7, 71%, 60%)';
    }
    if (fullname.value.length == 0) {
        messageError_1.style.display = 'flex';
    } else {
        messageError_1.style.display = 'none';
    }
    if (email.value.length == 0) {
        messageError_2.style.display = 'flex';
    } else {
        messageError_2.style.display = 'none';
    }
    if (username.value.length == 0) {
        messageError_3.style.display = 'flex';
    } else {
        messageError_3.style.display = 'none';
    }
    if ((fileInput.value.length > 0 || fileChange.value.length > 0) && fullname.value.length > 0 && username.value.length > 0 && email.value.length > 0) {
        form.style.display = "none"
        ticket.style.display = "block"
        for (let i = 0; i < fullnameWrite.length; i++) {
            fullnameWrite[i].innerHTML = fullname.value
        }
        emailWrite.innerHTML = email.value
        usernameWrite.innerHTML = username.value
        avatar.src = imgSelected.src
    }
}

const remove = () => {
    fileInput.value = "";
    imgSelected.src = "#"
    empty.style.display = "block"
    labelInputFile.style.display = "flex"
    previewContainer.style.display = "none"
}