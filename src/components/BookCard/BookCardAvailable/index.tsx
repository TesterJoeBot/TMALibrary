import { ReactNode } from "react";

interface BookCardAvailableProps {
  bookAvailable: boolean;
}

const BookCardAvailable = ({ bookAvailable }: BookCardAvailableProps) => {
  return (
    <>
      <p className="book-card-available">
        {bookAvailable ? "Available" : "Unavailable"}
      </p>

      <style jsx>{`
        .book-card-available {
          font-style: italic;
          font-size: 1.5rem;
          text-align: right;
        }
        .book-card-available:before {
          content: "";
          display: inline-block;
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          background-color: ${bookAvailable ? "green" : "red"};
        }
      `}</style>
    </>
  );
};

export default BookCardAvailable;

// push thingy to bottom (giggidy)
