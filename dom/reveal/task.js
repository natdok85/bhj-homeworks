let isInViewport = function(element) {
    let viewportHeight = window.innerHeight;   
    let elementTop = element.getBoundingClientRect().top;    
    return elementTop < viewportHeight ? true : false;
    
};

let isOutOfViewport = function(element) {
    let viewportHeight = window.innerHeight;   
    let elementTop = element.getBoundingClientRect().top; 
    return elementTop > viewportHeight ? true : false;
};

let reveal = function() {
    let messages = Array.from(document.getElementsByClassName('reveal'));
    for(let item of messages) {
        if(isInViewport(item)) {
            item.classList.add('reveal_active');
        } else if(isOutOfViewport(item)) {
            item.classList.remove('reveal_active');
        }
    }
}

window.addEventListener('scroll', reveal);




