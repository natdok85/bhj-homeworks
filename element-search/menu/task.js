let element = document.getElementsByClassName('menu__item');
for(let i = 0; i < element.length; i++) {
    if(element[i].children.length > 1) {
        let active = element[i].getElementsByClassName('menu_sub');
        element[i].onclick = function() {
          let arr = Array.from(active);        
          arr[0].classList.add('menu_active');
          return false;
        };
    };
};




