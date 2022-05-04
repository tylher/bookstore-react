import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
// import axios from 'axios';
import categories from './categories/categories';
import books, { getBooks } from './books/books';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const id = 'pvUXP2hLb63eHdU4i44l';
const END_POINT = `apps/${id}/books`;

const rootReducer = combineReducers({ categories, books });
const store = createStore(rootReducer, applyMiddleware(thunk));

export const asyncGetBook = () => (dispatch) => fetch(`${BASE_URL}/${END_POINT}`, {
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return '';
  })
  .then((data) => dispatch(getBooks(data)));

export default store;
