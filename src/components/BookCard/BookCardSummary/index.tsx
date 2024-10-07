import { ReactNode } from "react";

interface BookCardSummaryProps {
  children: ReactNode;
}

const BookCardSummary = ({ children }: BookCardSummaryProps) => {
  return (
    <>
      <p className="book-card-summary">{children}</p>

      <style jsx>{`
        .book-card-summary {
          font-size: 1rem;
          font-weight: 800;
        }
      `}</style>
    </>
  );
};

export default BookCardSummary;
