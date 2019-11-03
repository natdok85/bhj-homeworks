let buttons = Array.from(document.getElementsByClassName('font-size'));
let page = document.querySelector('.book');

function onclick() {
    buttons[1].classList.remove('font-size_active');    
    this.classList.add('font-size_active');       
    let size = this.dataset.size;
    page.classList.add('font-size_'+size); 
    
};

for(let button of buttons) {
    button.addEventListener('click', onclick);    
}