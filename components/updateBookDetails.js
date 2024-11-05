export const updateBookDetails = (books, title, newDetails) => {
    return books.map((book) => {
      if (book.title === title) {
        return { ...book, ...newDetails };
      }
      return book;
    });
  };