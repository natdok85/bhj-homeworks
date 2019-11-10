let h3 = Array.from(document.getElementsByTagName('h3'));
let caviarH3 = h3[0];
let images = Array.from(document.getElementsByTagName('img'));
let deletableImage = images[0];
deletableImage.remove();
caviarH3.insertAdjacentHTML('afterend', '<img src="https://ryboedov.ru/upload/iblock/e42/e420eb7c2348f12c08123365979dfc85.jpg" alt="" class="product__image"></img>');
//замена неработающей ссылки на картинку

let addButtons = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
let deleteButtons = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
let addItems = Array.from(document.querySelectorAll('.product__add'));
let cartProduct = document.querySelector('.cart__products');
let itemsCount = document.querySelectorAll('.cart__product-count');

for(let addButton of addButtons) {
    
    addButton.addEventListener('click', event => {
        let counters = Array.from(document.querySelectorAll('.product__quantity-value'));
        if(addButton.closest('.product').dataset.id === '1') {
            number = parseInt(counters[0].textContent, 10);
            number++;
            counters[0].textContent = number;        
        
        } else {
            number = parseInt(counters[1].textContent, 10);
            number++;
            counters[1].textContent = number;   

        }
    })
}

for(let deleteButton of deleteButtons) {
    deleteButton.addEventListener('click', event => {
        let counters = Array.from(document.querySelectorAll('.product__quantity-value'));
        if(deleteButton.closest('.product').dataset.id === '1') {
            number = parseInt(counters[0].textContent, 10);
            if(number > 1) {
                number--;
            counters[0].textContent = number; 
            }
                   
        
        } else {
            number = parseInt(counters[1].textContent, 10);
            if(number > 1) {
                number--;
            counters[0].textContent = number; 
            }     

        }
    })

}

for(let addItem of addItems) {
    addItem.addEventListener('click', event => {
        item = event.target.closest('.product');
        let image = item.getElementsByTagName('img');
        let count = item.getElementsByClassName('product__quantity-value')[0].textContent;
      
        
        cartProduct.insertAdjacentHTML('beforeend', `<div class="cart__product" data-id="${item.dataset.id}"><img class="cart__product-image" src="image.png"><div class="cart__product-count">${count}</div></div>`);

               
       
    })
}




