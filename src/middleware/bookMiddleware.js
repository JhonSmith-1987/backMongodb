import BookService from '../services/bookService.js';

const bookService = new BookService();

export async function middlewareGetBookForId(req, res, next) {
    let book;
    const { book_id } = req.query;
    try {
        book = await bookService.getBookForId(book_id);
        if (!book) {
            return res.status(404).json({
                status: 404,
                message: 'Verifica el id, no es un id válido'
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: `Error interno del sevidor ${error.message}`
        });
    }
    res.book = book;
    next();
}