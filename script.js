const displayField = document.getElementById("display");
const displayText = (field) => {
    function titleCase(str) {
        str = str.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
          str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
        }
        return str.join(' ');
      }
  displayField.innerText = titleCase(field.value);
};

let displayField1 = document.getElementById("displays");
// const userInput = document.getElementById("test");
let displayTexter = (field) => {
  //displayField1.innerText = field.value;
  if(displayField1 > 5){
    let isSlug = displayTexter.replace(" ", "-");
    displayField1.innerText = isSlug;
}
};