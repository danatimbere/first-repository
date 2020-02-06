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
myParagraph.textContent = `Average throw value is ${myParagraph.myResult}`;

const myButton = document.querySelector("#submitBtn");
const delButton = document.querySelector("#deleteBtn");
//const myButton = document.querySelector

myButton.classList.add("big-button");

const myInput = document.querySelector(".num-input");
console.log(`My value input is ${myInput.value}`);


function onButtonClick() {
        console.log("button was clicked!");
        console.log(`My value input is ${myInput.value}`);
        let nThrows = myInput.value;
        let result = getAverage(nThrows);
        myParagraph.textContent = `Average throw value is ${result}`;

        //let rec = Math.floor(Math.random() * 256);
        //document.body.style.background = `rgb($(red), 128, 129)`;
        let resultsCont = document.querySelector(".result-cont");


        const newP = document.createElement('p');
        newP.textContent = `Throws: ${nThrows} Average: ${result}`;
        resultsCont.appendChild(newP);

}
    

myButton.addEventListener("click", onButtonClick);