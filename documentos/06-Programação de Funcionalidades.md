# Programação de Funcionalidades

Implementação da aplicação descritas por meio dos requisitos codificados. 


### Tela de “Welcome”

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t13-taskmaster/assets/145122642/14ff84f5-acb6-4aa2-8091-bb31b694c6de)


#### Requisito atendido

Requisito Funcional - Criar cadastro no site ou realizar login se já tiver acesso. A aplicação irá direcionar para a tela compatível.


#### Artefatos da funcionalidade

Arquivos relacionados ao desenvolvimento da funcionalidade: Arquivo “Welcome.html”


#### Estrutura de Dados

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>TaskMaster</title>
    <link rel="stylesheet" href="Assets/css/WelcomeStyle.css">
    <head>
    <body>
        <div class="container">
            <div class="box">
            </div>
    </body>
</head>
</html>
<style>
    body {
        background-color: #F6F1F1;
        align-items: center;
    }

    h1 {
        color: black;
    }

    .center {
        display: flex;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
    }
</style>

<head></head>

<body>
    <div id="body" <p><img src="Assets/Img/bonecos.png" alt="Welcome" class="justify" width="300px"
            height="300px">
        </p>
        <h1> Olá!</h1>
        <h2> Seja bem vindo ao TaskMaster! </h2>
        <p>O TaskMaster é sua mais nova ferramenta de gerenciamento de atividades. Ela irá lhe auxiliar no planejamento
            e gestão das tarefas diárias, tonando seu dia mais produtivo e sua rotina mais leve! É um prazer poder fazer
            parte do seu dia-a-dia!
        </p>
        <p>
            <button id="btnCriar uma conta" onclick="btnSingInClicked()">
                Criar uma conta
            </button>
        </p>
        <p>
            <button id="btnLogin" onclick="btnLoginClicked()">
                Login
            </button>
        </p>
    </div>
    <script>

    </script>
    <script src="Assets/js/WelcomeScript.js"></script>
</body>

</html>


#### Instruções de acesso

- Acessar o site pelo endereço: http://127.0.0.1:5500/codigo-fonte/TaskMaster/Public/Welcome.html 
- Utilizar o botão “Criar uma conta” caso ainda não tenha acesso;
-	Se já possuir uma conta, utilizar o botão login;
-	Após a utilização das alternativas apresentadas, o site direcionará para a tela de login para realização do cadastro.


#### Responsável

Nome: Marilda Inêz de Araújo Pereira

### Tela de “Sign Up”

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t13-taskmaster/assets/145122642/78017d0a-36e9-4661-8f0e-888cc38a8dd6)


#### Requisito atendido

Requisito Funcional – Preencher campos para criação de cadastro no site. Obrigatório cadastro do e-mail, nome de usuário, senha e confirmação de senha e clicar em “Sign Up”. 
Realizar login se já tiver acesso, clicando em “Logar”. A aplicação irá direcionar para a tela compatível.


#### Artefatos da funcionalidade

Arquivos relacionados ao desenvolvimento da funcionalidade: Arquivo “SignIn.html”


#### Estrutura de Dados

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="Assets/css/SignInStyle.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="<link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Nunito:wght@300&family=Preahvihear&display=swap" rel="stylesheet">
    <script src="Assets/js/SignInScript.js"></script>
    <title>Document</title>
