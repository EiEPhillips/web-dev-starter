let userInput = document.getElementById('userInput').value;
let getData = document.getElementById('getInput').innerHTML;
userInput.keyup = function () {
    let changeFirstLetter = userInput.replace(userInput.charAt(0), userInput.charAt(0).toUpperCase());
    getData = changeFirstLetter;
    if(userInput > 5){
        let isSlug = changeFirstLetter.replace(" ", "-");
        getData = isSlug;
    }
};