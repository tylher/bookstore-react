const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const GET_BOOKS = 'GET_BOOKS';
const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const id = 'pvUXP2hLb63eHdU4i44l';
export const END_POINT = `apps/${id}/books`;

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_BOOKS:
      return Object.keys(action.books).map((book) => ({
        id: book,
        ...action.books[book][0],
      }));

    case ADD_BOOK: {
      const {
        id, title, author, category,
      } = action;
      return [
        ...state,
        {
          id,
          title,
          author,
          category,
        },
      ];
    }

    case REMOVE_BOOK:
      return [...state.filter((book) => book.id !== action.id)];
    default:
      return state;
  }
};

const addBook = (id, title, author) => ({
  type: ADD_BOOK,
  id,
  title,
  author,
});

export const addBookAPI = (itemId, title, author, category) => (dispatch) => {
  fetch(`${BASE_URL}/${END_POINT}`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: itemId,
      title,
      author,
      category,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((res) => {
    if (res.ok) {
      dispatch(addBook(itemId, title, author, category));
    }
  });
};

const removeBook = (id) => ({ type: REMOVE_BOOK, id });

export const removeBookAPI = (itemId) => (dispatch) => {
  fetch(`${BASE_URL}/${END_POINT}/${itemId}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((res) => {
    if (res.ok) {
      dispatch(removeBook(itemId));
    }
  });
};

export const getBooks = (books) => ({ type: GET_BOOKS, books });
export const asyncGetBook = () => (dispatch) => fetch(`${BASE_URL}/${END_POINT}`, {
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((res) => res.json())
  .then((data) => dispatch(getBooks(data)));

export default reducer;
