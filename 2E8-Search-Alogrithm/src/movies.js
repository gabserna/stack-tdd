// ejemplo de busqueda binaria simple

function binarySearch(libraryBooks, targetBook) {
  let startIndex = 0;
  let endIndex = libraryBooks.length - 1;
  let midpoint = Math.floor((startIndex + endIndex) / 2);

  while (libraryBooks[midpoint] !== targetBook && startIndex <= endIndex) {
    if (targetBook < libraryBooks[midpoint]) {
      endIndex = midpoint - 1;
    } else {
      startIndex = midpoint + 1;
    }
    midpoint = Math.floor((startIndex + endIndex) / 2);
  }

  if (libraryBooks[midpoint] === targetBook) {
    return midpoint;
  } else {
    return -1;
  }
}

let libraryBooks = ["Alice in Wonderland", "Dracula", "The Great Gatsby", "Moby Dick", "The Catcher in the Rye", "Pride and Prejudice"];
let targetBook = "Moby Dick";

let result = binarySearch(libraryBooks, targetBook);
if (result === -1) {
  console.log(`${targetBook} is not found in the libraryBooks array`);
} else {
  console.log(`${targetBook} can be found at index ${result} in the libraryBooks array`);
}
