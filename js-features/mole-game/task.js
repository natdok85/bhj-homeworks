const deadCounter = document.getElementById("dead");
let deadNum = parseInt(deadCounter.textContent); 
const lostCounter = document.getElementById("lost");
let lostNum = parseInt(lostCounter.textContent);

for(let index = 1; index < 10; index++) {
    let getHole = function(index) {
        return document.getElementById(`hole${index}`)
    };
    
    let hole = getHole(index);
   
    hole.onclick = function() {
        if(hole.classList.contains('hole_has-mole')) {
            deadNum +=1;
            deadCounter.textContent = deadNum;
        } else {
            lostNum +=1;
            lostCounter.textContent = lostNum;
        };
    
        if(lostNum >= 5) {
            alert("Вы проиграли");
            deadNum = 0;
            deadCounter.textContent = 0;
            lostNum = 0;
            lostCounter.textContent = 0;
            
        };
    
        if(lostNum < 5 && deadNum == 10) {
            alert("Вы выиграли");
            deadNum = 0;
            deadCounter.textContent = 0;
            lostNum = 0;
            lostCounter.textContent = 0;
            
        };
    };

}



