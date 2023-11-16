


const addColumnDiv = document.getElementById("add-column");
const board = document.querySelector(".board");
var countColumn = 1
var countCard = 1


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
            createCard();
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
            <div class="add-card-btn">+</div>
        `;
        
        // Insere a nova coluna acima do botão 'Adicionar coluna'
        board.insertBefore(columnDiv, addColumnDiv);

        makeColumnInteractive(columnDiv); // Torna a coluna e seus cartões arrastáveis

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

