import { Controller, Get, Query } from "@nestjs/common";
import { BorrowsService } from "./borrows.service";
import { Borrow } from "./borrow.entity";

@Controller("borrows")
export class BorrowsController {
  constructor(private readonly borrowsService: BorrowsService) {}

  @Get("details")
  async getBorrowDetails(
    @Query("studentId") studentId: string
  ): Promise<Borrow[]> {
    return this.borrowsService.getBorrowDetails(studentId);
  }

  @Get("overdue")
  async getOverdueBorrows(): Promise<Borrow[]> {
    return this.borrowsService.getOverdueBorrows();
  }
}
