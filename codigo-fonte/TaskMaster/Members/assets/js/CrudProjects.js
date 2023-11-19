var projectsList = []
getProjects()

function addProject(cardText, cardText1, descriptionRow, projectId){
    var project = {title: cardText, subtitle: cardText1, description: descriptionRow, id: projectId}
    projectsList.push(project)
    localStorage.setItem('projects', JSON.stringify(projectsList))
}

function getProjects(){
    var localStorageProjects = localStorage.getItem('projects')
    var localStorageProjectsParsed = JSON.parse(localStorageProjects)

    if(localStorageProjects != null){
        projectsList = localStorageProjectsParsed
    }
}

for(i = 0; i < projectsList.length; i++){
    let project = projectsList[i]
    createCard(project.title, project.subtitle, project.description, project.id)
}

function createCard(title, subtitle, description, id){
    const containerDiv = document.createElement("div")
    containerDiv.className = "project" 
    containerDiv.id = "project-" + id

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

function generateId(){
    var lastId = localStorage.getItem('lastId')
    var lastIdNumber = Number(lastId)
    lastIdNumber++
    localStorage.setItem('lastId', lastIdNumber)
    return lastIdNumber
}
