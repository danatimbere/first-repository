function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin +1)) + myMin;
}

function getAverage(numThrows) {
    
    let total = 0
    randomRange(1,6);

    for (let i = 0; i < numThrows; i++) {
        total += randomRange(1,6);
    }
    return total/numThrows;
    console.log(total(i));
}
const numThrows = 10000;
let result = getAverage(numThrows);

let myParagraph =document.querySelector("#answer");
myParagraph.myResult = result;
myParagraph.textContent = `Average throw value is ${myParagraph.querySelector(myResult)}`;

const myButton = document.querySelector(".pretty-button");
//const myButton = document.querySelector
myButton.classList.add("big-button");
myButton.addEventListener("press", () => console.log("Pressed"));