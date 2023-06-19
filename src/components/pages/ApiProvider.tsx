import axios from 'axios';

export const getBook =  (id: string,callback?:any) => {

     axios.get(`http://localhost:3000/books/`+id)
      .then(res => {
        callback(res.data);
      })
  }
export const getAllBooks = (callback?:any) => {
    
  axios.get(`http://localhost:3000/books/`)
      .then(res => {
        callback(res.data);
      })
  };
export const ApiProvider = { 
  getBook, getAllBooks
};