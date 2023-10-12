document.addEventListener("DOMContentLoaded", function(){
    var addProjectButton = document.getElementById('add-project')
    var projects = document.getElementById('projects')

    addProjectButton.addEventListener("click", function(){
        const cardText = prompt("Insira o título do cartão:");
        if (cardText) {
            const card = document.createElement("div")
            card.className = "card"
            card.style.backgroundColor = "white"
            card.style.marginTop = "30px"
            card.style.display = "grid"
            card.style.rowGap = "20px"
            card.style.paddingTop = "20px"
            card.style.paddingBottom = "20px"
            card.style.paddingLeft = "20px"
            card.style.paddingRight = "20px"
            card.style.textAlign = "left"
            card.style.gridTemplateRows = "1fr 2fr"
            card.style.height = "15vh"
            card.style.borderRadius = "30px"
            card.innerText = cardText;

            const cardText1 = prompt("Insira o título do cartão:");
            const secondRow = document.createElement("div")
            secondRow.style.marginTop = "10px"
            secondRow.innerText = cardText1

            card.appendChild(secondRow)

            projects.appendChild(card);
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