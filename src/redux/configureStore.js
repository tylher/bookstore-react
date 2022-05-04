import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import books from './books/books';
import categories from './categories/categories';

const rootReducer = combineReducers({ categories, books });
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
