let links = Array.from(document.querySelectorAll('.has-tooltip'));

for(let link of links) {
    link.addEventListener('click', event => {
        if(event.target.textContent == "Помогите пожалуйста") {
            event.target.insertAdjacentHTML('afterend', `<div class="tooltip">${event.target.getAttribute('title')}</div>`);
            let tooltip = Array.from(document.getElementsByClassName('tooltip'))[0];
            if(tooltip.classList.contains('tooltip_active')) {
                tooltip.classList.remove('tooltip_active');
            }
            tooltip.classList.add('tooltip_active');

        } else if(event.target.textContent == "Нажми сюда и выиграй миллион!") {           
            event.target.insertAdjacentHTML('afterend', `<div class="tooltip">${event.target.getAttribute('title')}</div>`);
            let tooltip = Array.from(document.getElementsByClassName('tooltip'))[0];
            tooltip.style = 'left: 180px';
            if(tooltip.classList.contains('tooltip_active')) {
                tooltip.classList.remove('tooltip_active');
            }
            tooltip.classList.add('tooltip_active');

        }
        event.preventDefault();
    })
}




