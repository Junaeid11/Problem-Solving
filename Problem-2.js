const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }
  ];
  function bookTitle(booksData){
    return booksData.map(data => data.title)

  }
  const result =bookTitle(books)
  console.log(result)