import { Injectable } from "@nestjs/common";
import { Book } from "./book.entity";
import { CreateBookDto } from "./dto/create-book.dto";

@Injectable()
export class BooksService {
  private books: Book[] = [];

  createBook(createBookDto: CreateBookDto): Book {
    const book: Book = {
      id: Math.random(),
      ...createBookDto,
      remainingQuantity: createBookDto.quantity,
      totalQuantity: 0,
    };
    this.books.push(book);
    return book;
  }

  findBookById(id: number): Book | undefined {
    return this.books.find((book) => book.id === id);
  }

  getBooks(): Book[] {
    return this.books;
  }
}
