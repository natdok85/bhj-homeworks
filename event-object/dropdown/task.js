let mainButton = Array.from(document.getElementsByClassName('dropdown__value'));
let openList = document.getElementsByClassName('dropdown__list');

function openClose() {    
    openList[0].classList.toggle('dropdown__list_active');   
    return false;
    
};

function changeText(element) {
    mainButton[0].textContent = this.textContent;   
    return false;
};

mainButton[0].addEventListener('click', openClose);

let subList = Array.from(document.getElementsByClassName('dropdown__link'));

 
for(let element of subList) {

    element.onclick = function() {
        openList[0].classList.remove('dropdown__list_active');
        return false;    
    };

    element.addEventListener('click', changeText);    
};





