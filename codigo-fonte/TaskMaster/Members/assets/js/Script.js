document.addEventListener("DOMContentLoaded", function(){
    var addProjectButton = document.getElementById('add-project')
    var projects = document.getElementById('projects' )
    var fade = document.querySelector('#fade')
    var modal = document.querySelector('.modal')
    var createProject = document.getElementById('create-project')
    var cancelProject = document.getElementById('cancel')
    var errorNameProject = document.getElementById('projectname')
    var errorCardTitle = document.getElementById('project-card-title')
    var listSettings = document.querySelector('.list-settings')
    var deleteProject = document.getElementById('delete-project')
    var editContext = null

    var containerCount = 1

    const toggleModal = () =>{
        modal.classList.toggle("hide")
        fade.classList.toggle("hide") 
        projectname.focus()

        var inputModal = document.querySelectorAll('input')
        var textDescrition = document.querySelectorAll('textarea')

        for(var element of inputModal){
            element.value = ""
        }
        for(var element of textDescrition){
            element.value = ""
        }

        
        var projectNameError = document.querySelector('.error-name-project')
        var cardTitleError = document.querySelector('.error-card-title')

        if(projectNameError){
            projectNameError.remove()
        }
        if(cardTitleError){
            cardTitleError.remove()
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

        const cardText = document.getElementById('projectname').value
        if (cardText) {
            const card = document.createElement("div")
            card.className = "card shadow-v1"
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

                errorNameProject.before(error)
            }            
        }
        
        const cardText1 = document.getElementById('project-card-title').value
        const descriptionRow = document.getElementById('project-description').value
        if(cardText1){
            const secondRow = document.createElement("div")
            const descriptionProject = document.createElement("p")
            const editButton = document.createElement("div")
            secondRow.className = "description shadow-v1"
            secondRow.innerText = cardText1
            editButton.className = "edit-project-button"
            editButton.id = "edit-project" + containerCount
            editButton.dataset.projectId = containerDiv.id
            editButton.onclick = toggleSettings
            editButton.innerHTML = "•••"
            descriptionProject.id = "p-description"
            descriptionProject.innerText = descriptionRow
            
            secondRow.appendChild(descriptionProject)

            containerDiv.appendChild(secondRow)

            secondRow.prepend(editButton)

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

                errorCardTitle.before(error)
            }
        }

        // Checa se as opções de titulo de projeto e subtítulo foram criadas antes de criar projeto
        if(isValid == true){
            projects.appendChild(containerDiv)
            toggleModal()

            containerCount++
        }
    })
    
    // Função para exibir a lista de edição de projeto 
    function toggleSettings(e){
        listSettings.classList.toggle("hide")
        const element = e.target
        const rect = element.getBoundingClientRect();
        editContext = element.dataset.projectId

        let xPos = rect.left
        let yPos = rect.top

        listSettings.style.position = "absolute"
        listSettings.style.left = (xPos - 95) + "px"
        listSettings.style.top = yPos + "px"
        console.log(element)
    }

    // Função para deletar o projeto
    deleteProject.addEventListener("click", function(){
        document.getElementById(editContext).remove()
        listSettings.classList.toggle("hide")
    })

    // Função para fecha a lista de edição de projeto
    document.addEventListener('click', function handleClickOutsideBox(event) {
        if(!event.target.classList.contains('edit-project-button')){
            const listSettings = document.getElementsByClassName('list-settings');
            for(setting of listSettings) {
                if(!setting.classList.contains("hide")){
                    if (!setting.contains(event.target)) {
                        setting.classList.toggle("hide");
                    }
                }
            }
        }
      });
})



function createCard(column) {
    const cardText = window.prompt("Digite o título do cartão:");
    if (cardText) {
        const card = document.createElement("div");
        card.className = "card1";
        card.draggable = true;
        card.innerText = cardText;

        makeCardDraggable(card);

        
        column.appendChild(card);
    }
}
document.querySelectorAll('.add-card-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const currentColumn = btn.closest('.column');
        createCard(currentColumn);
    });
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

