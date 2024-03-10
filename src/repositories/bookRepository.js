import Book from '../models/BookModel.js'

class BookRepository {
    constructor() {
    }

    async getAllBooks() {
        try {
            return await Book.find(undefined, undefined, undefined);
        } catch (error) {
            throw error;
        }
    }
    async createBook(book) {
        try {
            return await book.save();
        } catch (error) {
            throw error;
        }
    }
    async getBookForId(book_id) {
        try {
            return await Book.findById(book_id);
        } catch (error) {
            throw error;
        }
    }
}
export default BookRepository;