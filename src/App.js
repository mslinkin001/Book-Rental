import Header from "./Header.js";
import Footer from "./Footer.js";
import Body from "./Body.js";

const books = [
  {
    image: "../the-fellowship-of-the-ring.jpg",
    name: "Lord of the Rings: Fellowshop of the Ring",
    pages: 1031,
    author: "James R. R. Tolkien",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit  esse molestie consequat, vel illum dolore eu feugiat ",
    rating: 4,
    isbn: 9780007203581,
  },
  {
    image: "../the-goblet-of-fire.jpg",
    name: "Harry Potter and the Goblet of Fire",
    pages: 293,
    author: "J. K. Rowling",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit  esse molestie consequat, vel illum dolore eu feugiat ",
    rating: 3,
    isbn: 9781338299175,
  },
  {
    image: "../the-storm-of-swords.jpg",
    name: "Game of Thrones: A Storm of Swords",
    pages: 853,
    author: "George R. R. Martin",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit  esse molestie consequat, vel illum dolore eu feugiat ",
    rating: 4,
    isbn: 9783442268467,
  },
];

const footerOptions = [
  {
    heading: "Category",
    options: [
      "Books",
      "New and NoterWorthy",
      "Top 50",
      "BookRental Recommends",
      "Kids Books",
    ],
  },
  {
    heading: "About Us",
    options: ["About Us", "Store Locator", "Blogs"],
  },
  {
    heading: "Get in Touch",
    options: ["Careers", "Suggest as Store", "Contact Us", "Track Your Order"],
  },
  {
    heading: "Useful Links",
    options: [
      "Privacy Policy",
      "Terms of Use",
      "Return Policy",
      "Payment Options",
    ],
  },
];

function App() {
  return (
    <>
      <Header />
      <Body availableBooks={books} />
      <Footer menuOptions={footerOptions} />
    </>
  );
}

export default App;
