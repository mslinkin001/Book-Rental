import "./Body.css";

function Body(props) {
  const booksArray = props.availableBooks.map((book) => (
    <div className="book" key={book.isbn}>
      <img src={book.image}></img>
      <h3 className="book-name">{book.name}</h3>
      <p className="book-pages-author">
        {book.pages} pages • {book.author}
      </p>
      <p className="book-description">{book.description}</p>
      <p className="book-rating">{book.rating} stars</p>
    </div>
  ));
  console.log(props.availableBooks[0]);
  return (
    <>
      <div className="books">{booksArray}</div>
      <div className="expanded-card grid">
        <div className="item a">
          <img src={props.availableBooks[0].image}></img>
        </div>
        <div className="item b">
          <div className="book-title-card">
            <h3 className="book-name">{props.availableBooks[0].name}</h3>
            <img className="fav-icon" src="../bookmark-regular-full.svg" />
          </div>
          <p className="book-pages-author">
            {props.availableBooks[0].pages} pages •{" "}
            {props.availableBooks[0].author}
          </p>
          <p className="book-description">
            {props.availableBooks[0].description}
          </p>
          <p className="book-rating">{props.availableBooks[0].rating} stars</p>
        </div>
        <div class="item button-area">
          <button>RESERVE</button>
        </div>{" "}
      </div>
    </>
  );
}

export default Body;
