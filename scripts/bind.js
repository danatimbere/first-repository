console.log("started binding bind.js");
const myRange = document.querySelector("#myRange");
const myNum = document.querySelector("#num-inp");

function onChange(event) {
    console.log("my event value is", event.target.value);
    myNum.value = event.target.value;
}
function onInput(event) {
    console.log('my input value is', event.target.value);
    myNum.value=event.target.value;
}

function onNum(input) {
    console.log("Num input vales is", event.target.value);
    
}

    myNum.addEventListener('input', onNum);
myRange.addEventListener('change', onChange);
myRange.addEventListener('onchange', () => console.log("i was changed"));

//myRange.addEventListener('input', (ev) => console.log("Val:", ev.target.value));