// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
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
     const catsArray = [ ...cats, name];
     return(catsArray);
 }
 function prependCat(name) {
    const catsArray = [name, ...cats];
    return(catsArray);
 }
 function removeLastCat() {
    const catsArray = cats.slice(0, -1);
    return(catsArray);
 }
function removeFirstCat() {
    const catsArray = cats.slice(1);
    return(catsArray);
}
  