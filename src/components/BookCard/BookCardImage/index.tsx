import { ReactNode } from "react";

interface BookCardImageProps {
  src: string;
}

const BookCardImage = ({ src }: BookCardImageProps) => {
  return (
    <>
      <img src={src} alt="Book" className="book-card-image" />

      <style jsx>{`
        .book-card-image {
          padding: 1rem;
          height: 15rem;
        }
      `}</style>
    </>
  );
};

export default BookCardImage;
