let userInput = document.getElementById('userInput').value;
let getData = document.getElementById('userInput').innerHTML;
userInput.onchange = function () {
    let changeFirstLetter = userInput.replace(userInput.charAt(0), userInput.charAt(0).toUpperCase());
    getInput = changeFirstLetter;
    if(userInput > 5){
        let isSlug = changeFirstLetter.replace(" ", "-");
        getInput = isSlug;
    }
};