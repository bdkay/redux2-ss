import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  books: BooksReducer,
  //BooksReducer = [ {title: 'Harry Potter'}, { title: Javascript'}]
  activeBook: ActiveBook
});

export default rootReducer;
