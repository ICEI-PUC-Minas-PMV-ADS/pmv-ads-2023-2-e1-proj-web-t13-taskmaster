let draggedCard = null;

function makeCardDraggable(card) { card.draggable = true;

card.addEventListener('dragstart', (e) => {
    draggedCard = card;
    e.dataTransfer.setData('text/plain', card.id);
    card.style.opacity = '0.5';
    card.classList.add('dragging');
});

card.addEventListener('dragend', () => {
    card.style.opacity = '';
    card.classList.remove('dragging');
});
}

document.addEventListener('DOMContentLoaded', function () { document.querySelectorAll('.card-task').forEach(makeCardDraggable);

document.addEventListener('dragenter', (e) => {
    e.preventDefault();
    if (e.target.classList.contains('column')) {
        e.target.classList.add('dragover');
    }
});

document.addEventListener('dragleave', (e) => {
    if (e.target.classList.contains('column')) {
        e.target.classList.remove('dragover');
    }
});

document.addEventListener('dragover', (e) => {
    e.preventDefault();
});

document.addEventListener('drop', (e) => {
    e.preventDefault();
    if (e.target.classList.contains('column')) {
        const cardId = e.dataTransfer.getData('text/plain');
        const card = document.getElementById(cardId);
        if (card) {
            const column = e.target;
            column.classList.remove('dragover');
            column.querySelector('.cards-container').appendChild(card);
        }
    }
});
});
