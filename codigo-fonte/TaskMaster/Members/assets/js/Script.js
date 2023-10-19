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

document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.querySelector('.add-button');
    const cubeContainer = document.querySelector('.cube-container');
    
    addButton.addEventListener('click', function () {
        const cube = document.createElement('div');
        cube.className = 'cube';
        cube.textContent = 'Cubo';

        cubeContainer.appendChild(cube);
    });

});


