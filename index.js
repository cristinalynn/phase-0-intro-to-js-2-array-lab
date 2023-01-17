const cats = ["Milo", "Otis", "Garfield"];
  function destructivelyAppendCat(name) {
    cats.push(name);
  }
  function destructivelyPrependCat(name) {
    cats.unshift(name);
  }
  function destructivelyRemoveLastCat(name) {
    cats.pop(name);
  }
  function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
  }
  function appendCat(name) {
    const catsArray = [ ...cats, name];
    return(catsArray);
  }
  function prependCat(name) {
    const catsArray = [name, ...cats];
    return(catsArray);
  }
  function removeLastCat(name) {
    const catsArray = cats.slice(0, -1);
    return(catsArray);
  }
  function removeFirstCat(name) {
    const catsArray = cats.slice(1);
    return(catsArray);
  }

