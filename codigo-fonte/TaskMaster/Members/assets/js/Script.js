document.addEventListener("DOMContentLoaded", function(){
    var addProjectButton = document.getElementById('add-project')
    var projects = document.getElementById('projects' )
    var fade = document.querySelector('#fade')
    var modal = document.querySelector('.modal')
    var createProject = document.getElementById('create-project')
    var cancelProject = document.getElementById('cancel')
    var containerCount = 1

    const toggleModal = () =>{
        modal.classList.toggle("hide")
        fade.classList.toggle("hide")
    }

    [addProjectButton, cancelProject, fade, modal].forEach(el => {
        el.addEventListener("click", () => toggleModal())
    });
    
    modal.querySelector('.modal-content').addEventListener('click', function(event) {
        event.stopPropagation();
    });

    createProject.addEventListener("click", function(){
        const containerDiv = document.createElement("div")
        containerDiv.className = "project" 
        containerDiv.id = "project-" + containerCount

        const cardText = document.getElementById('project-name').value
        if (cardText) {
            const card = document.createElement("div")
            card.className = "card"
            card.innerText = cardText;

            containerDiv.appendChild(card);
        }
        
        const cardText1 = document.getElementById('project-card-title').value
        const descriptionRow = document.getElementById('project-description').value
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

    })
    });
