import { v4 as uuidv4 } from "uuid";

const users = [
  {
    firstName: "Joe",
    lastName: "Westergaard",
    isMember: true,
    reservedBooks: [],
    userId: uuidv4(),
  },
  {
    firstName: "Jack",
    lastName: "Rimell",
    isMember: true,
    reservedBooks: [],
    userId: uuidv4(),
  },
  {
    firstName: "Robert",
    lastName: "Moritz",
    isMember: true,
    reservedBooks: [],
    userId: uuidv4(),
  },
  {
    firstName: "David",
    lastName: "Lewis",
    isMember: true,
    reservedBooks: [],
    userId: uuidv4(),
  },
  {
    firstName: "Frances",
    lastName: "Mollett",
    isMember: true,
    reservedBooks: [],
    userId: uuidv4(),
  },
  {
    firstName: "Cunt",
    lastName: "Chop",
    isMember: false,
    reservedBooks: [],
    userId: uuidv4(),
  },
];

export default users;
