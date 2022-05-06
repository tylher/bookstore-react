import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookAPI } from '../redux/books/books';

const InputBook = () => {
  const [inputText, setInputText] = useState({ title: '', author: '' });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.value.trim() !== '') {
      setInputText({
        ...inputText,
        [e.target.name]: e.target.value,
      });
    }
  };
  const handleSubmit = (e) => {
    const { title, author } = inputText;
    e.preventDefault();
    if (title.trim() && author.trim()) {
      dispatch(addBookAPI(uuidv4(), title, author, 'action'));
      setInputText({
        title: '',
        author: '',
      });
      document.querySelectorAll('input').forEach((i) => {
        const val = i;
        val.value = '';
      });
    }
  };

  return (
    <form>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        placeholder="Enter book title"
        required
      />
      <input
        type="text"
        name="author"
        onChange={handleChange}
        placeholder="Enter book author"
        required
      />
      <button type="submit" onClick={handleSubmit}>
        Add book
      </button>
    </form>
  );
};

export default InputBook;
