import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  books: BooksReducer
  //booksReducer = [ {title: 'Harry Potter'}, { title: Javascript'}]
});

export default rootReducer;
