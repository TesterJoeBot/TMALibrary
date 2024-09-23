import { ReactNode } from "react";
import BookCardTitle from "./BookCardTitle";
import BookCardAuthor from "./BookCardAuthor";

interface BookCardProps {
  children: ReactNode;
}

const BookCard = ({ children }: BookCardProps) => {
  return (
    <>
      <div className="book-card">{children}</div>

      <style jsx>{`
        .book-card {
          border: 2px solid black;
          border-radius: 12px;
          padding: 1rem;
          margin: 1rem;
        }
      `}</style>
    </>
  );
};

export default Object.assign(BookCard, {
  Title: BookCardTitle,
  Author: BookCardAuthor,
});
