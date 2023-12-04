const addColumnDiv = document.getElementById("add-column")
const board = document.querySelector(".board")
var fadeModalProject = document.querySelector('.fade')
var modalCard = document.querySelector('.modal')
var cardName = document.getElementById("card-name")
var cardDescription = document.getElementById("card-description")
var highPriority = document.getElementById("high-priority")
var mediumPriority = document.getElementById("medium-priority")
var lowPriority = document.getElementById("low-priority")
var closeCard = document.getElementById("close-button")
var saveCard = document.getElementById("save-button")
var modalName = document.querySelector(".modal-title")
var columnSettings = document.querySelector(".column-settings")
var cardSettings = document.querySelector(".card-settings")
var editCardButton = document.querySelector(".edit-card-btn")
var deleteCardButton = document.querySelector(".delete-card-btn")
var cardIDTask
var columnDiv
var cardContainer
var settingsButton
var countColumn = 1
var countCard = 1
var columnContext = null
var cardContext = null

//Modal

fadeModalProject.addEventListener("click", function(){
    fadeModalProject.classList.toggle("hide")
    modalCard.classList.toggle("hide")
})

function openModal() {

    let cardNameError = modalCard.querySelector(".card-name-error")
    if (cardNameError) {
        modalCard.querySelector(".card-name-class").removeChild(cardNameError)
    } 
    modalName.textContent = "Novo Card" 
        modalCard.classList.toggle("hide")
        fadeModalProject.classList.toggle("hide")
        saveCard.textContent = "Criar"
        cardName.value = ''
        cardDescription.value = ''
        lowPriority.classList.remove("active")
        mediumPriority.classList.add("active")
        highPriority.classList.remove("active")   
}

function openEditModal(nameValue, descriptionValue, priorityValue) {
    
    let cardEditNameError = modalCard.querySelector(".card-name-error")
    if (cardEditNameError) {
        modalCard.querySelector(".card-name-class").removeChild(cardEditNameError)
    }
    modalName.textContent = "Editar Card"
    modalCard.classList.toggle("hide")
    fadeModalProject.classList.toggle("hide")
    saveCard.textContent = "Salvar"
    cardName.value = nameValue
    cardDescription.value = descriptionValue
    if (priorityValue === "low-priority-card") {
        lowPriority.classList.add("active")
        mediumPriority.classList.remove("active")
        highPriority.classList.remove("active")
    }
    if (priorityValue === "medium-priority-card") {
        mediumPriority.classList.add("active")
        lowPriority.classList.remove("active")
        highPriority.classList.remove("active")
    }
    if (priorityValue === "high-priority-card") {
        highPriority.classList.add("active")
        lowPriority.classList.remove("active")
        mediumPriority.classList.remove("active")
    }
}

highPriority.addEventListener("click", function(){
        mediumPriority.classList.remove("active")
        lowPriority.classList.remove("active")
        highPriority.classList.add("active")
})

mediumPriority.addEventListener("click", function(){
        highPriority.classList.remove("active")
        lowPriority.classList.remove("active")
        mediumPriority.classList.add("active")
})

lowPriority.addEventListener("click", function(){
        highPriority.classList.remove("active")
        mediumPriority.classList.remove("active")
        lowPriority.classList.add("active")
})

function saveModal(){
    if(cardName.value.trim() !== ''){
        let nameValue = cardName.value
        let descriptionValue = cardDescription.value
        let priorityValue = document.querySelector(".active")
        if (priorityValue.id === "low-priority") {
            priorityValue = "low-priority-card"
        } else if (priorityValue.id === "medium-priority") {
            priorityValue = "medium-priority-card"
        } else if (priorityValue.id === "high-priority") {
            priorityValue = "high-priority-card"
        }
        fadeModalProject.classList.toggle("hide")
        modalCard.classList.toggle("hide")
        return [nameValue, descriptionValue, priorityValue]
    }
    else if(cardName.value.trim() === '') {
        let cardNameError = modalCard.querySelector(".card-name-error")
        if (!cardNameError){
            cardNameError = document.createElement("div")
            cardNameError.classList.add("card-name-error")
            cardNameError.textContent = "* Nome do card obrigatório"
            modalCard.querySelector(".card-name-class").appendChild(cardNameError)
        }
    }
}
    
