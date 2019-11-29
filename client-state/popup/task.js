let getCookie = (name) => {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) {
    return parts
    .pop()
    .split(";")
    .shift();
    }
    }
window.onload = function() {    
    // document.cookie = 'popup=closed; Expires=Thu, 01 Jan 1970 00:00:00 GMT';  
    if(getCookie('popup') === 'closed') {        
        return false;   
    }
    let element = document.getElementById('subscribe-modal');
    element.classList.add('modal_active');
    let close = document.querySelector('.modal__close');
    
    close.addEventListener('click', e => {
        element.classList.remove('modal_active');
        document.cookie = 'popup=closed';  
         
}    
)}



