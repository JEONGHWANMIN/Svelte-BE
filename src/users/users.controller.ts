import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':userId')
  async getUser(@Param('userId') userId: string): Promise<User> {
    return this.usersService.getUserById(userId);
  }

  @Get()
  async getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }

  @Post('/signup')
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.createUser(
      createUserDto.email,
      createUserDto.password,
      createUserDto.name,
    );
  }

  // @Patch(':userId')
  // async updateUser(
  //   @Param('userId') userId: string,
  //   @Body() updateUserDto: UpdateUserDto,
  // ): Promise<User> {
  //   return this.usersService.updateUser(userId, updateUserDto);
  // }
}
