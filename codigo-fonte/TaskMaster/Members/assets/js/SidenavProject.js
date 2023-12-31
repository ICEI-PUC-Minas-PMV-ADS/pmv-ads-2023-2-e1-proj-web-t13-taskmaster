var addProjectButton = document.getElementById('add-project')
var projects = document.getElementById('projects' )
var fade = document.querySelector('#fade-modal-project')
var modal = document.querySelector('.modal-sidenav')
var createProjectButton = document.getElementById('create-project')
var saveProjectButton = document.getElementById('save-project')
var cancelProject = document.getElementById('cancel')
var errorNameProject = document.getElementById('projectname')
var errorCardTitle = document.getElementById('project-card-title')
var listSettings = document.querySelector('.list-settings')
var deleteProject = document.getElementById('delete-project')
var changeProject = document.getElementById('change-project')
var editContext = null

// Função para exibir modal de criação de card
const toggleModal = () =>{
    modal.classList.toggle("hide")
    fade.classList.toggle("hide")
    projectname.focus()

    if(modal.classList.contains("hide")){
        editContext = null
    }

    var inputModal = document.querySelectorAll('input')
    var textDescrition = document.querySelectorAll('textarea')

    if(editContext == null){
        for(var element of inputModal){
            element.value = ""
        }
        for(var element of textDescrition){
            element.value = ""
        }
    }

    var projectNameError = document.querySelector('.error-name-project')
    var cardTitleError = document.querySelector('.error-card-title')

    if(projectNameError){
        projectNameError.remove()
    }
    if(cardTitleError){
        cardTitleError.remove()
    }
}

[addProjectButton, cancelProject, fade, modal].forEach(el => {
    el.addEventListener("click", function(){
        // Exibi o botão de criar projeto no modal
        if(createProjectButton.style.display == "none"){
            createProjectButton.style.display = "block"
        }
        saveProjectButton.style.display = "none"
        toggleModal()
    })
});

modal.querySelector('.modal-project').addEventListener('click', function(event) {
    event.stopPropagation();
});

createProjectButton.onclick = createProject

// Função de criar card de projeto
function createProject(){
    var projectId = generateId()

    const containerDiv = document.createElement("div")
    containerDiv.className = "project"
    containerDiv.id = "project-" + projectId
    containerDiv.onclick = selectProject

    var isValid = true;

    const cardText = document.getElementById('projectname').value
    if (cardText) {
        const card = document.createElement("div")
        card.className = "card shadow-v1"
        card.innerText = cardText;

        containerDiv.appendChild(card);

        var projectNameError = document.querySelector('.error-name-project')
        if (projectNameError){
            projectNameError.remove();
        }
    }
    else{
        isValid = false;
        var isProjectNameValid = document.querySelector('.error-name-project')
        if(isProjectNameValid == null){
            const error = document.createElement("div")
            error.className = "error-name-project"
            error.innerHTML = "* Título do projeto obrigatório"

            errorNameProject.before(error)
        }
    }

    const cardText1 = document.getElementById('project-card-title').value
    const descriptionRow = document.getElementById('project-description').value
    if(cardText1){
        const secondRow = document.createElement("div")
        const description = document.createElement("div")
        const descriptionProject = document.createElement("p")
        const editButton = document.createElement("div")
        secondRow.className = "description shadow-v1"
        description.className = "subtitle"
        description.innerText = cardText1
        editButton.className = "edit-project-button"
        editButton.id = "edit-project" + projectId
        editButton.dataset.projectId = containerDiv.id
        editButton.onclick = toggleSettings
        editButton.innerHTML = "•••"
        descriptionProject.className = "p-description"
        descriptionProject.innerText = descriptionRow

        secondRow.appendChild(description)

        secondRow.appendChild(descriptionProject)

        containerDiv.appendChild(secondRow)

        secondRow.prepend(editButton)

        var cardTitleError = document.querySelector('.error-card-title')
        if(cardTitleError){
            cardTitleError.remove()
        }
    }
    else{
        isValid = false;
        var isCardTitleValid = document.querySelector('.error-card-title')
        if(isCardTitleValid == null){
            const error = document.createElement("div")
            error.className = "error-card-title"
            error.innerHTML = "* Título do card obrigatório"

            errorCardTitle.before(error)
        }
    }

    // Checa se as opções de titulo de projeto e subtítulo foram criadas antes de criar projeto
    if(isValid == true){
        projects.appendChild(containerDiv)
        addProject(cardText, cardText1, descriptionRow, projectId)
        toggleModal()
        
    }
}

// Função para exibir a lista de edição de projeto
function toggleSettings(e){
    listSettings.classList.toggle("hide")
    const element = e.target
    const rect = element.getBoundingClientRect();
    editContext = element.dataset.projectId

    let xPos = rect.left
    let yPos = rect.top

    listSettings.style.position = "absolute"
    listSettings.style.left = (xPos - 95) + "px"
    listSettings.style.top = yPos + "px"
    console.log(element)
    console.log(editContext)
}

