let cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(name) {
    
    let newCatsArray = [...cats, name];
    return newCatsArray;
}
function prependCat(name) {
    
    let newCatsArray = [name, ...cats];
    return newCatsArray;
}
function removeLastCat() {
    
    let newCatsArray = cats.slice(0, -1);
    return newCatsArray;
}
function removeFirstCat() {
   let newCatsArray = cats.slice(1);
    return newCatsArray;
}



