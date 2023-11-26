# Programação de Funcionalidades

Implementação da aplicação descritas por meio dos requisitos codificados. 


### Tela de “Welcome”

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t13-taskmaster/assets/145122642/fd09be6b-b77e-4305-aaf9-35e66c74fe98)

Figura 18 – Tela Oficial Welcome

#### Requisito atendido

Requisito Funcional - Criar cadastro no site ou realizar login se já tiver acesso. A aplicação irá direcionar para a tela compatível.


#### Artefatos da funcionalidade

Arquivos relacionados ao desenvolvimento da funcionalidade: Arquivo “Welcome.html”


#### Estrutura de Dados

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../Public/Assets/css/WelcomeStyle.css">
    <title>Welcome</title>
</head>

<body>
    <div class="signup-box">

        <div class="upper-box">

        </div>
        <div class="menino-logo">
            <img src="../Public/Assets/Img/young_men_at_work.png" alt="young man on chair with laptop" class="image" id="boy-in-chair">
        </div>
        <div class="textogeral">
            </p>
            <h1> Olá!</h1>
            <h2> Seja bem vindo ao TaskMaster! </h2>
            <p>O TaskMaster é sua mais nova ferramenta de gerenciamento de atividades. Ela irá lhe auxiliar no
                planejamento
                e gestão das tarefas diárias, tonando seu dia mais produtivo e sua rotina mais leve! É um prazer poder
                fazer
                parte do seu dia-a-dia!
            </p>
            <p>
       
            <div class="botoes">
                <button type="submit" id="signup" value="Signup" formaction="#" onclick="validateLogin()">
                    Criar uma conta
                    <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t13-taskmaster/main/documentos/img/Login.png"
                        alt="Signup Icon" class="image" id="signup-icon">
                </button>

                <button type="submit" id="login1" value="Signup" formaction="#" onclick="validateLogin1()">
                    Login
                    <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t13-taskmaster/main/documentos/img/Login.png"
                        alt="Signup Icon" class="image" id="signup-icon">
                </button>

            </div>
        </div>
    </div>
    </form>
    <script>

    </script>
    <script src="Assets/js/WelcomeScript.js"></script>

</body>

</html>

#### Instruções de acesso

- Acessar o site pelo endereço: http://127.0.0.1:5501/codigo-fonte/TaskMaster/Public/Welcome.html 
- Utilizar o botão “Criar uma conta” caso ainda não tenha acesso;
-	Se já possuir uma conta, utilizar o botão login;
-	Após a utilização das alternativas apresentadas, o site direcionará para a tela de login para realização do cadastro.


#### Responsável

Nome: Marilda Inêz de Araújo Pereira

### Tela de “Sign Up”

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t13-taskmaster/assets/145122642/d5cd2e7a-5019-4e48-aaff-fa2b29051997)

Figura 19 – Tela Oficial SignUp

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
    <title>Sign Up</title>
</head>
<body>
    <div class="signup-box"> 
        <div class="upper-box"> 
            <div class="figure" id="figure_1"></div>
            <div class="figure" id="figure_2"></div>
            <div class="figure" id="figure_3"></div>
            <div class="text" id="signup-text">Sign up</div>
        </div>
        <div class="imagem">
        <img src="../Public/Assets/Img/young_man_with_laptop_on_chair.png"
        alt="young man on chair with laptop" class="image" id="boy-in-chair"> 
    </div>
        <div class="inside-box"> 
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
                document.getElementById("signup").addEventListener("click", function() {
                    window.location.href = "../Public/Login.Html";
                });
            </script>
            <p id="redireciona"> Already have an account? <a href="../Public/Login.html" style="color: blue;">log into</a></p>
        </div>
    </div>
</body>
</html>

#### Instruções de acesso

A funcionalidade será acessada a partir da Tela de “Welcome”. 
Após inserir os dados na tela inicial, o usuário será direcionado para a tela de preenchimento dos dados para cadastro em uma conta nova ou simplesmente para realizar o login no aplicativo.


#### Responsável

Nome: Thiago Rodrigues Silva de Oliveira


### Tela de “Login”

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t13-taskmaster/assets/145122642/1ff01d3e-c7c2-41b6-9485-c2d1da64a571)

Figura 20: Tela Oficial Login

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
    <title>Login</title>
</head>

<body>
    <div class="signup-box">
        
        <div class="upper-box">
            <div class="figure" id="figure_1"></div>
            <div class="figure" id="figure_2"></div>
            <div class="figure" id="figure_3"></div>
            <div class="figure" id="figure_4"></div>
            <div class="text" id="signup-text">Login</div>
        </div>
        <div class="menino-logo">
            <img src="Assets/Img/menino logo.png" alt="young man on chair with laptop" class="image" id="boy-in-chair">
        </div>
        <div class="inside-box">
            <form id="myForm">
                <div id="my_email" class="textbox">
                    <label for="email" style="visibility: hidden;">Email:</label>

                    <input type="email" id="IN-email" class="formbox" autocomplete="email" placeholder="Email">
                </div>
                <div id="my_password" class="textbox">
                    <label for="password" style="visibility: hidden;">Password:</label>
                    <input type="password" id="IN-password" class="formbox" autocomplete="current-password"
                        placeholder="Password">
                </div>

                <div class="senha">

                    <div id="remember">

                        <label><input type="checkbox"></label>

                        <div id="Remember-Me">Remember Me</div>
                    </div>

                    <div id="criar-pass">
                        <br>
                        <a href="#"> Forgot Password ? </a>
                    </div>
                </div>

                <button type="submit" id="signup" value="Signup" formaction="#" onclick="validateLogin()">
                    Login
                    <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t13-taskmaster/main/documentos/img/Login.png"
                        alt="Signup Icon" class="image" id="signup-icon">
                </button>

                <div id="criar-conta">
                    <p> Don’t have an Account ?<a href="../Public/SignIn.html"> Sign up </a></p>
                </div>
        </div>
    </div>
    </form>

    <script>

        async function validateLogin() {
            let email = document.getElementById("IN-email").value;
            let password = document.getElementById("IN-password").value

            if (email === "admin@exemplo.com" && password === "admin") {
                setTimeout (() => {
                   window.location.href = "../Members/TaskMaster.html";
               },150);
                return;
            }

            alert("Credenciais inválidas. Por favor, tente novamente.");
        }

    </script>
