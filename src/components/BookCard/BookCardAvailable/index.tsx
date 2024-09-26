import { ReactNode } from "react";

interface BookCardAvailableProps {
  bookAvailable: boolean;
}

const BookCardAvailable = ({ bookAvailable }: BookCardAvailableProps) => {
  if (bookAvailable == true) {
    return <div>Available</div>;
  } else {
    return <div>Unavailable</div>;
  }

  return (
    <>
      <h2 className="book-card-available">{bookAvailable}</h2>

      <style jsx>{`
        .book-card-available {
          font-style: italic;
          font-size: 1.5rem;
        }
      `}</style>
    </>
  );
};

export default BookCardAvailable;
