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
var countColumn = 1
var countCard = 1

//Modal

fadeModalProject.addEventListener("click", function(){
    fadeModalProject.classList.toggle("hide")
    modalCard.classList.toggle("hide")
})

closeCard.addEventListener("click", function(){
    fadeModalProject.classList.toggle("hide")
    modalCard.classList.toggle("hide")
})

function openModal() {
    if (modalCard) {
        modalCard.classList.toggle("hide")
        fadeModalProject.classList.toggle("hide")
    }
}

highPriority.addEventListener("click", function(){
    if (highPriority.classList.contains("active")){
        highPriority.classList.remove("active")
    }
    else{
        mediumPriority.classList.remove("active")
        lowPriority.classList.remove("active")
        highPriority.classList.add("active")
    }
})

mediumPriority.addEventListener("click", function(){
    if (mediumPriority.classList.contains("active")){
        mediumPriority.classList.remove("active")
    }
    else{
        highPriority.classList.remove("active")
        lowPriority.classList.remove("active")
        mediumPriority.classList.add("active")
    }
})

lowPriority.addEventListener("click", function(){
    if (lowPriority.classList.contains("active")){
        lowPriority.classList.remove("active")
    }
    else{
        highPriority.classList.remove("active")
        mediumPriority.classList.remove("active")
        lowPriority.classList.add("active")
    }
})

function saveModal(){
    if(cardName.value.trim() !== '' & cardDescription.value.trim() !==''){
        let nameValue = cardName.value
        let descriptionValue = cardDescription.value
        let priorityValue = document.querySelector(".active")
        fadeModalProject.classList.toggle("hide")
        modalCard.classList.toggle("hide")
        return [nameValue, descriptionValue, priorityValue]
    }
}

saveCard.addEventListener("click", function(){
    let [nameValue, descriptionValue, priorityValue] = saveModal()
})

function makeColumnInteractive(column) {
    // Função para criar um novo cartão
    function createCard() {
        const cardText = window.prompt("Digite o título do cartão:");
        if (cardText) {
            const card = document.createElement("div");
            card.className = "card";
            card.id = "card" + countCard
            card.draggable = true;
            card.innerText = cardText;

            column.querySelector('.cards-container').appendChild(card);
            makeCardDraggable(card); // Torna o novo cartão arrastável

            countCard ++
        }
    }

    // Adiciona um cartão quando o botão é clicado
    column.addEventListener('click', function(event) {
        const target = event.target;
        if (target.classList.contains('add-card-btn')) {
            openModal();
        }
    });
}

addColumnDiv.addEventListener("click", function() {
    const userInput = window.prompt("Digite o nome da coluna:");

    if (userInput) {
        const columnDiv = document.createElement("div");
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

