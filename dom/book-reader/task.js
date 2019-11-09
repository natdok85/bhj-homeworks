let buttons = Array.from(document.getElementsByClassName('font-size'));
let page = document.querySelector('.book');

for(let button of buttons) {    
    button.addEventListener('click', function(event) {    
        for(let button of buttons) {
            button.classList.remove('font-size_active');            
        };
        page.classList.remove('book_fs-small');
        page.classList.remove('book_fs-big');
        event.target.classList.add('font-size_active');           
        if(event.target.classList.contains('font-size_small')) {
            page.classList.add('book_fs-small'); 
            
        } else if(event.target.classList.contains('font-size_big')) {
            page.classList.add('book_fs-big'); 

        };        
        
        event.preventDefault(); 
    });     
}
