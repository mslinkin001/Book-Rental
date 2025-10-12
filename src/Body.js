import "./Body.css";

function Body(props) {
  const booksArray = props.availableBooks.map((book) => (
    <div className="book" key={book.isbn}>
      <img src={book.image}></img>
      <h2 className="book-name">{book.name}</h2>
      <p className="book-pages-author">
        {book.pages} pages • {book.author}
      </p>
      <p className="book-description">{book.description}</p>
      <p className="book-rating">{book.rating} stars</p>
    </div>
  ));

  return (
    <>
      <div className="books">{booksArray}</div>
    </>
  );
}

export default Body;
