import { Injectable } from '@nestjs/common';
import { User } from './users/users.interface';
import { UsersService } from './users/users.service';

@Injectable()
export class AppService {
  constructor(private users: UsersService) {}
}
