let emailInput = document.querySelector("#email")
let nameInput = document.querySelector("#name")
let nameOk = false
let emailOk = false
let imgTribute = document.querySelector("#img-tribute")

function validaNome() {
    let txt = document.querySelector("#txtName")
    if (nameInput.value.length  < 2) {
        txt.innerHTML = "O Nome deve ter no mínimo 2 caracteres."
        nameOk = false
    } else {
        txt.innerHTML = ""
        nameOk = true
    }
}

function validaEmail() {
    let txt = document.querySelector("#txtEmail")
    if (emailInput.value.indexOf("@") == -1 || emailInput.value.indexOf(".") == -1) {
        txt.innerHTML = "Por favor, insira um e-mail válido."
        emailOk = false
    } else {
        txt.innerHTML = ""
        emailOk = true
    }
}

function send(){
    if (nameOk == true && emailOk == true) {
        alert("Inscrição feita com sucesso!")
    } else {
        alert("Preencha todos os campos para fazer a inscrição.")
    }
}


function imgZoom() {
    imgTribute.style.width = "800px"
    imgTribute.style.height = "600px"
}

function imgNormal() {
    imgTribute.style.width = "500px"
    imgTribute.style.height = "300px"
}


