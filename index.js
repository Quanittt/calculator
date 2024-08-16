const mainInput = document.getElementById('mainResult');
const enterButton = document.getElementById('enterButton');
const clearButton = document.getElementById('clearButton');
const equalButton = document.getElementById('equalButton');

function enterNum(item) {
    mainInput.value += `${item}`;
}

function clearNum() {
    mainInput.value = ``;
}

function resultNum() {
    mainInput.value = eval(mainInput.value);
}