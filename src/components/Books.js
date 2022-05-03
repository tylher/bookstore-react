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
            <Book author={author} title={title} id={id} />
          </div>
        );
      })}
      <InputBook />
    </>
  );
};

export default Books;
