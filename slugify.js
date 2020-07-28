const displayFielder = document.getElementById("displays");
const slugify = (field) => {
function makeSlug(String)     {
    return String 
    .toLowerCase()           //Convert the whole string to lowercas
    .replace(/[^\w ]+/g,'')  //Remove all the non-word characters
    .replace(/ +/g,'-')         //Replace white spaces with hyphens
    .replace(/^-/g,'')          //Remove leading hyphens (caused by leading spaces) 
    .replace(/-$/g,'');         //Remove trailing hyphens (caused by trailing spaces)
}
displayFielder.innerText = makeSlug(field.value);
};