let links = Array.from(document.querySelectorAll('.has-tooltip'));

for(let link of links) {
    link.addEventListener('click', event => {
        if(link.nextElementSibling.classList.contains('tooltip_active')) {           
            this.nextElementSibling.classList.remove('tooltip_active');
        };
        
        coord = link.getBoundingClientRect();
        let left = coord.left+'px';
        let top = coord.top+'px';          
        
        link.insertAdjacentHTML('afterend', `<div class="tooltip tooltip_active" style="left: ${left}; top: ${top+10}">${event.target.getAttribute('title')} </div>`);
        
        for(let i = 0; i < links.length; i++) {            
            if(links[i] !== event.target) {
                if(links[i].nextElementSibling.classList.contains('tooltip_active')) {
                    links[i].nextElementSibling.classList.remove('tooltip_active');
                }
                
            }
        }
        
        event.preventDefault();
    })
}




