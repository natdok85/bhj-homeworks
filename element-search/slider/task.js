let items = document.getElementsByClassName('slider__item');
let allItems = Array.from(items);
let itemsNumber = allItems.length;

let right = document.getElementsByClassName('slider__arrow_next');
let rightA = Array.from(right);
let rightArrow = rightA[0];

let i = 1;
rightArrow.onclick = function() {     
    if(i > itemsNumber) {
        i = 0;
    };       
    allItems[i].classList.add('slider__item_active'); 
    allItems[i-1].classList.remove('slider__item_active');          
    i++;        
};

let left = document.getElementsByClassName('slider__arrow_prev');
let leftA = Array.from(left);
let leftArrow = leftA[0];

let index = itemsNumber-1;
leftArrow.onclick = function() {
    
    allItems[index].classList.remove('slider__item_active');
    allItems[index-1].classList.add('slider__item_active');
    index--;  
    if(index < 0) {
        index = itemsNumber;
    } else if(index > itemsNumber) {
        index = 0;
    };      
};


