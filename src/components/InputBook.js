import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookAPI } from '../redux/books/books';
import './InputBook.css';

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
      dispatch(addBookAPI(uuidv4(), title, author, 'Action'));
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

  const handleMouseOut = (e) => {
    if (e.target.value !== 'Category') {
      e.target.style.color = 'black';
    }
  };

  return (
    <form>
      <h2>ADD NEW BOOK</h2>
      <div className="flex-grp">
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
        <select
          name="category"
          id="category"
          onMouseOut={handleMouseOut}
          onBlur={handleMouseOut}
        >
          <option value="Category"> Category </option>
          <option value="Action"> Action </option>
        </select>

        <button type="submit" onClick={handleSubmit}>
          ADD BOOK
        </button>
      </div>
    </form>
  );
};

export default InputBook;
