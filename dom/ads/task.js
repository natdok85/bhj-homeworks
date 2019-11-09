let ads = Array.from(document.getElementsByClassName('rotator__case'));
let changeColor = function() {       
    ads[0].style.color = ads[0].dataset.color;
};

document.addEventListener("DOMContentLoaded", changeColor);

function rotate() {       
    let active = document.querySelector('.rotator__case_active');
    let number = ads.indexOf(active); 
    
    if(number+1 === ads.length-1) {
        ads[0].classList.add('rotator__case_active');           
                  
    };
    ads[ads.length-1].classList.remove('rotator__case_active');    
   
    active.classList.toggle('rotator__case_active');  
   
    active.nextElementSibling.classList.toggle('rotator__case_active');     
    
    active.nextElementSibling.style.color = active.nextElementSibling.dataset.color;      
     
    
};

setInterval(rotate, 1000);
