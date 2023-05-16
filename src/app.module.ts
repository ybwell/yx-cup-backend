import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { BooksModule } from "./books/books.module";
import { BorrowsModule } from "./borrows/borrows.module";

@Module({
  imports: [UsersModule, BooksModule, BorrowsModule],
})
export class AppModule {}
