import { Controller, Get, Post, Body, Param } from "@nestjs/common";
import { BooksService } from "./books.service";
import { Book } from "./book.entity";
import { CreateBookDto } from "./dto/create-book.dto";

@Controller("books")
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getBooks(): Book[] {
    return this.booksService.getBooks();
  }

  @Post()
  createBook(@Body() createBookDto: CreateBookDto): Book {
    return this.booksService.createBook(createBookDto);
  }

  @Get(":id")
  findBookById(@Param("id") id: number): Book | undefined {
    return this.booksService.findBookById(id);
  }
}
