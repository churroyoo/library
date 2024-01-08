const library = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
      return `${this.title}, ${this.author}, ${this.pages}, ${this.read}`
    }
}

function addBookToLibrary(){
    let title = prompt("Please specify the book's title", "LOTR")
    let author = prompt("Please specify the book's author", "J.R Tolkien")
    let pages = prompt("Please specify the book's page count", 644)
    let read = prompt("Have you read this book?", false)

    let book = new Book(title, author, pages, read)
    library.push(book)
}

const books = document.querySelector('.books');
const addBookButton = document.querySelector('.addBook')
addBookButton.addEventListener('click', () =>{
  addBookToLibrary()
  updateLibrary()
})

function updateLibrary(){
  for (let i = 0; i < library.length; i++){
    const card = document.createElement('div')
    const bookTitle = document.createElement('h3')
    const bookAuthor = document.createElement('h4')
    const bookPages = document.createElement('h4')

    bookTitle.textContent = library[i].title
    bookAuthor.textContent = library[i].author
    bookPages.textContent = library[i].pages

    card.appendChild(bookTitle)
    card.appendChild(bookAuthor)
    card.appendChild(bookPages)

    books.appendChild(card)
  }
}

