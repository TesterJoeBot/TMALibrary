import { v4 as uuidv4 } from "uuid";

const books = [
  {
    bookTitle: "LOTR",
    bookAuthor: "Tolkien",
    bookAvailable: true,
    bookId: uuidv4(),
    bookImage: "/LOTR.webp",
  },

  {
    bookTitle: "Yr Hobyd",
    bookAuthor: "Tolkien",
    bookAvailable: true,
    bookId: uuidv4(),
    bookImage: "/hobyd.jpg",
  },

  {
    bookTitle: "Porn",
    bookAuthor: "Backdoor Sluts Nine",
    bookAvailable: false,
    bookId: uuidv4(),
    bookImage: "/pron.webp",
  },
  {
    bookTitle: "Science",
    bookAuthor: "Scientists",
    bookAvailable: true,
    bookId: uuidv4(),
    bookImage: "/science.webp",
  },
  {
    bookTitle: "The Adventures of Alice in Wonderland",
    bookAuthor: "Lewis Carroll",
    bookAvailable: false,
    bookId: uuidv4(),
  },
  {
    bookTitle: "His Dark Materials",
    bookAuthor: "Philip Pullman",
    bookAvailable: false,
    bookId: uuidv4(),
  },
  {
    bookTitle: "Animal Farm",
    bookAuthor: "George Orwell",
    bookAvailable: true,
    bookId: uuidv4(),
  },
  {
    bookTitle: "Inferno",
    bookAuthor: "Dante",
    bookAvailable: true,
    bookId: uuidv4(),
  },
  {
    bookTitle: "Purgatorio",
    bookAuthor: "Dante",
    bookAvailable: true,
    bookId: uuidv4(),
  },
  {
    bookTitle: "Paradiso",
    bookAuthor: "Dante",
    bookAvailable: true,
    bookId: uuidv4(),
  },
  {
    bookTitle: "Live, Laugh Love",
    bookAuthor: "Karen",
    bookAvailable: true,
    bookId: uuidv4(),
  },
  {
    bookTitle: "She Don't Know",
    bookAuthor: "Frankiie Mollett",
    bookAvailable: true,
    bookId: uuidv4(),
  },
  {
    bookTitle: "The Pussy Catalogue",
    bookAuthor: "Jack",
    bookAvailable: true,
    bookId: uuidv4(),
  },
  {
    bookTitle: "The Waffling of Nerds",
    bookAuthor: "Jack, Rob and Dave",
    bookAvailable: false,
    bookId: uuidv4(),
  },
  {
    bookTitle: "The Art of Falling Asleep",
    bookAuthor: "Joe listening to Jack, Rob and Dave",
    bookAvailable: true,
    bookId: uuidv4(),
  },
  {
    bookTitle: "The Art of Writing Passive Aggressive Book Names",
    bookAuthor: "Joe",
    bookAvailable: false,
    bookId: uuidv4(),
  },
];

export default books;
