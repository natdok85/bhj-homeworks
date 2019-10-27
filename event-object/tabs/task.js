let tabs = Array.from(document.getElementsByClassName('tab'));
let contents = Array.from(document.getElementsByClassName('tab__content'));

function notActive(value) {      
    return value != this;
  };
   

for(let tab of tabs) {
    tab.onclick = function(event) {    
        let filteredActive = tabs.filter(notActive);   
        for(let element of filteredActive) {
            element.classList.remove('tab_active');
        };
                           
        this.classList.add('tab_active');   
        let number = tabs.indexOf(this);
        let filteredNumber = contents.filter(notActive);
        for(let item of filteredNumber) {
            item.classList.remove('tab__content_active');
        };
        contents[number].classList.add('tab__content_active');       
        
    };

}
