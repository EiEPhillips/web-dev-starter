let uText = document.getElementById('userInput').value;

function myTitleCase(uText){
    uText = uText.toLowerCase().split(' ');
    for (var i = 0; i < uText.length; i++){
        uText[i] = uText[i].charAt(0).toUpperCase() + uText[i].slice(1);
    }
    return uText.join(' ');
}

console.log(myTitleCase(uText));

let showMe = function() {
    document.getElementById('textDisplay').innerHTML = myTitleCase;
};
