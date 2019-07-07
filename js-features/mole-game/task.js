const deadCounter = document.getElementById("dead");
let deadNum = parseInt(deadCounter.textContent); 
const lostCounter = document.getElementById("lost");
let lostNum = parseInt(lostCounter.textContent);

const hole1 = document.getElementById("hole1");


// function getHole(index) {

// }

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
    };

    if(lostNum < 5 && deadNum == 10) {
        alert("Вы выиграли");
    };
};

