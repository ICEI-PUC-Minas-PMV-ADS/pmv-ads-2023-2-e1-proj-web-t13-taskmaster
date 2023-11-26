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
            cardNameError.textContent = "Nome do card obrigatório"
            modalCard.querySelector(".card-name-class").appendChild(cardNameError)
        }
    }
}
    
saveCard.addEventListener("click", function(){
    if (saveCard.textContent === "Criar"){
        if (columnDiv) {
        let [nameValue, descriptionValue, priorityValue] = saveModal()
        let card = document.createElement("div")
        card.className = "card-task"
        card.id = "card" + countCard
        card.innerHTML = `
            <h3 class="card-name-value">${nameValue}</h3>
            <p class="card-description-value">${descriptionValue}</p>
            <span class="priority-value" id=${priorityValue}></span>
            <button class="open-card-settings" data-name="${nameValue}" data-description="${descriptionValue}" 
            data-priority="${priorityValue}" data-cardid="card${countCard}">•••</button>`

        cardContainer.appendChild(card);

        makeCardDraggable(card); 
       
            
        countCard++
        } else {
            console.log("Nenhuma columnDiv foi criada ainda.")
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
        }
    }
})

closeCard.addEventListener("click", function(){
    fadeModalProject.classList.toggle("hide")
    modalCard.classList.toggle("hide")
})

document.addEventListener("click", function(event) {
    if (event.target.classList.contains("open-card-settings")) {
        settingsButton = event.target
        editCardButton.setAttribute("data-name", settingsButton.dataset.name)
        editCardButton.setAttribute("data-description", settingsButton.dataset.description)
        editCardButton.setAttribute("data-priority", settingsButton.dataset.priority)
        editCardButton.setAttribute("data-cardid", settingsButton.dataset.cardid)
        deleteCardButton.setAttribute("data-cardid", settingsButton.dataset.cardid)

        // Exibe ou oculta o cardSettings
        cardSettings.classList.toggle("hide")

        // Obtém as dimensões do settingsButton
        const buttonRect = settingsButton.getBoundingClientRect()
        const buttonLeft = buttonRect.left
        const buttonTop = buttonRect.top
        const buttonWidth = buttonRect.width
        const buttonHeight = buttonRect.height

        // Calcula a posição para exibir o cardSettings ao lado esquerdo do settingsButton
        const cardSettingsWidth = cardSettings.offsetWidth
        const cardSettingsHeight = cardSettings.offsetHeight
        const cardSettingsLeft = buttonLeft - cardSettingsWidth - 5 // Posiciona à esquerda do settingsButton
        const cardSettingsTop = buttonTop + 10
        // Define a posição do cardSettings
        cardSettings.style.position = 'absolute'
        cardSettings.style.left = cardSettingsLeft + 'px'
        cardSettings.style.top = cardSettingsTop + 'px'
    }
})

document.addEventListener("click", function(event) {
    if (!event.target.classList.contains("open-card-settings")) {
        cardSettings.classList.add("hide")
    }
})

editCardButton.addEventListener("click", function() {
    const name = editCardButton.dataset.name
    const description = editCardButton.dataset.description
    const priority = editCardButton.dataset.priority
    cardIDTask = editCardButton.dataset.cardid

    // Chame a função editModal() passando os valores recuperados
    openEditModal(name, description, priority)
})

deleteCardButton.addEventListener("click", function() {
        document.getElementById(deleteCardButton.dataset.cardid).remove()
})

document.addEventListener("click", function(event) {
    if (event.target.classList.contains("add-card-btn")) {
        openModal()
        const column = event.target.closest(".column")
        cardContainer = column.querySelector(".cards-container")

        
    }
})

document.addEventListener("click", function(event) {
    if (event.target.classList.contains("edit-column-class")){
        const column = settingsButton.closest(".column")
        const userInput = window.prompt("Digite o nome da coluna:")
        column.querySelector(".column-title").textContent = userInput
    }
})

document.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-column")) {
        const columnToDelete = settingsButton.closest(".column")
        columnToDelete.remove()
    }
})

document.addEventListener("click", function(event) {
    if (event.target.classList.contains("open-settings-button")){
        settingsButton = event.target

        // Exibe ou oculta o columnSettings
        columnSettings.classList.toggle("hide")

        // Obtém as dimensões do settingsButton
        const buttonRect = settingsButton.getBoundingClientRect()
        const buttonLeft = buttonRect.left
        const buttonTop = buttonRect.top
        const buttonWidth = buttonRect.width
        const buttonHeight = buttonRect.height

        // Calcula a posição para exibir o columnSettings ao lado esquerdo do settingsButton
        const columnSettingsWidth = columnSettings.offsetWidth
        const columnSettingsHeight = columnSettings.offsetHeight
        const columnSettingsLeft = buttonLeft - columnSettingsWidth - 5 // Posiciona à esquerda do settingsButton
        const columnSettingsTop = buttonTop + 10
        // Define a posição do columnSettings
        columnSettings.style.position = 'absolute'
        columnSettings.style.left = columnSettingsLeft + 'px'
        columnSettings.style.top = columnSettingsTop + 'px'
    }
})

document.addEventListener("click", function(event) {
    if (!columnSettings.classList.contains("hide") & !columnSettings.contains(event.target) & event.target != document.querySelector(".open-settings-button"))
        columnSettings.classList.add("hide")
})

addColumnDiv.addEventListener("click", function() {
    const userInput = window.prompt("Digite o nome da coluna:")

    if (userInput) {
        columnDiv = document.createElement("div")
        columnDiv.className = "column"
        columnDiv.id = "column" + countColumn
        columnDiv.innerHTML = `
            <h2 class="column-title">${userInput}</h2>
            <button class="open-settings-button" id="open-settings${countColumn}">•••</button>
            <div class="cards-container"></div>
            <div class="add-card-btn">+</div>`

        // Insere a nova coluna acima do botão 'Adicionar coluna'
        board.insertBefore(columnDiv, addColumnDiv)

        countColumn ++
    }
})

let draggedCard = null;

function makeCardDraggable(card) { card.draggable = true;

card.addEventListener('dragstart', (e) => {
    draggedCard = card;
    e.dataTransfer.setData('text/plain', card.id);
    card.style.opacity = '0.5';
    card.classList.add('dragging');
});

card.addEventListener('dragend', () => {
    card.style.opacity = '';
    card.classList.remove('dragging');
});
}

document.addEventListener('DOMContentLoaded', function () { document.querySelectorAll('.card-task').forEach(makeCardDraggable);

document.addEventListener('dragenter', (e) => {
    e.preventDefault();
    if (e.target.classList.contains('column')) {
        e.target.classList.add('dragover');
    }
});

document.addEventListener('dragleave', (e) => {
    if (e.target.classList.contains('column')) {
        e.target.classList.remove('dragover');
    }
});

document.addEventListener('dragover', (e) => {
    e.preventDefault();
});

document.addEventListener('drop', (e) => {
    e.preventDefault();
    if (e.target.classList.contains('column')) {
        const cardId = e.dataTransfer.getData('text/plain');
        const card = document.getElementById(cardId);
        if (card) {
            const column = e.target;
            column.classList.remove('dragover');
            column.querySelector('.cards-container').appendChild(card);
        }
    }
});
});
