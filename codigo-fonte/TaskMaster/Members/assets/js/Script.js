document.addEventListener("DOMContentLoaded", function(){
    var addProjectButton = document.getElementById('add-project')
    var projects = document.getElementById('projects')
    var containerCount = 1

    addProjectButton.addEventListener("click", function(){
        const containerDiv = document.createElement("div")
        containerDiv.className = "project-" + containerCount

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







/*
document.addEventListener("DOMContentLoaded", function () {
    // Obtém o botão de adicionar projeto e a coluna
    const addProjectButton = document.getElementById("add-project");
    const column = document.getElementById("column");

    // Adiciona um evento de clique ao botão de adicionar projeto
    addProjectButton.addEventListener("click", function () {
        const cardText = prompt("Insira o título do cartão:");
        if (cardText) {
            const card = document.createElement("div");
            card.className = "card";
            card.innerText = cardText;

            // Adiciona um botão de exclusão ao cartão
            const deleteButton = document.createElement("button");
            deleteButton.className = "delete-card";
            deleteButton.innerText = "X";

            deleteButton.addEventListener("click", function () {
                card.remove();
            });

            card.appendChild(deleteButton);
            column.appendChild(card);
        }
    });
});
*/