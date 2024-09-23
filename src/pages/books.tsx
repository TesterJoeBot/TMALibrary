import SmallNav from "../components/SmallNav";
import books from "@/data/books";
import CustomHead from "@/components/CustomHead";
import BookCard from "@/components/BookCard";
import BookCardImage from "@/components/BookCard/BookCardImage";

export default function Books() {
  return (
    <>
      <CustomHead />
      <SmallNav />
      <div className="books-list">
        {books.map((book) => (
          <BookCard key={book.bookId}>
            <BookCard.Title>{book.bookTitle}</BookCard.Title>
            <BookCard.Author>{book.bookAuthor}</BookCard.Author>
            {!!book.bookImage && <BookCard.Image src={book.bookImage} />}
          </BookCard>
        ))}
      </div>
      <style jsx>{`
        .books-list {
          display: grid;
          grid-template-columns: repeat(
            auto-fill,
            minmax(min(100%, 24rem), 1fr)
          );
        }
      `}</style>
    </>
  );
}