// Função para deletar o projeto
deleteProject.addEventListener("click", function(){
    document.getElementById(editContext).remove()
    removeProjectList(editContext)
    listSettings.classList.toggle("hide")
    editContext = null
})

// Função de seleção para editar projeto
changeProject.addEventListener("click", function(){
    var informationProject = document.getElementById(editContext)
    var cardText = informationProject.getElementsByClassName('card')[0].textContent
    var cardText1 = informationProject.getElementsByClassName('subtitle')[0].textContent
    var descriptionRow = informationProject.getElementsByClassName('p-description')[0].textContent

    // exibi o botão de salvar alteração de projeto
    createProjectButton.style.display = "none"
    saveProjectButton.style.display = "block"

    var projectName = document.getElementById('projectname')
    var projectCardTtile = document.getElementById('project-card-title')
    var projectDescription = document.getElementById('project-description')
    projectName.value += cardText
    projectCardTtile.value += cardText1
    projectDescription.value += descriptionRow
    toggleModal()
    listSettings.classList.toggle("hide")

    saveProjectButton.onclick = saveProject

    // Função do botão para salvar alteração no projeto
    function saveProject(){
        var projectName = document.getElementById('projectname').value
        if(projectName){
            var textCard = informationProject.getElementsByClassName('card')[0]

            var projectNameError = document.querySelector('.error-name-project')
            if (projectNameError){
                projectNameError.remove();
            }
        }
        else{
            isValid = false;
            var isProjectNameValid = document.querySelector('.error-name-project')
            if(isProjectNameValid == null){
                const error = document.createElement("div")
                error.className = "error-name-project"
                error.innerHTML = "* Título do projeto obrigatório"

                errorNameProject.before(error)
            }
        }

        var projectCardTtile = document.getElementById('project-card-title').value
        if(projectCardTtile){
            var textCard1 = informationProject.getElementsByClassName('subtitle')[0]

            var cardTitleError = document.querySelector('.error-card-title')
            if(cardTitleError){
                cardTitleError.remove()
            }
        }
        else{
            isValid = false;
            var isCardTitleValid = document.querySelector('.error-card-title')
            if(isCardTitleValid == null){
                const error = document.createElement("div")
                error.className = "error-card-title"
                error.innerHTML = "* Título do card obrigatório"

                errorCardTitle.before(error)
            }
        }

        // Checa se teve alteração nos dois valores para poder validar o save
        if(projectName && projectCardTtile){
            isValid = true
        }

        if(isValid == true){
            var projectDescription = document.getElementById('project-description').value
            var textDescrition = informationProject.getElementsByClassName('p-description')[0]
            textCard.textContent = projectName
            textCard1.textContent = projectCardTtile
            textDescrition.textContent = projectDescription
            editProjectList(editContext, projectName, projectCardTtile, projectDescription)

            toggleModal()
        }
    }
})

// Função de seleção de card
function selectProject(e){
    const element = e.currentTarget
    editContext = element.id
    setSelectedProject(editContext)
    
    var selectedProject = getProject(editContext)
    setPageTitle(selectedProject.title)

    var removeColumn = document.getElementsByClassName('column')
    for(i = removeColumn.length - 1; i >= 0; i--){
        removeColumn[i].remove()
    }

    for(i = 0; i < selectedProject.columns.length; i++){
        var column = selectedProject.columns[i]
        var cardContainer = generateColumnFromLocalStorage(column.title, column.columnId)
        for(j = 0; j < column.cards.length; j++){
            var card = column.cards[j]
            generateCardFromLocalStorage(card.title, card.description, card.priority, card.cardId, cardContainer)
        }
    }
}

// Função para fecha a lista de edição de projeto
document.addEventListener('click', function handleClickOutsideBox(event) {
    if(!event.target.classList.contains('edit-project-button')){
        const listSettings = document.getElementsByClassName('list-settings');
        for(setting of listSettings) {
            if(!setting.classList.contains("hide")){
                if (!setting.contains(event.target)) {
                    setting.classList.toggle("hide");
                }
            }
        }
    }
    });

    
    card.addEventListener('dragend', function(event) {
        // Get the source and target columns
        var sourceColumn = event.target.parentElement;
        var targetColumn = event.target.parentElement;
    
        // Calculate the new height of the source column
        var sourceColumnHeight = sourceColumn.clientHeight - event.target.clientHeight;
    
        // Adjust the height of the source column to match the new height
        sourceColumn.style.height = sourceColumnHeight + 'px';
    });
    
    card.addEventListener('dragend', function(event) {
        // Get the source and target columns
        var sourceColumn = event.target.parentElement;
        var targetColumn = event.target.parentElement;
    
        // Calculate the new height of the target column
        var targetColumnHeight = targetColumn.clientHeight + event.target.clientHeight;
    
        // Adjust the height of the target column to match the new height
        targetColumn.style.height = targetColumnHeight + 'px';
    });