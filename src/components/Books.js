// import { useState } from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import InputBook from './InputBook';

const Books = () => {
  const bookList = useSelector((state) => state.books);
  return (
    <>
      {bookList.map((book) => {
        const { id, author, title } = book;
        return (
          <div key={id}>
            <Book author={author} title={title} />
            <button type="button">Remove</button>
          </div>
        );
      })}
      <InputBook />
    </>
  );
};

export default Books;
