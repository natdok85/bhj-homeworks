let tasksList = document.getElementById('tasks__list');
let clientInput = document.getElementById('task__input');
let button = document.getElementById('tasks__add');

clientInput.addEventListener('keydown', function(event) {
    if(event.keyCode === 13) {
        if(this.value === '') {          
            return false;
        };
        event.preventDefault();
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
    tasks.querySelector('.task__remove').addEventListener('click', event => {
        event.target.closest('.task').remove();
    });
    };       
})









