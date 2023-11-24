const addColumnDiv = document.getElementById("add-column");
const board = document.querySelector(".board");
var fadeModalProject = document.querySelector('.fade')
var modalCard = document.querySelector('.modal');
var cardName = document.getElementById("card-name")
var cardDescription = document.getElementById("card-description")
var highPriority = document.getElementById("high-priority")
var mediumPriority = document.getElementById("medium-priority")
var lowPriority = document.getElementById("low-priority")
var closeCard = document.getElementById("close-button")
var saveCard = document.getElementById("save-button")
var modalName = document.querySelector(".modal-title")
var cardIDTask
var columnDiv
var countColumn = 1
var countCard = 1

//Modal

fadeModalProject.addEventListener("click", function(){
    fadeModalProject.classList.toggle("hide")
    modalCard.classList.toggle("hide")
})

function openModal() {

    modalName.textContent = "Novo Card" 
    if (modalCard) {
        modalCard.classList.toggle("hide")
        fadeModalProject.classList.toggle("hide")
        saveCard.textContent = "Criar"
        cardName.value = ''
        cardDescription.value = ''
        lowPriority.classList.remove("active")
        mediumPriority.classList.add("active")
        highPriority.classList.remove("active")
        let cardNameError = modalCard.querySelector(".card-name-error")
        if (cardNameError) {
            modalCard.querySelector(".card-name-class").removeChild(cardNameError)
        }    
    }
}

function openEditModal(nameValue, descriptionValue, priorityValue) {
    
    modalName.textContent = "Editar Card"
    modalCard.classList.toggle("hide")
    fadeModalProject.classList.toggle("hide")
    saveCard.textContent = "Salvar"
    cardName.value = nameValue
    cardDescription.value = descriptionValue
    edit
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
    let cardEditNameError = modalCard.querySelector(".card-name-error")
    if (cardEditNameError) {
        modalCard.querySelector(".card-name-class").removeChild(cardEditNameError)
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
        if (priorityValue.id === "low-priority"){
            priorityValue = "low-priority-card"
        }
        if (priorityValue.id === "medium-priority"){
            priorityValue = "medium-priority-card"
        }
        if (priorityValue.id === "high-priority"){
            priorityValue = "high-priority-card"
        }
        fadeModalProject.classList.toggle("hide")
        modalCard.classList.toggle("hide")
        return [nameValue, descriptionValue, priorityValue]
    }
    else{
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
            <button class="edit-card-btn" data-name="${nameValue}" data-description="${descriptionValue}" 
            data-priority="${priorityValue}" data-cardid="card${countCard}">editar</button>`

        columnDiv.querySelector('.cards-container').appendChild(card)
            
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
            cardAux.querySelector(".edit-card-btn").dataset.name = nameValue
            cardAux.querySelector(".edit-card-btn").dataset.description = descriptionValue
            cardAux.querySelector(".edit-card-btn").dataset.priority = priorityValue
        }
    }
})

closeCard.addEventListener("click", function(){
    fadeModalProject.classList.toggle("hide")
    modalCard.classList.toggle("hide")
})

document.addEventListener("click", function(event) {
    if (event.target.classList.contains('edit-card-btn')) {
        const name = event.target.dataset.name
        const description = event.target.dataset.description
        const priority = event.target.dataset.priority
        cardIDTask = event.target.dataset.cardid

        // Chame a função editModal() passando os valores recuperados
        openEditModal(name, description, priority)
        
    }
});

function addCardOpenModal(column) {
    // Adiciona um cartão quando o botão é clicado
    column.addEventListener('click', function(event) {
        const target = event.target;
        if (target.classList.contains('add-card-btn')) {
            openModal()
        }
    });
}

addColumnDiv.addEventListener("click", function() {
    const userInput = window.prompt("Digite o nome da coluna:");

    if (userInput) {
        columnDiv = document.createElement("div");
        columnDiv.className = "column";
        columnDiv.id = "column" + countColumn;
        columnDiv.innerHTML = `
            <h2>${userInput}</h2>
            <button class="edit-column-button" id="edit-column${countColumn}">•••</button>
            <div class="cards-container"></div>
            <div class="add-card-btn" onclick="openModal()">+</div>
        `;
        
        // Insere a nova coluna acima do botão 'Adicionar coluna'
        board.insertBefore(columnDiv, addColumnDiv);

        countColumn ++
    }
});

let draggedCard = null;

function makeCardDraggable(card) {
    card.addEventListener('dragstart', () => {
        draggedCard = card;
        setTimeout(() => {
            card.style.display = 'none';
        }, 0);
    });

    card.addEventListener('dragend', () => {
        setTimeout(() => {
            card.style.display = 'block';
            draggedCard = null;
        }, 0);
    })
}


document.querySelectorAll('.column').forEach(column => {
    column.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    column.addEventListener('drop', (e) => {
        e.preventDefault();
        if (draggedCard) {
            column.appendChild(draggedCard);
        }
    });
});

document.querySelectorAll('.card1').forEach(card => {
    makeCardDraggable(card);
});

