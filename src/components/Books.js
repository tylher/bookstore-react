import { useState } from "react";
import Book from "./Book";
import InputBook from "./InputBook";

const Books = () => {
  const [bookList] = useState([]);
  return (
    <>
      {bookList.map((book) => {
        return (
          <div key={book.id}>
            <Book />
            <button type="button">Remove</button>
          </div>
        );
      })}
      <InputBook />
    </>
  );
};

export default Books;
