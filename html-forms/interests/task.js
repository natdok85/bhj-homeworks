let interests = Array.from(document.querySelectorAll('.interest'));

for(let interest of interests) {
    interest.addEventListener('change', e => {

        let sub = event.target.closest('.interest');
           
        let subList = Array.from(sub.querySelectorAll('.interest'));
        for(let item of subList) {
            let checkbox = item.querySelector('.interest__check');
            if(event.target.checked === true) {
                checkbox.checked = true;                
            } else {
                checkbox.checked = false;
            }
        }        
    
    })
}







