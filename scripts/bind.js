console.log("started binding bind.js");
const myRange = document.querySelector("#myRange");
const myNum = document.querySelector("#num-inp");

function onChange(event) {
    console.log("my event value is", event.target.value);
}
myRange.addEventListener('change', onChange);
//myRange.addEventListener('onchange', () => console.log("i was changed"));

myRange.addEventListener('input', (ev) => console.log("Val:", ev.target.value));