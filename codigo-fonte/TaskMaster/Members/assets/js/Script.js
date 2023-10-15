document.addEventListener("DOMContentLoaded", function(){
    var addProjectButton = document.getElementById('add-project')
    var projects = document.getElementById('projects' )
    var containerCount = 1

    addProjectButton.addEventListener("click", function(){
        const containerDiv = document.createElement("div")
        containerDiv.className = "project" 
        containerDiv.id = "project-" + containerCount

        const cardText = prompt("Insira o título do projeto:");
        if (cardText) {
            const card = document.createElement("div")
            card.className = "card"
            card.innerText = cardText;

            containerDiv.appendChild(card);
        }
        
        const cardText1 = prompt("Insira o título do cartão:");
        const descriptionRow = prompt("Insira uma descrição do projeto")
        if(cardText1){
            const secondRow = document.createElement("div")
            const descriptionProject = document.createElement("p")
            secondRow.className = "description"
            secondRow.innerText = cardText1
            descriptionProject.id = "p-description"
            descriptionProject.innerText = descriptionRow
            
            secondRow.appendChild(descriptionProject)

            containerDiv.appendChild(secondRow)
        }

        projects.appendChild(containerDiv)

        containerCount++
    })
})
document.addEventListener("DOMContentLoaded", function(){
    var addCardButton = document.getElementById('add-card');
    var addCardRightButton = document.getElementById('add-card-right'); // Botão na coluna à direita
    var cardContainer = document.getElementById('column'); // Selecionar a coluna onde os cartões devem ser adicionados
    var cardCount = 1;
    var cardCountRight = 1; // Contagem de cartões na coluna à direita

    addCardButton.addEventListener("click", function(){
        const card = document.createElement("div");
        card.className = "card";

        const cardText = prompt("Insira o título do projeto:");
        if (cardText) {
            card.innerText = cardText;

            // Mostrar o botão "Adicionar Card" na coluna à direita
            addCardRightButton.style.display = "block";
        } else {
            card.innerText = "Card " + cardCount;
        }

        cardContainer.appendChild(card);

        cardCount++;
        addCardButton.style.display = "none"; // Oculta o botão "+" após a criação do cartão
    });

    addCardRightButton.addEventListener("click", function(){
        const card = document.createElement("div");
        card.className = "card";

        const cardText = prompt("Insira o título do cartão:");
        if (cardText) {
            card.innerText = cardText;
        } else {
            card.innerText = "Card " + cardCountRight;
        }

        // Adicionar o card na coluna à direita (implemente a lógica para a coluna à direita aqui)

        cardCountRight++;
    });
});



