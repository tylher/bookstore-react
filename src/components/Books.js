import { useSelector } from 'react-redux';
import Book from './Book';
import InputBook from './InputBook';
import './Books.css';

const Books = () => {
  const bookList = useSelector((state) => state.books);
  return (
    <div className="container">
      <section className="books-container">
        {bookList.map((book) => {
          const {
            id, author, title, category,
          } = book;
          return (
            <div key={id}>
              <Book author={author} title={title} id={id} category={category} />
            </div>
          );
        })}
      </section>
      <section>
        <InputBook />
      </section>
    </div>
  );
};

export default Books;
