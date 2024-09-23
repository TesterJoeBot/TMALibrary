import { ReactNode } from "react";

interface BookCardAuthorProps {
  children: ReactNode;
}

const BookCardAuthor = ({ children }: BookCardAuthorProps) => {
  return (
    <>
      <h2 className="book-card-author">{children}</h2>

      <style jsx>{`
        .book-card-author {
          font-style: italic;
          font-size: 1.5rem;
        }
      `}</style>
    </>
  );
};

export default BookCardAuthor;
