import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAPI } from '../redux/books/books';

const Book = (props) => {
  const {
    title, author, id, category,
  } = props;
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(removeBookAPI(id));
  };

  const randomNum = Math.floor(Math.random() * 101);

  const progressBar = {
    backgroundImage: `conic-gradient( #307bbe , #379cf6 ${randomNum}%, white ${randomNum}% )`,
  };

  return (
    <div className="card">
      <div className="book-details">
        <span>{category}</span>
        <h2>{title}</h2>
        <p>{author}</p>
        <div className="btn-group">
          <button type="button">Comments</button>
          <button type="button" onClick={handleClick}>
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>

      <div className="completed">
        <div className="outer-circle" style={progressBar}>
          <div className="inner-circle" />
        </div>
        <div className="completed-text">
          <h2 className="percentage">
            {randomNum}
            %
          </h2>
          <span>completed</span>
        </div>
      </div>

      <div className="line-border" />

      <div className="current-chapter">
        <h2>CURRENT CHAPTER</h2>

      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default Book;
