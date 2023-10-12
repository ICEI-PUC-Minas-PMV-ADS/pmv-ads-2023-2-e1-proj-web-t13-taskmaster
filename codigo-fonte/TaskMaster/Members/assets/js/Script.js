document.addEventListener("DOMContentLoaded", function(){
    var addProjectButton = document.getElementById('add-project')
    var projects = document.getElementById('projects')

    addProjectButton.addEventListener("click", function(){
        const cardText = prompt("Insira o título do projeto:");
        if (cardText) {
            const card = document.createElement("div")
            card.className = "card"
            card.innerText = cardText;

            projects.appendChild(card);
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

            projects.appendChild(secondRow)
        }

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