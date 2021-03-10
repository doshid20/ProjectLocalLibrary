// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
  //find author by given id
  const findAuthorById = authors.find((element) => element.id === id);
  return findAuthorById;
}

function findBookById(books, id) {
  //find book by given id
  const findBookById = books.find((element) => element.id === id);
  return findBookById;
}

function partitionBooksByBorrowedStatus(books) {

  const results = [];

  // Get array of return books
  const returnedbook = getListOfReturnedBook(books);

  // Get array of borrowed books
  const borrowedbook = getListOfBorrowedBook(books);

  results.push(returnedbook);
  results.push(borrowedbook);

  //array with  borrowed books and returned books
  return results;

}

function getBorrowersForBook(book, accounts) {

  let result = [];

  const borrowListOnbook = book.borrows;

  // array to find borrow as per accout
  borrowListOnbook.forEach((borrow) => {
    let findBorrowAccount = findAccount(accounts, borrow.id);
    
    const newObj = findBorrowAccount;
    newObj['returned'] = borrow.returned;
    result.push(newObj);
  });

  // result array that hold list of borrowers with returned status
  return result.slice(0, 10);
}

// helper function to get list of retured book
function getListOfBorrowedBook(books) {
  const returnedBookLists = books.filter(book => book.borrows[0].returned)
  return returnedBookLists;
}

// helper function to get list of borrowed book
function getListOfReturnedBook(books)  {
  const borrowedBookList =  books.filter(book => !book.borrows[0].returned)
  return borrowedBookList;
}

// helper function to find account 
function findAccount(accounts, id) {
  const findaccount = accounts.find((element) => element.id === id);
  return findaccount;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
