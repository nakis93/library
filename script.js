"use strict";

let myLibrary = [];

// The Object constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// A function that loops through myLibrary all the objects and shows them on screen
function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
  displayBooksOnPage();
}

function displayBooksOnPage() {
  const books = document.querySelector(".books");

  //Remove all previously displayed cards before I loop over array again
  const removeDivs = document.querySelectorAll(".card");
  for (let i = 0; i < removeDivs.length; i++) {
    removeDivs[i].remove();
  }

  // Loops over the library array and display the cards
  myLibrary.forEach((myLibrary) => {
    // forEach item in myLibrary array
    const card = document.createElement("div"); // create a div with class name 'card'
    card.classList.add("card");
    books.appendChild(card); // add div card to the books div
    let delbtn = document.createElement("button");
    delbtn.id = "delbtn";
    delbtn.textContent = `Remove book`;
    card.appendChild(delbtn);
    console.log(myLibrary);
    delbtn.addEventListener("click", removeCard);
    function removeCard() {
      for (let i = 0; i < card.length; i++) {
        card[i].remove();
      }
    }
    console.log(myLibrary);
    for (let key in myLibrary) {
      // for every key in myLibrary array, create a paragraph that contains as text the key name and key value and add the paragraph to the card div
      const para = document.createElement("p");
      para.textContent = `${key} : ${myLibrary[key]}`;
      card.appendChild(para);
    }
  });
}
// document.getElementById("delbtn").addEventListener("click", removeCard());

// function removeCard() {
//   card.remove();
// }

// Start event listener/display form to add a new book to library
const addBookButton = document.querySelector(".add-book-button");
addBookButton.addEventListener("click", displayTheForm);

function displayTheForm() {
  document.getElementById("add-book-form").style.display = "";
  addBookButton.style.display = "none";
}

// Start event listener/add input to array for new entry form
const submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", userData);

//Set empty data equal to user input data
function userData() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").value;
  //Break out if form is incomplete or not valid
  if (title == "" || author == "" || pages == "" || read == "") return;

  // Call function to input the book data to array
  addBookToLibrary(title, author, pages, read);

  // Reset the form after successful submission
  // document.getElementById("add-book").reset();
  clearForm();
}

// Start event listener for clear form button
const clearButton = document.querySelector(".reset-button");
clearButton.addEventListener("click", clearForm);

function clearForm() {
  document.getElementById("add-book").reset();
}
