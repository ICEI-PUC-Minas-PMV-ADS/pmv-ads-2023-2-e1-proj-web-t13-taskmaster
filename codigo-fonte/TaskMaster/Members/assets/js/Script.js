document.addEventListener("DOMContentLoaded", function(){
    var addProjectButton = document.getElementById('add-project')
    var projects = document.getElementById('projects' )
    var fade = document.querySelector('#fade')
    var modal = document.querySelector('.modal')
    var createProject = document.getElementById('create-project')
    var cancelProject = document.getElementById('cancel')
    var errorNameProject = document.getElementById('project-name')
    var errorCardTitle = document.getElementById('project-card-title')
    var containerCount = 1

    const toggleModal = () =>{
        modal.classList.toggle("hide")
        fade.classList.toggle("hide") 

        var inputModal = document.querySelectorAll('input')
        var textDescrition = document.querySelectorAll('textarea')

        for(var element of inputModal){
            element.value = ""
        }
        for(var element of textDescrition){
            element.value = ""
        }

        try{
            document.querySelector('.error-name-project').remove();
            document.querySelector('.error-card-title').remove();
        }
        catch{

        }
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

        var isValid = true;

        const cardText = document.getElementById('project-name').value
        if (cardText) {
            const card = document.createElement("div")
            card.className = "card"
            card.innerText = cardText;

            containerDiv.appendChild(card);

            var projectNameError = document.querySelector('.error-name-project')
            if (projectNameError){
                projectNameError.remove();
            }
        }
        else{
            isValid = false;
            var isProjectNameValid = document.querySelector('.error-name-project')
            if(isProjectNameValid == null){
                const error = document.createElement("div") 
                error.className = "error-name-project"
                error.innerHTML = "* Título do projeto obrigatório"

                errorNameProject.after(error)
            }            
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

            var cardTitleError = document.querySelector('.error-card-title')
            if(cardTitleError){
                cardTitleError.remove()
            }
        }
        else{
            isValid = false;
            var isCardTitleValid = document.querySelector('.error-card-title')
            if(isCardTitleValid == null){
                const error = document.createElement("div")
                error.className = "error-card-title"
                error.innerHTML = "* Título do card obrigatório"

                errorCardTitle.after(error)
            }
        }

        if(isValid == true){
            projects.appendChild(containerDiv)
            toggleModal()

            containerCount++
        }
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


