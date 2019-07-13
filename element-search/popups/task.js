let element = document.getElementById('modal_main');

element.classList.add('modal_active');

let close = document.getElementsByClassName('modal__close');
let arr = Array.from(close);
let closeWindow = arr[0];
closeWindow.onclick = function() {
    let element1 = document.getElementById('modal_main');
    element1.classList.remove('modal_active');
};

let success = document.getElementsByClassName('show-success');
let arr2 = Array.from(success);
let showSuccess = arr2[0];
showSuccess.onclick = function() {
    let elementSuccess = document.getElementById('modal_success');
    elementSuccess.classList.add('modal_active');
};