</body>

</html>


#### Instruções de acesso

Após realizar o cadastro na tela de “SignUp”, o usuário será direcionado à tela de “Login” para acessar o aplicativo. Nesta tela deverá inserir o seu e-mail, e senha cadastrada anteriormente. Terá opção de marcar a opção de “Remember me” caso queira que o site armazene seus dados de acesso, bem como o botão “Forgot Password” para o caso de esquecer a senha.

#### Responsável

Nome: Ettore Motta Gazzinelli

### Tela Aplicativo "TaskMaster"

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t13-taskmaster/assets/145122642/63cf1596-e977-40bf-94a0-965e1a1746c7)


#### Requisito atendido

Requisito Funcional – Criar projetos e cards  com a finalidade de acompanhamento da rotina diária de tarefas; adicionar as rotinas e tarefas diárias; acompanhar as tarefas fazendo a gestão das atividades.

#### Artefatos da funcionalidade

Arquivos relacionados ao desenvolvimento da funcionalidade: Arquivo “TaskMaster.html”

#### Estrutura de Dados

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="assets/css/Style.css" />    
    <title>TaskMaster</title>
    
  </head>
  
  <body>
    <nav class="item">
      <h1 id="taskMaster">TaskMaster</h1>
      <h3 id="name-project"></h3>
    </nav>

    <div class="container grid-template-areas">
      <div class="item sidenav">
        <div id="projects"></div>
        <div id="add-project">+</div>
      </div>

      <div class="item content">
        <div class="board">
          <div id="add-column">+</div>
        </div>          
      </div>
    </div>

    <!-- Modal -->
    <div class="hide" id="fade-modal-project"></div>
    <div class="modal-sidenav hide">
      <div class="modal-project">
        <h1><span>Criar Projeto</span></h1>
        <input type="text" maxlength="30" id="projectname" placeholder="Nome do Projeto"><br>
        <input type="text" maxlength="30" id="project-card-title" placeholder="Título do Card"><br>
        <textarea type="text" maxlength="100" id="project-description" placeholder="Descrição do Projeto"></textarea><br>
        <div id="creat-modal">
          <button class="btn" id="cancel">Cancelar</button>
          <button class="btn" id="create-project">Criar</button>
          <button class="btn" id="save-project">Salvar</button>
        </div>
      </div>
    </div>

    <!-- Settings list -->
    <div class="list-settings hide">
      <ul class="list-settings-project shadow-v2">
        <li id="change-project">Editar</li>
        <li id="delete-project">Deletar</li>
      </ul>
    </div>

    <!-- Modal Kanban -->
    <div class="fade hide"></div>
    <div class="modal hide" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title" id="example-modal-label">Novo Card</h1>
          </div>
          <div class="modal-body">
            <div class="card-name-class">
              <input type="text" maxlength="30" id="card-name" placeholder="Nome do Card">
            </div>
            <div class="card-description-class">
              <textarea type="text" maxlength="437" id="card-description" placeholder="Descrição do Card"></textarea><br>
            </div>
            <div class="priority">
              <span class="priority-text">Prioridade</span>
              <button class="priority-btn" id="high-priority">Alta</button>
              <button class="priority-btn" id="medium-priority">Media</button>
              <button class="priority-btn" id="low-priority">Baixa</button>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="card-btn" id="close-button" data-dismiss="modal">Cancelar</button>
            <button type="button" class="card-btn" id="save-button">Criar</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Column Settings -->
    <div class="column-settings hide">
      <ul class="column-settings-list">
        <li class="edit-column-class">Editar</li>
        <li class="delete-column">Deletar</li>
      </ul>
    </div>

    <!-- Card Settings -->
    <div class="card-settings hide">
      <ul class="card-settings-list">
        <li class="edit-card-btn">Editar</li>
        <li class="delete-card-btn">Deletar</li>
      </ul>
    </div>

    

  </body>
  <script src="assets/js/SidenavProject.js"></script>
  <script src="assets/js/Kanban.js"></script>
  <script src="assets/js/CrudProjects.js"></script>
  <script src="assets/js/Dragged.Js"></script>
  </html>

#### Instruções de acesso

Após realizar o cadastro na tela de “SignUp” e fazer o “Login”, o usuário será direcionado à tela do “TaskMaster” no endereço http://127.0.0.1:5501/codigo-fonte/TaskMaster/Members/TaskMaster.html acessando assim o aplicativo. Nesta tela o usuário fazer o uso do aplicativo, adicionando projetos e cards conforme finalidade desejada. A tela segue modelo do Kanban onde o usuário poderá gerir suas tarefas diárias conforme prioridades de fazer o devido acompanhamento da execução das mesmas.

#### Responsável

Nome: Felipe Van Oorschot Gamarra
