import SmallNav from "../components/SmallNav";
import CustomHead from "@/components/CustomHead";
import BookCard from "@/components/BookCard";
import SmallNavButton from "@/components/SmallNavButton";
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import { Book } from "@/types";

globalThis.help = () => {
  console.log("Fuck Brackets and fuck you too.");
};

export default function Books() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch("/api/books");

      const data = await response.json();
      setBooks(data.books);
    };

    fetchBooks();
  }, []);

  return (
    <>
      <CustomHead />
      <SmallNav />
      <br></br>
      <SmallNavButton href="/homepage">Back</SmallNavButton>
      <div className="books-list">
        {books.map((book) => (
          <BookCard key={book.bookId}>
            <BookCard.Title>{book.bookTitle}</BookCard.Title>
            <BookCard.Author>{book.bookAuthor}</BookCard.Author>
            <Layout.Columns>
              {!!book.bookImage && <BookCard.Image src={book.bookImage} />}
              <BookCard.Summary>{book.bookSummary}</BookCard.Summary>
            </Layout.Columns>
            <Layout.Footer>
              <BookCard.Available bookAvailable={book.bookAvailable} />
            </Layout.Footer>
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
