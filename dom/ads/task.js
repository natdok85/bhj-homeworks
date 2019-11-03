
function rotate() {
    let ads = Array.from(document.getElementsByClassName('rotator__case'));    
    let active = document.querySelector('.rotator__case_active');
    let parent = active.closest('.rotator__case');  
    let number = ads.indexOf(parent); 
    
    if(number == ads.length -1) {
        ads[0].classList.add('rotator__case_active');                
    };
    
    active.classList.remove('rotator__case_active');  
   
    active.nextElementSibling.classList.add('rotator__case_active');   
    
    active.style.color = active.dataset.color;
   
    
}

setInterval(rotate, 1000);



