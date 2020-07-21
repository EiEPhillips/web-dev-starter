let userText = document.getElementById('userInput');
let showText = document.getElementById('textDisplay');

function myFunction(){
    let strap = userText.value;
    strap.toLowerCase().split(' ');
    for (var i = 0; i < strap.length; i++){
        strap[i] = strap[i].charAt(0).toUpperCase() + strap[i].slice(1);
    }
    return strap.join(' ');
}

showText.text(`${strap}`);
