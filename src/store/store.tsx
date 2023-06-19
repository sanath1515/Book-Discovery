import { createStore } from 'redux';
import { booksReducer } from './reducers';

const store = createStore(booksReducer);

export default store;