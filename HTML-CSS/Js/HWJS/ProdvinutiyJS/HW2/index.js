class Library {
  #books;

  constructor(initialBooks = []) {
    if (new Set(initialBooks).size !== initialBooks.length) {
      throw new Error("Начальный список книг содержит дубликаты");
    }

    this.#books = [...initialBooks];
  }

  get allBooks() {
    return [...this.#books];
  }

  addBook(title) {
    if (this.#books.includes(title)) {
      throw new Error(
        `Книга с названием "${title}" уже существует в библиотеке`
      );
    }

    this.#books.push(title);
  }

  removeBook(title) {
    const bookIndex = this.#books.indexOf(title);

    if (bookIndex === -1) {
      throw new Error(`Книга с названием "${title}" не найдена в библиотеке`);
    }

    this.#books.splice(bookIndex, 1);
  }

  hasBook(title) {
    return this.#books.includes(title);
  }
}

try {
  const library = new Library(["Книга 1", "Книга 2"]);
  console.log(library.allBooks);

  library.addBook("Книга 3");
  console.log(library.allBooks);
  console.log(library.hasBook("Книга 2"));
  console.log(library.hasBook("Книга 4"));

  library.removeBook("Книга 1");
  console.log(library.allBooks);

  library.addBook("Книга 2");
} catch (error) {
  console.error(error.message);
}
