let parentMenu = document.getElementsByClassName('menu__item');

for(let i = 0; i < parentMenu.length; i++) {
    if(parentMenu[i].children.length > 1) {      
      let subMenu = parentMenu[i].getElementsByClassName('menu_sub');
      parentMenu[i].onclick = function() {                              
        subMenu[0].classList.add('menu_active');
        return false;
      };
    };
};




