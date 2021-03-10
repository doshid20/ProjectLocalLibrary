// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  /* totalBorrowedBook hold total borrowed book count
   * @condition returned === false
   */
  let totalBorrowedBook = 0;
  const borrowedBook = books.forEach(element => {
    element.borrows.forEach ((element)=> {
      (element.returned === false) ? totalBorrowedBook += 1 : totalBorrowedBook += 0; 
    });
  });
  // return total number of borrowed books
  return totalBorrowedBook;
}

function getMostCommonGenres(books) {

    // mapping list of genre
    const genrelist = books.map((book) => book.genre);

    // returnig occurance of each genre
    const genreocurrancelist = genrelist.reduce((occurance, item) => {  
        occurance[item] = (occurance[item]|| 0) + 1;
        return occurance;
    }, {});

    let result = [];
    
    for (const [key, value] of Object.entries(genreocurrancelist)) {
        result.push({
      'name' : key,
      'count' : value
      });
    }
  
    // sorting of result array
    result.sort((nameA, nameB) => nameB.count - nameA.count);
    
    // return ordered list of most common genres
    return result.slice(0, 5);
}

function getMostPopularBooks(books) {

   const result = books.map((book) => {
    /* Object with book name and borrow count */
    const popularBookList = {
      name: book.title,
      count: book.borrows.length,
    };
    return popularBookList;
  });  
  result.sort((resultA, resultB) => resultB.count - resultA.count);
  //return an ordered list of most popular books
  return result.slice(0,5);
  
}

function getMostPopularAuthors(books, authors) {

  const popularAuthors = authors.map((author) => {

    const authorName = author.name.first + " " + author.name.last;
    // list of books by author
    const booklist = getBooksByAuthor(books, author.id);
    
    const borrowCountByAuthor = booklist.reduce((accumulator,book) => {
      return accumulator += book.borrows.length }, 0
    );
    // result obj with author name and borrowed count based off author
    const result = {
      name: authorName,
      count: borrowCountByAuthor,
    } 
    return result;
  });

  popularAuthors.sort((authorA, authorB) => authorB.count - authorA.count); 

  //return an ordered list of most popular authors
  return popularAuthors.slice(0,5);
}

// helper function to get book by author
function getBooksByAuthor(books, id) {
  const listOfBookByAuthor =  books.filter((book) => 
    book.authorId === id
  )
  return listOfBookByAuthor;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};

