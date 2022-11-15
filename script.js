"use strict";

let myLibrary = [];
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;

  this.info = function () {
    return `${title} by ${author}, ${pages} pages.`;
  };
}

function addBookToLibrary() {
  //do magic shit here
}

const book1 = new Book("Lord of the Rings", "Tolkin", 450);
console.log(book1);
console.log(book1.info());

const book2 = new Book("Harry Hotter", "Sexmaniac", 69);
console.log(book2.info());

const book3 = new Book("Maths for Idiots", "Garry Gorry", 2500);
console.log(book3.info());
