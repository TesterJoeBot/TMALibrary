import { ReactNode } from "react";
import BookCardTitle from "./BookCardTitle";
import BookCardAuthor from "./BookCardAuthor";
import BookCardImage from "./BookCardImage";
import BookCardAvailable from "./BookCardAvailable";
import BookCardSummary from "./BookCardSummary";

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
          background: white;
        }
      `}</style>
    </>
  );
};

export default Object.assign(BookCard, {
  Title: BookCardTitle,
  Author: BookCardAuthor,
  Image: BookCardImage,
  Available: BookCardAvailable,
  Summary: BookCardSummary,
});
