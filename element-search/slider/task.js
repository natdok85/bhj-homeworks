let items = document.getElementsByClassName('slider__item');
let allItems = Array.from(items);
let itemsNumber = allItems.length;


let right = document.getElementsByClassName('slider__arrow_next');
let rightA = Array.from(right);
let rightArrow = rightA[0];

let i = 1;
rightArrow.onclick = function() {       
    allItems[i].classList.add('slider__item_active');        
    i++;        
};


let left = document.getElementsByClassName('slider__arrow_prev');
let leftA = Array.from(left);
let leftArrow = leftA[0];
leftArrow.onclick = function() {
    
};


