"use strict";

let myLibrary = [];

// The Object constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  // this.info = function () {
  //   return `${title} by ${author}, ${pages} pages.`;
  // };
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

  // Loops over the library array and display to the cards
  let index = 0;
  myLibrary.forEach((myLibrary) => {
    // forEach item in myLibrary array
    const card = document.createElement("div"); // create a div with class name 'card'
    card.classList.add("card");
    books.appendChild(card); // add div card to the books div

    //Create remove book button and add class attribute for each array card
    // const removeBookButton = document.createElement("button");
    // removeBookButton.classList.add("remove-book-button");
    // removeBookButton.textContent = "Remove From Library";

    // //Link the data attribute of the remove button to the array and card
    // removeBookButton.dataset.linkedArray = index;
    // index++;
    // card.appendChild(removeBookButton);

    // //Start event listener/remove array item from array and card from parent div via data link
    // removeBookButton.addEventListener("click", removeBookFromLibrary);

    // function removeBookFromLibrary() {
    //   let;
    // }

    for (let key in myLibrary) {
      // for every key in myLibrary array, create a paragraph that contains as text the key name and key value and add the paragraph to the card div
      const para = document.createElement("p");
      para.textContent = `${key} : ${myLibrary[key]}`;
      card.appendChild(para);
    }
  });
}

// Start event listener/display form to add a new book to library
const addBookButton = document.querySelector(".add-book-button");
addBookButton.addEventListener("click", displayTheForm);

function displayTheForm() {
  document.getElementById("add-book-form").style.display = "";
  addBookButton.style.display = "none";
}

// Start event listener/add input to array for new entry form
const submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", intakeFormData);

//Transform form data to variables for intake
function intakeFormData() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").value;
  //Break out if form is incomplete or not valid
  if (title == "" || author == "" || pages == "" || read == "") return;

  // Call function to input the book data to array
  addBookToLibrary(title, author, pages, read);

  // Reset the form after successful submission
  document.getElementById("add-book").reset();
}

// Start event listener for clear form button
const clearButton = document.querySelector(".reset-button");
clearButton.addEventListener("click", clearForm);

function clearForm() {
  document.getElementById("add-book").reset();
}
