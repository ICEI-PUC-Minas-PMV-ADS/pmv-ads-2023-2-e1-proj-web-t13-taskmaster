document.addEventListener("DOMContentLoaded", function() {
    function ValidarFormulario(){
        //criação de constantes que têm o mesmo valor dos formulários preenchidos
        const email = document.querySelector("#email").value;
        const username = document.querySelector("#username").value;
        const password = document.querySelector("#password").value;
        const confirm_password = document.querySelector("#confirm_password").value;

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

        else{
            return true; //caso nenhum dos casos acima acontecem, o formulário será enviado
        }
    }

    //adiciona um ouvinte de evento de envio do formulário
    document.querySelector("#myForm").addEventListener("Submit", function(event){
        if(ValidarFormulario()){
            event.preventDefault();
        }
    })

    function ValidarEmail(email){
        const validemail = /^[a-zA-Z0-9._\-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return validemail.test(email);
    }

    function ValidarUsuario(usuario){
        const validuser = /^[a-zA-Z0-9_\-]{6,}$/;
        return validuser.test(usuario)
    }

    function ValidarSenha(senha){
        const validsenha = /^[a-zA-Z0-9_\-]{6,}$/;
        return validsenha.test(senha);
    }
}); 