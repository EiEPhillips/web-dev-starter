let userInput = document.getElementById('userInput').value;
let getData = document.getElementById('userInput').innerHTML;
userInput.onkeyup = function () {
    let changeFirstLetter = userInput.replace(userInput.charAt(0), userInput.charAt(0).toUpperCase());
    getData = changeFirstLetter;
};