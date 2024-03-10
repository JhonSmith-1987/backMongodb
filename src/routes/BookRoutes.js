import express from 'express';
import {middlewareGetBookForId} from '../middleware/bookMiddleware.js';
import {
    getAllBooks,
    createBook,
    getBookForId,
    editBook,
    deleteBook,
} from '../controllers/bookController.js';

const routerBook = express.Router();

routerBook.post('/add', createBook);
routerBook.get('/allBooks', getAllBooks);
routerBook.get('/get', middlewareGetBookForId, getBookForId);
routerBook.put('/update', middlewareGetBookForId, editBook);
routerBook.delete('/delete', middlewareGetBookForId, deleteBook);

export default routerBook;