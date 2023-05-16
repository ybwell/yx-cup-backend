import { Injectable } from "@nestjs/common";
import { Borrow } from "./borrow.entity";
import { CreateBorrowDto } from "./dto/create-borrow.dto";

@Injectable()
export class BorrowsService {
  private borrows: Borrow[] = [];

  createBorrow(createBorrowDto: CreateBorrowDto): Borrow {
    const borrow: Borrow = {
      id: Math.random(),
      ...createBorrowDto,
    };
    this.borrows.push(borrow);
    return borrow;
  }

  findBorrowById(id: number): Borrow | undefined {
    return this.borrows.find((borrow) => borrow.id === id);
  }

  getBorrowDetails(id: string): Borrow[] {
    // 借书详情的具体实现逻辑
    // 这里仅作为示例，你需要根据实际需求来实现该方法
    return this.borrows;
  }
  getOverdueBorrows(): Borrow[] {
    const currentDate = new Date();
    return this.borrows.filter((borrow) => borrow.dueDate < currentDate);
  }
}
