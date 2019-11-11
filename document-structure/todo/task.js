let tasksList = document.getElementById('tasks__list');
let clientInput = document.getElementById('task__input');
let button = document.getElementById('tasks__add');

clientInput.addEventListener('keydown', function(event) {
    if(event.keyCode === 13) {
        if(this.value === '') {
            return false;
        };
        let tasks = document.createElement('div');
        tasks.innerHTML += 
    `<div class="task">
        <div class="task__title">
            ${this.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
    </div>`;
    tasksList.insertAdjacentElement('beforeend', tasks);
    clientInput.value = '';
    let deleteButtons = Array.from(document.getElementsByClassName('task__remove'));
for(let deleteButton of deleteButtons) {
    deleteButton.addEventListener('click', event => {        
        let parent = event.target.closest('.task');        
        parent.remove();
    })
}
    } 
    
})

button.addEventListener('click', event => {
    if(clientInput.value === '') {
        return false;
    };
    let tasks = document.createElement('div');
        tasks.innerHTML += 
    `<div class="task">
        <div class="task__title">
            ${clientInput.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
    </div>`;
    tasksList.insertAdjacentElement('beforeend', tasks);
    clientInput.value = '';
    
    let deleteButtons = Array.from(document.getElementsByClassName('task__remove'));
for(let deleteButton of deleteButtons) {
    deleteButton.addEventListener('click', event => {        
        let parent = event.target.closest('.task');        
        parent.remove();
    })
}
})









