import BookService from '../services/bookService.js';
import Book from '../models/BookModel.js';

const bookService1 = new BookService();
export async function getAllBooks(req, res) {
    try {
        const books = await bookService1.getAllBooks();
        if (!books) {
            return res.status(204).json([]);
        } else {
            res.status(200).json(books);
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}
export async function createBook(req, res) {
    const {title,author,gender,publication_date} = req.body;
    if (!title || !author || !gender || !publication_date) {
        return res.status(400).json({
            message: 'Todos los datos son requeridos'
        });
    }
    const book = new Book({title,author,gender,publication_date});
    try {
        const newBook = await bookService1.createBook(book);
        if (!newBook) {
            return res.status(400).json({
                message: 'No se pudo crear el libro'
            });
        } else {
            res.status(201).json(newBook);
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}
export async function getBookForId(req, res) {
    const book = res.book;
    res.status(200).json({
        message: `Este es el usuario seleccionado`,
        data: book
    });
}
export async function editBook(req, res) {
    const book = res.book;
    const bodyBook = req.body;
    try {
        const bookEdited = await bookService1.editBook(book, bodyBook);
        if (!bookEdited) {
            return res.status(404).json({
                message: `No se pudo editar el libro`,
                data: null
            });
        }
        res.status(200).json({
            status: 200,
            data: bookEdited
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}
export async function deleteBook(req, res) {
    const book = res.book;
    try {
        const bookDeleted = await bookService1.deleteBook(book);
        if (!bookDeleted) {
            return res.status(404).json({
                message: `No se pudo eliminar el libro ${book.title}`,
                data: null
            });
        }
        res.status(200).json({
            status: 200,
            message: `El libro ${book.title} se elimino con éxito`,
            data: bookDeleted
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}