saveCard.addEventListener("click", function(){
    var cardId = generateCardId()
    if (saveCard.textContent === "Criar"){
        if (columnDiv) {
        let [nameValue, descriptionValue, priorityValue] = saveModal()
        let card = document.createElement("div")
        card.className = "card-task"
        card.id = "card-" + cardId
        card.innerHTML = `
            <h3 class="card-name-value">${nameValue}</h3>
            <div class="border-card"></div>
            <p class="card-description-value">${descriptionValue}</p>
            <span class="priority-value" id=${priorityValue}></span>
            <button class="open-card-settings" data-name="${nameValue}" data-description="${descriptionValue}" 
            data-priority="${priorityValue}" data-cardid="card${cardId}">•••</button>`

        addCardFunction(card, cardContainer)

        makeCardDraggable(card)
        setCard(editContext, columnContext, nameValue, descriptionValue, priorityValue, cardId)
        } 
    }
    if (saveCard.textContent === "Salvar"){
        if (columnDiv) {
            let [nameValue, descriptionValue, priorityValue] = saveModal()
            let cardAux = document.getElementById(cardIDTask)
            cardAux.querySelector(".card-name-value").textContent = nameValue
            cardAux.querySelector(".card-description-value").textContent = descriptionValue
            cardAux.querySelector(".priority-value").id = priorityValue
            settingsButton.dataset.name = nameValue
            settingsButton.dataset.description = descriptionValue
            settingsButton.dataset.priority = priorityValue
            editCard(editContext, columnContext, cardContext, nameValue, descriptionValue, priorityValue)
        }
    }
    if (saveCard.textContent === "Fechar"){
        modalCard.classList.toggle("hide")
        fadeModalProject.classList.toggle("hide")
    }
})

closeCard.addEventListener("click", function(){
    fadeModalProject.classList.toggle("hide")
    modalCard.classList.toggle("hide")
})

function addCardFunction(card, cardContainer) {

    let column = cardContainer.parentNode
    cardContainer.appendChild(card)

    let numberOfCards = cardContainer.childElementCount
    let newHeight = 167 * numberOfCards + 120

    if (newHeight <= 580){
        column.style.height = newHeight + 'px'
    }
    else{
        column.style.height = 580 + 'px'
    }
}

document.addEventListener("click", function(event) {
    if (event.target.classList.contains("open-card-settings")) {
        settingsButton = event.target
        cardContext = settingsButton.parentElement.id
        const element = settingsButton.closest(".column")
        columnContext = element.id
        editCardButton.setAttribute("data-name", settingsButton.dataset.name)
        editCardButton.setAttribute("data-description", settingsButton.dataset.description)
        editCardButton.setAttribute("data-priority", settingsButton.dataset.priority)
        editCardButton.setAttribute("data-cardid", settingsButton.dataset.cardid)
        deleteCardButton.setAttribute("data-cardid", settingsButton.dataset.cardid)

        // Exibe ou oculta o cardSettings
        cardSettings.classList.toggle("hide")

        // Obtém as dimensões do settingsButton
        const buttonRect = settingsButton.getBoundingClientRect()
        let xPos = buttonRect.left
        let yPos = buttonRect.top

        cardSettings.style.position = 'absolute'
        cardSettings.style.left = (xPos-90) + 'px'
        cardSettings.style.top = (yPos+10) + 'px'
    }
})

document.addEventListener("click", function(event) {
    if (!event.target.classList.contains("open-card-settings")) {
        cardSettings.classList.add("hide")
    }
})

var cardIDTask = null
editCardButton.addEventListener("click", function() {
    const name = editCardButton.dataset.name
    const description = editCardButton.dataset.description
    const priority = editCardButton.dataset.priority
    originalCardID = editCardButton.dataset.cardid

    // Chame a função editModal() passando os valores recuperados
    openEditModal(name, description, priority)

    return cardIDTask = originalCardID.replace('card', 'card-');
})

