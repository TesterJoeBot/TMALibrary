import { ReactNode } from "react";

interface BookCardTitleProps {
  children: ReactNode;
}

const BookCardTitle = ({ children }: BookCardTitleProps) => {
  return (
    <>
      <h2 className="book-card-title">{children}</h2>

      <style jsx>{`
        .book-card-title {
          font-weight: bold;
          font-size: 2rem;
        }
      `}</style>
    </>
  );
};

export default BookCardTitle;
