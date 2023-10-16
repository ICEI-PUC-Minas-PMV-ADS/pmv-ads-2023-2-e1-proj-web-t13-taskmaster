function ValidarFormulario(){
    //criação de constantes que têm o mesmo valor dos formulários preenchidos
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirm_password = document.getElementById("confirm_password").value;

    //realiza validação dos formulários
    if(!ValidarEmail(email)){
        alert("Email inválido."); //exibe uma mensagem de erro
        return false; //impede o envio do formulário
    }

    if(!ValidarUsuario(username)){
        alert("O username deve conter apenas letras, números, -, _ e pelo menos 6 caracteres.");
        return false;
    }

    if(!ValidarSenha(password)){
        alert("A senha deve conter apenas letras, números, -, _ e pelo menos 6 caracteres.");
        return false;
    }

    if(confirm_password != password){
        alert("As senhas não coincidem.");
        return false;
    }

    return true; //caso nenhum dos casos acimas acontecem, o formulário será enviado
}

//adiciona um ouvinte de evento de envio do formulário
document.getElementById("myForm").addEventListener("submit", function(event){
    if(!ValidarFormulario()){
        event.preventDefault();
    }
})

function ValidarEmail(email){
    const regex = /^[a-zA-Z0-9._\-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
}

function ValidarUsuario(usuario){
    const regex = /^[a-zA-Z0-9_\-]{6,}$/;
    return regex.test(usuario)
}

function ValidarSenha(senha){
    const regex = /^[a-zA-Z0-9_\-]{6,}$/;
    return regex.test(senha);
}