deleteCardButton.addEventListener("click", function() {
    document.getElementById(cardContext).remove()
    removeCardOnColumn(editContext, columnContext, cardContext)
})

function addCardColumn(event) {
    if (event.target.classList.contains("add-card-btn")) {
        openModal()
        const column = event.target.closest(".column")
        cardContainer = column.querySelector(".cards-container")
        const element = event.currentTarget
        columnContext = element.id
    }
}

document.addEventListener("click", function(event) {
    if (event.target.classList.contains("edit-column-class")){
        const column = settingsButton.closest(".column")
        columnContext = column.id
        const userInput = window.prompt("Digite o nome da coluna:")
        if(userInput){
        column.querySelector(".column-title").textContent = userInput
        changeColumnTitle(editContext, columnContext, userInput)
        }
    }
})

var deleteColumn = document.querySelector(".delete-column")
deleteColumn.addEventListener("click", function() {
    const columnToDelete = settingsButton.closest(".column")
    columnToDelete.remove()
    columnContext = columnToDelete.id
    removeColumnList(editContext, columnContext)
})

window.addEventListener('load', function() {
    document.addEventListener("click", function(event) {
        if (event.target.classList.contains("open-settings-button")){
            settingsButton = event.target

            // Exibe ou oculta o columnSettings
            columnSettings.classList.toggle("hide")

            // Obtém as dimensões do settingsButton
            const buttonRect = settingsButton.getBoundingClientRect()
            let xPos = buttonRect.left
            let yPos = buttonRect.top

            columnSettings.style.position = 'absolute'
            columnSettings.style.left = (xPos-85) + 'px'
            columnSettings.style.top = (yPos+5) + 'px'
        }
    })
})

document.addEventListener("click", function(event) {
    if (!columnSettings.classList.contains("hide") && !event.target.classList.contains("open-settings-button") ) {
        columnSettings.classList.add("hide")
    }
})

addColumnDiv.addEventListener("click", function() {
    const userInput = window.prompt("Digite o nome da coluna:")
    var columnId = generateColumnId() 

    if (userInput) {
        columnDiv = document.createElement("div")
        columnDiv.className = "column"
        columnDiv.id = "column-" + columnId
        columnDiv.onclick = addCardColumn
        columnDiv.innerHTML = `
            <h2 class="column-title">${userInput}</h2>
            <button class="open-settings-button" id="open-settings${columnId}">•••</button>
            <div class="cards-container"></div>
            <div class="add-card-btn">+</div>`

        // Insere a nova coluna acima do botão 'Adicionar coluna'
        board.insertBefore(columnDiv, addColumnDiv)
        addColumns(userInput, editContext, columnId)
    }
})

document.addEventListener("click", function(event) {
    if (event.target.classList.contains("card-task")) {
        openCard(event.target)
    }
    else if (event.target.parentNode.classList.contains("card-task") && !event.target.classList.contains("open-card-settings")) {
        openCard(event.target.parentNode)
    }
})

function openCard(card){
    nameValue = card.querySelector(".card-name-value").textContent
    descriptionValue = card.querySelector(".card-description-value").textContent
    priorityValue = card.querySelector(".priority-value").id
    let cardEditNameError = modalCard.querySelector(".card-name-error")
    if (cardEditNameError) {
        modalCard.querySelector(".card-name-class").removeChild(cardEditNameError)
    }
    modalName.textContent = "Card"
    modalCard.classList.toggle("hide")
    fadeModalProject.classList.toggle("hide")
    saveCard.textContent = "Fechar"
    cardName.value = nameValue
    cardDescription.value = descriptionValue
    if (priorityValue === "low-priority-card") {
        lowPriority.classList.add("active")
        mediumPriority.classList.remove("active")
        highPriority.classList.remove("active")
    }
    if (priorityValue === "medium-priority-card") {
        mediumPriority.classList.add("active")
        lowPriority.classList.remove("active")
        highPriority.classList.remove("active")
    }
    if (priorityValue === "high-priority-card") {
        highPriority.classList.add("active")
        lowPriority.classList.remove("active")
        mediumPriority.classList.remove("active")
    }
}
