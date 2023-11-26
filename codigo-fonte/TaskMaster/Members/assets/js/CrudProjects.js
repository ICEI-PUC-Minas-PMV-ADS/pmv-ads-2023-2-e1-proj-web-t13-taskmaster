var projectsList = []
getProjects()

// Função para criar a lista de parametros dos projetos e salvar a lista no localstorage
function addProject(cardText, cardText1, descriptionRow, projectId){
    var project = {title: cardText, subtitle: cardText1, description: descriptionRow, id: projectId, columns:[]}
    projectsList.push(project)
    updateLocalStorageProjectList()
}

// Função para pegar os valores do localstorage e converter em objeto (lista)
function getProjects(){
    var localStorageProjects = localStorage.getItem('projects')
    var localStorageProjectsParsed = JSON.parse(localStorageProjects)
    
    if(localStorageProjects != null){
        projectsList = localStorageProjectsParsed
    }
}

// Função para setar minha lista de projeto no localstorage
function updateLocalStorageProjectList(){
    localStorage.setItem('projects', JSON.stringify(projectsList))
}

// Função que gera o valor de ID salvando no localstorage
function generateId(){
    var lastId = localStorage.getItem('lastId')
    var lastIdNumber = Number(lastId)
    lastIdNumber++
    localStorage.setItem('lastId', lastIdNumber)
    return lastIdNumber
}

// Cria id para Coluna
function generateColumnId(){
    var lastId = localStorage.getItem('lastColumnId')
    var lastIdNumber = Number(lastId)
    lastIdNumber++
    localStorage.setItem('lastColumnId', lastIdNumber)
    return lastIdNumber
}

// Cria id para Card
function generateCardId(){
    var lastId = localStorage.getItem('lastCardId')
    var lastIdNumber = Number(lastId)
    lastIdNumber++
    localStorage.setItem('lastCardId', lastIdNumber)
    return lastIdNumber
}

// Função para remover um projeto do localstorage
function removeProjectList(editContext){
    const editContextId = editContext.replace('project-', '');
    var findIdProject = projectsList.findIndex((element) => element.id == editContextId)
    projectsList.splice(findIdProject, 1)
    updateLocalStorageProjectList()
}

// Função para salvar alteração no localstorage
function editProjectList(editContext, projectName, projectCardTtile, projectDescription){
    const editContextId = editContext.replace('project-', '');
    var findIdProject = projectsList.findIndex((element) => element.id == editContextId)
    var projectFind = projectsList[findIdProject]
    projectFind.title = projectName
    projectFind.subtitle = projectCardTtile
    projectFind.description = projectDescription
    updateLocalStorageProjectList()
}

// Função de seleção de card
function getProject(editContext){
    const editContextId = editContext.replace('project-', '')
    var findProject = projectsList.findIndex((e) => e.id == editContextId)
    var findIdTitleProject = projectsList[findProject]    
    return findIdTitleProject
}

// Função de seleção da coluna
function getColumn(editContext, columnContext){
    var project = getProject(editContext)
    var columnProject = columnContext.replace('column-', '')
    var findColumn = project.columns.findIndex((e) => e.columnId == columnProject)
    return project.columns[findColumn]
}

// Função para adicionar a coluna no localstorage
function addColumns(title, editContext, columnId){
    var project = getProject(editContext)
    project.columns.push({title: title, columnId: columnId, cards: []})
    updateLocalStorageProjectList()
}

// Função de adicionar card no localstorage
function setCard(editContext, columnContext, nameValue, descriptionValue, priorityValue, cardId){
    var column = getColumn(editContext, columnContext)
    column.cards.push({title: nameValue, description: descriptionValue, priority: priorityValue, cardId: cardId})
    updateLocalStorageProjectList()
}

var selectedProjectOnLoad = getSelectedProject()

// Função que definir meu id
function setSelectedProject(editContext){
    const editContextId = editContext.replace('project-', '')
    localStorage.setItem('selectedProject', editContextId)
}

// Função para pegar o valor do meu id
function getSelectedProject(){
    return localStorage.getItem('selectedProject')
}

// Função para exibir o titulo do card
function setPageTitle(title){
    var nameProject = document.getElementById('name-project')

    nameProject.textContent = title
    nameProject.style.paddingRight = "20px"
}

function removeColumnList(editContext){
    var project = getProject(editContext)
    var columnProject = columnContext.replace('column-', '')
    var findColumn = project.columns.findIndex((e) => e.columnId == columnProject)
    project.columns.splice(findColumn, 1)
    updateLocalStorageProjectList()
}

for(i = 0; i < projectsList.length; i++){
    let project = projectsList[i]
    createCard(project.title, project.subtitle, project.description, project.id)
    if(selectedProjectOnLoad == project.id){
        setPageTitle(project.title)
        for(j = 0; j < project.columns.length; j++){
            let column = project.columns[j]
            var cardContainer = generateColumnFromLocalStorage(column.title, column.columnId)
            for(k = 0; k < column.cards.length; k++){
                let card = column.cards[k]
                generateCardFromLocalStorage(card.title, card.description, card.priority, card.cardId, cardContainer)
            }
        }
    }
}

// Função para criar o card de projeto com os valores do local storage
function createCard(title, subtitle, description, id){
    const containerDiv = document.createElement("div")
    containerDiv.className = "project" 
    containerDiv.id = "project-" + id
    containerDiv.onclick = selectProject

    const cardText = title
    const card = document.createElement("div")
    card.className = "card shadow-v1"
    card.innerText = cardText;

    containerDiv.appendChild(card);
    
    const cardText1 = subtitle
    const descriptionRow = description
    const secondRow = document.createElement("div")
    const descriptionDiv = document.createElement("div")
    const descriptionProject = document.createElement("p")
    const editButton = document.createElement("div")
    secondRow.className = "description shadow-v1"
    descriptionDiv.className = "subtitle"
    descriptionDiv.innerText = cardText1
    editButton.className = "edit-project-button"
    editButton.id = "edit-project" + id
    editButton.dataset.projectId = containerDiv.id
    editButton.onclick = toggleSettings
    editButton.innerHTML = "•••"
    descriptionProject.className = "p-description"
    descriptionProject.innerText = descriptionRow
    
    secondRow.appendChild(descriptionDiv)

    secondRow.appendChild(descriptionProject)

    containerDiv.appendChild(secondRow)

    secondRow.prepend(editButton)

    projects.appendChild(containerDiv)
}

// Função para criar coluna com o localstorage
function generateColumnFromLocalStorage(title, columnId) {

    columnDiv = document.createElement("div")
    columnDiv.className = "column"
    columnDiv.id = "column-" + columnId
    columnDiv.onclick = addCardColumn
    columnDiv.innerHTML = `
        <h2 class="column-title">${title}</h2>
        <button class="open-settings-button" id="open-settings${columnId}">•••</button>
        <div class="cards-container"></div>
        <div class="add-card-btn">+</div>`

    board.insertBefore(columnDiv, addColumnDiv)
    return columnDiv.querySelector(".cards-container")
}

// Função para criar os cards com localstorage
function generateCardFromLocalStorage(title, description, priority, cardId, cardContainer){
    let card = document.createElement("div")
    card.className = "card-task"
    card.id = "card-" + cardId
    card.innerHTML = `
        <h3 class="card-name-value">${title}</h3>
        <p class="card-description-value">${description}</p>
        <span class="priority-value" id=${priority}></span>
        <button class="open-card-settings" data-name="${title}" data-description="${description}" 
        data-priority="${priority}" data-cardid="card${cardId}">•••</button>`

    cardContainer.appendChild(card)
}