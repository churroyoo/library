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
