const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const reducer = (
  state = [
    { title: 'Lord of the rings', id: '0', author: 'Prince' },
    { title: 'Harry potter', id: '1', author: 'Monroe' },
    { title: 'Cindarella', id: '2', author: 'Halle' },
  ],
  action,
) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        { id: action.id, title: action.title, author: action.author },
      ];
    case REMOVE_BOOK:
      return [...(state.filter((book) => book.id !== action.id))];
    default:
      return state;
  }
};

export const addBook = (id, title, author) => ({
  type: ADD_BOOK,
  id,
  title,
  author,
});
export const removeBook = (id) => ({ type: REMOVE_BOOK, id });

export default reducer;