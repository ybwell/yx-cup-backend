import { Controller, Get, Param, Post, Body } from "@nestjs/common";
import { UsersService } from "./users.service";
import { User } from "./user.entity";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.createUser(createUserDto);
  }

  @Get(":id")
  async findUserById(@Param("id") id: number): Promise<User | undefined> {
    return this.usersService.findUserById(id);
  }

  @Get("student/:studentId")
  async findUserByStudentId(
    @Param("studentId") studentId: string
  ): Promise<User | undefined> {
    return this.usersService.findUserByStudentId(studentId);
  }
}
