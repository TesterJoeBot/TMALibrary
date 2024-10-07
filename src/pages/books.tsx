import SmallNav from "../components/SmallNav";
import books from "@/data/books";
import CustomHead from "@/components/CustomHead";
import BookCard from "@/components/BookCard";
import BookCardImage from "@/components/BookCard/BookCardImage";
import SmallNavButton from "@/components/SmallNavButton";
import Layout from "@/components/Layout";

export default function Books() {
  return (
    <>
      <CustomHead />
      <SmallNav />
      <br></br>
      <SmallNavButton href="/homepage">Back </SmallNavButton>
      <div className="books-list">
        {books.map((book) => (
          <BookCard key={book.bookId}>
            <BookCard.Title>{book.bookTitle}</BookCard.Title>
            <BookCard.Author>{book.bookAuthor}</BookCard.Author>
            <Layout.Columns>
              {!!book.bookImage && <BookCard.Image src={book.bookImage} />}
              <BookCard.Summary>{book.bookSummary}</BookCard.Summary>
            </Layout.Columns>
            <BookCard.Available bookAvailable={book.bookAvailable} />
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
