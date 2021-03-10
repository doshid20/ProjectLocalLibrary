// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {

  const findaccountId = accounts.find((element) => element.id === id);
  return findaccountId;
}

function sortAccountsByLastName(accounts) {
  const accountsortedinorder = accounts.sort((accountA, accountB) => 
  accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1);
  return accountsortedinorder;
}

function getTotalNumberOfBorrows(account, books) {

  let accumulator = 0;
  
  const totalNumberofBorrowByAccount = books.forEach((book) => {
    const borrowbook = book.borrows.forEach((borrow) => {

      if (borrow.id === account.id) {
         accumulator += 1;
      }
    });

  });
  return accumulator;
}

function getAuthorById(authors, id) {
  const author = authors.find((author) => author.id == id);
  return author;
}

function getBooksPossessedByAccount(account, books, authors) {
  let result = [];
  books.forEach((book) => {
       const borrowedbook = book.borrows.forEach((borrow) =>  {
           if(borrow.id === account.id && !borrow.returned) {
              result.push(book);
           }
        });     
  })
   result = result.map((book) => {
    let author =  getAuthorById(authors, book.authorId);
    
    const newObjWithAuthor = {
      ...book,
      author,
    }
    return newObjWithAuthor;
  });
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
