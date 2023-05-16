import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UsersService {
  private users: User[] = [];

  async createUser(userDto: CreateUserDto): Promise<User> {
    const user: User = {
      id: Math.random(), // 在这里生成用户的唯一 ID
      ...userDto,
    };
    this.users.push(user);
    return user;
  }

  async findUserById(id: number): Promise<User | undefined> {
    return this.users.find((user) => user.id === id);
  }

  async findUserByStudentId(studentId: string): Promise<User | undefined> {
    return this.users.find((user) => user.studentId === studentId);
  }
}
