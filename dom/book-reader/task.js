let buttons = Array.from(document.getElementsByClassName('font-size'));
let page = document.querySelector('.book');

buttons[0].onclick = function() {
    buttons[1].classList.remove('font-size_active');
    this.classList.add('font-size_active');
    page.classList.add('font-size_small');    
    return false;

}

buttons[2].onclick = function() {
    buttons[1].classList.remove('font-size_active');
    this.classList.add('font-size_active');
    page.classList.add('font-size_big');
    return false;
}
// function onclick() {
//     buttons[1].classList.remove('font-size_active');
//     let size = this.dataset.size;
//     console.log(size);
//     return false;
// }

// for(let button of buttons) {
//     button.addEventListener('click', onclick);
// }