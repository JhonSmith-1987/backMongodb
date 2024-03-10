import BookRepository from '../repositories/bookRepository.js';

const bookRepository = new BookRepository();
class BookService {
    constructor() {
    }

    async getAllBooks() {
        try {
            return await bookRepository.getAllBooks();
        } catch (error) {
            throw error;
        }
    }
    async createBook(book) {
        try {
            return await bookRepository.createBook(book);
        } catch (error) {
            throw error;
        }
    }
    async getBookForId(book_id) {
        try {
            if (!book_id.match(/^[0-9a-fA-F]{24}$/)) {
                return false;
            } else {
                return await bookRepository.getBookForId(book_id);
            }
        } catch (error) {
            throw error;
        }
    }
    async editBook(book, bodyBook) {
        try {
            book.title = bodyBook.title || book.title;
            book.author = bodyBook.author || book.author;
            book.gender = bodyBook.gender || book.gender;
            book.publication_date = bodyBook.publication_date || book.publication_date;
            return await book.save();
        } catch (error) {
            throw error;
        }
    }
    async deleteBook(book) {
        try {
            return await book.deleteOne({
                _id: book._id
            });
        } catch (error) {
            throw error;
        }
    }
}

export default BookService;