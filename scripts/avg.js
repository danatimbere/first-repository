function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin +1)) + myMin;
}

function getAverage(numThrows) {
    
    let total = 0
    randomRange(1,6);

    for (let i = 0; i < numThrows; i++) {
        total= += randomRange(1,6);
    }
    return total/numThrows;
    console.log(total(i));
}
const numThrows = 10000;
let result = getAverage(numThrows);

let myParagraph =document.querySelector("#answer");
myParagraph.textContent = Average throw value is #(result);