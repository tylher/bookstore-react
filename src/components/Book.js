import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const { title, author, id } = props;
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(removeBook(id));
  };

  return (
    <>
      <h2>{title}</h2>
      <p>{author}</p>
      <button type="button" onClick={handleClick}>
        Remove
      </button>
    </>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default Book;
