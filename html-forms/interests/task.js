let items = Array.from(document.querySelectorAll('.interest__check'));

let food = items[0];
let animals = items[3];
food.addEventListener('change', e => {
    food.checked === true;    
   
    if(food.checked === true) {
        items[1].checked = true;
        items[2].checked = true;
    } else {
        items[1].checked = false;
        items[2].checked = false;

    }
})

animals.addEventListener('change', e => {
    animals.checked === true;    
   
    if(animals.checked === true) {
        items[4].checked = true;
        items[5].checked = true;
    } else {
        items[4].checked = false;
        items[5].checked = false;

    }
})





