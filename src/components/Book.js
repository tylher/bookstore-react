import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author } = props;
  return (
    <>
      <h2>{title}</h2>
      <p>{ author}</p>
    </>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default Book;
