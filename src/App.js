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
      "A ring with mysterious powers lands in the hands of a young hobbit, Frodo. Under the guidance of Gandalf, a wizard, he and his three friends set out on a journey and land in the Elvish kingdom.",
    rating: 4,
    isbn: 9780007203581,
  },
  {
    image: "../the-goblet-of-fire.jpg",
    name: "Harry Potter and the Goblet of Fire",
    pages: 293,
    author: "J. K. Rowling",
    description:
      "In his fourth year at Hogwarts, Harry must reluctantly compete in an ancient wizard tournament after someone mysteriously selects his name, while the Dark Lord secretly conspires something sinister.",
    rating: 3,
    isbn: 9781338299175,
  },
  {
    image: "../the-storm-of-swords.jpg",
    name: "Game of Thrones: A Storm of Swords",
    pages: 853,
    author: "George R. R. Martin",
    description:
      "The novel follows multiple storylines as the War of the Five Kings intensifies, Daenerys Targaryen builds her forces in the East, and the Night's Watch faces a growing threat from the Others beyond the Wall",
    rating: 4,
    isbn: 9783442268467,
  },
  {
    image: "../criminally-good.jpg",
    name: "Artemis Fow",
    pages: 524,
    author: "Eion Colfer",
    description:
      "In an attempt to find his missing father, Artemis Fowl, a 12-year-old criminal prodigy, comes across the secret world of fairies. Soon, he ends up in a deadly battle with the powerful fairies.",
    rating: 4,
    isbn: 9783442268467,
  },
  {
    image: "../the-lightning-thief.jpg",
    name: "Percy Jackson: The Lightning Thief",
    pages: 357,
    author: "Rick Riordan",
    description:
      "The Lightning Thief is a 2005 American fantasy-adventure novel based on Greek mythology, the first children's novel by Rick Riordan. The opening installment in the series Percy Jackson & the Olympians, the book was recognized among the year's best for children",
    rating: 4,
    isbn: 9783442268467,
  },
  {
    image: "the-curse-of-the-black-pearl.jpg",
    name: "Pirates of the Caribbean: The Curse of the Black Pearl",
    pages: 853,
    author: "George R. R. Martin",
    description:
      "The novel follows multiple storylines as the War of the Five Kings intensifies, Daenerys Targaryen builds her forces in the East, and the Night's Watch faces a growing threat from the Others beyond the Wall",
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
