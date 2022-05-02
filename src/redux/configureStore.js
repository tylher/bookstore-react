import { legacy_createStore as createStore, combineReducers } from 'redux';
import categories from './categories/categories';
import books from './books/books';

const rootReducer = combineReducers({ categories, books });
const store = createStore(rootReducer);
export default store;
