import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { User } from './users.interface';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get('user/:id')
  getUser(@Param('id') id: string) {
    return this.usersService.getUser(+id);
  }

  @Post('user/add')
  addUser(@Body() name: User) {
    return this.usersService.addUser(name);
  }

  @Patch('user/:id')
  editUser(@Body() user: User) {
    return this.usersService.editUser(user);
  }

  @Delete(':id')
  removeUser(@Param('id') id: string) {
    return this.usersService.removeUser(+id);
  }
}
