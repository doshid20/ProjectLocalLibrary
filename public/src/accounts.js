// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {
  // Find account using account id
  const findAccountId = accounts.find((element) => element.id === id);
  return findAccountId;
}

function sortAccountsByLastName(accounts) {

  // sorting account by last name;
  const accountSortedInOrder = accounts.sort((accountA, accountB) => 
  accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1);
  return accountSortedInOrder;

}

function getTotalNumberOfBorrows(account, books) {
  
  let accumulator = 0;
  const totalNumberOfBorrowByAccount = books.forEach((book) => {
    const borrowbook = book.borrows.forEach((borrow) => {

      if (borrow.id === account.id) {
         accumulator += 1;
      }
    });

  });
  return accumulator;
}

function getBooksPossessedByAccount(account, books, authors) {
  // empty array 
  let result = [];

  /* add book to result 
   * @condition - borrow.id === account.id && !borrow.returned
   */
  books.forEach((book) => {
       const borrowedBook = book.borrows.forEach((borrow) =>  {
           if(borrow.id === account.id && !borrow.returned) {
              result.push(book);
           }
        });     
  })
   result = result.map((book) => {
    let author =  getAuthorById(authors, book.authorId);
    
    /* create new object and added to result */
    const newObjWithAuthor = {
      ...book,
      author,
    }
    return newObjWithAuthor;
  });
 
  //books taken out by an account with the author embedded
  return result;
}

// helper function to find author by id

function getAuthorById(authors, id) {
  const author = authors.find((author) => author.id == id);
  return author;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

