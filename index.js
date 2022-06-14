function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
 return fetch('https://anapioficeandfire.com/api/books')
  .then((response) => {
    return response.json();
  })
  .then(books => renderBooks(books));
  //.then(books => books.push(renderBooks(books)))
  //console.log(fetch)

}


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
