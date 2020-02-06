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

const myInput = document.querySelector(".num-input");
console.log(`My value input is ${myInput.value}`);


function onButtonClick() {
        console.log("button was clicked!");
        console.log(`My value input is ${myInput.value}`);
        let nThrows = myInput.value;
        let result = getAverage(nThrows);
        myParagraph.textContent = `Average throw value is ${(result)}`;
}


myButton.addEventListener("click", onButtonClick);