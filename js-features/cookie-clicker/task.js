const counter = document.getElementById("clicker__counter");
let cookieCounter = parseInt(counter.textContent);  
const cookie = document.getElementById("cookie");    

cookie.onclick = function() {
    cookieCounter += 1;    
    counter.textContent = cookieCounter;
    if(cookieCounter % 2) {
        cookie.width = 150;    
    } else {
    cookie.width = 200;
  };
};