</head>
<body>
    <div class="signup-box"> <!--Estrutura Geral da Área SignUp-->
        <div class="upper-box"> <!--Estrutura da área não-interativa do SignUp Box-->
            <div class="figure" id="figure_1"></div>
            <div class="figure" id="figure_2"></div>
            <div class="figure" id="figure_3"></div>
            <div class="text" id="signup-text">Sign up</div>
            <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t13-taskmaster/main/documentos/img/young%20man%20with%20laptop%20on%20chair.png"
            alt="young man on chair with laptop" class="image" id="boy-in-chair"> 
        </div>
        <div class="inside-box"> <!--Estrutura da área interativa do SignUp Box-->
            <!--Abaixo estão os formulários de preenchimento-->
            <form action="../Public/Login.Html" method="post" id="myForm">
                <div id="my_email" class="textbox">
                    <label for="email" style="visibility: hidden;">Email:</label>
                    <input type="email" id="email" class="formbox" autocomplete="email" placeholder="Email">
                </div>
                <div id="my_username" class="textbox">
                    <label for="username" style="visibility: hidden;">Username:</label>
                    <input type="text" id="username" class="formbox" autocomplete="username" placeholder="Username">
                </div>
                <div id="my_password" class="textbox">
                    <label for="password" style="visibility: hidden;">Password:</label>
                    <input type="password" id="password" class="formbox" autocomplete="current-password" placeholder="Password">
                </div>
                <div id="my_confirm_password" class="textbox">
                    <label for="confirm_password" style="visibility: hidden;">Confirm Password: </label>
                    <input type="password" id="confirm_password" class="formbox" autocomplete="current-password" placeholder="Confirm Password">
                </div>
                <div class="signup-button">
                    </button>
                </div>
            </form>
            <button type="submit" id="signup" value="Signup" formaction="../Public/Login.Html">
                Sign up
                <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t13-taskmaster/main/documentos/img/Login.png"
                alt="Signup Icon" class="image" id="signup-icon">
            </button>
            <script>
                //gambiarra enquanto meu script não funciona
                document.getElementById("signup").addEventListener("click", function() {
                    window.location.href = "../Public/Login.Html";
                });
            </script>
            <p id="redireciona"> Já tem uma conta? <a href="../Public/Login.html" style="color: blue;">Logar</a></p>
        </div>
    </div>
</body>
</html>


#### Instruções de acesso

A funcionalidade será acessada a partir da Tela de “Welcome”. 
Após inserir os dados na tela inicial, o usuário será direcionado para a tela de preenchimento dos dados para cadastro em uma conta nova ou simplesmente para realizar o login no aplicativo.


#### Responsável

Nome: Thiago Rodrigues Silva de Oliveira


### 6.3.	Tela de “Login”

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t13-taskmaster/assets/145122642/c3dc24ee-2298-4e3c-8b72-8e84dbc5f6a0)


#### Requisito atendido

Requisito funcional: Inserir os dados para acesso ao site. Caso não tenha conta, retornar à página anterior para cadastro.


#### Artefatos da funcionalidade

Arquivos relacionados ao desenvolvimento da funcionalidade: Arquivo “Login.html”


#### Estrutura de Dados

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="Assets/css/LoginStyle.css">
    <title>LOGIN</title>
</head>

<body>

    <main class="container">
        <div class="corpo">
            <div id="login-Corpo">
            </div>
            <div id="login-Corpo2">
            </div>
            <div id="login-Corpo3">
            </div>
            <div id="login-Corpo4">
            </div>
        </div>
        <div id="titulo">
            <h1>Login</h1>
            <br><br>
        </div>
        <div class="login">
            <div id="logo">
                <img src="Assets/Img/menino logo.png" alt="Logo do menino">
            </div>
            <input type="text" id="email" placeholder="Email">
            <br><br>
            <input type="password" id="password" placeholder="Password">
            <br><br>
            <div class="senha">
                <div id="remember">
                    <label><input type="checkbox"> Remember Me</label>
                </div>

                <div id="criar-pass">

                    <a href="#"> Forgot Password ? </a>
                </div>
            </div>
            <br>
            <button class="botao-login" id="login-button">Login</button>

                    <p>Don’t have an Account ?<a href="../Public/SignIn.html"> Sign up </a></p>
            </div>
        </div>
    </main>
    <script>
        document.getElementById("login-button").onclick = function () {
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;
    
            if (email === "" || password === "") {
                alert("Por favor, preencha todos os campos.");
            } else {
                
                
                window.location.href = "http://127.0.0.1:5500/codigo-fonte/TaskMaster/Members/TaskMaster.html";
            }
        };
    </script>
</body>

</html>


#### Instruções de acesso

Após realizar o cadastro na tela de “SignUp”, o usuário será direcionado à tela de “Login” para acessar o aplicativo. Nesta tela deverá inserir o seu e-mail, e senha cadastrada anteriormente. Terá opção de marcar a opção de “Remember me” caso queira que o site armazene seus dados de acesso, bem como o botão “Forgot Password” para o caso de esquecer a senha.

#### Responsável

Nome: Ettore Motta Gazzinelli
