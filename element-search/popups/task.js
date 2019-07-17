let element = document.getElementById('modal_main');
element.classList.add('modal_active');

let close = document.getElementsByClassName('modal__close');
let closeFirstWindow = close[0];
let window1 = document.getElementById('modal_main');
closeFirstWindow.onclick = function() {    
    window1.classList.remove('modal_active');
}; //закрываем первое окно крестиком

let success = document.getElementsByClassName('show-success');
let showSuccess = success[0];
showSuccess.onclick = function() {
    let elementSuccess = document.getElementById('modal_success');
    elementSuccess.classList.add('modal_active');
    window1.classList.remove('modal_active');
}; //меняем окна, первое закрывается

let closeSecondWindow = close[2];
let window2 = document.getElementById('modal_success');
closeSecondWindow.onclick = function() {
    window2.classList.remove('modal_active');
} //закрываем второе окно крестиком




