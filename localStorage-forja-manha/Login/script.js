// funçao de login
function login(){
    //var nome= document.getElementById("nome").value 
    //var senha = document.getElementById("senha").value

    var nome= $("#nome").val()
    var senha= $("#senha").val()

    if(nome && senha && nome === "Kárida" && senha === "12345"){
        const user = {
            name: nome,
            dataEntrada: new Date(),
            id: Math.floor(Math.random() * 100000)
        }
        localStorage.setItem("usuario", JSON.stringify(user))
        window.location.href= "../loja"
    }else{
        document.getElementById("error-modal").style.display = "flex"
        document.getElementById("nome").style.borderBottom = "3px solid red"
        document.getElementById("senha").style.borderBottom = "3px solid red"
    }
}

function showPassword(){
    var inputsenha = document.querySelector('#senha')
    var img_eye = document.querySelector('#eye')

    if(inputsenha.getAttribute("type") === "password"){
        inputsenha.setAttribute("type", "text")
        img_eye.setAttribute("src", "./Images/hide.png")
    }else{
        inputsenha.setAttribute("type", "password")
        img_eye.setAttribute("src", "./Images/view.png")
    }
    }

function fecharError(){
    document.getElementById("error-modal").style.display = "none"
    document.getElementById("nome").style.borderBottom = "2px solid black"
    document.getElementById("senha").style.borderBottom = "2px solid black"
}    

