const deadCounter = document.getElementById("dead");
let deadNum = parseInt(deadCounter.textContent); 
const lostCounter = document.getElementById("lost");
let lostNum = parseInt(lostCounter.textContent);

const hole1 = document.getElementById("hole1");


let getHole = (index) => {return  document.getElementById(`hole${index}`)}; 

hole1.onclick = function() {
    if(hole1.classList.contains('hole_has-mole')) {
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

